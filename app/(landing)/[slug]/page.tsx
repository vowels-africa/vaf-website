import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingFooter } from "@/components/site/footer";
import { LandingHeader } from "@/components/site/header";
import { HomeContent } from "@/components/site/home-content";
import { LANDING_SLUGS } from "@/lib/site";

/**
 * Search and ad landing pages. Each URL shows the homepage content with a slim
 * header (logo + booking button) and a minimal footer, so visitors stay focused.
 * The list of URLs lives in LANDING_SLUGS in lib/site.ts.
 */

const SPECIAL: Record<string, string> = { ai: "AI", it: "IT", "make.com": "Make.com" };

function slugToTitle(slug: string) {
  return slug
    .replace("make-com", "make.com")
    .split("-")
    .map((w) => SPECIAL[w] ?? w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return LANDING_SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!LANDING_SLUGS.includes(slug)) return {};
  const title = `${slugToTitle(slug)} | Vowels Africa`;
  return {
    title,
    alternates: { canonical: `/${slug}` },
    openGraph: { title, url: `/${slug}` },
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  if (!LANDING_SLUGS.includes(slug)) notFound();

  return (
    <>
      <LandingHeader />
      <main id="main">
        <HomeContent />
      </main>
      <LandingFooter />
    </>
  );
}
