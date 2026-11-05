## Learned User Preferences
- Leave the yellow “Legal review” notes on the insight articles, and leave the FAQ retainer and tier wording, unless asked to change them.
- Retire pages whose copy contradicts the current site by removing them so they 404. Restore a retired page from git if it is needed again.

## Learned Workspace Facts
- Vowels Africa marketing site at vowels.africa. GitHub repo `vowels-africa/vaf-website`. Production deploys on Netlify. The 2026 redesign is branch `redesign-2026`.
- Footer LinkedIn is `https://www.linkedin.com/company/vowels-africa`.
- The named client is Starfish Debt Consultants (logo alt, testimonial, and case study). Do not write Starfish Solutions.
- `/v1` and the old search and ad landing slugs 404 and are out of the sitemap. `/enterprise-workflow-automation-services` still redirects to `/enterprise`.
- The Book page embeds a Tally form. A submission redirects the whole browser to `https://vowels.africa/thank-you`, including from a deploy preview. GTM `GTM-5FHWNB7K` fires GA4 event `manual_event_SUBMIT_LEAD_FORM` (property `G-00RJ3LRQ2X`) when the page URL contains `thank-you`. The older name `generate_lead_25/02/26` is stale. The Google Ads tag `AW-17630322573` is a base tag only; that GA4 event is already the Ads conversion, so do not add a new one. Ads counts stay at 0 without an ad click.
- Tally form styling is custom CSS pasted in Tally (Design → Custom CSS). The source of truth is `docs/tally-form.css`. The site cannot style the cross-origin iframe. `hideTitle=1` hides the form title in the embed only. The direct form keeps its logo, top spacing, and “Request a Call” title. `data-iframe-size` is on that page too, so logo and margin rules must be scoped to the embed.
- Client logos keep their own aspect ratio. On desktop the logo grid is two rows of four (`styles/additions.css`). The same row is on the home, work, and about pages.
- The site publishes `privacy@vowels.africa` for POPIA requests and `careers@vowels.africa` for roles. Tally lead mail goes to `discover@vowels.africa`.
