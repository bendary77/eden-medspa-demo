---
type: project
status: active
updated: 2026-10-12
---
# Eden Med Spa — homepage concept

## The design, in plain language

- Ivory **#F8F4EC**, cream **#EFE7DA** and white **#FFFFFF** now carry the page. They make the brand feel brighter, quieter and more spacious.
- Eden’s original logo stays. Forest green **#3B5640**, deep green **#174C26** and sage **#6CA082** come from the existing site’s CSS. Forest green anchors buttons and links; sage is decorative, not small text.
- Warm ink **#2A2420** and muted brown **#6E645B** replace harsh black. The important text and buttons retain accessible contrast.
- **Cormorant Garamond** gives headlines an editorial feel; **Jost** keeps body copy clean and clinical. Both are locally hosted Google Fonts, with licenses included.
- Limor’s real portrait leads the page, with the actual storefront and existing treatment photography below. No generated photographs, invented patients or fabricated results are used.
- The story is simpler: philosophy, treatments, practitioner, reasons to choose Eden, one real patient quote, consultation, location. An expandable treatment directory preserves depth without an overwhelming homepage.
- Boca Raton leads the title, description and local-business information; East Boca remains the neighborhood. The page explains who injects and what Eden offers in plain language, with verified business and practitioner schema.
- This is straightforward to recreate in Elementor: standard containers, images, headings, text, buttons, accordion and map. Global colors and fonts are named at the top of `styles.css`; there are no framework dependencies or elaborate effects.

## Pages that follow this system

Treatment landing pages: Botox, Dysport & Jeuveau / lip flip; lip & dermal fillers; Sculptra & Radiesse; PRP for skin and hair; stem cell consultations; HydraDerm facials; microneedling with HA, peptides or PRP; chemical peels; Venus Viva skin resurfacing; CO2Lift; medical weight loss; lipotropic injections; B12, NAD+ and glutathione; sclerotherapy; cellulite reduction, mesotherapy & Kybella; medical-grade skin care & Latisse.

Supporting pages: Treatments overview, About Limor, Results/Gallery, Patient Stories, Contact and Book a Consultation. Retain existing service URLs where appropriate. New dedicated pages for booking-menu-only treatments require owner confirmation before production.

## Preview and handoff

Open `site/index.html` to preview, or serve the `site/` directory with any static server. Drop **the `site` folder**, not this parent project folder, into Netlify Drop; use its contents as the output directory for Cloudflare Pages. `eden-med-spa-demo.zip` contains only the static site, with `index.html` at the archive root. No build command or environment variables are needed.

Images and fonts are local. Only the embedded Google Map and outbound links need internet access. Booking, treatment, gallery and policy links intentionally open Eden’s existing website; this demo does not collect patient information or submit appointments.

The demo is intentionally **noindex, nofollow**, with its canonical URL pointing to the real homepage, so an uploaded pitch does not compete with Eden’s live site. For the approved production rebuild, remove the noindex directive, confirm canonical/OG URLs, replace the design-concept footer note and re-test the deployed site.

**Before the production launch:** confirm opening hours with Limor. The linked Square booking location currently lists Tuesday–Friday, 10 am–6 pm, with Saturday–Monday closed; an older storefront photograph shows Saturday hours. The demo and schema use the current booking data. Confirm current availability and clinical wording for all treatments, particularly stem cells, prescription weight-loss care, peptides and booking-menu additions. See [research and sources](eden-research.md).
