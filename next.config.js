/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/anya-web',
  assetPrefix: '/anya-web/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
