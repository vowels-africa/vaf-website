import type { Metadata } from "next";
import Link from "next/link";
import { CAREERS_EMAIL, COMPANY, PRIVACY_EMAIL } from "@/lib/site";

const TITLE = "Privacy Policy | Vowels Africa";
const DESCRIPTION =
  "How Vowels Africa (Pty) Ltd collects, uses and protects personal information under POPIA.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/privacy" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/privacy" },
};

const VERSION = "1.0";
const EFFECTIVE = "5 November 2026";

export default function PrivacyPage() {
  const mail = <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>;

  return (
    <>
      <section className="phero dark">
        <div className="hero" style={{ position: "absolute", inset: "0", padding: "0" }}>
          <div className="grid"></div>
        </div>
        <div className="wrap phw" style={{ position: "relative" }}>
          <div>
            <span className="kicker">Legal</span>
            <h1 className="display">Privacy policy</h1>
            <p className="lead">
              How {COMPANY.legalName} collects, uses and protects personal information, in line with
              the Protection of Personal Information Act 4 of 2013 (POPIA).
            </p>
            <p className="article-meta mono">
              Version {VERSION} · Effective {EFFECTIVE}
            </p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap article legal">
          <h2>1. Who we are</h2>
          <p>
            Vowels Africa is a trading name of {COMPANY.legalName}, a private company registered in
            South Africa under registration number {COMPANY.registrationNumber}. Our registered
            office is at {COMPANY.registeredOffice}.
          </p>
          <p>
            This policy covers vowels.africa, the booking and enquiry forms on it, and how we handle
            information when you contact us, apply for a job or work with us.
          </p>

          <h2>2. The two roles we play</h2>
          <p>
            <strong>Responsible party.</strong> For website visitors, people who enquire or book a
            call, job applicants, and the contacts at our clients and suppliers, we decide why and
            how personal information is processed. This policy applies to that information.
          </p>
          <p>
            <strong>Operator.</strong> When we build or run systems for a client, such as
            automations, integrations or AI agents, we may process personal information that belongs
            to that client. In that case the client is the responsible party, and we process the
            information only on its documented instructions under our agreement with it. If your
            information is held in a client’s system, please direct requests to that client first.
          </p>

          <h2>3. What we collect, and why</h2>
          <h3>When you book a call or send an enquiry</h3>
          <p>
            Our booking form asks for your name, email address, company, company size, job title,
            the services you’re interested in and a short message, and optionally your phone number.
            We record your consent to being contacted. We use this to respond to you, prepare for
            the call and, if we work together, to set up and manage the engagement.
          </p>
          <h3>When you apply for a job</h3>
          <p>
            Applications are sent by email to {CAREERS_EMAIL}. We use your CV and anything else you
            send only to assess your application and contact you about it.
          </p>
          <h3>When you browse the website</h3>
          <p>
            We use Google Tag Manager, Google Analytics and Google Ads to understand how the site is
            used and how well our advertising works. These tools use cookies and similar
            technologies to collect technical information such as your IP address, device and
            browser type, the pages you visit and how you arrived at the site.
          </p>
          <h3>When you correspond with us</h3>
          <p>
            If you email, message or speak to us, we keep a record of that correspondence so we can
            respond and keep track of our work together.
          </p>
          <h3>Our lawful basis</h3>
          <p>
            We process personal information with your consent (section 11(1)(a) of POPIA), where it
            is needed to take steps towards or perform an agreement with you (section 11(1)(b)), or
            where it is in our legitimate interests, for example understanding how the website is
            used (section 11(1)(f)). You may object to processing based on legitimate interests at
            any time.
          </p>

          <h2>4. Who we share it with</h2>
          <p>
            We don’t sell personal information or share it for anyone else’s marketing. We use
            service providers (operators) who process information on our behalf under written
            agreements:
          </p>
          <ul>
            <li>Tally, for the booking form (European Union, Belgium)</li>
            <li>
              Google, for website analytics and advertising measurement (United States and other
              locations)
            </li>
            <li>Netlify, for website hosting (United States)</li>
            <li>Our email and document providers, for correspondence and records</li>
          </ul>
          <p>
            We may also disclose information to professional advisers bound by confidentiality, or
            where the law requires it.
          </p>

          <h2>5. Transfers outside South Africa</h2>
          <p>
            Some of these providers store or process information outside South Africa. We transfer
            personal information across borders only in line with section 72 of POPIA, to providers
            bound by law, binding corporate rules or written agreements that give a level of
            protection substantially similar to POPIA.
          </p>

          <h2>6. How long we keep it</h2>
          <ul>
            <li>
              <strong>Enquiries and booking requests:</strong> 24 months from our last contact,
              unless you become a client.
            </li>
            <li>
              <strong>Client and supplier records:</strong> for the duration of the engagement and 5
              years after it ends.
            </li>
            <li>
              <strong>Job applications:</strong> 6 months after the role is filled, unless you agree
              that we may keep your CV for future roles.
            </li>
            <li>
              <strong>Marketing contact details:</strong> until you withdraw consent or opt out,
              after which we keep only what we need to respect that choice.
            </li>
            <li>
              <strong>Accounting and tax records:</strong> 5 years, as required by the Companies Act
              and the Tax Administration Act.
            </li>
          </ul>

          <h2>7. How we protect it</h2>
          <p>
            The website and forms use encrypted connections. Access to personal information is
            limited to the people who need it for their work, and our service providers are bound by
            written security and confidentiality obligations. If we have reason to believe your
            personal information has been accessed without authorisation, we will notify you and the
            Information Regulator as required by section 22 of POPIA.
          </p>

          <h2>8. Direct marketing</h2>
          <p>
            We send marketing only to people who have agreed to receive it, or to existing clients
            about similar services, as section 69 of POPIA allows. Every marketing message tells you
            how to opt out, and you can also email {mail}.
          </p>

          <h2>9. Cookies</h2>
          <p>
            Analytics and advertising cookies are set by Google through Google Tag Manager. You can
            block or delete cookies in your browser settings, and you can opt out of Google
            Analytics with Google’s browser add-on. The site still works if you do.
          </p>

          <h2>10. Your rights</h2>
          <p>Under POPIA you have the right to:</p>
          <ul>
            <li>ask whether we hold personal information about you, and request a copy of it</li>
            <li>
              ask us to correct or delete information that is inaccurate, out of date or excessive
            </li>
            <li>object to processing based on our legitimate interests</li>
            <li>withdraw your consent at any time</li>
            <li>opt out of direct marketing</li>
            <li>complain to the Information Regulator</li>
          </ul>
          <p>
            To exercise any of these rights, email {mail}. We respond within 30 days. Confirming
            whether we hold your information is free of charge.
          </p>

          <h2>11. Information Officer and contact details</h2>
          <p>
            Our Information Officer is {COMPANY.informationOfficer}, registered with the Information
            Regulator under number {COMPANY.regulatorRegistration}.
          </p>
          <ul>
            <li>Privacy requests: {mail}</li>
            <li>Registered office: {COMPANY.registeredOffice}</li>
          </ul>
          <p>
            Our manual under the Promotion of Access to Information Act (PAIA) is available on
            request from the Information Officer.
          </p>
          <p>
            <strong>The Information Regulator (South Africa)</strong>
            <br />
            Woodmead North Office Park, 54 Maxwell Drive, Woodmead, Johannesburg
            <br />
            POPIA complaints:{" "}
            <a href="mailto:POPIAComplaints@inforegulator.org.za">
              POPIAComplaints@inforegulator.org.za
            </a>
            <br />
            Website: <a href="https://inforegulator.org.za">inforegulator.org.za</a>
          </p>

          <h2>12. Children</h2>
          <p>
            Our website and services are aimed at businesses. We don’t knowingly collect personal
            information from anyone under 18.
          </p>

          <h2>13. Changes to this policy</h2>
          <p>
            When we update this policy, we change the version number and effective date at the top
            of the page. The current version is always at vowels.africa/privacy.
          </p>

          <p className="legal-foot">
            {COMPANY.legalName} · Registration number {COMPANY.registrationNumber} ·{" "}
            <Link href="/">vowels.africa</Link>
          </p>
        </div>
      </section>
    </>
  );
}
