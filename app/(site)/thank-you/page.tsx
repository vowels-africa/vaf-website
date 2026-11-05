import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank you | Vowels Africa",
  robots: { index: false },
};

/** The Tally booking form redirects here after a visitor submits it. */
export default function ThankYouPage() {
  return (
    <section className="phero dark msg">
      <div className="hero" style={{ position: "absolute", inset: "0", padding: "0" }}>
        <div className="grid"></div>
      </div>
      <div className="wrap phw" style={{ position: "relative" }}>
        <div>
          <span className="kicker">Thank you</span>
          <h1 className="display">Thank you for contacting Vowels&nbsp;Africa.</h1>
          <p className="lead">We will be in touch with you soon.</p>
          <div className="ctas">
            <Link className="btn btn-p" href="/">
              Back to the website <span className="arr" aria-hidden="true">→</span>
            </Link>
            <Link className="btn btn-s" href="/insights">
              Read our insights
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
