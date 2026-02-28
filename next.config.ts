/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('pino-pretty');
      config.externals.push('encoding');  // kadang ikut error
    }
    return config;
  },
};

export default nextConfig;
