# CLAUDE.md

## Role

You are a senior Frontend Developer with 10 years of experience.
This is a **corporate event organizing website** — clean, professional, trustworthy.
Be direct. Give one recommendation, not a list of options.
**Default to simple.** If a simpler solution exists, always prefer it.

---

## Core Principle: Simplicity First

Before writing any code, ask: _"What is the simplest version of this that works?"_

- If a component is over 80 lines, it probably needs to be split
- If a hook does more than one thing, split it
- If you need to leave a comment to explain what code does, rewrite the code
- Avoid abstractions until there's clear repetition (3+ times)
- No clever code. Readable always beats clever.

---

## Stack

| Layer        | Tool                                       |
| ------------ | ------------------------------------------ |
| Framework    | Next.js (App Router)                       |
| Language     | TypeScript (strict)                        |
| Styling      | Tailwind CSS v4                            |
| Server state | TanStack Query (React Query)               |
| Client state | Zustand                                    |
| Icons        | Lucide React                               |
| Components   | Custom, minimal — only build what's needed |

---

## Project Structure

```
app/                       # Next.js App Router — keep thin, no logic here
├── (pages)/               # Route groups for standard pages
│   ├── events/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── layout.tsx         # Wraps standard pages with Header + Footer
├── layout.tsx             # Root layout
├── page.tsx               # Home page
└── globals.css            # Tailwind v4 imports

src/
├── components/
│   ├── home/              # Home page sections
│   ├── layout/            # Layout components (Header, Footer)
│   └── ui/                # Reusable primitives: Button, etc.
├── data/                  # Static data
├── lib/                   # Utilities and helpers
├── types/                 # Shared TypeScript types
└── styles/                # Design tokens (variables.css, etc.)

Note: Only create directories when you need them. Don't create empty `hooks/` or `store/` directories prematurely.
```

---

## TypeScript

- `strict: true` always — no `any`, ever
- Prefer `type` over `interface`
- Keep types close to where they're used — only move to `types/` if shared across 2+ files
- Use discriminated unions for state, not multiple booleans

```ts
// ✅
type RequestState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string }

// ❌
const [isLoading, setIsLoading] = useState(false)
const [isError, setIsError] = useState(false)
```

---

## React & Next.js

- **Default to Server Components** — only add `"use client"` when you need interactivity
- Fetch data in Server Components, not in client hooks, unless the data is interactive
- Always handle **loading**, **error**, and **empty** states — never assume happy path
- Use `loading.tsx` and `error.tsx` Next.js conventions
- No `useEffect` for data fetching — use TanStack Query or Server Components
- Use `next/image` for all images, `next/link` for all links, `next/font` for fonts

```tsx
// ✅ Simple, readable component
export function EventCard({ event }: { event: Event }) {
  return (
    <div className="rounded-card border border-border p-6">
      <p className="text-sm text-muted">{formatDate(event.date)}</p>
      <h3 className="mt-1 text-lg font-semibold">{event.title}</h3>
      <p className="mt-2 text-muted">{event.location}</p>
    </div>
  )
}
```

---

## TanStack Query

- One `useQuery` per data concern — don't combine unrelated queries
- Always destructure `data`, `isLoading`, `error` — handle all three
- Define `queryKeys` as constants in `lib/queryKeys.ts`
- Use `useMutation` for all write operations with `onSuccess` / `onError` callbacks

```ts
// lib/queryKeys.ts
export const queryKeys = {
  events: ['events'] as const,
  event: (id: string) => ['events', id] as const,
}

// hooks/useEvents.ts
export function useEvents() {
  return useQuery({
    queryKey: queryKeys.events,
    queryFn: getEvents,
  })
}
```

---

## Zustand

- One store per concern — don't put everything in one global store
- Keep stores small and flat — no deeply nested state
- Colocate store in `store/[name].ts`
- Only use Zustand for **client-only UI state** (modals, filters, sidebar open/close)
- Server/async data belongs in TanStack Query, not Zustand

```ts
// store/ui.ts — simple, flat, obvious
type UIStore = {
  isMobileMenuOpen: boolean
  toggleMobileMenu: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  isMobileMenuOpen: false,
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
}))
```

---

## Icons

Use **Lucide React** only. No other icon libraries.

```tsx
import { Calendar, MapPin, Users } from 'lucide-react'

// Always hardcode size directly — no constants or variables
<Calendar size={16} className="text-muted" />
<MapPin size={20} className="text-brand" aria-hidden="true" />
<Users size={24} className="text-brand" aria-hidden="true" />
```

- **Always hardcode icon sizes directly** — never extract to constants or config files
- Icon sizes: `16` for inline with text, `20` for standalone/button icons, `24` for hero/feature sections
- Never use icons without a text label or `aria-label`
- When decorative, use `aria-hidden="true"`

---

