import Image from "next/image";

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
  tags: string[];
  image: string;
  imageAlt: string;
  readingTime: number;
}

interface BlogHeaderProps {
  post: BlogPostMeta;
}

export default function BlogHeader({ post }: BlogHeaderProps) {
  const categoryConfig = CATEGORY_CONFIG[post.category] || CATEGORY_CONFIG.business;

  return (
    <header className="mb-12">
      {/* Category */}
      <div className="mb-4">
        <span
          className={`${categoryConfig.color} text-white text-sm font-medium px-4 py-1 rounded-full`}
        >
          {categoryConfig.name}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {post.title}
      </h1>

      {/* Description */}
      <p className="text-xl text-gray-600 mb-8">
        {post.description}
      </p>

      {/* Meta info */}
      <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-400 to-blue-400 flex items-center justify-center text-white font-semibold">
            {post.author.charAt(0)}
          </div>
          <span className="font-medium text-gray-900">{post.author}</span>
        </div>
        <span>•</span>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
        <span>•</span>
        <span>{post.readingTime} min de lecture</span>
      </div>

      {/* Featured image */}
      <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
        />
      </div>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
