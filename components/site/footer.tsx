import Link from "next/link";
import { BOOK_PATH, COMPANY, CONTACT, NAV, SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-g">
          <div>
            <img
              src="/assets/img/vowels-logo.svg"
              alt="Vowels"
              width={114}
              height={32}
              loading="lazy"
              style={{ height: "32px", width: "auto" }}
            />
            <p className="tag">Clarity first. Execution second.</p>
            <Link className="btn btn-p" href={BOOK_PATH}>
              Book a 20-min call{" "}
              <span className="arr" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              {NAV.filter((n) => n.href !== "/services").map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/enterprise">Enterprise</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href={BOOK_PATH}>Book a 20-min call</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            {/* Contact details are set in CONTACT in lib/site.ts */}
            <ul>
              <li>
                {CONTACT.email ? (
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                ) : (
                  <span className="ph">[Email]</span>
                )}
              </li>
              {/* Phone is hidden until a number is set in CONTACT */}
              {CONTACT.phone && (
                <li>
                  <a href={`tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`}>{CONTACT.phone}</a>
                </li>
              )}
              {CONTACT.whatsapp && (
                <li>
                  <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener">
                    WhatsApp
                  </a>
                </li>
              )}
              <li>
                {CONTACT.linkedin ? (
                  <a href={CONTACT.linkedin} target="_blank" rel="noopener">
                    LinkedIn
                  </a>
                ) : (
                  <span>
                    LinkedIn <span className="ph">[URL]</span>
                  </span>
                )}
              </li>
              <li>
                {CONTACT.location ? (
                  <span>{CONTACT.location}</span>
                ) : (
                  <span className="ph">[City, Country]</span>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="ftr-b">
          <span>
            © {new Date().getFullYear()} {COMPANY.legalName} · Reg. {COMPANY.registrationNumber}
          </span>
          <span>
            <Link href="/privacy">Privacy policy (POPIA)</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
