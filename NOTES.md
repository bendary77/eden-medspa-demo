---
type: project
status: active
updated: 2026-10-13
---
# Eden Med Spa — homepage concept

## Round 2 changes

- A full-width, softly moving spa video now opens the page, with Boca Raton in the headline and clear Book, Call and Text actions.
- A circle-free Eden wordmark feels lighter and stays readable on phones; the original logo is saved for comparison.
- The header changes from transparent to ivory as you scroll, and mobile booking controls appear after the hero.
- Seven warm image tiles let visitors browse by concern, followed by one complete, filterable treatment list.
- Real patient stories sit directly below the hero in a gentle, two-row marquee, with pause and reduced-motion options.
- Limor and the two named team members follow treatments, with simple photo files ready for her new portraits.
- Service FAQs, confirmed Cherry financing and an Instagram preview make the next step easier; the map always has a useful address fallback.
- Tighter spacing, warm taupe accents and a deep-green footer build on the original palette and locally hosted fonts.

## The design, in plain language

- Ivory **#F8F4EC**, cream **#EFE7DA** and white **#FFFFFF** now carry the page. They make the brand feel brighter, quieter and more spacious.
- Eden’s original circle logo stays in the repo for comparison; outlined SVG wordmarks now lead the page. Forest green **#3B5640**, deep green **#174C26** and sage **#6CA082** come from the existing site’s CSS. Forest green anchors buttons and links; sage is decorative, not small text.
- Warm ink **#2A2420** and muted brown **#6E645B** replace harsh black. The important text and buttons retain accessible contrast.
- **Cormorant Garamond** gives headlines an editorial feel; **Jost** keeps body copy clean and clinical. Both are locally hosted Google Fonts, with licenses included.
- Limor’s real portrait appears once in Meet Limor, alongside a separate row for named staff. Licensed stock imagery supplies the video and concern tiles until Eden’s own photos arrive. The social preview uses current site images. No generated photographs, invented patients or fabricated results are used.
- The sequence is hero, patient stories, concern browsing and treatment list, Limor and team, philosophy and reasons to choose Eden, FAQ, financing, consultation, location and Instagram. Category and concern filters keep the complete service list useful without repeating the services in another section.
- Boca Raton leads the title, description and local-business information; East Boca remains the neighborhood. The page explains who injects and what Eden offers in plain language, with verified business and practitioner schema.
- This is straightforward to recreate in Elementor: standard containers, images, headings, text, buttons, accordion and map. Global colors and fonts are named at the top of `styles.css`; there are no framework dependencies or elaborate effects.

## Pages that follow this system

Treatment landing pages: Botox, Dysport & Jeuveau / lip flip; lip & dermal fillers; Sculptra & Radiesse; PRP for skin and hair; stem cell consultations; HydraDerm facials; microneedling with HA, peptides or PRP; chemical peels; Venus Viva skin resurfacing; CO2Lift; medical weight loss; lipotropic injections; B12, NAD+ and glutathione; sclerotherapy; cellulite reduction, mesotherapy & Kybella; medical-grade skin care & Latisse.

Supporting pages: Treatments overview, About Limor, Results/Gallery, Patient Stories, Contact and Book a Consultation. Retain existing service URLs where appropriate. New dedicated pages for booking-menu-only treatments require owner confirmation before production.

## Preview and handoff

Open `site/index.html` to preview, or serve the `site/` directory with any static server. Drop **the `site` folder**, not this parent project folder, into Netlify Drop; use its contents as the output directory for Cloudflare Pages. The existing `eden-med-spa-demo.zip` is the Round 1 archive and was not refreshed for Round 2; use the current `site/` folder. No build command or environment variables are needed.

Images and fonts are local. Only the embedded Google Map and outbound links need internet access. Booking, treatment, gallery and policy links intentionally open Eden’s existing website; this demo does not collect patient information or submit appointments.

The demo is intentionally **noindex, nofollow**, with its canonical URL pointing to the real homepage, so an uploaded pitch does not compete with Eden’s live site. For the approved production rebuild, remove the noindex directive, confirm canonical/OG URLs, replace the design-concept footer note and re-test the deployed site.

**Before the production launch:** confirm opening hours with Limor. The linked Square booking location currently lists Tuesday–Friday, 10 am–6 pm, with Saturday–Monday closed; an older storefront photograph shows Saturday hours. The demo and schema use the current booking data. Confirm current availability and clinical wording for all treatments, particularly stem cells, prescription weight-loss care, peptides and booking-menu additions. See [research and sources](eden-research.md).


