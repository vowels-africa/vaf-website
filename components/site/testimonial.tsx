const TESTIMONIALS = {
  starfish: {
    big: "50%",
    label: "Faster lead qualification",
    what: "Bespoke lead generation tool",
    quote:
      "Vowels developed a bespoke lead generation tool, which helped us improve our lead qualification processing time by 50%. I would recommend Vowels.Africa for any sales call center.",
    logo: "client-starfish.webp",
    logoAlt: "Starfish Debt Consultants",
    name: "Faaiz Abrahams",
    role: "CEO, Starfish Debt Consultants",
  },
  oldmutual: {
    big: "40%+",
    label: "Higher response rates",
    what: "Multi-channel agent engagement process",
    quote:
      "Vowels was able to deliver an effective multi-channel agent engagement process that improved response rates of over 40%, providing us with valuable insights to drive our ongoing strategy. Thank you!",
    logo: "client-oldmutual.webp",
    logoAlt: "Old Mutual MFC",
    name: "Dewald Heenop",
    role: "Head of Broker and Franchise Distribution, Old Mutual MFC",
  },
} as const;

export function Testimonial({ client }: { client: keyof typeof TESTIMONIALS }) {
  const t = TESTIMONIALS[client];
  return (
    <article className="case rv">
      <div>
        <div className="big">{t.big}</div>
        <div
          className="mono"
          style={{
            fontSize: "13px",
            marginTop: "10px",
            letterSpacing: ".06em",
            textTransform: "uppercase",
          }}
        >
          {t.label}
        </div>
      </div>
      <div className="what">{t.what}</div>
      <blockquote>“{t.quote}”</blockquote>
      <div className="who">
        <img
          src={`/assets/img/${t.logo}`}
          alt={t.logoAlt}
          loading="lazy"
          width={120}
          height={26}
          style={{ width: "auto" }}
        />
        <div>
          <b>{t.name}</b>
          <span>{t.role}</span>
        </div>
      </div>
    </article>
  );
}
