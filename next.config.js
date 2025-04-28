/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configure basePath for GitHub Pages deployment
  // Replace 'Portfolio' with your actual repository name if different
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '',
}

module.exports = nextConfig
