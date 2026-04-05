<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Rekenhulp — Agent Context

## What this app is

**Rekenhulp** is a multiplication-table practice app for children in **groep 4** (Dutch elementary school, ~age 7–8). It is built collaboratively with the pupils — the children help formulate the instructions for Claude.

**Non-negotiable UX rules:**
- All UI text is in **Dutch**
- Large, readable fonts; child-friendly feedback
- No unnecessary complexity or adult UI patterns

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Runtime | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 via `@tailwindcss/postcss` — **no** `tailwind.config.js` |
| Linting | ESLint 9 |
| Font | Nunito (Google Fonts, loaded in `layout.tsx`) |

**Import alias:** `@/*` → `src/*`

---

## Commands

```bash
npm run dev       # Dev server → http://localhost:3000
npm run build     # Production build (use this to verify no TS/build errors)
npm run start     # Production server
npm run lint      # ESLint
```

No test runner is configured.

---

## File structure

```
src/
  app/
    layout.tsx          # Root layout — Geist + Nunito font vars, global CSS
    page.tsx            # Home page — mode selection (Toon / Steunsom / Oefen)
    globals.css         # Tailwind v4 @theme tokens (see Design tokens below)
    steunsom/
      page.tsx          # Steunsom modus — som display + volgende knop, geen help-paneel
    api/
      speak/
        route.ts        # POST /api/speak — ElevenLabs TTS proxy (server-side)
```

---

## Design tokens (globals.css)

All colours are CSS custom properties consumed via `style={{ color: "var(--color-pp-blue)" }}` etc. **Do not hardcode hex values** — always use the token.

| Token | Value | Usage |
|---|---|---|
| `--color-pp-blue` | `#1a4f9c` | Primary brand / buttons |
| `--color-pp-blue-dark` | `#123a75` | Hover states |
| `--color-pp-blue-light` | `#d6e6f9` | Card borders, backgrounds |
| `--color-pp-orange` | `#e8820c` | Steunsom modus accent |
| `--color-pp-orange-light` | `#fff0dc` | Steunsom card background |
| `--color-pp-yellow` | `#ffd200` | Help / lightbulb accent |
| `--color-pp-green` | `#2d9e4f` | Oefen modus accent |
| `--color-pp-green-light` | `#d4f0de` | Oefen card background |
| `--color-pp-red` | `#d63f3f` | Error / wrong answer |
| `--color-pp-red-light` | `#fde8e8` | Error background |
| `--color-pp-bg` | `#eef4fb` | Page background |
| `--color-pp-text` | `#1a2a4a` | Body text |
| `--color-pp-muted` | `#6b7fa3` | Secondary / label text |

Font variable: `--font-nunito` (set in root layout, available everywhere).

---

## Three learning modes

### 1. Toon modus *(not yet implemented)*
Display multiplication sums together with their answers. Passive reference mode.

### 2. Steunsom modus (`/steunsom`)
Shows a randomly generated multiplication sum. The child works out the answer using an anchor strategy. Page contains only the sum display and a "Volgende som →" button — no help panel.

### 3. Oefen modus *(not yet implemented)*
The child solves the multiplication directly with no hints.

---

## ElevenLabs voice integration

**Status:** `/api/speak` is implemented and ready to use from any page.

### How it works
- Client calls `POST /api/speak` with `{ text: "..." }`
- Server calls `https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}`
- Server streams back `audio/mpeg`
- Client plays via `new Audio(url)` from a blob URL

### Environment variables
```
ELEVENLABS_API_KEY=    # Required — your ElevenLabs API key
ELEVENLABS_VOICE_ID=   # Optional — defaults to Rachel (21m00Tcm4TlvDq8ikWAM)
```
Place in `.env.local` (never commit this file). Without the key the spoken audio silently fails; written help still works.

### Model
`eleven_multilingual_v2` — handles Dutch well.

---

## UI patterns to follow

- **Cards** use `background: white`, `borderRadius: 20–24`, `boxShadow: "0 2px 16px rgba(26,79,156,0.08)"`, border with the mode's accent-light colour.
- **Primary buttons** use the mode's accent colour, `borderRadius: 16`, `fontWeight: 800`, matching box-shadow.
- **Header** always has `background: var(--color-pp-blue)` with a decorative SVG wave below it.
- **Back link** in header: `← Terug` linking to `/`.
- All interactive elements use `fontFamily: "inherit"` so Nunito is applied.
- Hover effects on cards: `translateY(-4px)` + stronger shadow.
