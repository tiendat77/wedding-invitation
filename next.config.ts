import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  /* config options here */
};

export default nextConfig;
