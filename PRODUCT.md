# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: Director of Maintenance, VP Technical Operations, or similar maintenance leadership at airline/MRO operators, evaluating whether to move their operation off legacy systems (spreadsheets, an aging CMMS) onto NxtMRO. The FAQ's integration and security questions imply IT/procurement stakeholders participate in the buying decision, but maintenance leadership is who the page is written to persuade.

## Product Purpose

NxtMRO is an AI-driven Maintenance, Repair & Overhaul (MRO) platform for airlines. It replaces manual/spreadsheet-based and legacy-CMMS maintenance operations with one system covering digital work orders, parts & inventory, regulatory compliance tracking, fleet tracking, crew & certification management, and analytics/reporting. Success is an airline maintenance operation moving its full workflow — job cards, sign-offs, compliance, scheduling — onto NxtMRO and off paper/spreadsheets or disconnected legacy tools.

## Positioning

Predictive and automated, not reactive. The differentiating mechanism is AI applied to real maintenance data: models flag components trending toward failure early enough to act before an AOG (aircraft-on-ground) event, an AI scheduling engine plans maintenance automatically instead of a planner doing it by hand, and compliance (AD tracking, inspection intervals, sign-offs) is tracked and flagged automatically rather than manually. A legacy CMMS or a digitized-paperwork competitor could not truthfully copy the "AI-driven" claim without the same predictive/automation mechanism.

## Operating Context

Airline maintenance operations spanning line maintenance and heavy checks. Workflows referenced by the product: job card sign-offs; parts/inventory across warehouses; airworthiness directive (AD) tracking; inspection intervals; tail-number-level fleet visibility; crew license/rating/currency management; TAT (turnaround time) and cost-per-flight-hour reporting; integration with existing CMMS/ERP/flight-ops tools via API or file import.

## Capabilities and Constraints

Confirmed capabilities: digital work orders; parts & inventory with automated reorder points; regulatory compliance tracking (AD, inspections, EASA/FAA requirements); fleet tracking at the tail-number/component level; crew & certification management; analytics & reporting (TAT, cost-per-flight-hour, audit-ready record export); predictive-failure AI models; AI-driven maintenance scheduling; natural-language query interface; continuous anomaly detection across FDM/borescope/ACARS data.

Open terminology question: the site currently uses "AME" (Aircraft Maintenance Engineer) for crew licensing — EASA/Commonwealth terminology. The FAA-market equivalent is typically "A&P" (Airframe & Powerplant mechanic). Since the product claims both FAA and EASA workflows, confirm whether copy should say "AME," "A&P," or both before this is treated as settled.

Confirmed constraint: **no audited certification is held today** — not SOC 2, not an FAA "compliance" or EASA "certification" mark, nothing equivalent. The product is designed around FAA/EASA compliance workflows, but copy must stay at that mechanism-level claim and never assert an audit or certification the company hasn't earned. (Confirmed directly by the user during init.)

Login/app entry point: `https://www.nxtmro.app/login` — real, stable destination used by every CTA on the marketing site today.

## Brand Commitments

Name: NxtMRO. Wordmark treatment: "Nxt" + "MRO" as two visual weights, paired with a stroke "N" icon mark used as both favicon and navbar logo — an already-approved lockup to preserve rather than redraw.

## Evidence on Hand

None. NxtMRO is pre-launch with no live customers today. (Confirmed directly by the user during init.) The site must not include invented testimonials, customer logos, usage metrics, or outcome numbers — a prior version of this page fabricated exactly that kind of proof (e.g. "150+ aircraft," "70% fewer unscheduled removals," named customer quotes) and it was removed for being untrue. When real evidence exists, it replaces this section.

## Product Principles

1. Predictive over reactive — every feature description should reflect that NxtMRO acts before a problem grounds an aircraft, not after.
2. Automation replaces manual tracking — compliance, scheduling, and reporting are things the system does automatically, not tools that assist a human doing it by hand.
3. Honesty over persuasion shortcuts — no fabricated stats, testimonials, or certifications, ever. An unverified claim gets cautious, mechanism-based phrasing instead ("built around FAA and EASA workflows," not "FAA Compliant").
4. One system of record — the pitch is consolidation: work orders, parts, compliance, crew, and analytics in one platform, replacing spreadsheets and disconnected legacy tools.

## Accessibility & Inclusion

No product-specific requirement beyond standard web accessibility (WCAG AA), already built into the current implementation (verified color contrast, keyboard-operable nav/FAQ, reduced-motion support).
