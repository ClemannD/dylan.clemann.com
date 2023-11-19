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
        ],
    },
};

module.exports = nextConfig;
