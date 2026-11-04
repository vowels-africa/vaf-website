# Vowels Africa website

Marketing site for [Vowels Africa](https://vowels.africa): managed IT, automation, integration and AI agents for growing businesses. Built with Next.js and deployed on Vercel.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Copy the team's `.env` file into the project root first so the booking link works.

| Variable | What it does |
|---|---|
| `NEXT_PUBLIC_LEAD_FORM_URL` | The standalone booking form, used if the embedded form can't load |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container (`GTM-5FHWNB7K` in production on Vercel). Analytics stay off when empty |
| `NEXT_PUBLIC_APP_URL` | Public site URL for social previews and the sitemap. Defaults to vowels.africa |

## Where things live

- **Pages** are in `app/(site)/`, one folder per URL.
- **Shared pieces** (header, footer, call-to-action block, client logos, testimonials) are in `components/site/`.
- **Styles**: `styles/site.css` is the design file as delivered. Put changes in `styles/additions.css` so a new design file can replace `site.css` cleanly.
- **Contact details** in the footer are set in `CONTACT` in `lib/site.ts`. Empty values show a yellow placeholder.
- **Booking form**: the Book page embeds the Tally form. How the lead conversion works, and the Tally settings that make the form match the site, are in [docs/tally-form-styling.md](docs/tally-form-styling.md).
- **Search and ad landing pages** show the homepage with a slim header. Their URLs are listed in `LANDING_SLUGS` in `lib/site.ts`.

## Adding or editing an Insights article

Articles are Markdown files in `content/insights/`. Copy an existing file, rename it (the file name becomes the URL) and edit the front matter:

```yaml
title: "Article title"
category: "Automation"
date: "2026-11-04"   # leave "" to show a [Date] placeholder
readTime: "5 min"
excerpt: "One line shown on the card"
description: "Search-result description"
icon: "automation"   # automation, integration, ai, private-ai, sign-off, leads, software, cto, managed-it
order: 10            # tie-breaker for undated drafts (dated articles show newest first)
cta: "Closing line shown above the Book a call button."
```

The yellow draft banner on the Insights page disappears once every article has a date.
