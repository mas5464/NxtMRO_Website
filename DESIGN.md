---
name: NxtMRO
description: AI-driven MRO platform for airlines — marketing landing page
colors:
  chart-paper: "oklch(98% 0.004 80)"
  chart-paper-raised: "oklch(96.3% 0.006 80)"
  graphite-ink: "oklch(21% 0.008 80)"
  graphite-ink-muted: "oklch(42% 0.008 80)"
  graphite-ink-faint: "oklch(60% 0.007 80)"
  hairline: "oklch(87% 0.006 80)"
  hairline-strong: "oklch(76% 0.008 80)"
  instrument-amber: "oklch(66% 0.15 55)"
  instrument-amber-strong: "oklch(57% 0.16 50)"
  instrument-amber-text: "oklch(46% 0.135 48)"
  panel-ink: "oklch(17% 0.01 80)"
  panel-hairline: "oklch(30% 0.012 80)"
  panel-paper: "oklch(93% 0.006 80)"
  panel-paper-muted: "oklch(68% 0.01 80)"
typography:
  display:
    fontFamily: "Barlow Semi Condensed, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Barlow Semi Condensed, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 700
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Barlow Semi Condensed, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.05em"
rounded:
  xs: "2px"
  sm: "4px"
  md: "6px"
  lg: "8px"
components:
  button-primary:
    backgroundColor: "{colors.instrument-amber}"
    textColor: "{colors.graphite-ink}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.instrument-amber-strong}"
  button-secondary:
    textColor: "{colors.graphite-ink}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-secondary-hover:
    textColor: "{colors.instrument-amber-text}"
  card:
    backgroundColor: "{colors.chart-paper}"
    rounded: "{rounded.lg}"
    padding: "32px 40px"
---

# Design System: NxtMRO

## Overview

**Creative North Star: "The Flight Manual"**

The system reads like the technical documents this software replaces — aircraft maintenance manuals, aeronautical charts, type certificates: precise, information-dense, printed-paper authority rather than screen-native gloss. Every AI-MRO competitor defaults to dark-mode-plus-glow; this system goes the other way on purpose, because a light, chart-like surface is the more differentiated *and* more honest choice for software that lives or dies on regulatory trust.

The personality is precise, not sterile; authoritative, not corporate-cold. Warmth comes from a warm-neutral (not blue-black, not stark white) canvas and from a single confident amber accent — instrument caution lighting, runway-edge lighting — used exactly where it earns attention and nowhere else. The explicit anti-reference is the site's own prior look: generic dark-mode SaaS with blue/purple gradients, glow orbs, and a badge-eyebrow over every heading.

**Key Characteristics:**
- Warm paper canvas and graphite ink, never pure white or pure black
- One signature accent color (instrument amber), spent sparingly
- Flat, border-first depth — zero shadows anywhere in the implementation
- Small, sharp radii — nothing rounder than 8px
- Hand-built SVG technical diagrams (not photography, not stock UI mockups) carry the "instrument panel" motif: corner-tick graticule frames, station-reference lines, mono-set data labels

## Colors

A warm-neutral chart-paper palette carries the page; instrument amber is the only saturated color in the system.

### Primary
- **Instrument Amber** (`oklch(66% 0.15 55)`): the one signature accent — primary CTA fill, hover states, small text accents, index numbers, and the recurring corner-tick graticule motif on every SVG diagram. **The One Accent Rule.** Amber never becomes a large surface fill or background; its rarity is what keeps it reading as "instrument caution color" rather than "brand wash." It appears only as: button fill, small text/icon accents, thin strokes, and small marks — never as a section background or a large panel.
  - **Instrument Amber Strong** (`oklch(57% 0.16 50)`): hover/pressed state for the primary button.
  - **Instrument Amber Text** (`oklch(46% 0.135 48)`): the darkened variant used wherever amber carries small body-size text (inline word accents, link hovers, index numbers, FAQ toggle icon) — the brighter `instrument-amber` value does not clear 4.5:1 contrast at those sizes.

