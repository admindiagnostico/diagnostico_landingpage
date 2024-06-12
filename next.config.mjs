/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  }
}

export default nextConfig
