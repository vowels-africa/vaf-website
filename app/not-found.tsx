import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";

export const metadata: Metadata = { title: "Page not found | Vowels Africa" };

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="phero dark msg">
          <div className="hero" style={{ position: "absolute", inset: "0", padding: "0" }}>
            <div className="grid"></div>
          </div>
          <div className="wrap phw" style={{ position: "relative" }}>
            <div>
              <span className="kicker">404</span>
              <h1 className="display">This page doesn’t exist.</h1>
              <p className="lead">It may have moved when we redesigned the site.</p>
              <div className="ctas">
                <Link className="btn btn-p" href="/">
                  Back to home <span className="arr" aria-hidden="true">→</span>
                </Link>
                <Link className="btn btn-s" href="/services">
                  See our services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
