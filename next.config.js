/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static site export
    basePath: "/AAA_Web", // Use only your repo name
    images: {
      unoptimized: true, // GitHub Pages does not support Next.js image optimization
    },
  };
  
  module.exports = nextConfig;
  