const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["pbs.twimg.com", "abs.twimg.com", "cados.up.railway.app"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
