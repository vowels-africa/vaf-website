import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { formatDate, type Insight } from "@/lib/insights";

const orange = { stroke: "var(--orange)" };
const orangeDot = { fill: "var(--orange)", stroke: "var(--orange)" };

/** Line icons used on the Insights cards and article headers, from the design. */
const ICONS: Record<string, ReactNode> = {
  automation: (
    <>
      <circle cx="14" cy="28" r="6" />
      <circle cx="42" cy="14" r="6" />
      <circle cx="42" cy="42" r="6" />
      <path d="M20 26l16-9M20 30l16 9" />
      <path d="M42 20v16" {...orange} strokeDasharray="3 3" />
    </>
  ),
  integration: (
    <>
      <rect x="6" y="8" width="16" height="16" rx="4" />
      <rect x="34" y="8" width="16" height="16" rx="4" />
      <rect x="20" y="34" width="16" height="16" rx="4" />
      <path d="M22 16h12M14 24v10q0 8 6 8M42 24v10q0 8-6 8" {...orange} />
    </>
  ),
  ai: (
    <>
      <rect x="10" y="10" width="36" height="36" rx="8" />
      <path d="M18 36l7-9 6 5 7-12" />
      <circle cx="38" cy="20" r="3" {...orangeDot} />
    </>
  ),
  "private-ai": (
    <>
      <rect x="12" y="10" width="32" height="12" rx="3" />
      <rect x="12" y="26" width="32" height="12" rx="3" />
      <circle cx="18" cy="16" r="1.5" />
      <circle cx="18" cy="32" r="1.5" />
      <path d="M28 44v6M20 50h16" {...orange} />
    </>
  ),
  "sign-off": (
    <>
      <circle cx="16" cy="28" r="8" />
      <path d="M12 28l3 3 5-6" {...orange} />
      <path d="M24 28h8" />
      <circle cx="40" cy="28" r="8" />
      <path d="M37 28h6M40 25v6" />
    </>
  ),
  leads: (
    <>
      <path d="M8 10h40L34 28v14l-12 6V28z" />
      <circle cx="44" cy="44" r="3" {...orangeDot} />
    </>
  ),
  software: (
    <>
      <path d="M20 16l-10 12 10 12M36 16l10 12-10 12" />
      <path d="M31 12l-6 32" {...orange} />
    </>
  ),
  cto: (
    <>
      <circle cx="28" cy="18" r="8" />
      <path d="M14 46q2-14 14-14t14 14" />
      <path d="M40 8l4-3M42 14h5" {...orange} />
    </>
  ),
  "managed-it": (
    <>
      <rect x="8" y="12" width="40" height="26" rx="3" />
      <path d="M22 46h12M28 38v8" />
      <path d="M16 22h10M16 28h18" {...orange} />
    </>
  ),
};

export function InsightIcon({ name, style }: { name: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" stroke="#fff" strokeWidth="1" aria-hidden="true" style={style}>
      {ICONS[name] ?? ICONS.automation}
    </svg>
  );
}

export function InsightDate({ date }: { date: string }) {
  const label = formatDate(date);
  return label ? <time dateTime={date}>{label}</time> : <span className="ph">[Date]</span>;
}

export function InsightCard({ post }: { post: Insight }) {
  return (
    <Link className="post rv" href={`/insights/${post.slug}`}>
      <div className="art">
        <div className="hero" style={{ position: "absolute", inset: "0", padding: "0" }}>
          <div className="grid"></div>
        </div>
        <InsightIcon
          name={post.icon}
          style={{ position: "absolute", right: "24px", bottom: "-10px", width: "160px", opacity: 0.9 }}
        />
      </div>
      <div className="bd">
        <span className="mono">
          {post.category} · <InsightDate date={post.date} />{" "}
          <span className="nw rt">
            <span className="sep">· </span>
            {post.readTime} read
          </span>
        </span>
        <h3>{post.title}</h3>
        <p className="ex">{post.excerpt}</p>
      </div>
    </Link>
  );
}
