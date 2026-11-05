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
 * Where job applicants email their CV. Each "Apply" link opens an email with the role in
 * the subject ("Job application: <role>").
 */
export const CAREERS_EMAIL = "careers@vowels.africa";

/**
 * Contact details shown in the footer. Leave a value empty ("") to show a yellow
 * placeholder instead. Fill these in once confirmed.
 */
export const CONTACT = {
  email: "discover@vowels.africa", // the reply-to address on the Tally lead forms
  phone: "", // left out for now; when set, shown as written, e.g. "+27 21 000 0000"
  whatsapp: "", // international digits only, e.g. "27210000000"; adds a WhatsApp link
  linkedin: "https://www.linkedin.com/company/vowels-africa", // full URL
  location: "Cape Town, South Africa", // headquarters; more locations can be added later
};

/**
 * Legal entity details, used on the privacy policy and in the footer.
 * Source: company registration (CIPC) and the PAIA manual of Vowels Africa (Pty) Ltd.
 */
export const COMPANY = {
  legalName: "Vowels Africa (Pty) Ltd",
  registrationNumber: "2025/722562/07",
  registeredOffice: "57 Innis Road, Wynberg, Cape Town, Western Cape, 7800",
  informationOfficer: "Yaseen Samsodien",
  regulatorRegistration: "2026-063725",
};

/** Where privacy and POPIA requests go. */
export const PRIVACY_EMAIL = "privacy@vowels.africa";

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
