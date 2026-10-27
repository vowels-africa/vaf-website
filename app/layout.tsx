import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@/styles/site.css";
import "@/styles/additions.css";
import { Reveal } from "@/components/site/reveal";
import { SITE_URL } from "@/lib/site";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const TITLE = "Vowels Africa | IT, Automation & AI for Growing Businesses";
const DESCRIPTION =
  "We automate the admin holding your growth back. Managed IT, automation, system integration and AI agents for growing African SMEs. Book a 20-min call.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    siteName: "Vowels Africa",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/img/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/assets/img/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = { themeColor: "#020D24" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // The inline script below adds the "js" class before paint, so React must not flag it.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <link
          rel="preload"
          href="/assets/fonts/iserif.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/assets/fonts/geist.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        {GTM_ID && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
      </head>
      <body>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
        <Reveal />
      </body>
    </html>
  );
}
