/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        port: process.env.NEXT_PUBLIC_PORT_BE,
      },
    ],
  },
};

module.exports = nextConfig;
