import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Regular Next.js build (supports query parameters)
  // output: 'export', // Not needed with query params
  // trailingSlash: true,
  // distDir: 'out',
  
  // Performance optimizations
  compress: true,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
