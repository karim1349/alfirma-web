import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { ArticleSchema } from "../components/ArticleSchema";
import BlogCard from "../components/BlogCard";
import BlogHeader from "../components/BlogHeader";
import BlogNavBar from "../components/BlogNavBar";

export const dynamic = "force-static";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article non trouvé - Al Firma",
      description: "L'article demandé n'existe pas.",
    };
  }

  return {
    title: `${post.title} - Al Firma Blog`,
    description: post.description,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
      type: "article",
      url: `https://alfirma.com/blog/${slug}/`,
      publishedTime: post.date,
      modifiedTime: post.updatedAt || post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: `https://alfirma.com/blog/${slug}/`,
    },
  };
}

// MDX components customization
const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-20"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-20"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-gray-700 leading-relaxed mb-6" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside mb-6 text-gray-700 space-y-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-gray-700" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-blue-600 hover:text-blue-800 underline"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-blue-500 pl-6 py-2 my-6 bg-blue-50 rounded-r-lg text-gray-700 italic"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-gray-100 text-rose-600 px-2 py-1 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto mb-6 text-sm"
      {...props}
    />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded-xl my-8 w-full" alt={props.alt || ""} {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-900"
      {...props}
    />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 text-sm text-gray-700 border-b" {...props} />
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.description}
        author={post.author}
        datePublished={post.date}
        dateModified={post.updatedAt}
        image={post.image}
        url={`https://alfirma.com/blog/${slug}/`}
      />
      <div className="flex items-center justify-center">
        <BlogNavBar />
      </div>
      <main className="min-h-screen bg-white pt-24">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-4xl mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/home" className="hover:text-gray-900">
                Accueil
              </Link>
              <span>/</span>
              <Link href="/blog/" className="hover:text-gray-900">
                Blog
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium truncate max-w-xs">
                {post.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          <BlogHeader post={post} />

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug, rehypeHighlight],
                },
              }}
            />
          </div>

          {/* Author Card */}
          <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-rose-400 to-blue-400 flex items-center justify-center text-white text-2xl font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{post.author}</h3>
                <p className="text-gray-600">
                  Fondateur d'Al Firma, expert en développement mobile et web
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-rose-400 to-blue-400 rounded-2xl text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Besoin d'aide pour votre projet ?
            </h3>
            <p className="mb-6 text-white/90">
              Discutons de vos idées et voyons comment nous pouvons vous aider.
            </p>
            <a
              href="https://calendly.com/karimbenchekroun/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Réserver un appel gratuit
            </a>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Articles similaires
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
