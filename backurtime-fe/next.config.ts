import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  typedRoutes: true, // ensures route correctness when using the App Router
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
