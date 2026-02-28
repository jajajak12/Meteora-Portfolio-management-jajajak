/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      'pino',
      'pino-pretty',
      'thread-stream',  // ini penting, Pino pakai worker threads
    ],
  },
};

export default nextConfig;
