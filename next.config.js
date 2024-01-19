/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //SVG-컴포넌트로-사용하기(webpack)
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
