import type { BlogCategory } from "@/types/blog";

export const CATEGORY_CONFIG: Record<
  BlogCategory,
  { name: string; color: string }
> = {
  mobile: { name: "Mobile", color: "bg-blue-500" },
  web: { name: "Web", color: "bg-green-500" },
  design: { name: "Design", color: "bg-purple-500" },
  backend: { name: "Backend", color: "bg-orange-500" },
  business: { name: "Business", color: "bg-rose-500" },
  fintech: { name: "Fintech", color: "bg-emerald-600" },
};
