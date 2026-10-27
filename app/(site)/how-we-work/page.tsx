import type { Metadata } from "next";
import { CtaSection } from "@/components/site/cta-section";

export const metadata: Metadata = {
  title: "How We Work | The Vowels Framework | Vowels Africa",
  description:
    "Understand, optimise, automate, innovate, elevate: the Vowels framework for bringing structure back to growing businesses.",
  alternates: { canonical: "/how-we-work" },
  openGraph: {
    title: "How We Work | The Vowels Framework | Vowels Africa",
    description:
      "Understand, optimise, automate, innovate, elevate: the Vowels framework for bringing structure back to growing businesses.",
    url: "/how-we-work",
  },
};

export default function HowWeWorkPage() {
  return (
    <>
      <section className="phero dark">
        <div className="hero" style={{ position: "absolute", inset: "0", padding: "0" }}>
          <div className="grid"></div>
        </div>
        <div className="wrap phw" style={{ position: "relative" }}>
          <div>
            <span className="kicker">How we work</span>
            <h1 className="display">Clarity first. Execution second.</h1>
            <p className="lead">
              A five-step framework that fixes the process before automating it, and only builds
              when tools fall short.
            </p>
          </div>
        </div>
      </section>
      <section className="sec light">
        <div className="wrap">
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
        </div>
      </section>
      <section className="sec white" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap two">
          <div className="rv">
            <span className="kicker">Principles</span>
            <h2 className="h2" style={{ marginTop: "20px" }}>
              We don’t just install tools. We make operations make&nbsp;sense.
            </h2>
          </div>
          <div className="values" style={{ gridTemplateColumns: "1fr" }}>
            <div className="rv">
              <h3>Optimise before automating</h3>
              <p>
                Duplicate steps, manual hand-offs and broken processes are fixed first, so we never
                automate a mess.
              </p>
            </div>
            <div className="rv">
              <h3>Use what you have</h3>
              <p>
                We usually optimise and connect your existing tools before recommending new systems.
              </p>
            </div>
            <div className="rv">
              <h3>Validate first, invest second</h3>
              <p>Custom software is prototyped and validated before it’s scaled.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec dark">
        <div className="wrap two">
          <div>
            <span className="kicker">What changes</span>
            <h2 className="h2" style={{ marginTop: "20px" }}>
              After working with us
            </h2>
          </div>
          <ul className="plist" style={{ borderColor: "var(--line-d)" }}>
            <li style={{ borderColor: "var(--line-d)" }}>
              <span style={{ color: "var(--orange)" }}>→</span>Manual work drops
            </li>
            <li style={{ borderColor: "var(--line-d)" }}>
              <span style={{ color: "var(--orange)" }}>→</span>Response times improve
            </li>
            <li style={{ borderColor: "var(--line-d)" }}>
              <span style={{ color: "var(--orange)" }}>→</span>Teams gain clarity
            </li>
            <li style={{ borderColor: "var(--line-d)" }}>
              <span style={{ color: "var(--orange)" }}>→</span>Systems become structured
            </li>
            <li style={{ borderColor: "var(--line-d)" }}>
              <span style={{ color: "var(--orange)" }}>→</span>IT becomes predictable
            </li>
            <li style={{ borderColor: "var(--line-d)" }}>
              <span style={{ color: "var(--orange)" }}>→</span>Growth feels controlled
            </li>
          </ul>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
