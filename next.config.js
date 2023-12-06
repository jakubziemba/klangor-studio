/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
