import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['pino', 'pino-pretty', 'thread-stream'],
  },
  // kalau sudah ada config lain, tambahin di sini
};

export default nextConfig;