### Neutral
- **Chart Paper** (`oklch(98% 0.004 80)`): the page canvas. Warm off-white, not `#fff`.
- **Chart Paper Raised** (`oklch(96.3% 0.006 80)`): the one step up in surface — used for the AI Capabilities and Compliance section backgrounds and the dominant capability card, always paired with `border-line`, never a shadow.
- **Graphite Ink** (`oklch(21% 0.008 80)`): primary text. Warm near-black, not `#000`.
- **Graphite Ink Muted** (`oklch(42% 0.008 80)`): secondary/body-supporting text — subheads, paragraph copy, most `<dd>`/detail text.
- **Graphite Ink Faint** (`oklch(60% 0.007 80)`): tertiary — reserved for text *inside* the SVG diagrams (station labels, "FWD," tick marks) where the WCAG picture/incidental-text exception applies. **Do not** use `ink-faint` for real page content at normal text size; a prior pass used it for the Compliance ledger detail and it measured 3.72:1 (fails AA) — that spot now uses `ink-muted` (7.96:1).
- **Hairline** (`oklch(87% 0.006 80)`): the default divider/border — does the structural work shadows would do elsewhere.
- **Hairline Strong** (`oklch(76% 0.008 80)`): emphasized dividers and SVG diagram structure lines (route lines, ledger spine, radar rings).

### One deliberate dark panel
- **Panel Ink** (`oklch(17% 0.01 80)`): the footer's background — the single contrast reversal on the page, not a mid-page theme flip.
- **Panel Hairline** (`oklch(30% 0.012 80)`): divider inside the dark panel.
- **Panel Paper** (`oklch(93% 0.006 80)`): primary text on the dark panel (the "NxtMRO" wordmark).
- **Panel Paper Muted** (`oklch(68% 0.01 80)`): secondary text on the dark panel (description line, nav links, copyright).

### Named Rules
**The One Accent Rule.** Amber is the only saturated color in the system and is spent sparingly — button fill, small text/icon accents, thin diagram strokes. Never a large fill or background.

**The No-Pure-Neutral Rule.** Canvas and ink are always warm-tinted (`oklch(… 80)` hue), never literal `#fff`/`#000`. This is what keeps "paper" and "ink" reading as material rather than as a default light theme.

## Typography

**Display Font:** Barlow Semi Condensed (weights 600/700/900 loaded), with `system-ui, sans-serif` fallback
**Body Font:** Barlow (weights 400/500/600 loaded), with `system-ui, sans-serif` fallback
**Label/Mono Font:** IBM Plex Mono (weights 400/500 loaded), with `ui-monospace, monospace` fallback

**Character:** a condensed technical display face (echoing instrument placards and chart labels) paired with its own humanist-sans body counterpart, plus a true monospace reserved for anything that reads as data — index numbers, station labels, ledger figures. All three load via `next/font/google` as CSS variables (`--font-barlow`, `--font-barlow-semi-condensed`, `--font-plex-mono`), wired into Tailwind's `font-display` / `font-sans` / `font-mono` utilities through `@theme inline` in `app/globals.css`.

### Hierarchy
- **Display** (700, `clamp(3rem, 6vw, 4.5rem)`, line-height 1.05): the hero H1 only. Tight tracking, no manual line breaks — copy wraps naturally.
- **Headline** (700, `clamp(2.25rem, 4vw, 3rem)`): every section's H2. Tight tracking.
- **Title** (600, 1.125rem / 18px): card and subsection H3s (capability names, FAQ questions, ledger `<dt>` labels, button label weight).
- **Body** (400, 1rem / 16px, line-height 1.625): paragraph copy. Lead paragraphs step up to 1.125rem (18px) at the same weight; max measure is typically constrained by a `max-w-*` wrapper rather than a fixed `ch` value.
- **Label** (400, 0.75rem / 12px, letter-spacing 0.05em): IBM Plex Mono — index numbers (`01`–`06`), step numbers, SVG diagram annotations, ledger detail text. Always paired with `instrument-amber-text` or `ink-muted`, never `ink-faint` outside an SVG.

### Named Rules
**The One Data Face Rule.** IBM Plex Mono appears only where the content is genuinely data-shaped — an index, a station reference, a timestamp-style detail — never as decorative texture on ordinary copy.

## Layout

