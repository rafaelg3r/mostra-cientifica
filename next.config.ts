import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/mostra-cientifica",
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
