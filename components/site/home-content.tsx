import Link from "next/link";
import { CtaSection } from "@/components/site/cta-section";
import { ClientLogos } from "@/components/site/client-logos";
import { Testimonial } from "@/components/site/testimonial";

/** Homepage sections. Also used by the search and ad landing pages. */
export function HomeContent() {
  return (
    <>
      <section className="hero dark">
        <div className="grid"></div>
        <div className="wrap">
          <div className="hero-in">
            <div>
              <span className="kicker">IT · Automation · AI</span>
              <h1 className="display" style={{ marginTop: "24px" }}>
                We automate the <em>admin</em> holding your growth back.
              </h1>
              <p className="lead">
                Leads answered, WhatsApp handled, invoices sent, reports built. Managed IT,
                automation and AI agents that do the chasing for you.
              </p>
              <div className="ctas">
                <Link className="btn btn-p" href="/book">
                  Book a 20-min call{" "}
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </Link>
                <Link className="btn btn-s" href="/work">
                  See our work
                </Link>
              </div>
              <p className="micro">20 minutes. No obligation. No jargon.</p>
            </div>
            <div className="flow" aria-label="Example automated workflow" role="img">
              <div className="flow-top">
                <i></i>
                <i></i>
                <i></i>
                <span style={{ marginLeft: "8px" }}>workflow · new-lead.yml</span>
                <span className="live">running</span>
              </div>
              <div className="node">
                <div className="ic" style={{ background: "#0E3B2E", color: "#5FE3A1" }}>
                  WA
                </div>
                <div>
                  <b>New WhatsApp enquiry</b>
                  <span>“Hi, can I get a quote for 40 units?”</span>
                </div>
                <span className="tag">trigger</span>
              </div>
              <div className="wire"></div>
              <div className="node">
                <div className="ic" style={{ background: "#3A2A0A", color: "var(--orange)" }}>
                  AI
                </div>
                <div>
                  <b>Qualify & route</b>
                  <span>Intent: quote · Priority: high · Owner: Sales</span>
                </div>
                <span className="tag o">agent</span>
              </div>
              <div className="wire"></div>
              <div className="branch">
                <div className="node" style={{ gridTemplateColumns: "32px 1fr" }}>
                  <div
                    className="ic"
                    style={{
                      background: "#13224A",
                      color: "#8FB4FF",
                      width: "32px",
                      height: "32px",
                    }}
                  >
                    CRM
                  </div>
                  <div>
                    <b>Deal created</b>
                    <span>Follow-up in 2h</span>
                  </div>
                </div>
                <div className="node" style={{ gridTemplateColumns: "32px 1fr" }}>
                  <div
                    className="ic"
                    style={{
                      background: "#0B2F38",
                      color: "var(--cyan)",
                      width: "32px",
                      height: "32px",
                    }}
                  >
                    INV
                  </div>
                  <div>
                    <b>Quote sent</b>
                    <span>Reminder on day 3</span>
                  </div>
                </div>
              </div>
              <div className="flow-foot">
                <span>
                  Manual steps <b>0</b>
                </span>
                <span>
                  Hand-offs <b>auto</b>
                </span>
                <span>
                  Response <b>instant</b>
                </span>
              </div>
            </div>
          </div>
          <div className="stats">
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
        </div>
      </section>
      <ClientLogos />
      <section className="sec">
        <div className="wrap pains">
          <div className="rv">
            <span className="kicker">Sound familiar?</span>
            <h2 className="h2" style={{ marginTop: "20px" }}>
              Growth is good. Until the systems buckle.
            </h2>
            <p className="pull">
              You don’t need more software. <em>You need structure.</em>
            </p>
          </div>
          <ol className="plist rv">
            <li>
              <span>01</span>Leads fall through the cracks
            </li>
            <li>
              <span>02</span>WhatsApp becomes chaotic
            </li>
            <li>
              <span>03</span>Reporting stays manual
            </li>
            <li>
              <span>04</span>Invoices are chased by hand
            </li>
            <li>
              <span>05</span>Tools don’t speak to each other
            </li>
            <li>
              <span>06</span>IT becomes reactive
            </li>
            <li>
              <span>07</span>Tech decisions get made on gut feel
            </li>
          </ol>
        </div>
      </section>
      <section className="sec white" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head split">
            <div>
              <span className="kicker">Services</span>
              <h2 className="h2" style={{ marginTop: "20px" }}>
                How we bring structure back.
              </h2>
            </div>
            <p className="lead">
              Six ways in, one goal: a business that runs smoothly as it grows. Not sure where to
              start? That’s what the call is for.
            </p>
          </div>
          <div className="cards">
            <Link className="card rv" href="/services#managed-it">
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
              <span className="num">01</span>
              <h3 className="h3">Managed IT</h3>
              <p>
                Your outsourced IT team: devices, access, onboarding and vendors handled, so nothing
                breaks quietly.
              </p>
              <span className="more">
                Explore{" "}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
            <Link className="card rv" href="/services#automation">
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
              <span className="num">02</span>
              <h3 className="h3">Automation</h3>
              <p>
                If it’s repeated daily, it should be automated. Follow-ups, reminders, approvals and
                reports run on their own.
              </p>
              <span className="more">
                Explore{" "}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
            <Link className="card rv" href="/services#integration">
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
              <span className="num">03</span>
              <h3 className="h3">System integration</h3>
              <p>
                WhatsApp, CRM, accounting, storage, dashboards. If your tools don’t talk to each
                other, we connect them.
              </p>
              <span className="more">
                Explore{" "}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
            <Link className="card rv" href="/services#custom-software">
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
              <span className="num">04</span>
              <h3 className="h3">Custom software</h3>
              <p>
                When off-the-shelf almost works, almost isn’t enough. We prototype, prove it with
                real users, then build.
              </p>
              <span className="more">
                Explore{" "}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
            <Link className="card rv" href="/services#fractional-cto">
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
              <span className="num">05</span>
              <h3 className="h3">Fractional CTO & CPO</h3>
              <p>
                You may not need a full-time CTO. You do need someone senior in your corner on
                technology decisions.
              </p>
              <span className="more">
                Explore{" "}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
            <Link className="card rv" href="/services#ai">
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
              <span className="num">06</span>
              <h3 className="h3">Private AI agents</h3>
              <p>
                AI agents that work together across your tools, hosted on your infrastructure, with
                data kept in SA.
              </p>
              <span className="more">
                Explore{" "}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="sec dark">
        <div className="wrap">
          <div className="sec-head split">
            <div>
              <span className="kicker">How we work</span>
              <h2 className="h2" style={{ marginTop: "20px" }}>
                Clarity first. Execution second.
              </h2>
            </div>
            <p className="lead">
              We fix the process before we automate it, and build only when tools fall short.
            </p>
          </div>
          <ol className="steps">
            <li className="rv">
              <span className="dot"></span>
              <span className="n">01</span>
              <h3>Understand</h3>
              <p>
                We map how your business actually runs: where hours go, where leads drop and where
                decisions stall.
              </p>
              <div className="out">
                <b>Outcome</b>Clear visibility into bottlenecks.
              </div>
            </li>
            <li className="rv">
              <span className="dot"></span>
              <span className="n">02</span>
              <h3>Optimise</h3>
              <p>
                We remove friction before we automate. Duplicate steps, manual hand-offs and broken
                processes are fixed first.
              </p>
              <div className="out">
                <b>Outcome</b>A lean, reliable foundation.
              </div>
            </li>
            <li className="rv">
              <span className="dot"></span>
              <span className="n">03</span>
              <h3>Automate</h3>
              <p>
                If it repeats, we automate it: WhatsApp replies, CRM follow-ups, invoice reminders,
                approvals.
              </p>
              <div className="out">
                <b>Outcome</b>Time saved. Revenue protected.
              </div>
            </li>
            <li className="rv">
              <span className="dot"></span>
              <span className="n">04</span>
              <h3>Innovate</h3>
              <p>
                When tools fall short, we build. AI agents, custom integrations, bespoke dashboards.
              </p>
              <div className="out">
                <b>Outcome</b>An edge, without wasted spend.
              </div>
            </li>
            <li className="rv">
              <span className="dot"></span>
              <span className="n">05</span>
              <h3>Elevate</h3>
              <p>
                Monitoring, reporting and continuous improvement, so growth doesn’t drown you in
                admin.
              </p>
              <div className="out">
                <b>Outcome</b>Sustainable growth. Measurable ROI.
              </div>
            </li>
          </ol>
          <p style={{ marginTop: "48px" }}>
            <Link className="tlink" href="/how-we-work">
              See the full framework →
            </Link>
          </p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head split">
            <div>
              <span className="kicker">Work</span>
              <h2 className="h2" style={{ marginTop: "20px" }}>
                Results from real client&nbsp;work.
              </h2>
            </div>
            <p className="lead">
              On average, clients reclaim 25 hours a week. Here’s what that looks like in practice.
            </p>
          </div>
          <div className="cases cases-home">
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
                  <span className="nw">WhatsApp concierge ·</span>{" "}
                  <span className="nw">In production</span>
                </span>
              </div>
              <div className="cbody">
                <h3 className="ctitle">A WhatsApp concierge for a global café brand</h3>
                <p className="csum">
                  A WhatsApp concierge for a premium global café and bistro brand’s SA operation,
                  live and grounded in its handbooks.
                </p>
                <Link className="tlink cmore" href="/work#case-cafe">
                  Read the case →
                </Link>
              </div>
            </article>
            <Testimonial client="starfish" />
          </div>
          <p style={{ marginTop: "36px" }}>
            <Link className="tlink" href="/work">
              See all work →
            </Link>
          </p>
        </div>
      </section>
      <section className="sec white" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head split">
            <div>
              <span className="kicker">Integrations</span>
              <h2 className="h2" style={{ marginTop: "20px" }}>
                Outcomes first. Tools second.
              </h2>
            </div>
            <p className="lead">
              If it has an API, webhook, inbox, spreadsheet or database, we can connect it. Don’t
              see yours? Ask us on the call.
            </p>
          </div>
          <div className="stack">
            <div>
              <h4>Comms</h4>
              <ul>
                <li>WhatsApp</li>
                <li>Wati</li>
                <li>Twilio</li>
                <li>Gmail</li>
              </ul>
            </div>
            <div>
              <h4>CRM / Sales</h4>
              <ul>
                <li>Pipedrive</li>
                <li>HubSpot</li>
                <li>Zoho</li>
                <li>Attio</li>
              </ul>
            </div>
            <div>
              <h4>Payments & accounting</h4>
              <ul>
                <li>Stripe</li>
                <li>Xero</li>
                <li>Sage</li>
                <li>Yoco</li>
              </ul>
            </div>
            <div>
              <h4>E-commerce</h4>
              <ul>
                <li>Shopify</li>
                <li>WooCommerce</li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li>Freshworks</li>
                <li>Zendesk</li>
                <li>Intercom</li>
                <li>Monday</li>
              </ul>
            </div>
            <div>
              <h4>Data / BI</h4>
              <ul>
                <li>Airtable</li>
                <li>Notion</li>
                <li>BigQuery</li>
                <li>Metabase</li>
              </ul>
            </div>
            <div>
              <h4>Productivity</h4>
              <ul>
                <li>Google Workspace</li>
                <li>Microsoft 365</li>
                <li>Slack</li>
                <li>Mattermost</li>
              </ul>
            </div>
            <div>
              <h4>Automation</h4>
              <ul>
                <li>Zapier</li>
                <li>Make</li>
                <li>n8n</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