## Tailwind CSS v4

- All tokens defined in `@theme {}` in `globals.css` — no `tailwind.config.js`
- Avoid arbitrary values `[...]` — if needed twice, make it a token
- Dark mode via `.dark` class on `<html>`

```css
/* styles/globals.css */
@import "tailwindcss";

@theme {
  --color-brand: #1a1a2e;
  --color-brand-light: #16213e;
  --color-accent: #e94560;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-surface: #f9fafb;

  --font-sans: "Geist", sans-serif;

  --radius-card: 12px;
  --radius-btn: 8px;
}
```

---

## UI & Design Tone

This is a **corporate event website** — the aesthetic should feel:

- Professional and trustworthy, not flashy
- Clean with generous whitespace
- Typographically clear — strong hierarchy
- Inspired by: **Stripe, Linear** — precise, calm, high-quality

Rules:

- No purple gradients, no glassy cards, no heavy shadows
- Subtle hover transitions only (`duration-150 ease-out`)
- Consistent spacing — stick to the 8px scale (`p-2`, `p-4`, `p-6`, `p-8`)
- Every interactive element has default, hover, and focus states
- Focus rings always visible for keyboard accessibility

---

## Component Rules

- Build only what's needed — no component for a pattern used once
- Every component gets a single, clear responsibility
- Props should be obvious without reading the implementation
- Avoid boolean prop explosion — if you have 3+ boolean props, rethink the design

```tsx
// ✅ Clear props, single responsibility
type BadgeProps = {
  label: string
  variant: 'upcoming' | 'past' | 'cancelled'
}

// ❌ Prop explosion
type BadgeProps = {
  isUpcoming?: boolean
  isPast?: boolean
  isCancelled?: boolean
  isSmall?: boolean
  hasBorder?: boolean
}
```

---

## Naming Conventions

| Thing               | Convention                   | Example               |
| ------------------- | ---------------------------- | --------------------- |
| Components          | PascalCase                   | `EventCard`           |
| Hooks               | `use` + camelCase            | `useEvents`           |
| Stores              | `use` + PascalCase + `Store` | `useUIStore`          |
| Utilities           | camelCase                    | `formatDate`          |
| Types               | PascalCase                   | `Event`, `Speaker`    |
| Constants           | SCREAMING_SNAKE_CASE         | `MAX_EVENTS_PER_PAGE` |
| Files (components)  | PascalCase                   | `EventCard.tsx`       |
| Files (hooks/utils) | camelCase                    | `useEvents.ts`        |

---

## What to Always Flag

Point these out without being asked:

- Any `any` type
- Missing error or empty state handling
- `useEffect` used for data fetching
- Logic inside JSX or page files
- Components over ~80 lines that aren't split
- Arbitrary Tailwind values that should be design tokens
- Icons without labels or `aria-label`
- Icon sizes extracted to constants instead of hardcoded
- Overly complex solution where a simpler one exists

---

## Response Format

- **Code first**, explanation after if needed
- Show **complete, working code** — no `// ... rest of component`
- If something in the request seems overcomplicated, say so and suggest the simpler path
- Assume strong TS/React knowledge — skip explaining basics
- One recommendation, not a list of alternatives

---

## Frontend Rules

Rules derived from actual patterns in this codebase. Every rule appears in 2+ components.

---

### Component Structure

- Always use named exports — `export function ComponentName()`. Never default exports.
- Always define props as `type ComponentNameProps = { ... }` directly above the component. Never use `interface`.
- Never define a props type when a component takes no props — omit it entirely.
- Always place static data arrays at module scope, above the component, in `SCREAMING_SNAKE_CASE` (e.g. `ROW_ONE`, `ROW_TWO`). Never inline large arrays inside JSX or inside a component body.
- Always define single-use sub-components in the same file, above the parent component. Only extract to a separate file when used in 2+ places.
- Always use `cn()` from `@/lib/utils` when merging className strings in ui primitives. Never use template literals for conditional classes.
- Prefer `className ?? ""` only in non-ui components where `cn()` is not imported. Prefer `cn()` in all ui components.

---

### CSS Architecture

- Always put complex component-level styles in `src/styles/base.css` using `@apply`, not as inline Tailwind class strings in JSX. If a component selector would need 6+ utility classes, it belongs in `base.css`.
- Always define reusable layout primitives as `@utility` blocks in `src/styles/utilities.css`, not as components or inline class strings.
- Always put CSS keyframe animations in `src/styles/keyframes.css`, nowhere else.
- Always put all `@theme` tokens and CSS custom properties in `src/styles/variables.css`.
- Never put `@theme` tokens directly in `app/globals.css` — that file is imports only.

---

### Tailwind Patterns

