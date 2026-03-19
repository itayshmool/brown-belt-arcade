import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/brown-belt-arcade",
  images: { unoptimized: true },
};

export default nextConfig;
