import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Vowels Africa",
  description: "How Vowels Africa handles personal information under POPIA.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Vowels Africa",
    description: "How Vowels Africa handles personal information under POPIA.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="phero dark">
        <div className="hero" style={{ position: "absolute", inset: "0", padding: "0" }}>
          <div className="grid"></div>
        </div>
        <div className="wrap phw" style={{ position: "relative" }}>
          <div>
            <span className="kicker">Legal</span>
            <h1 className="display">Privacy policy</h1>
            <p className="lead">
              How Vowels Africa collects, uses and protects personal information.
            </p>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap prose">
          <div className="banner">
            Stub only: needs to be written or reviewed by the Vowels team / legal adviser for POPIA
            compliance.
          </div>
          <h2>Who we are</h2>
          <p>
            Vowels Africa <span className="ph">[Registered company name & number]</span>,{" "}
            <span className="ph">[Physical address]</span>. Information Officer:{" "}
            <span className="ph">[Name, email]</span>.
          </p>
          <h2>What we collect</h2>
          <p>
            When you book a call or contact us: your name, work email, and anything you choose to
            tell us about your business. <span className="ph">[Analytics / cookies used]</span>
          </p>
          <h2>How we use it</h2>
          <p>
            We use it to arrange and prepare for your call and to respond to your enquiry. We don’t
            sell personal information.
          </p>
          <h2>Your rights</h2>
          <p>
            You can ask us to access, correct or delete your personal information by emailing{" "}
            <span className="ph">[privacy email]</span>.
          </p>
          <p style={{ marginTop: "32px", fontSize: "14px" }}>
            Last updated: <span className="ph">[Date]</span>
          </p>
        </div>
      </section>
    </>
  );
}
