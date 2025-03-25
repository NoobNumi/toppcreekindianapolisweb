/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["a0.muscache.com"],
  },  
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push("leaflet");
    }
    return config;
  },
};

export default nextConfig;
