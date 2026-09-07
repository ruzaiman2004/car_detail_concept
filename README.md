# LUXÉ Signature — R. Atelier concept

An unsolicited, independent redesign concept. Not affiliated with or the official website of LUXÉ Signature Detailing. Search indexing is disabled. The contact links are real; the page does not collect bookings or personal information.

## Run

Use Node 22.13+ and pnpm. Run `pnpm install`, `pnpm dev`, and `pnpm build`. The static export is in `dist/client`. The small Windows build preload lets native bundler handles close normally after a successful build; build errors retain nonzero exits.

## Content provenance

Reviewed 7 September 2026:
- https://www.luxesignature.com.my/ — PPF, ceramic and graphene coatings, interior/exterior detailing, headlight restoration, scratch removal, wash, tar removal, odour elimination, engine cleaning, hazardous cleaning, valet service, and daily 10:00–20:00 opening hours.
- https://www.luxesignature.com.my/contact — +60 17-887 3474; luxe.signature.detailing@gmail.com; 61, Jln Laksamana 6, Taman Sentosa, 41200 Klang, Selangor.
- Existing brand uses a gold logo. The concept retains the LUXÉ name, spaced wordmark and restrained gold accent. Original website images were reviewed but not reused: they are watermarked brand mockups, not verified studio photography.

All campaign images are generated concept assets, not client work, real LUXÉ facilities or evidence of outcomes. Selected Machines is explicitly a concept campaign. The before/after uses the same image with a simulated dulling filter, labelled on the page. The customer journey is a proposed concept, not an operational promise. No awards, certifications, numerical performance claims, customer counts or testimonials are invented.

## Asset replacement

`public/images` holds responsive WebP assets (768 and 1536px). Preserve both sizes and names when replacing. Original generated images and prompts are in `art-direction`. Replace the campaign with owner-authorized client and studio photos before any official launch. Replace the simulated comparison with a registered same-angle genuine before/after pair. Obtain business confirmation for claims, contact details, hours and booking flow before using this as an official site.

## Implementation

Reusable components: Opening, Experiences, Editorial. Native IntersectionObserver and CSS view timelines drive restrained masks, film coverage, reflections and camera effects. No WebGL or unoptimized vehicle model. Reduced-motion preference disables spatial motion. Shadcn/Base UI dialogs and sliders provide keyboard behavior and focus management. PPF and comparison ranges have accessible names; image comparison also supports pointer capture for touch/mouse dragging. Mobile navigation is a modal with focus trapping.

No analytics, newsletter signup, tracking, automatic messages or backend required. WhatsApp links open the published business number with no auto-send.

## Validation

TypeScript and production prerender checks are run locally. Layout includes dedicated rules for 1920, 1440, 1024, 768, 430 and 390px ranges. Browser visual QA and Lighthouse are not claimed; the brief asks for conceptual responsive checks. Use a browser/device pass before an official production launch.
