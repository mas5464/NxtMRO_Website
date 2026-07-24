# Tasks

## Current Session — 2026-07-23

### Completed This Session
- Full visual and content redesign of the landing page (light technical-precision direction: warm paper canvas, deep graphite ink, instrument-amber accent, Barlow / Barlow Semi Condensed / IBM Plex Mono, hand-built SVG technical diagrams instead of stock photography)
- Removed all fabricated content: invented stats (150+, 62%, 3.2M+), invented testimonials, unverified certification badges (SOC 2 Type II, FAA/EASA "certified"), and 16 dead `href="#"` footer links
- Added a new Compliance section (real audit-trail/AD-tracking mechanism) replacing the old fabricated Stats section
- Rewrote FAQ answers to drop unverifiable claims (specific implementation-time guarantee, SOC 2 assertion, "guaranteed response times", "cancel anytime — no fine print")
- Fixed `next.config.ts`: pinned `turbopack.root` — a stray `~/package-lock.json` was making Next.js misdetect the workspace root as the home directory, which hung both `next build`'s typecheck step and `next dev`'s startup
- Fixed a real bug in the new `Reveal` scroll-animation component: content could get stuck at `opacity: 0` permanently if a fast/instant scroll skipped past the IntersectionObserver's threshold-crossing event; added a geometry-based fallback
- Fixed a WCAG AA contrast failure: `ink-faint` text (3.72:1) was used for real content in the Compliance ledger; switched to `ink-muted` (7.96:1)
- Verified: clean production build + full TypeScript typecheck, full accessibility-tree structural check (every heading/link/href), visual QA on desktop hero/features and mobile end-to-end (all 9 sections), mobile menu open/close, FAQ accordion interaction

### Known issue (not fixed, unrelated to app code)
- `npm run lint` hangs indefinitely in this dev environment even on a single trivial file — looks like a sandbox constraint on process/thread spawning, not a code issue. Run it in a normal terminal to get a real lint result before shipping.

### Still Needed (see chat handoff for full list)
- Real metrics, testimonials, and verified certifications when available
- Privacy Policy / Terms of Service pages (footer intentionally omits links to non-existent pages)
- Real OG/social share image
- A real lint run outside this session

### Next Session
- Run `npm run lint` in a normal terminal and fix anything it surfaces
- Deploy to Vercel once real content/legal pages above are ready
