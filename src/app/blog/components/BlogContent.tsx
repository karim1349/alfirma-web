"use client";

import Link from "next/link";
import { useState } from "react";
import BlogCard from "./BlogCard";

// Inline category config to avoid importing from lib/blog (which uses Node.js fs)
const CATEGORY_CONFIG: Record<string, { name: string; color: string }> = {
  mobile: { name: "Mobile", color: "bg-blue-500" },
  web: { name: "Web", color: "bg-green-500" },
  design: { name: "Design", color: "bg-purple-500" },
  backend: { name: "Backend", color: "bg-orange-500" },
  business: { name: "Business", color: "bg-rose-500" },
};

// Type definition inline to avoid importing from lib/blog
interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  author: string;
  category: "mobile" | "web" | "design" | "backend" | "business";
  tags: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
  readingTime: number;
  locale: string;
}

interface BlogContentProps {
  posts: BlogPostMeta[];
  featuredPost: BlogPostMeta | undefined;
}

export default function BlogContent({ posts, featuredPost }: BlogContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  const displayedFeatured = selectedCategory
    ? filteredPosts.find((post) => post.slug === featuredPost?.slug)
    : featuredPost;

  const otherPosts = filteredPosts.filter(
    (post) => post.slug !== displayedFeatured?.slug
  );

  return (
    <>
      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {/* All button */}
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
            selectedCategory === null
              ? "bg-gray-900 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Tous
        </button>
        {Object.entries(CATEGORY_CONFIG).map(([key, config]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
              selectedCategory === key
                ? `${config.color} text-white`
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {config.name}
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        /* Empty state */
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Aucun article dans cette catégorie
          </h2>
          <p className="text-gray-500 mb-8">
            Nous préparons des contenus dans cette catégorie. Revenez bientôt !
          </p>
          <button
            onClick={() => setSelectedCategory(null)}
            className="inline-block bg-gradient-to-r from-rose-400 to-blue-400 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Voir tous les articles
          </button>
        </div>
      ) : (
        <>
          {/* Featured Post */}
          {displayedFeatured && !selectedCategory && (
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Article à la une
              </h2>
              <Link
                href={`/blog/${displayedFeatured.slug}/`}
                className="block group"
              >
                <article className="bg-white rounded-3xl shadow-lg overflow-hidden md:flex hover:shadow-xl transition-shadow">
                  <div
                    className="md:w-1/2 h-64 md:h-auto bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${displayedFeatured.image})`,
                    }}
                  />
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <span
                      className={`${
                        CATEGORY_CONFIG[displayedFeatured.category]?.color ||
                        "bg-gray-500"
                      } text-white text-sm font-medium px-3 py-1 rounded-full w-fit mb-4`}
                    >
                      {CATEGORY_CONFIG[displayedFeatured.category]?.name ||
                        displayedFeatured.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {displayedFeatured.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {displayedFeatured.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{displayedFeatured.author}</span>
                      <span className="mx-2">•</span>
                      <time dateTime={displayedFeatured.date}>
                        {new Date(displayedFeatured.date).toLocaleDateString(
                          "fr-FR",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </time>
                      <span className="mx-2">•</span>
                      <span>{displayedFeatured.readingTime} min de lecture</span>
                    </div>
                  </div>
                </article>
              </Link>
            </section>
          )}

          {/* All Posts Grid */}
          {(selectedCategory ? filteredPosts : otherPosts).length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {selectedCategory
                  ? `Articles ${CATEGORY_CONFIG[selectedCategory]?.name}`
                  : "Tous les articles"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(selectedCategory ? filteredPosts : otherPosts).map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}
