export type BlogCategory =
  | "mobile"
  | "web"
  | "design"
  | "backend"
  | "business"
  | "fintech";

export interface BlogPostMeta {
  slug: string;
  title: string;
  metaTitle?: string;
  description: string;
  date: string;
  updatedAt?: string;
  author: string;
  category: BlogCategory;
  tags: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
  readingTime: number;
  locale: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  redirectTo?: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
