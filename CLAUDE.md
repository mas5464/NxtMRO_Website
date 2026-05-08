# NxtMRO — Next Generation Airline MRO Software

## Project Context

**What this does**: NxtMRO is an AI-driven Maintenance, Repair & Overhaul (MRO) platform for airlines. This repo contains the public-facing marketing landing page that showcases the system's capabilities and routes users to the main application login.

**Tech stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS
**Run dev**: `npm run dev` (http://localhost:3000)
**Build**: `npm run build`
**Deploy**: Vercel

**Architecture**: Single-page marketing site. Main page at `app/page.tsx`. Components in `components/`. The landing page links out to the main application's login URL.

**Conventions**:
- Components use PascalCase filenames in `components/`
- All sections are self-contained React components
- Tailwind utility classes only — no CSS modules

---

## Behavioral Guidelines

### 1. Plan Node Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately — don't keep pushing

### 2. Subagent Strategy
- Use subagents liberally to keep main context window clean

### 3. Self-Improvement Loop
- After ANY correction from the user: update `.claude/memory/lessons.md` with the pattern

### 4. Verification Before Done
- Never mark a task complete without proving it works

### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"

### 6. Autonomous Bug Fixing
- When given a bug report: just fix it. Don't ask for hand-holding

---

## Workflow Rules
- Before starting any task, check ROADMAP.md and mark it `[-]` 🏗️
- After completing a task, mark it `[x]` with today's date ✅
- Update TASKS.md at the end of every session with what's done and what's next
- After ANY correction from the user: update `.claude/memory/lessons.md` with the pattern
- Never ask to confirm status updates — just do them

---

## Core Principles
- **Simplicity First**: Make every change as simple as possible. Impact minimal code
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards
