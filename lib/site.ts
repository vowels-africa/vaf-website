// Site-wide settings for the Vowels Africa website.

/** Public site URL, used for canonical links, sitemap and social previews. */
export const SITE_URL = (() => {
  const raw =
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    "vowels.africa";
  return raw.startsWith("http") ? raw : `https://${raw}`;
})();

/** Every "Book a 20-min call" button points here. */
export const BOOK_PATH = "/book";

/** The live booking form (Tally). The Book page sends visitors here. */
export const LEAD_FORM_URL =
  process.env.NEXT_PUBLIC_LEAD_FORM_URL || "https://discover.vowels.africa/";

export const NAV = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/faq", label: "FAQ" },
];

export const SERVICES = [
  { id: "managed-it", label: "Managed IT" },
  { id: "automation", label: "Automation" },
  { id: "integration", label: "System integration" },
  { id: "custom-software", label: "Custom software" },
  { id: "fractional-cto", label: "Fractional CTO & CPO" },
  { id: "ai", label: "Private AI agents" },
];

/** Search and ad landing pages, served at /<slug> with the homepage content. */
export const LANDING_SLUGS = [
  "workflow-automation-agency",
  "workflow-automation-company",
  "enterprise-workflow-automation-services",
  "business-automation",
  "business-automation-software",
  "workflow-automation",
  "workflow-automation-implementation",
  "automate-business-processes",
  "business-automation-solutions",
  "process-automation-consulting-services",
  "business-process-improvement-services",
  "ai-powered-business-tools",
  "it-operation-management",
  "make-com-automation-agency",
  "ai-for-automating-processes",
  "automation-services-for-business",
  "workflow-automation-companies",
  "workflow-automation-software-pricing",
  "ai-workflow-automation-platform",
];
