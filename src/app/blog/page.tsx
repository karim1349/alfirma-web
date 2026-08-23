import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import { BlogListSchema } from "./components/ArticleSchema";
import BlogContent from "./components/BlogContent";
import BlogNavBar from "./components/BlogNavBar";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog Al Firma | Produit, développement et fintech",
  description:
    "Analyses et guides sur le développement web et mobile, les API, le produit numérique et la fintech en France et au Maroc.",
  keywords:
    "blog développement mobile, tutoriel react native, guide django, conseils création application, agence développement maroc france",
  openGraph: {
    title: "Blog Al Firma | Produit, développement et fintech",
    description:
      "Analyses et guides sur le développement, les API, le produit numérique et la fintech en France et au Maroc.",
    images: [
      {
        url: "/assets/og-logo.webp",
        width: 1200,
        height: 630,
        alt: "Blog Al Firma - Développement Mobile et Web",
      },
    ],
    type: "website",
    url: "https://alfirma.com/blog/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Al Firma | Développement Mobile & Web",
    description:
      "Articles et guides sur le développement d'applications mobiles et web.",
    images: ["/assets/og-logo.webp"],
  },
  alternates: {
    canonical: "https://alfirma.com/blog/",
    types: {
      "application/rss+xml": "https://alfirma.com/feed.xml",
    },
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPost = posts.find((post) => post.featured) || posts[0];

  // Prepare schema data
  const schemaPostsData = posts.map((post) => ({
    title: post.title,
    url: `https://alfirma.com/blog/${post.slug}/`,
  }));

  return (
    <>
      <BlogListSchema posts={schemaPostsData} />
      <div className="flex items-center justify-center">
        <BlogNavBar />
      </div>
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section - matching homepage gradient */}
        <section
          className="text-white py-32 flex items-center justify-center"
          style={{
            background: `
              linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(255, 255, 255, 0.3) 75%, rgba(255, 255, 255, 0.6) 85%, rgba(255, 255, 255, 0.85) 90%, white 95%),
              radial-gradient(ellipse 70% 50% at 15% 15%, rgba(67, 56, 202, 1) 0%, rgba(79, 70, 229, 0.8) 35%, rgba(99, 102, 241, 0.5) 55%, transparent 75%),
              linear-gradient(135deg, rgba(219, 39, 119, 0.95) 0%, rgba(236, 72, 153, 0.8) 15%, rgba(251, 113, 133, 0.6) 30%, rgba(168, 85, 247, 0.4) 45%, transparent 70%),
              radial-gradient(ellipse 120% 70% at 85% 40%, rgba(96, 165, 250, 0.95) 0%, rgba(147, 197, 253, 0.75) 30%, rgba(191, 219, 254, 0.5) 50%, rgba(219, 234, 254, 0.3) 70%, transparent 85%),
              linear-gradient(to bottom, rgba(139, 92, 246, 0.3) 0%, rgba(236, 72, 153, 0.25) 20%, rgba(96, 165, 250, 0.3) 40%, rgba(167, 139, 250, 0.2) 55%, transparent 70%)
            `,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog Al Firma
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Analyses et retours de terrain sur le produit numérique, le
              développement et la fintech en France et au Maroc
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Interactive content with category filtering */}
          <BlogContent posts={posts} featuredPost={featuredPost} />

          {/* CTA Section */}
          <section className="mt-20 bg-gradient-to-r from-rose-400 to-blue-400 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Discutons de vos idées et voyons comment nous pouvons les
              transformer en réalité.
            </p>
            <a
              href="https://calendly.com/karimbenchekroun/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-gray-900 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              Réserver un appel gratuit
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
