import Link from "next/link";
import { BOOK_PATH } from "@/lib/site";

export function CtaSection({ title = "If growth feels messy, let’s fix it." }: { title?: string }) {
  return (
    <section className="sec dark cta">
      <div className="wrap cta-in">
        <div>
          <span className="kicker">20 minutes · no obligation</span>
          <h2 className="h2" style={{ margin: "20px 0 22px", maxWidth: "14ch" }}>
            {title}
          </h2>
          <p className="lead">
            Most calls surface 2–3 workflow fixes you can act on straight away. You leave with
            clarity, whether we work together or&nbsp;not.
          </p>
          <div className="ctas">
            <Link className="btn btn-p" href={BOOK_PATH}>
              Book a 20-min call <span className="arr" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div>
          <p
            className="mono"
            style={{
              fontSize: "12px",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--muted-d)",
              marginBottom: "14px",
            }}
          >
            On the call we’ll identify
          </p>
          <ul>
            <li>Where time is leaking</li>
            <li>What should be automated</li>
            <li>What should stay human</li>
            <li>What should be built</li>
            <li>What should be ignored</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
