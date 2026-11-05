# Booking form (Tally) — setup notes

The Book page (`/book`) embeds the Tally form **Vowels Africa - Lead Generation** (form ID `wgExGM`).
Tally still handles the questions, captcha, email notifications and submissions. The website only
shows the form inside a dark card.

## How the lead conversion works

1. The visitor submits the form on `/book`.
2. Tally's **Redirect on completion** sends the whole page to `https://vowels.africa/thank-you`.
3. Google Tag Manager (`GTM-5FHWNB7K`) fires the GA4 event `generate_lead_25/02/26` on any page
   whose URL contains `thank-you`.

Keep the redirect on in Tally and keep the `/thank-you` page, or the conversion stops.
The embed must use the `tally.so/embed/...` address (set by `TALLY_FORM_ID` in `lib/site.ts`):
Tally's embed script only moves the main page for forms loaded from tally.so.

## Make the form match the site (in Tally)

These are Tally settings, not website code. Open the form in Tally, then **Design**.

**Theme colours**

| Setting | Value |
|---|---|
| Background | `#020D24` |
| Text | `#FFFFFF` |
| Accent | `#F59A23` |
| Button background | `#F59A23` |
| Button text | `#020D24` |
| Font | Geist (Google) |

**Advanced:** input width *Full width*, input height `48`, input border radius `10`,
button border radius `24`, button height `48`.

**Custom CSS:** paste the contents of [`tally-form.css`](tally-form.css) into Tally again after it changes. It sets the font, fields, button and consent tick, and keeps the orange on the tick rather than the whole consent label. The logo and the top space are hidden only in the website embed (`hideTitle`). The direct form at `tally.so/r/…` keeps its logo, top spacing, and “Request a Call” title. Do not hide `.tally-form-logo` with `body[data-iframe-size]`: that attribute is on the direct form too.

## Services dropdown

Updated and published on 3 Nov 2026. It replaced the old services (Cloud & Data Platforms,
AI & Advanced Analytics, Business Applications, Modernisation Services, Resourcing & Support)
with the six on the new site:

- Managed IT
- Automation
- System integration
- Custom software
- Fractional CTO & CPO
- Private AI agents

Submissions from before that date still carry the old names. If anything downstream filters on
the service value (email rules, a CRM, a sheet), make sure it handles the new names.

## Careers applications (no form)

Job applications are by email, not Tally. Each "Apply" link on `/careers` opens an email to
`CAREERS_EMAIL` (in `lib/site.ts`) with the subject "Job application: <role>" and a short
template. This keeps CVs out of Tally storage.

The Tally form **Job application** (`WJ2bPP`) that briefly backed the careers page is no longer
used and can be deleted in Tally.
