import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // A stray package-lock.json at ~/package-lock.json makes Next.js
    // misdetect the workspace root as the home directory instead of this
    // project. Pin it explicitly so Turbopack/tsc only scan this project.
    root: __dirname,
  },
};

export default nextConfig;
