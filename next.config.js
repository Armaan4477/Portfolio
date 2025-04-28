/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '', // Update this with your repo name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '', // Update with your repo name
  trailingSlash: true, // GitHub Pages requires trailing slashes
}

module.exports = nextConfig
