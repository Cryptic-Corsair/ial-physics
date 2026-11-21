# IAL PHYSICS

Revision notes for the **Pearson Edexcel International A Level Physics (2018, Issue 3)** specification — **WPH11 (Unit 1): Mechanics and Materials**, statement by statement (statements 1–32), with hand-drawn SVG figures, mark-scheme-wise bullets, revision packs, progress stickers and full-text search. WPH12–WPH16 join one unit at a time, research-first.

> Not affiliated with or endorsed by Pearson Education Ltd.

## Documentation

- **[SITE-HANDBOOK.md](docs/SITE-HANDBOOK.md)** — the comprehensive guide for human developers and AI agents. Covers protected content, architecture, themes, interfaces, persistence, design rules, safe workflows and verification.
- **[DEVELOPMENT.md](docs/DEVELOPMENT.md)** — detailed implementation and development guide.
- **[INTERFACES-ROADMAP.md](docs/INTERFACES-ROADMAP.md)** — Rooms and Editorial architecture and design boundaries.
- **[HANDOVER-IAL-PHYSICS.md](docs/HANDOVER-IAL-PHYSICS.md)** — the fork handover: the physics register (the style contract), the phase plan and the traps already found.

Read [the Site Handbook](docs/SITE-HANDBOOK.md) before making changes. All repository guides and the append-only work journal are in [docs/](docs/README.md).

## The physics register

The notes are written to a fixed style contract, approved by the owner against the WPH11 past papers and mark schemes (the canonical specimen is `research/wph11/approved-draft-wph11-t02.md`):

1. **Formula first** — the named equation leads in an equation band; every line after it is a sentence.
2. **Mark-scheme-wise** — one bullet is one sentence that could earn a mark; the accepted wording first.
3. **Symbols in the sentences** — =, ×, <, > sit inside the prose; **no arrows** (never write →).
4. **Scenarios built step by step** — each situation gets its own headed group, cause before effect.
5. **No citations in the notes** — the evidence trail lives in `research/wph11/`.
6. Rejected wordings are flagged as "Not accepted" notes; the note closes with the marking rules that never change.

## Tech stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS 4** (tokens in `src/app/globals.css` `@theme`)
- **Framer Motion** for animations
- **No backend** — the whole app is client-side; progress, packs and preferences live in the browser's `localStorage`. Content is type-checked TypeScript under `src/lib/spectra/content/`.

## Getting started

```bash
bun install
bun run dev          # dev server → http://localhost:3000
bun run build        # production build (also emits .next/standalone)
bun run start        # serve the standalone build
bun run lint         # eslint
```

Requires **Bun** (or Node 20+ with npm).

## Deploying to Vercel

1. Push the repo to GitHub.
2. In Vercel, import the repository — Next.js is detected automatically (`vercel.json` pins it).
3. Deploy. No environment variables are required.

## Project structure

```
src/
  app/                  # app entry, layout, global styling
  components/club/      # app shell, interfaces, notes, figures, packs, search and settings
  lib/spectra/          # content, registries, preferences and study-state stores
    content/            # unit topic lists and physics notes
public/                 # static assets
research/wph11/         # the research corpus: papers, mark schemes, digests, the approved draft
```

Notes content is written against the 2018 specification (statements kept verbatim), and marked up with a small inline syntax (`==highlight==`, `~sub~`, `^sup^`).

## Themes and interfaces

Five global themes are available: **Light**, **Night**, **Dune**, **Classic** and **Pistachio**. The site also has two presentation interfaces: **Cards** (gallery) and **Document** (editorial). Theme and interface are independent preferences; the active theme applies globally while each interface has its own presentation system. See the Site Handbook and Interface Roadmap for the rules governing them.
