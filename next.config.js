/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'clemann.app',
      },
      {
        protocol: 'http',
        hostname: 'clemann.app',
      },
      {
        protocol: 'https',
        hostname: 'travels.clemann.app',
      },
      {
        protocol: 'http',
        hostname: 'travels.clemann.app',
      },
    ],
  },
};

module.exports = nextConfig;
