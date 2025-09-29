import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for hosting on static servers
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  
  // Performance optimizations
  compress: true,
  
  // Image optimization (disabled for static export)
  images: {
    unoptimized: true,
  },
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
  
  // Headers for better caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/assets/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
