import type { Metadata } from "next";
import { CtaSection } from "@/components/site/cta-section";
import { ClientLogos } from "@/components/site/client-logos";

export const metadata: Metadata = {
  title: "About Vowels Africa | Operational Technology Partners",
  description:
    "Vowels Africa is an operational technology partner for founder-led, scaling and mid-market businesses: IT, automation and AI.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Vowels Africa | Operational Technology Partners",
    description:
      "Vowels Africa is an operational technology partner for founder-led, scaling and mid-market businesses: IT, automation and AI.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="phero dark">
        <div className="hero" style={{ position: "absolute", inset: "0", padding: "0" }}>
          <div className="grid"></div>
        </div>
        <div className="wrap phw" style={{ position: "relative" }}>
          <div>
            <span className="kicker">About</span>
            <h1 className="display">
              The tech partner growing businesses don’t have{" "}
              <span style={{ whiteSpace: "nowrap" }}>in-house.</span>
            </h1>
            <p className="lead">
              We help founder-led and mid-market businesses replace chaos with structure, so growth
              feels controlled, not reactive.
            </p>
          </div>
        </div>
      </section>
      <section className="sec white">
        <div className="wrap">
          <div className="sec-head split">
            <div>
              <span className="kicker">Who we work with</span>
              <h2 className="h2" style={{ marginTop: "20px" }}>
                Built for growth-stage businesses
              </h2>
            </div>
            <p className="lead" style={{ maxWidth: "46ch" }}>
              More customers, more staff, more tools, more admin. Suddenly everything feels slow and
              reactive. Vowels Africa exists to fix that: the outsourced IT, automation and
              technical leadership growing businesses rarely have in-house.
            </p>
          </div>
          <div className="values">
            <div className="rv">
              <h3>Founder-led businesses</h3>
              <p>Where every systems decision still runs through the founder.</p>
            </div>
            <div className="rv">
              <h3>Scaling SMEs</h3>
              <p>Where operational strain is showing up in leads, invoices and reporting.</p>
            </div>
            <div className="rv">
              <h3>Mid-market, no tech lead</h3>
              <p>
                Without internal technical leadership, and needing someone senior in their corner.
              </p>
            </div>
          </div>
          <p
            className="mono"
            style={{ marginTop: "28px", fontSize: "13px", color: "var(--muted)" }}
          >
            Sectors: distribution · financial services · logistics · professional services · SaaS
          </p>
        </div>
      </section>
      <ClientLogos />
      <CtaSection />
    </>
  );
}
