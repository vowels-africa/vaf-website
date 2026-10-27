import type { Metadata } from "next";
import { CtaSection } from "@/components/site/cta-section";
import { InsightCard } from "@/components/site/insights";
import { getInsights } from "@/lib/insights";

const TITLE = "Insights | Vowels Africa";
const DESCRIPTION = "Practical notes on IT, automation, integration and AI for growing businesses.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/insights" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/insights" },
};

export default function InsightsPage() {
  const posts = getInsights();
  // The draft banner shows until every article has a publish date.
  const hasDrafts = posts.some((p) => !p.date);

  return (
    <>
      <section className="phero dark">
        <div className="hero" style={{ position: "absolute", inset: "0", padding: "0" }}>
          <div className="grid"></div>
        </div>
        <div className="wrap phw" style={{ position: "relative" }}>
          <div>
            <span className="kicker">Insights</span>
            <h1 className="display">Notes on operations, automation and AI.</h1>
            <p className="lead">Practical thinking for founders and operators. No hype.</p>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          {hasDrafts && (
            <div className="banner">
              Draft: these articles are awaiting final sign-off and publish dates. Remove this
              banner by adding a date to every article.
            </div>
          )}
          <div className="posts">
            {posts.map((post) => (
              <InsightCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
