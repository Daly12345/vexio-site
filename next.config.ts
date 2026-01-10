import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize package imports to reduce bundle size
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  // Ensure images are optimized
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
