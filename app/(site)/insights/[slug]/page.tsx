import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InsightCard, InsightDate, InsightIcon } from "@/components/site/insights";
import { getInsight, getInsights, renderMarkdown } from "@/lib/insights";
import { BOOK_PATH } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getInsights().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};
  const title = `${post.title} | Vowels Africa`;
  return {
    title,
    description: post.description,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      title,
      description: post.description,
      type: "article",
      url: `/insights/${post.slug}`,
      ...(post.date ? { publishedTime: post.date } : {}),
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const all = getInsights();
  const i = all.findIndex((p) => p.slug === post.slug);
  const more = [1, 2, 3].map((n) => all[(i + n) % all.length]);

  return (
    <>
      <section className="phero dark">
        <div className="hero" style={{ position: "absolute", inset: "0", padding: "0" }}>
          <div className="grid"></div>
        </div>
        <div className="wrap phw has-a" style={{ position: "relative" }}>
          <div>
            <p className="crumbs">
              <Link href="/insights">Insights</Link> / {post.category}
            </p>
            <h1 className="display article-title">{post.title}</h1>
            <p className="lead">{post.excerpt}</p>
            <p className="article-meta mono">
              <InsightDate date={post.date} /> · {post.readTime} read
            </p>
          </div>
          <aside className="article-art" aria-hidden="true">
            <InsightIcon name={post.icon} />
          </aside>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <article
            className="article"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }}
          />
          <p className="article-byline mono">Moderated by the co-founders</p>
          {post.cta && (
            <div className="article-cta">
              <span className="kicker">Next step</span>
              <p>{post.cta}</p>
              <div>
                <Link className="btn btn-p" href={BOOK_PATH}>
                  Book a 20-min call <span className="arr" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="sec white" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head split">
            <div>
              <span className="kicker">Keep reading</span>
              <h2 className="h2" style={{ marginTop: "20px" }}>
                More insights
              </h2>
            </div>
            <p className="lead">
              <Link className="tlink" href="/insights">
                See all insights →
              </Link>
            </p>
          </div>
          <div className="posts">
            {more.map((p) => (
              <InsightCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