## Round 2 asset sources and swaps

- **Hero placeholder:** `site/assets/hero-placeholder.mp4` and its first-frame `hero-poster.webp`. Source: [Mixkit — Massage and relaxation room](https://mixkit.co/free-stock-video/massage-and-relaxation-room-4184/), under the [Mixkit Stock Video Free License](https://mixkit.co/license/#videoFree), which permits commercial use. This is stock atmosphere, not Eden’s premises; replace with Eden’s own footage when filmed. Silent, 1280 × 720, 8 seconds, under 4 MB. The final cut opens on the quieter treatment platform and is slowed to half speed. Poster-first; reduced motion, data saving and mobile connections without confirmed adequate bandwidth keep the still image.

### The circle-free logo
We opened up the logo by removing the circle, giving “EDEN” room to breathe and keeping a softer, flowing “med” beside it.
The ivory and deep-green versions stay clear at small sizes; the original circle logo is retained for a side-by-side comparison, with the descriptor reserved for the footer.

- **Philosophy placeholder:** `philosophy-interior.webp` is a still from the same licensed Mixkit clip, used only as atmosphere. Replace with an Eden treatment-room photo. The teal storefront is no longer displayed; its original asset stays in the repo.
- **Hours:** Tuesday–Friday, 10 am–6 pm remain from the booking system. Confirm with Limor before launch, including Saturday availability.

### Concern image placeholders
All seven are licensed under the [Pexels license](https://www.pexels.com/license/), which permits website use and cropping. They are editorial illustrations, never Eden patients or results. Replace each named file with the corresponding approved Eden photo. The concern counts reflect matching entries in the treatment list; a multi-product row counts once.
- `concern-lines.webp`: Fine lines & wrinkles — [Shiny Diamond, Pexels photo 3762408](https://www.pexels.com/photo/close-up-photo-of-woman-with-pink-lipstick-smiling-with-her-eyes-closed-3762408/).
- `concern-volume.webp`: Volume & lips — [Shiny Diamond, Pexels photo 3762445](https://www.pexels.com/photo/close-up-photo-of-woman-s-lips-3762445/).
- `concern-texture.webp`: Skin texture & tone — [Olga Volkovitskaia, Pexels photo 17128383](https://www.pexels.com/photo/a-woman-with-a-white-face-and-brown-skin-17128383/).
- `concern-glow.webp`: Facials & glow — [Sora Shimazaki, Pexels photo 5938601](https://www.pexels.com/photo/ethnic-woman-applying-cream-on-face-in-morning-5938601/).
- `concern-wellbeing.webp`: Weight & wellness — [Sora Shimazaki, Pexels photo 5938576](https://www.pexels.com/photo/african-american-woman-moisturizing-hand-with-lotion-5938576/).
- `concern-hair.webp`: Hair & scalp — [Ron Lach, Pexels photo 10317438](https://www.pexels.com/photo/a-shot-of-female-looking-at-mirror-10317438/).
- `concern-body.webp`: Body contouring — [Sora Shimazaki, Pexels photo 5938233](https://www.pexels.com/photo/crop-woman-applying-cream-on-smooth-skin-on-couch-5938233/).

### Staff and portrait swaps
Limor’s current portrait appears only in Meet Limor (`limor-serri.webp`). The [current About page](https://edenmedicine.com/about-us/) names **Juliet — Patient Liaison** and **Caitlyn — Administrative Assistant**. Their existing portraits are used in `team-juliet.webp` ([source](https://edenmedicine.com/wp-content/uploads/2024/08/U-1-554x554.jpg)) and `team-caitlyn.webp` ([source](https://edenmedicine.com/wp-content/uploads/2024/10/person-3.jpg)), ready for the new photos. The unnamed third block on the source site contains placeholder biography text and was excluded.

### FAQ, financing and social sources
- FAQ sources: [Eden homepage](https://edenmedicine.com/) for consultation and Botox duration, [HydraDerm](https://edenmedicine.com/hydraderm-facials/), [weight-loss program](https://edenmedicine.com/weight-loss/), [dermal fillers](https://edenmedicine.com/dermal-fillers/) and [FDA filler recovery information](https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-soft-tissue-fillers). Answers describe options without doses or guaranteed outcomes; matching FAQPage markup is included.
- Cherry is named on Eden’s current [payments page](https://edenmedicine.com/payments/), which is the destination for the strip and FAQ. No borrowed approval statistics, rates or financing promises are displayed.
- **Instagram preview placeholders:** `instagram-01.webp` through `instagram-05.webp` use current Eden website images (Juliet, HydraDerm, skin-care imagery, Caitlyn, fillers). Each tile links to the real Instagram profile; this is a curated preview, not a live Instagram feed. Swap each file independently with approved social photographs. Limor’s portrait remains exclusive to Meet Limor.

### Review verification and component port
The supplied 21st.dev `marquee-01` was ported to native HTML/CSS/JS: two opposing rows, cards, soft edge fades and hover pause. A visible pause control, keyboard pause, manually scrollable reduced-motion mode and hidden inert animation copies make every story accessible. No React, Tailwind, profile-photo placeholders or framework setup are needed.

Eight real patient stories were selected: Jaiden D., Whitney B., Anna S., Chetna L., Dylan R. and Sloane S. ([homepage](https://edenmedicine.com/), May 30, 2024); Eric G. and Betty R. ([testimonials](https://edenmedicine.com/testimonials/), September 21, 2024). Each card uses a short exact excerpt plus an explicitly labeled editorial summary and a link to the full source, rather than reproducing entire reviews. Dates are as displayed by Eden, not independently verified Google publication dates.

Repeated copies of the same name/text/date from widgets and the two pages were collapsed. Brittany W. was excluded because identical text carries conflicting dates. Any normalized text associated with different names is excluded. No aggregate count or rating is asserted; the Google link opens the business search.

### SEO / GEO carried forward
One H1 includes Boca Raton. The canonical and social URLs still point to Eden’s live homepage, while the pitch remains `noindex, nofollow`. MedicalBusiness and Person schema are retained, and six FAQPage answers match the visible accordion. Every photo has descriptive alt text, including honest stock-photo descriptions; no review rating schema was added.

- Instagram slot 03 uses [Eden’s existing skin-care image](https://edenmedicine.com/wp-content/uploads/2024/05/Screen-Shot-2017-12-04-at-11.07.46-AM.png). The old storefront image is retained only as an unused original asset.


## Round 2 final review and validation

Two visual review passes covered the hero, header, treatments and reviews: `screenshots/round2-{375,768,1280,1440}-initial.png`, then one correction pass and the matching `-final.png` files. Only Round 2 captures were opened. Compared with [Allure’s live homepage](https://www.allurefl.com/), Eden now has the same clear opening hierarchy, immersive motion, concern-led browsing and persistent booking access, while keeping its forest-green identity. The remaining visual difference is the photography: Allure has branded footage of its own premises; Eden’s stock interior is an explicitly temporary stand-in.

The correction pass selected a quieter opening frame and slowed the video, darkened small-text colors, simplified the tablet header, brought the treatment intro closer to its heading, made paused review rows scrollable, and kept the location fallback visible when Google suspends offscreen map rendering. The map was scrolled into view at every width: its iframe loaded Google’s rendered text and 41–48 image elements, then the fallback disappeared. Full-page captures retain the styled address card when the live map is outside the viewport.

**Mobile Lighthouse: performance 94 / accessibility 100**, measured locally in Chrome with Lighthouse 13.5.0. The final video is **479,211 bytes (0.48 MB)** and the first-frame WebP poster **36,364 bytes**. A local static-server audit is not a production guarantee; run it again on the chosen host. Detailed scores, metrics and interaction results are in `round2-validation.json`.

At all four widths: no page overflow, broken images or JavaScript errors; all visible buttons were at least 48 px high. Menu open/close/Escape, concern and category filters, FAQs, review pause and manual scrolling passed. Animation clones are inert and hidden from assistive technology. Book/Call/Text appears after the hero and disappears at the top, with page padding reserved for it. Mobile 4G with adequate bandwidth plays the video; reduced motion, slow connections and data-saving modes made zero video requests. With JavaScript disabled, all 16 service rows and eight stories remain available, and the map fallback stays usable.

**Still needed from Eden before production:** original clinic footage, approved concern/social photos and updated team portraits; confirmation of hours, staff currency and clinical wording. The demo remains noindex. All booking buttons continue to Eden’s existing booking page.
