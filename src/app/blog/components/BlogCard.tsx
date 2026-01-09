import Image from "next/image";
import Link from "next/link";

// Inline to avoid importing from lib/blog (which uses Node.js fs)
const CATEGORY_CONFIG: Record<string, { name: string; color: string }> = {
  mobile: { name: "Mobile", color: "bg-blue-500" },
  web: { name: "Web", color: "bg-green-500" },
  design: { name: "Design", color: "bg-purple-500" },
  backend: { name: "Backend", color: "bg-orange-500" },
  business: { name: "Business", color: "bg-rose-500" },
};

interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  imageAlt: string;
  readingTime: number;
}

interface BlogCardProps {
  post: BlogPostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  const categoryConfig = CATEGORY_CONFIG[post.category] || CATEGORY_CONFIG.business;

  return (
    <article className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/blog/${post.slug}/`} className="block">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`${categoryConfig.color} text-white text-xs font-medium px-3 py-1 rounded-full`}
            >
              {categoryConfig.name}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {post.description}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-4">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
              <span>• {post.readingTime} min</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
