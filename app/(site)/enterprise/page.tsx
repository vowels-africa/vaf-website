import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/site/cta-section";
import { Testimonial } from "@/components/site/testimonial";
import { BOOK_PATH } from "@/lib/site";

const TITLE = "12-Week Enterprise AI Validation | Vowels Africa";
const DESCRIPTION =
  "Know if your AI or automation idea is worth investing in, in 12 weeks. A working pilot inside your systems, measured against agreed targets, ending in a clear recommendation: scale, adjust or stop.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/enterprise" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/enterprise" },
};

const WHY = [
  {
    title: "A decision, not a deck",
    text: "You end with evidence from a working pilot, not a roadmap that still has to be proven.",
  },
  {
    title: "Capped risk",
    text: "A fixed fee and fixed scope, agreed upfront. You know the cost before you start.",
  },
  {
    title: "“Stop” is a good answer",
    text: "If the numbers don’t hold up, you find out in 12 weeks, before the big budget is spent.",
  },
];

const PHASES = [
  {
    n: "Weeks 1–2",
    title: "Frame",
    text: "We agree the decision to be made, the target, the baseline, and what result would mean stop. System and data access is set up.",
    out: "Success and stop criteria, signed off.",
  },
  {
    n: "Weeks 3–6",
    title: "Build",
    text: "We build the smallest working version, inside your systems and on your infrastructure if you need it.",
    out: "A working pilot.",
  },
  {
    n: "Weeks 7–10",
    title: "Prove",
    text: "It runs live with one team, channel or workflow, measured weekly against the target.",
    out: "Real results, not projections.",
  },
  {
    n: "Weeks 11–12",
    title: "Decide",
    text: "Results against target, the cost to scale, an ROI model and the risks, in a pack ready for your board.",
    out: "Scale, adjust or stop.",
  },
];

const DELIVERABLES = [
  "Results measured against the target agreed in week one",
  "A working pilot, running in your systems",
  "The cost and plan to scale it",
  "An ROI model built on real numbers",
  "Risks, dependencies and compliance notes",
  "A clear recommendation: scale, adjust or stop",
];

const NEEDS = [
  "A named sponsor who owns the decision",
  "Access to the relevant systems and data within the first 10 days",
  "One team, channel or workflow for the pilot",
  "A 30-minute check-in each week",
];

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
            <span className="kicker">Enterprise · 12-week validation</span>
            <h1 className="display">Know if it’s worth investing in. In 12&nbsp;weeks.</h1>
            <p className="lead">
              We test your idea with a working pilot inside your systems, then give you a clear
              recommendation: scale it, adjust it or stop.
            </p>
            <div className="ctas">
              <Link className="btn btn-p" href={BOOK_PATH}>
                Scope a 12-week validation{" "}
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
                <b>12</b>
                <span>Weeks from idea to decision</span>
                <small>Fixed fee, fixed scope</small>
              </div>
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
            </div>
          </aside>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head split">
            <div>
              <span className="kicker">Why validate first</span>
              <h2 className="h2" style={{ marginTop: "20px" }}>
                Most enterprise AI stalls between the workshop and the budget.
              </h2>
            </div>
            <p className="lead">
              A strategy deck can’t tell you whether it works with your data, your systems and your
              people. A live pilot can.
            </p>
          </div>
          <div className="values">
            {WHY.map((w) => (
              <div className="rv" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec white light" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head split">
            <div>
              <span className="kicker">How the 12 weeks run</span>
              <h2 className="h2" style={{ marginTop: "20px" }}>
                Frame. Build. Prove. Decide.
              </h2>
            </div>
            <p className="lead">
              One focused use case, measured from week one, with the stop criteria agreed before
              anything is built.
            </p>
          </div>
          <ol className="steps steps-4">
            {PHASES.map((p) => (
              <li className="rv" key={p.title}>
                <span className="dot"></span>
                <span className="n">{p.n}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <div className="out">
                  <b>Outcome</b>
                  {p.out}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec">
        <div className="wrap two">
          <div className="rv">
            <span className="kicker">At week 12</span>
            <h2 className="h2" style={{ margin: "20px 0 24px" }}>
              What you walk away with
            </h2>
            <ul className="ticks one-col">
              {DELIVERABLES.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div className="rv">
            <span className="kicker">What we need from you</span>
            <h2 className="h2" style={{ margin: "20px 0 24px" }}>
              To keep it to 12 weeks
            </h2>
            <ul className="ticks one-col">
              {NEEDS.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <p className="note" style={{ marginTop: "28px" }}>
              Fixed fee and fixed scope, quoted after a scoping call.
            </p>
          </div>
        </div>
      </section>

      <section className="sec white" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head split">
            <div>
              <span className="kicker">What we can test</span>
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

      <section className="sec">
        <div className="wrap two">
          <div className="rv">
            <span className="kicker">Procurement-ready</span>
            <h2 className="h2" style={{ margin: "20px 0 24px" }}>
              Easy to onboard as a supplier.
            </h2>
            <ul className="ticks one-col">
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

      <CtaSection title="Have an idea worth testing?" />
    </>
  );
}
