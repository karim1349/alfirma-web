import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = join(projectRoot, "out");
const origin = "https://alfirma.com";

if (!existsSync(outputRoot)) {
  console.error("SEO check needs a production export. Run `npm run build` first.");
  process.exit(1);
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function routeFor(file) {
  const path = relative(outputRoot, file).split(sep).join("/");
  if (path === "index.html") return "/";
  return `/${path.replace(/index\.html$/, "")}`;
}

function contentAttribute(html, name) {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
  const tag = tags.find((candidate) =>
    new RegExp(`(?:name|property)=["']${name}["']`, "i").test(candidate),
  );
  return tag?.match(/content=(["'])(.*?)\1/i)?.[2] ?? "";
}

function canonicalLinks(html) {
  return (html.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi) ?? [])
    .map((tag) => tag.match(/href=(["'])(.*?)\1/i)?.[2])
    .filter(Boolean);
}

function titleText(html) {
  return html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .trim() ?? "";
}

function localTargetExists(rawHref) {
  const href = rawHref.replace(/&amp;/g, "&");
  if (!href.startsWith("/") || href.startsWith("//")) return true;

  const pathname = href.split(/[?#]/, 1)[0];
  if (!pathname || pathname === "/") return existsSync(join(outputRoot, "index.html"));

  const decoded = decodeURIComponent(pathname);
  const candidates = decoded.endsWith("/")
    ? [join(outputRoot, decoded, "index.html")]
    : [join(outputRoot, decoded), join(outputRoot, decoded, "index.html")];
  return candidates.some((candidate) => existsSync(candidate) && statSync(candidate).isFile());
}

const htmlFiles = walk(outputRoot).filter((file) => file.endsWith(".html"));
const errors = [];
const warnings = [];

for (const file of htmlFiles) {
  const route = routeFor(file);
  const html = readFileSync(file, "utf8");
  const robots = contentAttribute(html, "robots").toLowerCase();
  const noIndex = robots.includes("noindex");
  const isKnownRedirect = route === "/home/" || route === "/blog/react-native-vs-flutter-guide-complet/";
  const isGeneratedNotFound = route === "/404/" || route === "/404.html";
  const canonicals = canonicalLinks(html);

  if (!isGeneratedNotFound && canonicals.length !== 1) {
    errors.push(`${route}: expected one canonical, found ${canonicals.length}`);
  } else if (!isGeneratedNotFound && !noIndex && !isKnownRedirect) {
    const expectedCanonical = `${origin}${route}`;
    if (canonicals[0] !== expectedCanonical) {
      errors.push(`${route}: canonical is ${canonicals[0]}, expected ${expectedCanonical}`);
    }
  }

  if (!noIndex && !isKnownRedirect) {
    const h1Count = (html.match(/<h1\b/gi) ?? []).length;
    const mainCount = (html.match(/<main\b/gi) ?? []).length;
    if (h1Count !== 1) errors.push(`${route}: expected one H1, found ${h1Count}`);
    if (mainCount !== 1) errors.push(`${route}: expected one main landmark, found ${mainCount}`);

    const title = titleText(html);
    const description = contentAttribute(html, "description");
    if (title.length > 65) warnings.push(`${route}: title is ${title.length} characters`);
    if (description.length > 160) {
      warnings.push(`${route}: description is ${description.length} characters`);
    }
  }

  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(match[1]);
    } catch {
      errors.push(`${route}: invalid JSON-LD`);
    }
  }

  for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)) {
    const href = match[1];
    if (/^\/home(?:[/?#]|$)/.test(href)) {
      errors.push(`${route}: internal link still points to ${href}`);
    }
    if (!localTargetExists(href)) {
      errors.push(`${route}: broken internal link ${href}`);
    }
  }
}

const sitemapPath = join(outputRoot, "sitemap.xml");
if (!existsSync(sitemapPath)) {
  errors.push("/sitemap.xml: missing from export");
} else {
  const sitemap = readFileSync(sitemapPath, "utf8");
  for (const excluded of ["/home/", "/duodoku/privacy/", "/petit-pas/privacy/", "/petit-pas/terms/"]) {
    if (sitemap.includes(`${origin}${excluded}`)) {
      errors.push(`/sitemap.xml: noindex or redirected URL included (${excluded})`);
    }
  }
}

const uniqueErrors = [...new Set(errors)];
const uniqueWarnings = [...new Set(warnings)];

for (const warning of uniqueWarnings) console.warn(`WARN ${warning}`);
for (const error of uniqueErrors) console.error(`ERROR ${error}`);

console.log(
  `SEO check scanned ${htmlFiles.length} HTML files: ${uniqueErrors.length} error(s), ${uniqueWarnings.length} warning(s).`,
);

if (uniqueErrors.length > 0) process.exit(1);
