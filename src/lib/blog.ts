import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';
import { parse as parseYaml } from 'yaml';
import { CATEGORY_CONFIG } from '@/lib/blog-config';
import type { BlogCategory, BlogPost, BlogPostMeta } from '@/types/blog';

const BLOG_CONTENT_PATH = path.join(process.cwd(), 'src/content/blog');

export type { BlogPost, BlogPostMeta } from '@/types/blog';

function parseMdxFile(fileContent: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(fileContent);

  if (!frontmatter) {
    return { data: {}, content: fileContent };
  }

  const parsed = parseYaml(frontmatter[1]);
  const data =
    parsed && typeof parsed === 'object' && !Array.isArray(parsed)
      ? (parsed as Record<string, unknown>)
      : {};

  return {
    data,
    content: fileContent.slice(frontmatter[0].length),
  };
}

function normalizeCategory(category: unknown): BlogCategory {
  if (
    typeof category === 'string' &&
    Object.prototype.hasOwnProperty.call(CATEGORY_CONFIG, category)
  ) {
    return category as BlogCategory;
  }

  return 'business';
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllPosts(): BlogPostMeta[] {
  // Check if the blog directory exists
  if (!fs.existsSync(BLOG_CONTENT_PATH)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_CONTENT_PATH).filter(file => file.endsWith('.mdx'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const filePath = path.join(BLOG_CONTENT_PATH, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = parseMdxFile(fileContent);
    const stats = readingTime(content);

    return {
      slug,
      title: typeof data.title === 'string' ? data.title : '',
      metaTitle: typeof data.metaTitle === 'string' ? data.metaTitle : undefined,
      description: typeof data.description === 'string' ? data.description : '',
      date: typeof data.date === 'string' ? data.date : '',
      updatedAt: typeof data.updatedAt === 'string' ? data.updatedAt : undefined,
      author: typeof data.author === 'string' ? data.author : 'Al Firma',
      category: normalizeCategory(data.category),
      tags: Array.isArray(data.tags)
        ? data.tags.filter((tag): tag is string => typeof tag === 'string')
        : [],
      image: typeof data.image === 'string' ? data.image : '/assets/og-logo.webp',
      imageAlt:
        typeof data.imageAlt === 'string'
          ? data.imageAlt
          : typeof data.title === 'string'
            ? data.title
            : '',
      featured: data.featured === true,
      readingTime: Math.ceil(stats.minutes),
      locale: typeof data.locale === 'string' ? data.locale : 'fr',
      canonicalUrl:
        typeof data.canonicalUrl === 'string' ? data.canonicalUrl : undefined,
      noIndex: data.noIndex === true,
      redirectTo:
        typeof data.redirectTo === 'string' ? data.redirectTo : undefined,
    } as BlogPostMeta;
  }).filter((post) => !post.redirectTo);

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_CONTENT_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = parseMdxFile(fileContent);
  const stats = readingTime(content);

  return {
    slug,
    title: typeof data.title === 'string' ? data.title : '',
    metaTitle: typeof data.metaTitle === 'string' ? data.metaTitle : undefined,
    description: typeof data.description === 'string' ? data.description : '',
    date: typeof data.date === 'string' ? data.date : '',
    updatedAt: typeof data.updatedAt === 'string' ? data.updatedAt : undefined,
    author: typeof data.author === 'string' ? data.author : 'Al Firma',
    category: normalizeCategory(data.category),
    tags: Array.isArray(data.tags)
      ? data.tags.filter((tag): tag is string => typeof tag === 'string')
      : [],
    image: typeof data.image === 'string' ? data.image : '/assets/og-logo.webp',
    imageAlt:
      typeof data.imageAlt === 'string'
        ? data.imageAlt
        : typeof data.title === 'string'
          ? data.title
          : '',
    featured: data.featured === true,
    readingTime: Math.ceil(stats.minutes),
    locale: typeof data.locale === 'string' ? data.locale : 'fr',
    canonicalUrl:
      typeof data.canonicalUrl === 'string' ? data.canonicalUrl : undefined,
    noIndex: data.noIndex === true,
    redirectTo:
      typeof data.redirectTo === 'string' ? data.redirectTo : undefined,
    content,
  };
}

/**
 * Get all blog posts for a specific category
 */
export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPosts().filter(post => post.category === category);
}

/**
 * Get all blog posts with a specific tag
 */
export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter(post => post.tags.includes(tag));
}

/**
 * Get featured blog posts
 */
export function getFeaturedPosts(): BlogPostMeta[] {
  return getAllPosts().filter(post => post.featured);
}

/**
 * Get related posts based on category and tags
 */
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPostMeta[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const allPosts = getAllPosts().filter(post => post.slug !== currentSlug);

  // Score posts by relevance
  const scoredPosts = allPosts.map(post => {
    let score = 0;
    
    // Same category = +2 points
    if (post.category === currentPost.category) {
      score += 2;
    }
    
    // Shared tags = +1 point each
    const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
    score += sharedTags.length;
    
    return { ...post, score };
  });

  // Sort by score (highest first), then by date
  return scoredPosts
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, limit)
    .map(({ ...post }) => post as BlogPostMeta);
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  return [...new Set(posts.map(post => post.category))];
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const allTags = posts.flatMap(post => post.tags);
  return [...new Set(allTags)];
}

/**
 * Get all slugs for static generation
 */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_CONTENT_PATH)) {
    return [];
  }

  return fs.readdirSync(BLOG_CONTENT_PATH)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace('.mdx', ''));
}

export { CATEGORY_CONFIG } from '@/lib/blog-config';
