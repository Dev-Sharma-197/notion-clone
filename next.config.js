/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'files.edgestore.dev',
                // Optional: add more properties to specify pathname, port, etc.
            },
        ],
    },
};

module.exports = nextConfig;
