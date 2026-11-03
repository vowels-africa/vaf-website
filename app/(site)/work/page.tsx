import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/site/cta-section";
import { ClientLogos } from "@/components/site/client-logos";
import { Testimonial } from "@/components/site/testimonial";
import { OpenDetailsFromHash } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Work & Case Studies | Vowels Africa",
  description:
    "40%+ response-rate improvement for Old Mutual MFC, 50% faster lead qualification for Starfish Solutions, 25 hours a week reclaimed on average.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work & Case Studies | Vowels Africa",
    description:
      "40%+ response-rate improvement for Old Mutual MFC, 50% faster lead qualification for Starfish Solutions, 25 hours a week reclaimed on average.",
    url: "/work",
  },
};

/**
 * Case notes. Keep them light and outcome-first: one or two sentences on what changed
 * for the client, then up to four short "What we built" bullets.
 */
const CASE_NOTES: {
  id?: string;
  label: string;
  title: string;
  note: string;
  built?: string[];
  cta?: boolean;
}[] = [
  {
    id: "case-cafe",
    label: "WhatsApp concierge",
    title: "Café & bistro brand · WhatsApp concierge",
    note: "Customers get instant, on-brand answers on WhatsApp, day and night. Anything sensitive, like allergens, goes straight to a person.",
    built: [
      "A warm concierge persona that’s honest about being AI",
      "Answers drawn only from the brand’s own handbooks",
      "Clear hand-offs to staff for allergen and sensitive questions",
      "A plan to add orders, payments, delivery and reservations",
    ],
  },
  {
    id: "case-ryyva",
    label: "Strategy, product & brand",
    title: "Ryyva · Product suite & brand",
    note: "We turned a complex AI engine into three products a buyer understands in one read.",
    built: [
      "Three products, one brand: Loom, Thread and Weave",
      "Positioning as the intelligence layer above existing systems",
      "A phased blueprint for its first luxury deployment",
    ],
  },
  {
    label: "Lead generation tool",
    title: "Starfish Solutions · Lead qualification",
    note: "Their sales team now qualifies leads in half the time, using a tool built around how they actually work.",
  },
  {
    id: "case-leadforms",
    label: "Lead generation platform",
    title: "Leadforms · Opted-in leads",
    note: "Leads that chose to hear from you, arrive scored for warmth and come with consent on record. A proof of concept is agreed in principle with a major SA life insurer.",
    built: [
      "Short, engaging surveys across 10 verticals",
      "Four-signal scoring, so the warmest leads get called first",
      "Sandy, a WhatsApp agent that brings respondents in",
    ],
  },
  {
    label: "Engagement process",
    title: "Old Mutual MFC · Broker engagement",
    note: "Response rates across Old Mutual MFC’s broker and franchise network rose by more than 40%, through one joined-up, multi-channel process.",
  },
  {
    id: "case-appi",
    label: "Product · Appi",
    title: "Appi · WhatsApp AI teammate",
    note: "One WhatsApp number your field team can ask anything. It answers, files requests, keeps records and coaches every week. R299 per field agent a month.",
    built: [
      "Four specialists behind one number: knowledge, action, records and coaching",
      "An industry switcher and live demo, so every buyer sees their own version",
      "A complete brand, from mascot to WhatsApp profile",
    ],
    cta: true,
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="phero dark">
        <div className="hero" style={{ position: "absolute", inset: "0", padding: "0" }}>
          <div className="grid"></div>
        </div>
        <div className="wrap phw has-a" style={{ position: "relative" }}>
          <div>
            <span className="kicker">Work</span>
            <h1 className="display">Proof, not promises.</h1>
            <p className="lead">
              Results from businesses that took the friction out. Every number here comes from real
              client work.
            </p>
          </div>
          <aside className="paside">
            <div className="stats vstats">
              <div className="stat">
                <b>40%+</b>
                <span>Higher response rates</span>
                <small>Old Mutual MFC</small>
              </div>
              <div className="stat">
                <b>50%</b>
                <span>Faster lead qualification</span>
                <small>Starfish Solutions</small>
              </div>
              <div className="stat">
                <b>25 hrs</b>
                <span>Reclaimed per week</span>
                <small>Average across clients</small>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="cases cases-even">
            <article className="case case-n rv">
              <div className="ctop">
                <svg
                  className="glyph"
                  viewBox="0 0 56 56"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 40l2.5-7A15 15 0 1 1 22 40.5z" />
                  <path d="M21 27h14M21 21h10" />
                  <circle cx="41" cy="16" r="3" fill="var(--orange)" stroke="var(--orange)" />
                </svg>
                <span className="clabel">
                  <span className="nw">WhatsApp concierge</span>
                </span>
              </div>
              <div className="cbody">
                <h3 className="ctitle">A WhatsApp concierge for a global café brand</h3>
                <p className="csum">
                  Instant, on-brand answers for customers, day and night, with a person for anything
                  sensitive.
                </p>
                <a className="tlink cmore" href="#case-cafe">
                  Read the case →
                </a>
              </div>
            </article>
            <article className="case case-n rv">
              <div className="ctop">
                <svg
                  className="glyph"
                  viewBox="0 0 56 56"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M28 10l18 9-18 9-18-9z" />
                  <path d="M10 28l18 9 18-9" />
                  <path d="M10 37l18 9 18-9" />
                  <circle cx="28" cy="19" r="3" fill="var(--orange)" stroke="var(--orange)" />
                </svg>
                <span className="clabel">
                  <span className="nw">Strategy, product &amp; brand ·</span>{" "}
                  <span className="nw">Ryyva</span>
                </span>
              </div>
              <div className="cbody">
                <h3 className="ctitle">Product suite and brand for Ryyva</h3>
                <p className="csum">
                  A complex AI engine turned into three products a buyer understands in one read.
                </p>
                <a className="tlink cmore" href="#case-ryyva">
                  Read the case →
                </a>
              </div>
            </article>
            <Testimonial client="starfish" />
            <article className="case case-n rv">
              <div className="ctop">
                <svg
                  className="glyph"
                  viewBox="0 0 56 56"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 12h36l-13 16v12l-10 5V28z" />
                  <circle cx="42" cy="40" r="3" fill="var(--orange)" stroke="var(--orange)" />
                </svg>
                <span className="clabel">
                  <span className="nw">Lead generation platform</span>
                </span>
              </div>
              <div className="cbody">
                <h3 className="ctitle">Opted-in leads, scored for warmth</h3>
                <p className="csum">
                  Leads that asked to hear from you, scored for warmth and consent-ready.
                </p>
                <a className="tlink cmore" href="#case-leadforms">
                  Read the case →
                </a>
              </div>
            </article>
            <Testimonial client="oldmutual" />
            <article className="case case-n rv">
              <div className="ctop">
                <svg
                  className="glyph"
                  viewBox="0 0 56 56"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="17" y="8" width="22" height="40" rx="5" />
                  <path d="M24 14h8" />
                  <circle cx="24" cy="30" r="1.6" fill="currentColor" />
                  <circle cx="28" cy="30" r="1.6" fill="currentColor" />
                  <circle cx="32" cy="30" r="1.6" fill="var(--orange)" stroke="var(--orange)" />
                </svg>
                <span className="clabel">
                  <span className="nw">Product ·</span> <span className="nw">Appi</span>
                </span>
              </div>
              <div className="cbody">
                <h3 className="ctitle">Appi, a WhatsApp AI teammate for field teams</h3>
                <p className="csum">
                  One WhatsApp number that answers, files, records and coaches your field team.
                </p>
                <a className="tlink cmore" href="#case-appi">
                  Read the case →
                </a>
              </div>
            </article>
          </div>
          <div className="cases" style={{ marginTop: "20px" }}>
            <div className="case case-band rv">
              <div>
                <div className="big">25 hrs</div>
                <div
                  className="mono"
                  style={{
                    fontSize: "13px",
                    marginTop: "10px",
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                  }}
                >
                  Reclaimed per week · average across clients
                </div>
              </div>
              <p className="lead" style={{ color: "var(--muted)" }}>
                Automating the repeated work (follow-ups, reminders, reporting, approvals) gives
                teams back more than half a working week.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec white" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker">Case notes</span>
            <h2 className="h2" style={{ marginTop: "20px" }}>
              What we built
            </h2>
          </div>
          <div className="cnotes">
            {CASE_NOTES.map((c) => (
              <article className="cn rv" id={c.id} key={c.title}>
                <div className="cn-h">
                  <span className="clabel">{c.label}</span>
                  <h3 className="h3">{c.title}</h3>
                </div>
                <div className="cn-b">
                  <p className="cn-note">{c.note}</p>
                  {c.built && (
                    <details className="cd">
                      <summary>What we built</summary>
                      <div className="cd-in">
                        <div className="cd-g">
                          <ul>
                            {c.built.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </details>
                  )}
                  {c.cta && (
                    <p className="cd-cta">
                      <Link className="tlink" href="/book">
                        Book a 20-min call →
                      </Link>
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ClientLogos />
      <CtaSection title="Your numbers could be next." />
      <OpenDetailsFromHash />
    </>
  );
}
