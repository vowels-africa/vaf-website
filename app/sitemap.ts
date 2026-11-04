import type { MetadataRoute } from "next";
import { getInsights } from "@/lib/insights";
import { LANDING_SLUGS, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/work", "/how-we-work", "/about", "/insights", "/faq", "/enterprise", "/careers", "/book", "/privacy"];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}`, priority: p === "" ? 1 : 0.8 })),
    ...getInsights().map((post) => ({
      url: `${SITE_URL}/insights/${post.slug}`,
      ...(post.date ? { lastModified: post.date } : {}),
      priority: 0.6,
    })),
    ...LANDING_SLUGS.map((slug) => ({ url: `${SITE_URL}/${slug}`, priority: 0.5 })),
  ];
}
