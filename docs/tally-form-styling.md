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

**Custom CSS:** paste the contents of [`tally-form.css`](tally-form.css). It sets the font, fields,
button and consent tick to the site's style, and hides the large logo only inside the website embed.

## Content worth updating

The **Services** dropdown still lists the old services (Cloud & Data Platforms, AI & Advanced
Analytics, Business Applications, Modernisation Services, Resourcing & Support). The new site offers:

- Managed IT
- Automation
- System integration
- Custom software
- Fractional CTO & CPO
- Private AI agents

If anything downstream filters on the old values (email rules, a CRM, a sheet), update it at the
same time.