Container is `max-w-7xl` for full-width sections, narrowing to `max-w-3xl` for the FAQ's focused-stack and `max-w-2xl` for the CTA's closing moment — the container width itself signals "this section is a list/grid" vs. "this section is one message." Section vertical rhythm is deliberately uneven (`py-16`–`py-28` depending on section) rather than one repeated spacing value, so the page doesn't read as identical boxes stacked end to end.

Grids are 12-column on the sections that need proportion control (Hero: 7/5 split; Compliance: 6/6 split; AI Capabilities: 7/5 split) and simpler 2- or 4-column grids where the content is a flat list (Features' 2-column manifest; How It Works' 4-column rail). Everything collapses to a single column under `md`/`lg`, with desktop-only decorative structure (the How It Works route line, its circular waypoint markers) replaced by a mobile-specific alternative (a short vertical connector tick) rather than simply hidden.

The header is `fixed` with a translucent, blurred paper background (`bg-paper/90 backdrop-blur-md`) over a hairline bottom border.

## Elevation & Depth

**The Flat-By-Default Rule.** Zero shadows anywhere in the implementation — no `box-shadow` appears in any component. Depth is conveyed entirely by hairline borders (structure) and a single subtle surface-tone step (`chart-paper` → `chart-paper-raised`, roughly 2% lightness), plus one deliberate full-contrast reversal (the dark footer panel). This is confirmed as a durable rule, not a coincidence of this build: it matches the flat, printed-document character of the Flight Manual direction, and a later surface should reach for a border or a tone step before reaching for a shadow.

## Shapes

Small, sharp radii on a four-step scale: `2px` (xs) / `4px` (sm) / `6px` (md) / `8px` (lg) — nothing in the system uses a larger radius, and nothing should. `rounded-md` (6px) is the standard control radius (buttons, the nav logo chip); `rounded-lg` (8px) is the ceiling, reserved for the one card-shaped surface (the AI Capabilities dominant card); `rounded-full` is used only for genuinely circular elements (the How It Works waypoint markers).

**The Corner-Tick Signature.** The one recurring form motif beyond the radius scale: a graticule frame made of four short amber L-shaped corner brackets (camera-viewfinder / chart-registration-mark style), drawn as raw SVG paths, appearing around each hand-built technical diagram (the Hero aircraft top-view, the Compliance audit-trail ledger). It is the system's signature device — use it at deliberate moments on new diagram-shaped content, not as generic page decoration.

## Components

Every interactive surface is machined and exact: hairline borders, small sharp radii, flat fills, no soft/glossy treatment — closer to a calibrated instrument control than a friendly app button.

### Buttons
- **Shape:** `rounded-md` (6px), `font-display font-semibold`, single-line label.
- **Primary:** `instrument-amber` fill, `graphite-ink` text (dark-on-amber, not white-on-amber — verified higher contrast: 5.43:1 vs. amber's lower contrast against white). Padding `14px 28px` at hero/CTA scale, `8px 20px` at nav scale. Hover → `instrument-amber-strong` fill.
- **Secondary / Ghost:** transparent fill, `hairline` border, `graphite-ink` text. Hover → border and text both shift to amber (`border-amber`, `text-amber-text`). Used for the lower-commitment second action next to every primary CTA (Hero's "See the platform," CTA's "Request a demo").
- **Text link (nav):** no border, `ink-muted` → `ink` on hover. Nav links deliberately do *not* go amber on hover — amber hover is reserved for buttons, keeping the accent's "this is an action" signal intact.

### Cards
- **Corner Style:** `rounded-lg` (8px).
- **Background:** `chart-paper` (one step lighter than its `chart-paper-raised` section background, so the card reads as raised without a shadow).
- **Shadow Strategy:** none — see Elevation & Depth.
- **Border:** `hairline`, 1px, always.
- **Internal Padding:** `32px` (mobile) stepping to `40px` (`md:p-10`) — the system's single largest padding value, reserved for the one dominant card (AI Capabilities' "Catch failures before they happen").

### Manifest Rows (signature — Features section)
A numbered technical-list pattern standing in for a card grid: two-column row layout, each row a mono `instrument-amber-text` index (`01`–`06`) beside a title/body pair, separated by `hairline` bottom borders in a shared top-bordered block. Reads as a spec sheet rather than a set of icon cards.

