import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Fix monorepo/workspace root inference when multiple lockfiles exist.
  // This ensures Next's tracing/dev server uses this project directory as root.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
