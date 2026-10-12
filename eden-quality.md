---
type: project
status: active
updated: 2026-10-12
---
# Eden — delivery checks

## Measured results

Lighthouse ran against the finished static page on a local HTTP server in Chrome, with default simulated mobile throttling and the desktop preset. Scores are lab measurements, not a promise about a future WordPress rebuild or hosting environment.

| Audit | Mobile | Desktop |
| --- | --- | --- |
| Performance | **95** | **100** |
| Accessibility | **100** | **100** |
| Best practices | **100** | **100** |
| Largest Contentful Paint | 2.3 s | 0.6 s |
| Cumulative Layout Shift | 0 | 0.002 |

SEO scores 66 because the pitch intentionally blocks indexing; Lighthouse’s only failed scored SEO audit is `is-crawlable`. The title, description, canonical, descriptive links, alt text and structured data are present. Remove `noindex, nofollow` only for the approved production site. Local development serving also lacks production compression/cache headers; re-audit after deployment.

Saved reports: [mobile](qa/lighthouse-mobile.report.html), [desktop](qa/lighthouse-desktop.report.html).

## Responsive and interaction checks

At **375, 768, 1280 and 1440px**: no horizontal overflow, all images load, exactly one H1, no missing image descriptions, no page-script errors, no axe violations, and all visible first-party interactive targets measure at least 44 × 44px. The expanded treatment directory also fits each width. Embedded Google Maps controls belong to Google and are not restyled by this demo.

Mobile menu opens, navigates, closes on selection and closes on Escape; the sticky header changes on scroll. The treatment directory supports keyboard activation. Navigation and the directory remain usable without JavaScript. Reduced-motion preferences are respected. Booking links resolve to the existing booking page; no appointments or forms were submitted during testing.

Color contrast: forest green on ivory **7.39:1**; white on forest green **8.10:1**; muted text on ivory **5.26:1**; muted text on cream **4.71:1**. Pale sage is only used decoratively.

## Art-direction reviews

**First review → revision:** the original storefront image was too soft and its sign fought the large hero headline. Replaced the hero with Limor’s higher-resolution portrait, used the storefront at a more appropriate scale in the philosophy section, and retained the photo’s original colors. Replaced decorative empty image descriptions with descriptive alt text and restored the exact real Google Map embed.

**Second review → revision:** the mobile headline broke into four lines and delayed the portrait. Reduced and made the mobile display size fluid for a deliberate three-line composition. Made the skin card heading more explicit, added a short PRP/weight-loss/peptides directory cue, and enlarged undersized text-link tap targets. No unnecessary service-card grid or long sales section was added.

**Final review:** opened full-page desktop and mobile captures and the tablet view. Checked headline breaks, portrait crops, section spacing, card alignment, footer, and the actual rendered map; equalized tablet treatment-heading heights after spotting uneven rows. Full-page captures temporarily use a tall viewport at the original responsive width so Google Maps does not suspend off-screen painting; the page’s CSS is unchanged. Separate ordinary-height browser checks verify each responsive viewport.

## Final quality check

- Ivory, cream and white dominate; Eden’s real green palette and logo remain identifiable.
- Editorial type, generous spacing and restrained actions follow the premium inspiration; the composition and section sequence are Eden’s own.
- Factual claims, credentials, treatment names and the short review excerpt have source references in [the research register](eden-research.md). Conflicting hours and legacy services are explicitly flagged, not silently guessed.
- No generated images, placeholder copy, invented ratings, statistics, awards or medical guarantees.
- Mobile is intentionally composed, including the headline, image order, navigation and tap targets.
- Boca Raton title/description, one H1, service headings, alt text, real NAP, geographic coordinates, hours and Person/MedicalBusiness JSON-LD are in place.

Automated accessibility checks are not a full assistive-technology audit. Production medical copy, image rights, hours and service availability still need owner approval before launch. The homepage concept itself is complete and has not been publicly deployed.
