const LOGOS = [
  { file: "client-oldmutual.webp", alt: "Old Mutual", w: 379, h: 84 },
  { file: "client-starfish.webp", alt: "Starfish Debt Consultants", w: 389, h: 84 },
  { file: "client-apex.webp", alt: "Apex Partner Solutions", w: 333, h: 84 },
  { file: "client-uzum.webp", alt: "UZUM", w: 128, h: 128, sq: true },
  { file: "client-ryyva.webp", alt: "Ryyva", w: 256, h: 84 },
  { file: "client-invnt.webp", alt: "INVNT Group", w: 117, h: 128, sq: true },
  { file: "client-sam_co.webp", alt: "Sam & Co", w: 94, h: 128, sq: true },
  { file: "client-samsguide.webp", alt: "Sams Guide", w: 110, h: 128, sq: true },
];

export function ClientLogos() {
  return (
    <section className="logos white" aria-label="Clients">
      <div className="wrap">
        <p>
          Trusted by growing teams in distribution, financial services, logistics, SaaS and
          professional services
        </p>
        <ul className="lgrid">
          {LOGOS.map((l) => (
            <li key={l.file}>
              <img
                className={l.sq ? "sq" : ""}
                src={`/assets/img/${l.file}`}
                alt={l.alt}
                loading="lazy"
                width={l.w}
                height={l.h}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
