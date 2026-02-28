/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['pino', 'pino-pretty', 'thread-stream'],  // exclude Pino & deps dari bundling
  // kalau ada config lain (misal images, reactStrictMode), taruh di sini aja
};

export default nextConfig;
