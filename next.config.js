/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  // trailingSlash: true,
  basePath: '',
  output: 'export',
};

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

module.exports = {
  ...withNextra(),
  ...nextConfig,
};
