import nextI18NextConfig from "./next-i18next.config.js";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/img/**",
      },
    ],
  },
  ...nextI18NextConfig, // Merging i18n settings properly
  reactStrictMode: true,
};

export default nextConfig;
