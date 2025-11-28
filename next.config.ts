import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'poicplkqrtruhlpncdka.supabase.co',
      },
    ],
  },
};

export default nextConfig;
