import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "storage.googleapis.com" },
      { protocol: "https", hostname: "blogger.googleusercontent.com" },
      { protocol: "https", hostname: "www.fastpay.co.id" },
      { protocol: "https", hostname: "lokasikurir.com" },
      { protocol: "https", hostname: "i0.wp.com" },
      { protocol: "https", hostname: "akcdn.detik.net.id" },
    ],
  },
};

export default nextConfig;
