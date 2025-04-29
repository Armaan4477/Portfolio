/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any image domains you're loading from here
    unoptimized: true, // Set to false if you want Next.js to optimize your images
  },
  // No basePath needed for Vercel deployment
}

module.exports = nextConfig
