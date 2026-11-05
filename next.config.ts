import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the project root so Next.js ignores stray lockfiles in parent folders.
  turbopack: { root: __dirname },
  async redirects() {
    return [
      // The enterprise search landing page now has its own page.
      {
        source: "/enterprise-workflow-automation-services",
        destination: "/enterprise",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
