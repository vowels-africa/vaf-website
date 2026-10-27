import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/site/cta-section";

export const metadata: Metadata = {
  title: "FAQ | Vowels Africa",
  description:
    "Answers on retainers, timelines, tools, ROI and whether Vowels Africa suits small businesses.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Vowels Africa",
    description:
      "Answers on retainers, timelines, tools, ROI and whether Vowels Africa suits small businesses.",
    url: "/faq",
  },
};

export default function FaqPage() {
  return (
    <>
      <section className="phero dark">
        <div className="hero" style={{ position: "absolute", inset: "0", padding: "0" }}>
          <div className="grid"></div>
        </div>
        <div className="wrap phw" style={{ position: "relative" }}>
          <div>
            <span className="kicker">FAQ</span>
            <h1 className="display">Questions, answered.</h1>
            <p className="lead">
              Straight answers about how we work. Anything else, ask us on the call.
            </p>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap two faqg" style={{ gridTemplateColumns: "1fr 2fr" }}>
          <div>
            <p className="lead" style={{ color: "var(--muted)" }}>
              Still unsure?
            </p>
            <div className="ctas" style={{ marginTop: "18px" }}>
              <Link className="btn btn-p" href="/book">
                Book a 20-min call{" "}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
          <div className="faq">
            <details open>
              <summary>Do you replace our internal IT team?</summary>
              <p>
                No. We either act as your outsourced IT team or work alongside your internal team to
                improve structure and efficiency.
              </p>
            </details>
            <details>
              <summary>How quickly can automation be implemented?</summary>
              <p>
                Simple workflows can be live within weeks. More complex integrations are scoped and
                phased to reduce disruption.
              </p>
            </details>
            <details>
              <summary>Do we need to change all our current tools?</summary>
              <p>
                No. We usually optimise and connect what you already use before recommending new
                systems.
              </p>
            </details>
            <details>
              <summary>What if we don’t know what needs to be automated?</summary>
              <p>
                That’s normal. We start with a clarity call to identify where time and revenue are
                leaking.
              </p>
            </details>
            <details>
              <summary>Do you build custom software?</summary>
              <p>
                Yes, but only when off-the-shelf tools are insufficient. We prototype first,
                validate demand, then scale.
              </p>
            </details>
            <details>
              <summary>How do your retainers work?</summary>
              <p>
                You choose a tier based on your operational needs. Work is prioritised monthly with
                full visibility and reporting.
              </p>
            </details>
            <details>
              <summary>What industries do you specialise in?</summary>
              <p>
                We work across distribution, financial services, logistics, SaaS and professional
                services, primarily with growth-stage businesses.
              </p>
            </details>
            <details>
              <summary>Is this suitable for small businesses?</summary>
              <p>
                Yes, if growth is creating operational strain. Very early-stage businesses may not
                yet need structured automation.
              </p>
            </details>
            <details>
              <summary>How do we measure ROI?</summary>
              <p>
                We track time saved, error reduction, response improvements and revenue
                acceleration, depending on the workflow.
              </p>
            </details>
            <details>
              <summary>What happens if we outgrow our plan?</summary>
              <p>
                We evolve with you. Most clients move from Starter → Growth as operational
                complexity increases.
              </p>
            </details>
            <details>
              <summary>Where does our data live?</summary>
              <p>
                We can host AI on your own infrastructure and keep your data in South Africa. Our
                systems are built to support your POPIA obligations.
              </p>
            </details>
            <details>
              <summary>Do the agents act on their own?</summary>
              <p>
                Only where it’s safe. Each build sets what runs autonomously and what waits for a
                person to approve it.
              </p>
            </details>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
