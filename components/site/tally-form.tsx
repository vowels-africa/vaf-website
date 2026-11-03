"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

const EMBED_SCRIPT = "https://tally.so/widgets/embed.js";

/**
 * Embeds a Tally form. Tally's embed script resizes the frame to fit the form and,
 * on submit, follows the form's "redirect on completion" in the main window, so
 * visitors land on /thank-you as a normal page load (which fires the GTM lead event).
 */
export function TallyForm({ formId, title }: { formId: string; title: string }) {
  const src = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

  const load = () => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
      return;
    }
    // Script blocked or not loaded yet: show the form without auto-resize.
    document
      .querySelectorAll<HTMLIFrameElement>("iframe[data-tally-src]:not([src])")
      .forEach((el) => {
        el.src = el.dataset.tallySrc ?? "";
      });
  };

  // When arriving by client-side navigation the script may already be on the page.
  useEffect(() => {
    if (window.Tally) window.Tally.loadEmbeds();
  }, []);

  return (
    <>
      <iframe data-tally-src={src} loading="lazy" width="100%" height="560" title={title} />
      <Script src={EMBED_SCRIPT} strategy="afterInteractive" onLoad={load} onError={load} />
    </>
  );
}
