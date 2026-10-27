import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/site/cta-section";

export const metadata: Metadata = {
  title: "Services | Managed IT, Automation, Integration & AI | Vowels Africa",
  description:
    "Managed IT, automation, system integration, custom software, fractional CTO advisory and AI agents for growth-stage businesses.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Managed IT, Automation, Integration & AI | Vowels Africa",
    description:
      "Managed IT, automation, system integration, custom software, fractional CTO advisory and AI agents for growth-stage businesses.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="phero dark">
        <div className="hero" style={{ position: "absolute", inset: "0", padding: "0" }}>
          <div className="grid"></div>
        </div>
        <div className="wrap phw has-a" style={{ position: "relative" }}>
          <div>
            <span className="kicker">Services</span>
            <h1 className="display">Six ways we take the friction out.</h1>
            <p className="lead">
              From stable IT foundations to AI agents running in your stack. Start with one, or
              we’ll tell you where to begin.
            </p>
            <div className="ctas">
              <Link className="btn btn-p" href="/book">
                Book a 20-min call{" "}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
          <aside className="paside">
            <ol className="idx">
              <li>
                <a href="#managed-it">
                  <span>01</span>Managed IT<i>→</i>
                </a>
              </li>
              <li>
                <a href="#automation">
                  <span>02</span>Automation<i>→</i>
                </a>
              </li>
              <li>
                <a href="#integration">
                  <span>03</span>System integration<i>→</i>
                </a>
              </li>
              <li>
                <a href="#custom-software">
                  <span>04</span>Custom software<i>→</i>
                </a>
              </li>
              <li>
                <a href="#fractional-cto">
                  <span>05</span>Fractional CTO & CPO<i>→</i>
                </a>
              </li>
              <li>
                <a href="#ai">
                  <span>06</span>Private AI agents<i>→</i>
                </a>
              </li>
            </ol>
          </aside>
        </div>
      </section>
      <nav className="subnav" aria-label="Services">
        <div className="wrap">
          <a href="#managed-it">Managed IT</a>
          <a href="#automation">Automation</a>
          <a href="#integration">System integration</a>
          <a href="#custom-software">Custom software</a>
          <a href="#fractional-cto">Fractional CTO & CPO</a>
          <a href="#ai">Private AI agents</a>
        </div>
      </nav>
      <div className="wrap">
        <section className="svc" id="managed-it">
          <div>
            <div style={{ color: "var(--text)" }}>
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
                <rect x="8" y="12" width="40" height="26" rx="4" />
                <path d="M20 46h16M28 38v8" />
                <path d="M16 22h10M16 28h18" stroke="var(--orange)" />
              </svg>
            </div>
            <span className="kicker" style={{ marginTop: "22px" }}>
              01 · Managed IT
            </span>
            <h2 className="h2">Stabilise your foundation.</h2>
            <p className="lead">
              We run your IT like an in-house team would: people set up, devices secured, vendors
              handled.
            </p>
          </div>
          <div className="svc-body rv">
            <ul className="ticks">
              <li>Employee onboarding & offboarding</li>
              <li>Device & access management</li>
              <li>Cloud & shared drive setup</li>
              <li>ISP & vendor coordination</li>
              <li>IT inventory management</li>
              <li>Works alongside an internal team if you have one</li>
            </ul>
            <div>
              <p
                className="mono"
                style={{
                  fontSize: "12px",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "10px",
                }}
              >
                Typical tools
              </p>
              <div className="tools">
                <span>Google Workspace</span>
                <span>Microsoft 365</span>
                <span>Slack</span>
              </div>
            </div>
            <p className="note">Your people work. Your systems just run.</p>
          </div>
        </section>
        <section className="svc" id="automation">
          <div>
            <div style={{ color: "var(--text)" }}>
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
                <circle cx="14" cy="28" r="6" />
                <circle cx="42" cy="14" r="6" />
                <circle cx="42" cy="42" r="6" />
                <path d="M20 26l16-9M20 30l16 9" />
                <path d="M42 20v16" stroke="var(--orange)" strokeDasharray="3 3" />
              </svg>
            </div>
            <span className="kicker" style={{ marginTop: "22px" }}>
              02 · Automation
            </span>
            <h2 className="h2">Remove manual work.</h2>
            <p className="lead">
              If it’s repeated daily, it should be automated. We take the copy-paste, chasing and
              re-keying off your team for good.
            </p>
          </div>
          <div className="svc-body rv">
            <ul className="ticks">
              <li>Lead capture</li>
              <li>Follow-ups & CRM automation</li>
              <li>Invoice generation & payment reminders</li>
              <li>Reporting</li>
              <li>Internal approvals</li>
              <li>WhatsApp replies</li>
            </ul>
            <div>
              <p
                className="mono"
                style={{
                  fontSize: "12px",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "10px",
                }}
              >
                Typical tools
              </p>
              <div className="tools">
                <span>n8n</span>
                <span>Make</span>
                <span>Zapier</span>
                <span>Pipedrive</span>
                <span>HubSpot</span>
              </div>
            </div>
            <p className="note">Less admin. More momentum.</p>
          </div>
        </section>
        <section className="svc" id="integration">
          <div>
            <div style={{ color: "var(--text)" }}>
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
                <rect x="6" y="8" width="16" height="16" rx="4" />
                <rect x="34" y="8" width="16" height="16" rx="4" />
                <rect x="20" y="34" width="16" height="16" rx="4" />
                <path d="M22 16h12M14 24v10q0 8 6 8M42 24v10q0 8-6 8" stroke="var(--orange)" />
              </svg>
            </div>
            <span className="kicker" style={{ marginTop: "22px" }}>
              03 · System integration
            </span>
            <h2 className="h2">Connect everything.</h2>
            <p className="lead">
              WhatsApp. CRM. Accounting. Cloud storage. Internal dashboards. If your tools don’t
              talk to each other, we connect them.
            </p>
          </div>
          <div className="svc-body rv">
            <ul className="ticks">
              <li>Two-way sync between CRM, inbox and accounting</li>
              <li>WhatsApp connected to your CRM</li>
              <li>Payments reconciled automatically</li>
              <li>Shared data across teams</li>
              <li>If it has an API, webhook, inbox, spreadsheet or database, we can connect it</li>
            </ul>
            <div>
              <p
                className="mono"
                style={{
                  fontSize: "12px",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "10px",
                }}
              >
                Typical tools
              </p>
              <div className="tools">
                <span>WhatsApp</span>
                <span>Wati</span>
                <span>Xero</span>
                <span>Sage</span>
                <span>Stripe</span>
                <span>Yoco</span>
                <span>Shopify</span>
                <span>WooCommerce</span>
              </div>
            </div>
            <p className="note">Enter it once. It shows up everywhere.</p>
          </div>
        </section>
        <section className="svc" id="custom-software">
          <div>
            <div style={{ color: "var(--text)" }}>
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
                <path d="M18 18l-10 10 10 10M38 18l10 10-10 10" />
                <path d="M32 12l-8 32" stroke="var(--orange)" />
              </svg>
            </div>
            <span className="kicker" style={{ marginTop: "22px" }}>
              04 · Custom software
            </span>
            <h2 className="h2">When tools fall short, we build.</h2>
            <p className="lead">
              Sometimes off-the-shelf software almost works. Almost isn’t enough. We build only when
              existing tools fall short.
            </p>
          </div>
          <div className="svc-body rv">
            <ul className="ticks">
              <li>Prototype first</li>
              <li>Validate with real users</li>
              <li>Then scale what works</li>
              <li>Bespoke internal tools and portals</li>
              <li>Custom integrations and dashboards</li>
            </ul>
            <div>
              <p
                className="mono"
                style={{
                  fontSize: "12px",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "10px",
                }}
              >
                Typical tools
              </p>
              <div className="tools">
                <span>Custom builds</span>
                <span>APIs</span>
                <span>Dashboards</span>
              </div>
            </div>
            <p className="note">Validate first. Invest second. Scale third.</p>
          </div>
        </section>
        <section className="svc" id="fractional-cto">
          <div>
            <div style={{ color: "var(--text)" }}>
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
                <circle cx="28" cy="18" r="8" />
                <path d="M12 48q0-14 16-14t16 14" />
                <path d="M40 10l6-4M44 18h6" stroke="var(--orange)" />
              </svg>
            </div>
            <span className="kicker" style={{ marginTop: "22px" }}>
              05 · Fractional CTO & CPO
            </span>
            <h2 className="h2">Senior tech leadership, part-time.</h2>
            <p className="lead">
              You may not need a full-time CTO. You do need someone senior in your corner on
              technology decisions.
            </p>
          </div>
          <div className="svc-body rv">
            <ul className="ticks">
              <li>A technical sounding board</li>
              <li>Oversight of developers</li>
              <li>Strategic prioritisation</li>
              <li>Practical system decisions</li>
              <li>Someone to say “don’t waste money on that”</li>
            </ul>
            <div>
              <p
                className="mono"
                style={{
                  fontSize: "12px",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "10px",
                }}
              >
                Typical tools
              </p>
              <div className="tools">
                <span>Advisory</span>
                <span>Dev oversight</span>
                <span>Roadmaps</span>
              </div>
            </div>
            <p className="note">Senior judgement, when you need it.</p>
          </div>
        </section>
        <section className="svc" id="ai">
          <div>
            <div style={{ color: "var(--text)" }}>
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
                <rect x="10" y="10" width="36" height="36" rx="8" />
                <path d="M18 36l7-9 6 5 7-12" />
                <circle cx="38" cy="20" r="3" fill="var(--orange)" stroke="var(--orange)" />
              </svg>
            </div>
            <span className="kicker" style={{ marginTop: "22px" }}>
              06 · Private AI agents
            </span>
            <h2 className="h2">
              Built into your stack.
              <br />
              Kept in South&nbsp;Africa.
            </h2>
            <p className="lead">
              AI agents that answer, qualify, route and report, alone or as a team, on your own
              infrastructure if you want it.
            </p>
          </div>
          <div className="svc-body rv">
            <ul className="ticks">
              <li>AI agent deployment: WhatsApp, CRM, support, internal ops</li>
              <li>Connected agents: several agents, one job each, handing off across your tools</li>
              <li>Private hosting on your own infrastructure</li>
              <li>Your data kept in South Africa</li>
              <li>Custom LLMs, built and hosted for your business</li>
              <li>Intelligent process automation: triage, route, respond, escalate</li>
              <li>AI-powered dashboards with natural-language queries</li>
              <li>Conversational AI trained on your business data</li>
              <li>AI readiness & strategy: process audit, use-case map, ROI modelling</li>
              <li>
                Responsible AI: human sign-off where it matters, built to support your POPIA
                obligations
              </li>
              <li>Activity logs of what your agents did, available on request</li>
            </ul>
            <div>
              <p
                className="mono"
                style={{
                  fontSize: "12px",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "10px",
                }}
              >
                Typical tools
              </p>
              <div className="tools">
                <span>n8n</span>
                <span>Flowise</span>
                <span>RAG</span>
                <span>Custom LLMs</span>
                <span>WhatsApp</span>
                <span>Metabase</span>
                <span>BigQuery</span>
              </div>
            </div>
            <p className="note">Your agents. Your infrastructure. Your&nbsp;data.</p>
          </div>
          <div className="pblock">
            <h3>Private AI agents</h3>
            <p>
              Several agents, one job each, handing off across your tools. We host them on your
              infrastructure and keep your data in South Africa. We’ve delivered these for clients
              under&nbsp;NDA.
            </p>
            <p className="oversight">
              Human sign-off where it matters. Autonomous where it’s&nbsp;safe.
            </p>
            <p className="pmore">
              <Link className="tlink" href="/work#case-cafe">
                See an example →
              </Link>
            </p>
          </div>
          <div
            className="agents"
            role="img"
            aria-label="Example: four AI agents, each with one job, handing off across WhatsApp, CRM, accounting and a dashboard, with human sign-off where it matters, hosted on your infrastructure with data in South Africa"
          >
            <div className="flow-top">
              <i></i>
              <i></i>
              <i></i>
              <span style={{ marginLeft: "8px" }}>agents · lead-to-quote</span>
              <span className="live">4 agents · coordinating</span>
            </div>
            <ol className="ag-row">
              <li className="ag">
                <span className="ag-n">A1</span>
                <b>Answer</b>
                <span>Replies to a new enquiry</span>
                <em>WhatsApp</em>
              </li>
              <li className="ag">
                <span className="ag-n">A2</span>
                <b>Qualify</b>
                <span>Scores it, routes the deal</span>
                <em>CRM</em>
              </li>
              <li className="ag">
                <span className="ag-n">A3</span>
                <b>Quote</b>
                <span>Drafts the quote</span>
                <em>Accounting</em>
              </li>
              <li className="ag">
                <span className="ag-n">A4</span>
                <b>Report</b>
                <span>Updates the pipeline</span>
                <em>Dashboard</em>
              </li>
            </ol>
            <div className="bus" aria-hidden="true">
              <span>hand-offs · shared business context</span>
            </div>
            <div className="ag-foot">
              <div className="ag-chips">
                <div className="human">
                  <span className="tick" aria-hidden="true"></span>
                  <b>
                    <span className="nw">Human sign-off</span>{" "}
                    <span className="nw">· where it matters</span>
                  </b>
                </div>
                <div className="host">
                  <span className="hico" aria-hidden="true"></span>
                  <span>
                    <span className="nw">Hosted on your infrastructure</span>{" "}
                    <span className="nw">· Data stays in SA</span>
                  </span>
                </div>
              </div>
              <span className="ag-note">One job per agent · clean hand-offs</span>
            </div>
          </div>
        </section>
      </div>
      <section className="sec dark">
        <div className="wrap">
          <div className="sec-head split">
            <div>
              <span className="kicker">Engagement</span>
              <h2 className="h2" style={{ marginTop: "20px" }}>
                Priced for the problem. Not the hours.
              </h2>
            </div>
            <p className="lead">
              Every engagement is scoped to what your business needs. Clear milestones, fixed scope,
              no surprises.
            </p>
          </div>
          <div className="tiers">
            <div className="tier rv">
              <span className="mono">Starter</span>
              <h3>Early-stage & SMEs</h3>
              <p>Foundation building: structure and core automation.</p>
              <div className="price">Fixed-scope quote after the call</div>
            </div>
            <div className="tier rv">
              <span className="mono">Growth</span>
              <h3>Scaling businesses</h3>
              <p>Systems alignment: integrations and reporting.</p>
              <div className="price">Fixed-scope quote after the call</div>
            </div>
            <div className="tier rv">
              <span className="mono">Mid-market</span>
              <h3>Mid-market & complex</h3>
              <p>Full-stack: advisory, dev oversight and custom build.</p>
              <div className="price">Fixed-scope quote after the call</div>
            </div>
          </div>
          <div className="cmp rv" style={{ marginTop: "64px" }}>
            <div>
              <h4>Most AI consultancies</h4>
              <ul>
                <li>AI strategy workshops</li>
                <li>Readiness assessments</li>
                <li>Slide decks and roadmaps</li>
                <li>Hand you back to your team</li>
              </ul>
            </div>
            <div>
              <h4>Vowels Africa</h4>
              <ul>
                <li>AI agents built, deployed and privately hosted</li>
                <li>Live automations in your stack</li>
                <li>Real integrations, not concept decks</li>
                <li>We run it until you’re ready</li>
                <li>Your data kept in South Africa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CtaSection title="Not sure where to start?" />
    </>
  );
}
