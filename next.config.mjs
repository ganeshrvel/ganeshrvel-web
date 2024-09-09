/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    //removeConsole: false,
  },
  experimental: {
    runtime: 'experimental-edge',
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
