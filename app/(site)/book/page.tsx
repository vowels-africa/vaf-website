import type { Metadata } from "next";
import Link from "next/link";
import { Testimonial } from "@/components/site/testimonial";
import { LEAD_FORM_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a 20-min Call | Vowels Africa",
  description:
    "Book a free 20-minute clarity call. No obligation, no jargon: just clarity on what’s slowing your business down.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book a 20-min Call | Vowels Africa",
    description:
      "Book a free 20-minute clarity call. No obligation, no jargon: just clarity on what’s slowing your business down.",
    url: "/book",
  },
};

export default function BookPage() {
  return (
    <>
      <section className="sec" style={{ paddingTop: "clamp(48px,6vw,88px)" }}>
        <div className="wrap book">
          <div>
            <span className="kicker">Book a call</span>
            <h1 className="display" style={{ margin: "20px 0 22px" }}>
              20 minutes to clarity.
            </h1>
            <p className="lead">
              Pick a time that suits you. We come prepared to find where time and revenue are
              leaking. You leave with 2–3 concrete improvements, whether we work together
              or&nbsp;not.
            </p>
            <ul className="plist" style={{ marginTop: "32px" }}>
              <li>
                <span>01</span>Pick a time
              </li>
              <li>
                <span>02</span>We look at your setup before we talk
              </li>
              <li>
                <span>03</span>You get a clear next step, no hard sell
              </li>
            </ul>
          </div>
          {/*
            The design's calendar was a mock. Until Cal.com or Calendly is connected,
            this card sends visitors to the live Tally booking form (NEXT_PUBLIC_LEAD_FORM_URL).
          */}
          <div className="sched book-card">
            <div className="sched-h">
              <div>
                <b>20-min clarity call</b>
                <br />
                Video call · <span className="ph">[Timezone]</span>
              </div>
            </div>
            <div className="book-card-b">
              <p>
                Tell us a little about your business and choose a time that suits you. It takes
                about two minutes.
              </p>
              <ul className="ticks">
                <li>Free, with no obligation</li>
                <li>We review your setup before the call</li>
                <li>You leave with 2–3 concrete improvements</li>
              </ul>
              <a className="btn btn-p" href={LEAD_FORM_URL}>
                Choose a time <span className="arr" aria-hidden="true">→</span>
              </a>
              <p className="book-card-fine">
                We only use your details to arrange the call. See our{" "}
                <Link href="/privacy">privacy policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-tight white" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="cases">
            <Testimonial client="oldmutual" />
            <Testimonial client="starfish" />
          </div>
        </div>
      </section>
    </>
  );
}
