// Site-wide settings for the Vowels Africa website.

/** Public site URL, used for canonical links, sitemap and social previews. */
export const SITE_URL = (() => {
  const raw =
    process.env.NEXT_PUBLIC_APP_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || "vowels.africa";
  return raw.startsWith("http") ? raw : `https://${raw}`;
})();

/** Every "Book a 20-min call" button points here. */
export const BOOK_PATH = "/book";

/** The live booking form (Tally) on its own page. Used as the no-JavaScript fallback. */
export const LEAD_FORM_URL =
  process.env.NEXT_PUBLIC_LEAD_FORM_URL || "https://discover.vowels.africa/";

/**
 * The same Tally form, embedded on the Book page. It must be the tally.so address:
 * Tally's embed script only follows the form's "redirect on completion" to
 * /thank-you (where the Google Ads / GA4 lead conversion fires) for tally.so embeds.
 */
export const TALLY_FORM_ID = "wgExGM";

/**
 * Tally form for job applications (CV upload), embedded on /careers.
 * It must NOT redirect to a URL containing "thank-you": that fires the sales-lead
 * conversion in Google Tag Manager. Notifications go to discover@vowels.africa with the
 * subject "New job application".
 */
export const CAREERS_FORM_ID = "WJ2bPP";

/**
 * Contact details shown in the footer. Leave a value empty ("") to show a yellow
 * placeholder instead. Fill these in once confirmed.
 */
export const CONTACT = {
  email: "discover@vowels.africa", // the reply-to address on the Tally lead forms
  phone: "", // left out for now; when set, shown as written, e.g. "+27 21 000 0000"
  whatsapp: "", // international digits only, e.g. "27210000000"; adds a WhatsApp link
  linkedin: "https://www.linkedin.com/company/commhub/", // full URL
  location: "Cape Town, South Africa", // headquarters; more locations can be added later
};

/** Time zone shown on the Book page. Carried over from the previous site. */
export const CALL_TIMEZONE = "Johannesburg time (SAST, UTC+2)";

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
