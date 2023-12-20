/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
};

module.exports = nextConfig;