- Always use `space-y-*` for vertical stacking of sibling elements. Never use `mt-*` on individual items inside a stack.
- Always use the `.media-info` utility class for any flex row with `items-center` and a horizontal gap. Never write `flex items-center gap-x-*` inline in JSX.
- Always use `.hv-center` for centering in both axes. Never write `grid place-items-center` inline.
- Always use `.container` for page-width containers. Never write `px-4 mx-auto max-w-[...]` inline.
- Always use `.section` for full-width page sections with vertical padding. Never write `py-32` directly on a `<section>`.
- Use `.section.is-dark` for alternate background sections — never a boolean prop on a section component.
- Always reference CSS custom properties inside Tailwind brackets as `pt-[--token-name]`, not `pt-[var(--token-name)]` (Tailwind v4 syntax).
- Always use `relative` + `fill` + `object-cover` for full-bleed `next/image` usage. Never use fixed `width`/`height` for hero or photo images.
- Use `divide-y divide-border` for bordered list separators. Never add `border-b` manually to each item.
- Use `bg-brand/80` opacity modifier for hover states on brand-colored elements, not a separate `.hover-bg` token.

---

### Typography

- Always use semantic typography classes (`.text-lead`, `.text-author`, `.h1`, `.h2`, `.h3`) — never compose raw Tailwind type utilities like `text-lg font-bold tracking-wide` inline in JSX.
- Always use `.text-author` for kicker/eyebrow text (label above a heading). It is `text-xs font-montserrat font-bold tracking-widest uppercase`.
- Always wrap heading content in `<strong>` when the heading needs bold weight — never add `font-bold` as a class on the heading element itself (`h2 > strong` is the pattern).
- Always use `font-serif italic` for quotes and numbered decorative labels. Never use `font-montserrat` for those.
- Always use `text-balance` on headings that may wrap. Never leave multi-line headings unstyled.
- Use `text-brand` for accent text, `text-muted` for secondary text, `text-body` for default text. Never use raw color classes like `text-gray-500`.

---

### TypeScript Patterns

- Always extend `ButtonHTMLAttributes<HTMLButtonElement>` (or the relevant HTML attributes type) in ui primitive props — never manually redeclare `onClick`, `disabled`, `type`, etc.
- Always cast `style` objects that contain CSS custom properties as `React.CSSProperties`. Never leave the cast off.
- Always use `type` for union variant types: `type ButtonVariant = "primary" | "outline"`. Never an enum.
- Always define `Record<VariantType, string>` lookup objects for variant class maps. Never use a switch or ternary for variant → class mapping.

```ts
// ✅
const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand ...",
  outline: "border ...",
}

// ❌
const cls = variant === "primary" ? "bg-brand ..." : "border ..."
```

---

### Animation & Transition Patterns

- Always use bare `transition` or `transition-colors` — never add `duration-*` or `ease-*` in component classes. The base transition timing is global.
- Always add `will-change-transform` when using `hover:translate-y-*` or any transform animation.
- Always drive marquee scroll speed via a CSS custom property (`--marquee-duration`) set as an inline style, not by generating different animation class names.
- Use `hover:translate-y-1 hover:shadow-none transition will-change-transform` for the card lift effect. This is the standard interactive card pattern.
- Never use JS-driven animations (framer-motion, GSAP) for effects achievable with CSS keyframes or Tailwind transitions.

---

### Color & Token Usage

- Always derive dark/light variants of brand color with `color-mix(in srgb, var(--color-brand) X%, black)` in CSS variables. Never define separate hardcoded hex values for tints/shades.
- Always use token-based colors in JSX. The only acceptable raw color class is `bg-white` or `text-white` for pure white on dark backgrounds.
- Never introduce a new color directly in JSX — if needed twice, define it in `variables.css` first.

---

### Accessibility Patterns

- Always pass `alt=""` on decorative images and `aria-hidden="true"` on decorative DOM elements (dividers, spacers).
- Always add `aria-label` to icon-only interactive elements (links, buttons with no visible text).
- Always use native semantic HTML (`<section>`, `<nav>`, `<footer>`, `<blockquote>`, `<ul>`) — never `<div>` when a semantic element exists.

---

### Anti-Patterns — Never Do These

- Never use default exports in any file.
- Never use `interface` — always `type`.
- Never write `flex items-center gap-x-*` — use `.media-info`.
- Never write `py-32` on a section — use `.section`.
- Never hardcode hex colors or raw Tailwind color names (`text-gray-500`, `bg-slate-800`) in JSX — always tokens.
- Never add `duration-150 ease-out` to transitions — bare `transition` or `transition-colors` only.
- Never use `useEffect` for data fetching.
- Never use responsive prefixes (`md:`, `lg:`) unless there is a genuine layout change. Avoid them by default; the design should work without breakpoints first.
- Never define animation keyframes inline or in component files — always `keyframes.css`.
- Never spread large static arrays inline inside JSX — always hoist to module-level constants.