### Sequence Rail (signature — How It Works section)
Four waypoint markers (a `rounded-full` ring in `border-amber` with a solid amber center dot) connected by a horizontal `hairline-strong` route line on desktop, recomposing to a short vertical connector tick between stacked steps on mobile. Each step is labeled with a mono `instrument-amber-text` number before its title.

### Audit Ledger (signature — Compliance section)
A `<dl>` of label/value rows (`title`-weight label left, mono `ink-muted` detail right-aligned) with `hairline` dividers, paired with a hand-built SVG "ledger diagram": a vertical spine with alternating filled (amber, checked) and outline (pending) circular nodes, each linked to a small rectangular record card.

### FAQ Accordion
- **Style:** `hairline`-divided rows, `title`-weight question text, a mono-weight `+` glyph in `instrument-amber-text` that rotates 45° (→ ×) on open via a 200ms `transition-transform`.
- **Behavior:** single-open accordion (opening one does not auto-close others — each row tracks its own open index independently against a shared `open` state).

### Navigation
- **Style:** `fixed` header, `bg-paper/90 backdrop-blur-md`, `hairline` bottom border. Logo mark is a small dark chip (`#1c1a17` — a static hex, intentionally *not* a token reference; see Do's and Don'ts) holding an amber stroke "N" icon, beside the "Nxt**MRO**" wordmark where **MRO** is set in `instrument-amber-text`.
- **Desktop:** inline links, `ink-muted` → `ink` on hover (no amber hover — see Buttons).
- **Mobile:** hamburger → × toggle; the open panel is a non-overlay block that pushes page content down (not a fixed-position drawer), matching the site's pre-redesign mobile-menu behavior, deliberately preserved rather than replaced.

### Technical Diagrams (signature)
Hand-built inline SVG, never photography or stock UI mockups: the Hero's aircraft top-view (fuselage, wings, engines, station-reference lines, corner-tick frame), the AI Capabilities radar-sweep (concentric detection rings, perimeter ticks, a sweep wedge, flagged points), and the Compliance audit-trail ledger (described above). All three share one stroke-based technical-drawing language — `ink`/`line-strong` structure, `amber` for the signature graticule and key marks, `font-mono` for any embedded label — and all three play the same one-time entrance: `.instrument-settle` (opacity 0→1, `scale(0.97)`→`scale(1)`, `translateY(6px)`→0, 600ms ease-out, skipped under `prefers-reduced-motion`).

## Do's and Don'ts

### Do:
- **Do** keep amber to a single signature accent — button fill, small text/icon accents, thin diagram strokes. (**The One Accent Rule**.)
- **Do** use a hairline border or a `chart-paper` → `chart-paper-raised` tone step for depth, never a shadow. (**The Flat-By-Default Rule**.)
- **Do** keep radii at 8px or under; `rounded-full` only for genuinely circular elements.
- **Do** build new supporting visuals as hand-drawn SVG technical diagrams in the established ink/amber/line-strong language, not photography or fake product-UI screenshots.
- **Do** vary section vertical rhythm (`py-16`–`py-28`) rather than repeating one spacing value down the page.
- **Do** wrap section heading blocks (not every card) in the `Reveal` component for the one scroll-entrance motion the system uses; skip it on the Hero, which must render immediately for LCP.

### Don't:
- **Don't** use amber as a section background, large fill, or "brand wash" — its rarity is the point.
- **Don't** add a shadow anywhere; reach for a border or a tone step instead.
- **Don't** use `graphite-ink-faint` for real page content at normal text size — it fails WCAG AA (3.72:1) outside the SVG-diagram exception. Use `ink-muted` for anything that's genuine content rather than decorative diagram dressing.
- **Don't** add an eyebrow/preheading label above a heading — the prior version of this page did this on every section and it was removed as decorative filler.
- **Don't** invent stats, testimonials, or certification badges — see `PRODUCT.md`'s Evidence on Hand; the prior version of this page fabricated exactly this kind of proof and it was removed for being untrue.
- **Don't** "fix" the nav logo chip's or the favicon's literal `#1c1a17` / `#dfa23a` hex values into token references — both render through Satori (`next/og`'s `ImageResponse`) or are hand-matched to it, and Satori does not support CSS custom properties or `oklch()`.
