const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s.gravatar.com",
      "images.unsplash.com",
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
