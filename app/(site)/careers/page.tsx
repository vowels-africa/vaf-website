import type { Metadata } from "next";
import Link from "next/link";
import { ROLES } from "@/lib/careers";
import { CAREERS_EMAIL } from "@/lib/site";

/** Opens the applicant’s email app with the role in the subject and a short template. */
function applyHref(role?: string) {
  const subject = role ? `Job application: ${role}` : "Job application";
  const body = [
    `Role: ${role ?? ""}`,
    "Name:",
    "Phone:",
    "LinkedIn or portfolio link:",
    "Years of experience:",
    "Why this role:",
    "",
    "(Please attach your CV as a PDF or Word file.)",
  ].join("\n");
  return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const TITLE = "Careers | Vowels Africa";
const DESCRIPTION =
  "Join Vowels Africa. We’re hiring an Automation Engineer, an AI Engineer and an IT Support Specialist to build the systems growing businesses run on.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/careers" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/careers" },
};

const VALUES = [
  {
    title: "Clarity first",
    text: "We understand how a business really runs before we change anything.",
  },
  {
    title: "Ship, don’t advise",
    text: "We build working systems, not slide decks, and we run them until the client is ready.",
  },
  {
    title: "Own it end to end",
    text: "You see your work through, from the first conversation to the thing running in production.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="phero dark">
        <div className="hero" style={{ position: "absolute", inset: "0", padding: "0" }}>
          <div className="grid"></div>
        </div>
        <div className="wrap phw has-a" style={{ position: "relative" }}>
          <div>
            <span className="kicker">Careers</span>
            <h1 className="display">Build the systems growing businesses run&nbsp;on.</h1>
            <p className="lead">
              We fix how businesses run: IT, automation and AI that actually ships. We’re hiring for
              three roles.
            </p>
            <div className="ctas">
              <a className="btn btn-p" href="#apply">
                How to apply{" "}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
          <aside className="paside services-idx">
            <ol className="idx">
              {ROLES.map((role, i) => (
                <li key={role.id}>
                  <a href={`#${role.id}`}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {role.title}
                    <i>→</i>
                  </a>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker">Open roles</span>
            <h2 className="h2" style={{ marginTop: "20px" }}>
              Three ways to join us
            </h2>
          </div>
          <div className="cnotes">
            {ROLES.map((role) => (
              <article className="cn rv" id={role.id} key={role.id}>
                <div className="cn-h">
                  <span className="clabel">
                    {role.type} · {role.team}
                  </span>
                  <h3 className="ctitle">{role.title}</h3>
                  <p className="role-meta mono">Hybrid · Cape Town, South Africa</p>
                </div>
                <div className="cn-b">
                  <p className="cn-note">{role.summary}</p>
                  <details className="cd">
                    <summary>Full role: what you’ll do, what you’ll bring</summary>
                    <div className="cd-in">
                      <div className="cd-g">
                        <div>
                          <h4>What you’ll do</h4>
                          <ul>
                            {role.doing.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4>What you’ll bring</h4>
                          <ul>
                            {role.bring.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4>Nice to have</h4>
                          <ul>
                            {role.bonus.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </details>
                  <p className="cd-cta">
                    <a className="tlink" href={applyHref(role.title)}>
                      Apply for this role →
                    </a>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec white" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker">How we work</span>
            <h2 className="h2" style={{ marginTop: "20px" }}>
              What it’s like here
            </h2>
          </div>
          <div className="values">
            {VALUES.map((v) => (
              <div className="rv" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "28px" }}>
            <Link className="tlink" href="/how-we-work">
              See how we work with clients →
            </Link>
          </p>
        </div>
      </section>

      <section className="sec" id="apply" style={{ scrollMarginTop: "72px" }}>
        <div className="wrap book">
          <div>
            <span className="kicker">Apply</span>
            <h2 className="h2" style={{ margin: "20px 0 22px" }}>
              Send us your CV.
            </h2>
            <p className="lead">
              Email your CV with the role in the subject line and a few lines on why it fits you. We
              read every application.
            </p>
            <ul className="plist" style={{ marginTop: "32px" }}>
              <li>
                <span>01</span>Email your CV and a short note
              </li>
              <li>
                <span>02</span>If there’s a fit, we’ll set up a call
              </li>
              <li>
                <span>03</span>You hear back either way
              </li>
            </ul>
          </div>
          <div className="sched form-card">
            <div className="sched-h">
              <div>
                <b>Apply by email</b>
                <br />
                CV in PDF or Word
              </div>
            </div>
            <div className="form-card-b apply-card">
              <p className="apply-email">
                <a href={applyHref()}>{CAREERS_EMAIL}</a>
              </p>
              <p>
                Choose a role to start an email with the subject and a short template filled in.
              </p>
              <div className="apply-roles">
                {ROLES.map((role) => (
                  <a className="btn btn-p" href={applyHref(role.title)} key={role.id}>
                    {role.title}{" "}
                    <span className="arr" aria-hidden="true">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <p className="form-card-fine">
              We use your details only to assess your application. See our{" "}
              <Link href="/privacy">privacy policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
