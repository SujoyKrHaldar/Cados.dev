const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "pbs.twimg.com",
      "abs.twimg.com",
      "cados.up.railway.app",
      "dennisivy-personal.s3.amazonaws.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
