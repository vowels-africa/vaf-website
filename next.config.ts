import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the project root so Next.js ignores stray lockfiles in parent folders.
  turbopack: { root: __dirname },
  async redirects() {
    return [
      // The old v1 landing page was retired in the 2026 redesign.
      { source: "/v1", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
