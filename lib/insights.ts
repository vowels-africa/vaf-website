import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

/**
 * Insights articles live in /content/insights as Markdown files.
 * To add an article, copy an existing file, change the front matter and write the body.
 * Leave `date` empty ("") to show a [Date] placeholder; use YYYY-MM-DD when publishing.
 */
export type Insight = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  description: string;
  icon: string;
  order: number;
  cta: string;
  body: string;
};

const DIR = path.join(process.cwd(), "content", "insights");

function parseFile(file: string): Insight {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8").replace(/\r\n/g, "\n");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`Missing front matter in content/insights/${file}`);
  const fields: Record<string, unknown> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    const value = line.slice(i + 1).trim();
    try {
      fields[key] = JSON.parse(value);
    } catch {
      fields[key] = value;
    }
  }
  return {
    slug: file.replace(/\.md$/, ""),
    title: String(fields.title ?? ""),
    category: String(fields.category ?? ""),
    date: String(fields.date ?? ""),
    readTime: String(fields.readTime ?? ""),
    excerpt: String(fields.excerpt ?? ""),
    description: String(fields.description ?? ""),
    icon: String(fields.icon ?? ""),
    order: Number(fields.order ?? 99),
    cta: String(fields.cta ?? ""),
    body: match[2].trim(),
  };
}

export function getInsights(): Insight[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map(parseFile)
    .sort((a, b) => a.order - b.order);
}

export function getInsight(slug: string): Insight | undefined {
  return getInsights().find((p) => p.slug === slug);
}

export function renderMarkdown(md: string): string {
  return marked.parse(md, { async: false, gfm: true }) as string;
}

/** "2026-11-04" -> "4 Nov 2026". Empty string means not dated yet. */
export function formatDate(date: string): string {
  if (!date) return "";
  const d = new Date(`${date}T00:00:00`);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-ZA", { day: "numeric", month: "short", year: "numeric" });
}
