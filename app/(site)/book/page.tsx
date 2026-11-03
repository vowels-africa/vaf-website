import type { Metadata } from "next";
import Link from "next/link";
import { Testimonial } from "@/components/site/testimonial";
import { TallyForm } from "@/components/site/tally-form";
import { CALL_TIMEZONE, LEAD_FORM_URL, TALLY_FORM_ID } from "@/lib/site";

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
              Tell us a little about your business and we’ll set a time that suits you. We come
              prepared to find where time and revenue are leaking. You leave with 2–3 concrete
              improvements, whether we work together or&nbsp;not.
            </p>
            <ul className="plist" style={{ marginTop: "32px" }}>
              <li>
                <span>01</span>Tell us what’s slowing you down
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
            The design's calendar was a mock. This card embeds the live Tally form
            (TALLY_FORM_ID in lib/site.ts). Its look inside the frame is set in Tally:
            see docs/tally-form-styling.md.
          */}
          <div className="sched form-card">
            <div className="sched-h">
              <div>
                <b>20-min clarity call</b>
                <br />
                Video call · {CALL_TIMEZONE}
              </div>
            </div>
            <div className="form-card-b">
              <TallyForm formId={TALLY_FORM_ID} title="Request a call" />
              <noscript>
                <a className="btn btn-p" href={LEAD_FORM_URL}>
                  Open the booking form{" "}
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </a>
              </noscript>
            </div>
            <p className="form-card-fine">
              We only use your details to arrange the call. See our{" "}
              <Link href="/privacy">privacy policy</Link>.
            </p>
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
