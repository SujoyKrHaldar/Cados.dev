const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "cados.up.railway.app"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
