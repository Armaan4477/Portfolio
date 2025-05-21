/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.29.3'],

  // Add rewrites
async rewrites() {
      return {
          beforeFiles: [
              {
                  source: '/:path*',
                  has: [
                      {
                          type: 'host',
                          value: 'armaan44.is-a.dev',
                      },
                  ],
                  destination: '/demos/:path*',
              },
          ]
      };
    },
};


module.exports = nextConfig;
