import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/cam-nang-ai-agent' : '',
  assetPrefix: isProd ? '/cam-nang-ai-agent/' : '',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
