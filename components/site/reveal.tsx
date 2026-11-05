"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Fades in `.rv` elements as they scroll into view. Re-runs after each client-side navigation. */
export function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const els = document.querySelectorAll(".rv:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}

/** Opens the <details> inside the element the URL hash points at (used on the Work page). */
export function OpenDetailsFromHash() {
  useEffect(() => {
    const open = () => {
      const el = location.hash && document.getElementById(location.hash.slice(1));
      const d = el ? el.querySelector("details") : null;
      if (d) d.open = true;
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, []);
  return null;
}
