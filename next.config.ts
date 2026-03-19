import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/walkthrough',
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
