# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Next.js version

This project uses **Next.js 16**, which has breaking changes from older versions. APIs, conventions, and file structure may differ from training data. Before writing code that touches Next.js internals, check `node_modules/next/dist/docs/` for the relevant guide and heed deprecation notices.

## Commands

```bash
npm run dev       # Start development server on http://localhost:3000
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

No test runner is configured yet.

## What this app is

**Rekenhulp** is a multiplication-table practice app for children in groep 4 (Dutch elementary school, ~age 7-8). It is being built collaboratively with the pupils in class — the children help formulate the instructions for Claude.

UX requirements:
- Very simple, large text, child-friendly feedback
- Dutch language throughout the UI

## Three learning modes

### 1. Toon modus (show answers)
Display multiplication sums together with their answers. Passive mode for reference/demonstration.

### 2. Steunsom modus (anchor strategy)
Show a multiplication sum. Together with the child, identify a **steunsom** — a nearby multiplication the child already knows — and use it to derive the answer.

Example: for `7 × 8`:
- Steunsom: `5 × 8 = 40` (known)
- Then add: `2 × 8 = 16`
- Result: `40 + 16 = 56`

The child enters the steunsom themselves, then calculates the final answer.

### 3. Oefen modus (practice)
The child solves the multiplication directly, no hints.

## ElevenLabs voice integration

The app will integrate with the **ElevenLabs API** to provide a voice agent that guides children verbally through exercises. This is not yet implemented.

## Architecture

App Router structure under `src/app/`:

- `src/app/layout.tsx` — root layout with Geist font variables and global CSS
- `src/app/page.tsx` — home page (entry point)
- `src/app/globals.css` — global styles (Tailwind CSS v4)

**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, ESLint 9.

**Import alias:** `@/*` maps to `src/*`.

Tailwind CSS v4 is configured via `@tailwindcss/postcss` (PostCSS plugin), not the classic `tailwind.config.js` approach.
