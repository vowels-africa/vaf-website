import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/site/cta-section";
import { Testimonial } from "@/components/site/testimonial";
import { BOOK_PATH } from "@/lib/site";

const TITLE = "Enterprise AI, Automation & Integration | Vowels Africa";
const DESCRIPTION =
  "Private AI agents, deep systems integration and technical leadership for enterprise teams. Hosted on your infrastructure, with data kept in South Africa.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/enterprise" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/enterprise" },
};

const CAPABILITIES = [
  {
    title: "Private AI agents",
    text: "Agents that answer, qualify, route and report, hosted on your infrastructure with data kept in South Africa. Human sign-off where it matters.",
  },
  {
    title: "Systems integration",
    text: "CRM, ERP, WhatsApp Business API, data platforms and legacy systems, connected through APIs and webhooks so data moves without re-keying.",
  },
  {
    title: "Distribution & engagement",
    text: "Multi-channel processes that get brokers, agents and field teams responding, and give you the data to see what works.",
  },
  {
    title: "Custom LLMs & data",
    text: "Models built and hosted for your business, grounded in your own documents, with dashboards your teams can query in plain language.",
  },
  {
    title: "Technical leadership",
    text: "Architecture reviews, vendor and developer oversight, and a practical roadmap, alongside your internal IT team.",
  },
  {
    title: "Custom software",
    text: "When off-the-shelf won’t fit your process, we prototype, prove it with real users, then take it to production.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Scope",
    text: "A short discovery to map the process, the systems involved and what success looks like.",
    out: "A fixed-scope proposal.",
  },
  {
    n: "02",
    title: "Prove",
    text: "A pilot on one team, one channel or one workflow, measured against the agreed target.",
    out: "Evidence before you scale.",
  },
  {
    n: "03",
    title: "Roll out",
    text: "Production build, integration and hand-over, with your IT and security teams involved throughout.",
    out: "Live in your stack.",
  },
  {
    n: "04",
    title: "Run",
    text: "Monitoring, reporting and improvement, until your team is ready to own it, or for as long as you need us.",
    out: "Results that hold.",
  },
];

const PROCUREMENT = [
  "Supplier onboarding documents on request, including B-BBEE certificate and tax clearance",
  "Professional indemnity cover",
  "NDAs and fixed-scope statements of work",
  "Hosting on your infrastructure, with data kept in South Africa",
  "Built to support your POPIA obligations",
  "Activity logs of what your agents did, available on request",
];

export default function EnterprisePage() {
  return (
    <>
      <section className="phero dark">
        <div className="hero" style={{ position: "absolute", inset: "0", padding: "0" }}>
          <div className="grid"></div>
        </div>
        <div className="wrap phw has-a" style={{ position: "relative" }}>
          <div>
            <span className="kicker">Enterprise</span>
            <h1 className="display">Enterprise AI that ships, not just strategy.</h1>
            <p className="lead">
              For enterprise and technical teams that need private AI, deep integration and a
              partner who builds it, runs it and hands it over properly.
            </p>
            <div className="ctas">
              <Link className="btn btn-p" href={BOOK_PATH}>
                Discuss a project{" "}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </Link>
              <Link className="btn btn-s" href="/work">
                See our work
              </Link>
            </div>
          </div>
          <aside className="paside">
            <div className="stats vstats">
              <div className="stat">
                <b>40%+</b>
                <span>Higher response rates</span>
                <small>Old Mutual MFC</small>
              </div>
              <div className="stat">
                <b>SA</b>
                <span>Data kept in South Africa</span>
                <small>Private hosting</small>
              </div>
              <div className="stat">
                <b>NDA</b>
                <span>Multi-agent systems delivered</span>
                <small>For enterprise clients</small>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head split">
            <div>
              <span className="kicker">What we do</span>
              <h2 className="h2" style={{ marginTop: "20px" }}>
                Built into your systems, not bolted on.
              </h2>
            </div>
            <p className="lead">
              We work inside your stack and alongside your IT, security and operations teams.
            </p>
          </div>
          <div className="values ent-grid">
            {CAPABILITIES.map((c) => (
              <div className="rv" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec white light" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head split">
            <div>
              <span className="kicker">How we deliver</span>
              <h2 className="h2" style={{ marginTop: "20px" }}>
                Prove it small. Then scale it.
              </h2>
            </div>
            <p className="lead">Every engagement is fixed in scope, with a measurable target.</p>
          </div>
          <ol className="steps steps-4">
            {STEPS.map((s) => (
              <li className="rv" key={s.n}>
                <span className="dot"></span>
                <span className="n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="out">
                  <b>Outcome</b>
                  {s.out}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec">
        <div className="wrap two">
          <div className="rv">
            <span className="kicker">Procurement-ready</span>
            <h2 className="h2" style={{ margin: "20px 0 24px" }}>
              Easy to onboard as a supplier.
            </h2>
            <ul className="ticks" style={{ gridTemplateColumns: "1fr" }}>
              {PROCUREMENT.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="cases" style={{ gridTemplateColumns: "1fr" }}>
            <Testimonial client="oldmutual" />
          </div>
        </div>
      </section>

      <CtaSection title="Have an enterprise project in mind?" />
    </>
  );
}
