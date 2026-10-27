"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BOOK_PATH, NAV } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const current = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined;
  const close = () => setOpen(false);

  return (
    <header className={open ? "hdr open" : "hdr"}>
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Vowels Africa home" onClick={close}>
          <img src="/assets/img/vowels-logo.svg" alt="Vowels" width={107} height={30} />
        </Link>
        <nav className="nav" aria-label="Main">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} aria-current={current(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="btn btn-p btn-sm" href={BOOK_PATH} onClick={close}>
          Book a 20-min call <span className="arr" aria-hidden="true">→</span>
        </Link>
        <button
          className="menu-btn"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mnav"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
        </button>
      </div>
      <nav className="mnav" id="mnav" aria-label="Mobile">
        <Link href="/" onClick={close}>
          Home
        </Link>
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} onClick={close}>
            {item.label}
          </Link>
        ))}
        <Link className="btn btn-p" href={BOOK_PATH} onClick={close}>
          Book a 20-min call <span className="arr" aria-hidden="true">→</span>
        </Link>
      </nav>
    </header>
  );
}

/** Slim header for the search and ad landing pages: logo and booking button only. */
export function LandingHeader() {
  return (
    <header className="hdr">
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Vowels Africa home">
          <img src="/assets/img/vowels-logo.svg" alt="Vowels" width={107} height={30} />
        </Link>
        <Link className="btn btn-p btn-sm" href={BOOK_PATH} style={{ marginLeft: "auto" }}>
          Book a 20-min call <span className="arr" aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}
