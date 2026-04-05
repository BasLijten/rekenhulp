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

### 1. Toon modus (show answers) *(not yet implemented)*
Display multiplication sums together with their answers. Passive mode for reference/demonstration.

### 2. Steunsom modus (`/steunsom`)
Shows a randomly generated multiplication sum with a "Volgende som →" button. The child works out the answer using an anchor strategy. No hints or help panel on the page.

### 3. Oefen modus (practice) *(not yet implemented)*
The child solves the multiplication directly, no hints.

## ElevenLabs voice integration

`POST /api/speak` (`src/app/api/speak/route.ts`) proxies text to ElevenLabs TTS and returns `audio/mpeg`. Available for use by any page that needs spoken feedback.

Required env var: `ELEVENLABS_API_KEY` in `.env`. Optional: `ELEVENLABS_VOICE_ID` (defaults to Rachel, `21m00Tcm4TlvDq8ikWAM`). Model: `eleven_multilingual_v2`.

Usage from a client component:
```ts
const res = await fetch("/api/speak", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ text: "Hallo!" }),
});
const blob = await res.blob();
const audio = new Audio(URL.createObjectURL(blob));
audio.play();
```

## Architecture

App Router structure under `src/app/`:

- `src/app/layout.tsx` — root layout with Geist font variables and global CSS
- `src/app/page.tsx` — home page (mode selection)
- `src/app/globals.css` — global styles (Tailwind CSS v4)
- `src/app/steunsom/page.tsx` — steunsom modus (som + volgende knop)
- `src/app/api/speak/route.ts` — ElevenLabs TTS proxy

**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, ESLint 9.

**Import alias:** `@/*` maps to `src/*`.

Tailwind CSS v4 is configured via `@tailwindcss/postcss` (PostCSS plugin), not the classic `tailwind.config.js` approach.
