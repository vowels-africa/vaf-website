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
                  Strategy, product architecture and brand for Ryyva, an SA agentic platform, from
                  positioning to its first luxury deployment.
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
                  A survey-led lead platform (leadforms.co.za) with a WhatsApp agent, four-signal
                  scoring and SA consent rules built in.
                </p>
                <p className="cblurb">
                  Delivered end to end, with a PoC secured in principle with a major SA life
                  insurer’s distribution channel.
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
                  A white-label WhatsApp AI teammate for field forces, taken from one client’s bot
                  to a product with its own brand and pricing.
                </p>
                <p className="cblurb">
                  Appi: one WhatsApp number that answers, files, records and coaches your field
                  team. R299 per field agent a&nbsp;month.
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
            <article className="cn rv" id="case-cafe">
              <div className="cn-h">
                <span className="clabel">WhatsApp concierge · In production</span>
                <h3 className="h3">Café &amp; bistro brand (unnamed) · WhatsApp concierge</h3>
              </div>
              <div className="cn-b">
                <p className="cn-note">
                  A production WhatsApp concierge for a premium global café and bistro brand’s SA
                  operation that escalates allergen and sensitive queries to staff.
                </p>
                <details className="cd">
                  <summary>Full case: challenge, build, result</summary>
                  <div className="cd-in">
                    <p className="cd-hl">
                      A concierge that knows the menu, speaks in the brand’s voice and knows when to
                      hand&nbsp;over.
                    </p>
                    <div className="cd-g">
                      <div>
                        <h4>Challenge</h4>
                        <ul>
                          <li>The brand’s WhatsApp line was staffed by hand.</li>
                          <li>
                            Customers asked the same menu, allergen, order, delivery and reservation
                            questions at all hours, and every reply had to meet a luxury standard.
                          </li>
                          <li>
                            The brand needed a front door that never guesses about the menu, never
                            breaks voice and never answers an allergen question it isn’t sure of.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4>What we built</h4>
                        <ul>
                          <li>
                            <b>A concierge persona.</b> Warm and unhurried: no exclamation marks, no
                            emoji, honest about being AI when asked.
                          </li>
                          <li>
                            <b>A knowledge base from the brand’s own handbooks.</b> The SA handbooks
                            are the authority on menu and allergens. International material covers
                            voice and procedure only.
                          </li>
                          <li>
                            <b>A two-number model.</b> The human line routes customers to the
                            concierge, and the concierge hands allergen and sensitive queries back
                            to the team.
                          </li>
                          <li>
                            <b>A seven-layer integration design</b> covering the WhatsApp Business
                            API, orchestration, commerce (draft orders, payment links), courier
                            dispatch and reservations.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4>Where it landed</h4>
                        <ul>
                          <li>Live in production for the brand’s SA operation.</li>
                          <li>
                            The architecture extends to six specialist agents (inventory, demand,
                            quality, concierge, staff and anomaly detection), a path from WhatsApp
                            front desk to operating intelligence layer.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </article>
            <article className="cn rv" id="case-ryyva">
              <div className="cn-h">
                <span className="clabel">Strategy, product &amp; brand · Ryyva</span>
                <h3 className="h3">Ryyva · Product suite &amp; brand</h3>
              </div>
              <div className="cn-b">
                <p className="cn-note">
                  Positioning, a three-product structure (Loom, Thread, Weave) and the blueprint for
                  its first luxury deployment, now in production.
                </p>
                <details className="cd">
                  <summary>Full case: challenge, build, result</summary>
                  <div className="cd-in">
                    <p className="cd-hl">
                      Three threads, one weave. Turning an orchestration engine into a product suite
                      a buyer can&nbsp;understand.
                    </p>
                    <div className="cd-g">
                      <div>
                        <h4>Challenge</h4>
                        <ul>
                          <li>Ryyva had a strong engineering core and a hard story to tell.</li>
                          <li>
                            “Agentic workflow intelligence” means little to an operator deciding
                            where to spend.
                          </li>
                          <li>
                            It needed a product structure, positioning that set it apart from
                            workflow tools and systems integrators, and a first deployment that
                            proved the model.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4>What we built</h4>
                        <ul>
                          <li>
                            <b>Three products, one brand.</b> Loom: workflow orchestration. Thread:
                            data intelligence and a single customer view. Weave: an agentic
                            concierge across WhatsApp, voice, app and web.
                          </li>
                          <li>
                            <b>Positioning and website narrative.</b> Ryyva is the intelligence
                            layer above existing systems, not a replacement for them. One rule: act
                            when certain, escalate when not.
                          </li>
                          <li>
                            <b>A platform blueprint</b> for the first full deployment: a luxury
                            brand’s store, lab and production connected through six specialist
                            agents, with an 18-month phased roadmap from pilot store to fully
                            agentic operation.
                          </li>
                          <li>
                            <b>The Weave concierge build</b> that became the café concierge above.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4>Where it landed</h4>
                        <ul>
                          <li>
                            Ryyva has a product suite, a public narrative and a production anchor
                            client.
                          </li>
                          <li>
                            The same fabric now underpins further concierge and lead-generation
                            products.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </article>
            <article className="cn rv">
              <div className="cn-h">
                <span className="clabel">Lead generation tool</span>
                <h3 className="h3">Starfish Solutions · Bespoke lead generation tool</h3>
              </div>
              <div className="cn-b">
                <p className="cn-note">
                  A bespoke lead generation tool for a sales call centre, which cut lead
                  qualification processing time by 50%.
                </p>
                <p>
                  <span className="ph">[Add: timeline, stack, before/after]</span>
                </p>
              </div>
            </article>
            <article className="cn rv" id="case-leadforms">
              <div className="cn-h">
                <span className="clabel">Lead generation platform</span>
                <h3 className="h3">Leadforms · Lead generation platform</h3>
              </div>
              <div className="cn-b">
                <p className="cn-note">
                  Opted-in, scored leads via surveys and a WhatsApp agent. PoC secured in principle
                  with a major SA life insurer’s channel. Agreed PoC terms: 3 months, 20 leads a
                  day, 6% minimum conversion target.
                </p>
                <details className="cd">
                  <summary>Full case: challenge, build, result</summary>
                  <div className="cd-in">
                    <p className="cd-hl">
                      Leads that opted in, answered a short survey and told you how warm
                      they&nbsp;are.
                    </p>
                    <div className="cd-g">
                      <div>
                        <h4>Challenge</h4>
                        <ul>
                          <li>
                            Bought lead lists are cold, unconsented and increasingly unlawful under
                            POPIA.
                          </li>
                          <li>
                            Advisers and sales teams needed leads that had engaged, consented to
                            contact and arrived with enough signal to prioritise.
                          </li>
                          <li>It also had to be cheap enough per lead to work at volume.</li>
                        </ul>
                      </div>
                      <div>
                        <h4>What we built</h4>
                        <ul>
                          <li>
                            <b>A gamified survey portal</b> (“Stand a chance to win…”) across 10
                            verticals, from life and funeral cover to property and trading, each
                            with the right risk and consent notices.
                          </li>
                          <li>
                            <b>Four-signal lead scoring,</b> so every lead arrives with a warmth
                            score, not just a name and number.
                          </li>
                          <li>
                            <b>Sandy, a WhatsApp agent,</b> which engages respondents and sends
                            survey links, keeping completion on the web, where consent is captured
                            cleanly.
                          </li>
                          <li>
                            <b>The legal stack:</b> terms, a POPIA notice and a privacy policy built
                            around a revised consent model, plus the commercial agreements with the
                            distribution partner.
                          </li>
                          <li>Voice-agent outreach and automated workflows feeding the surveys.</li>
                        </ul>
                      </div>
                      <div>
                        <h4>Where it landed</h4>
                        <ul>
                          <li>
                            The platform is delivered: portal, scoring, WhatsApp agent, legal stack
                            and funnel.
                          </li>
                          <li>
                            A proof of concept was secured in principle with the mass-market
                            distribution channel of a major South African life insurer.
                          </li>
                        </ul>
                        <p className="terms">
                          <b>Agreed PoC terms</b>Three months, 20 life leads a day, minimum 6%
                          conversion target.
                        </p>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </article>
            <article className="cn rv">
              <div className="cn-h">
                <span className="clabel">Survey project</span>
                <h3 className="h3">Old Mutual MFC · Multi-channel agent engagement</h3>
              </div>
              <div className="cn-b">
                <p className="cn-note">
                  A multi-channel engagement process for Old Mutual MFC’s broker and franchise
                  distribution. Response rates rose by more than 40%.
                </p>
                <p>
                  <span className="ph">[Add: timeline, channels, tools used]</span>
                </p>
              </div>
            </article>
            <article className="cn rv" id="case-appi">
              <div className="cn-h">
                <span className="clabel">Product · Appi</span>
                <h3 className="h3">Appi · Product</h3>
              </div>
              <div className="cn-b">
                <p className="cn-note">
                  A white-label WhatsApp AI teammate for field forces: four specialists behind one
                  number. R299 per field agent per month, R20,000 once-off implementation.
                </p>
                <details className="cd">
                  <summary>Full case: challenge, build, result</summary>
                  <div className="cd-in">
                    <p className="cd-hl">
                      One WhatsApp number that answers your agents, files their requests, keeps
                      their records and trains them every&nbsp;week.
                    </p>
                    <div className="cd-g">
                      <div>
                        <h4>Challenge</h4>
                        <ul>
                          <li>
                            Field and sales agents live on WhatsApp and lean on head office for the
                            same things every day: product answers, status queries, document
                            requests and “how do I” questions.
                          </li>
                          <li>
                            Appi started as a routing bot for one insurance broker network. The
                            brief was to make it work for any industry and sell it as a product.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4>What we built</h4>
                        <ul>
                          <li>
                            <b>Four specialists behind one number.</b> Knowledge: answers from the
                            company’s own material. Action: files and tracks requests. Records:
                            keeps each agent’s workforce record current. Coach: weekly
                            micro-training in the brand’s voice.
                          </li>
                          <li>
                            <b>Positioning for any industry.</b> An industry switcher on the site
                            drives a live routing-console demo, so a broker, property operator or
                            dealership sees its own version.
                          </li>
                          <li>
                            <b>Simple pricing:</b> R299 per field agent per month plus a R20,000
                            once-off implementation, with a live calculator.
                          </li>
                          <li>
                            <b>The full brand:</b> a recoloured mascot with the three-dot routing
                            motif, logo mark and lockups, favicon and PWA assets, a WhatsApp profile
                            image and a Google Business Profile.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4>Where it landed</h4>
                        <ul>
                          <li>
                            Appi is a productised Vowels offer, ready to deploy white-label for any
                            field team.
                          </li>
                        </ul>
                        <p className="cd-cta">
                          <Link className="tlink" href="/book">
                            Book a 20-min call →
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </article>
          </div>
        </div>
      </section>
      <ClientLogos />
      <CtaSection title="Your numbers could be next." />
      <OpenDetailsFromHash />
    </>
  );
}
