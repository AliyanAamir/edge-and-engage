import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.devsinc.com",
      },
      {
        protocol: "https",
        hostname: "devsinc.com",
      },
    ],
  },
}

export default nextConfig
