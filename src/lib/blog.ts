import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const BLOG_CONTENT_PATH = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  author: string;
  category: 'mobile' | 'web' | 'design' | 'backend' | 'business';
  tags: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
  readingTime: number;
  locale: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  author: string;
  category: 'mobile' | 'web' | 'design' | 'backend' | 'business';
  tags: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
  readingTime: number;
  locale: string;
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
    const { data, content } = matter(fileContent);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      updatedAt: data.updatedAt,
      author: data.author || 'Al Firma',
      category: data.category || 'business',
      tags: data.tags || [],
      image: data.image || '/assets/logo.png',
      imageAlt: data.imageAlt || data.title || '',
      featured: data.featured || false,
      readingTime: Math.ceil(stats.minutes),
      locale: data.locale || 'fr',
    } as BlogPostMeta;
  });

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
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    updatedAt: data.updatedAt,
    author: data.author || 'Al Firma',
    category: data.category || 'business',
    tags: data.tags || [],
    image: data.image || '/assets/logo.png',
    imageAlt: data.imageAlt || data.title || '',
    featured: data.featured || false,
    readingTime: Math.ceil(stats.minutes),
    locale: data.locale || 'fr',
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

/**
 * Category display names and colors
 */
export const CATEGORY_CONFIG: Record<string, { name: string; color: string }> = {
  mobile: { name: 'Mobile', color: 'bg-blue-500' },
  web: { name: 'Web', color: 'bg-green-500' },
  design: { name: 'Design', color: 'bg-purple-500' },
  backend: { name: 'Backend', color: 'bg-orange-500' },
  business: { name: 'Business', color: 'bg-rose-500' },
};
