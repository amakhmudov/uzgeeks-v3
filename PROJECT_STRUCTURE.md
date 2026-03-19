# UzGeeks v3 - Project Structure

## Overview

Clean, professional corporate event organizing website built with Next.js 15, TypeScript, and modern React patterns.

## Tech Stack

| Layer      | Tool                    |
| ---------- | ----------------------- |
| Framework  | Next.js 15 (App Router) |
| Language   | TypeScript (strict)     |
| Routing    | Next.js App Router      |
| Styling    | Tailwind CSS v4         |
| Icons      | Lucide React            |
| Components | Custom, minimal         |

## Architecture

```
app/
├── layout.tsx          → Root layout (html, body)
├── page.tsx            → Home page (/)
├── globals.css         → Tailwind imports + font imports
└── (pages)/            → Route group (doesn't affect URL)
    ├── layout.tsx      → Shared layout: Header + {children} + Footer
    ├── events/
    │   └── page.tsx    → /events
    └── about/
        └── page.tsx    → /about
```

### Home page layout (special case)

The home page renders `<Header transparent />` positioned absolutely over the hero image — no shared layout is used.

```
app/page.tsx
  ├── Header (transparent, z-20, absolute over hero)
  ├── HeroSection
  ├── EventsSection
  ├── AboutSection
  ├── PartnersSection
  └── Footer
```

### Standard pages layout

```
app/(pages)/layout.tsx
  ├── Header
  ├── {children} (page content)
  └── Footer
```

## Directory Structure

```
app/                       # Next.js App Router
├── (pages)/               # Route group for standard pages
│   ├── events/
│   │   └── page.tsx       # /events route
│   ├── about/
│   │   └── page.tsx       # /about route
│   └── layout.tsx         # Wraps pages with Header + Footer
├── layout.tsx             # Root layout (html, body, fonts)
├── page.tsx               # Home page (/)
└── globals.css            # Tailwind v4 imports + font imports

src/
├── assets/                # Images, icons, static assets
│   └── images/            # Import directly, no barrel exports
├── components/
│   ├── home/              # Home page feature sections
│   │   ├── HeroSection.tsx
│   │   ├── EventsSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── PartnersSection.tsx
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/                # Reusable UI primitives
│       ├── Button.tsx
│       └── SpeakerCard.tsx
├── data/                  # Static data and content
│   └── events.ts
├── lib/                   # Utilities and helpers
│   └── utils.ts           # Utility functions (cn, etc.)
├── styles/                # Design tokens
│   ├── variables.css      # Tailwind @theme tokens
│   ├── base.css
│   ├── typography.css
│   └── utilities.css
└── types/                 # Shared TypeScript types
    └── events.ts
```

## Design System

### Design Tokens

All design values are defined in `src/styles/variables.css` using Tailwind v4's `@theme` syntax:

**Typography Scale:**

- `--font-size-xs` through `--font-size-4xl`
- `--line-height-tight/normal/relaxed`
- `--tracking-tight/normal/wide`

**Spacing:**

- `--spacing-2` through `--spacing-20` (standard scale)
- `--spacing-section-sm/md/lg` (section-specific)

**Colors:**

- `--color-brand` (#38bfc4)
- `--color-body` (#1e1e1e)
- `--color-muted`
- `--color-divider`

**Border Radius:**

- `--radius-sm/md/lg/full`

**Shadows:**

- `--shadow-card`

### Icon Sizes

Hardcoded directly in components (no constants file):

- `size={16}` - For inline text icons
- `size={20}` - For standalone icons
- `size={24}` - For hero/feature sections

```tsx
import { Calendar } from 'lucide-react'

<Calendar size={16} className="text-muted" />
```

## Component Patterns

### Server vs Client Components

**Default to Server Components** — only add `'use client'` when needed:

✅ **Server Components** (no directive):

- Static content sections (HeroSection, AboutSection, PartnersSection)
- Layout wrappers (Header, Footer)
- Pure presentational components (SpeakerCard)

✅ **Client Components** (`'use client'`):

- Interactive components with state (EventsSection with tabs)
- Components with event handlers (Button)
- Components using hooks (useState, useEffect, etc.)

### Type Definitions

All components use TypeScript with strict mode:

- Use `type` (not `interface`)
- Zero `any` types allowed
- Props typed inline or in dedicated types file

```tsx
type ButtonProps = {
  variant?: 'primary' | 'outline'
  className?: string
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>
```

### Component Structure

Components follow single responsibility principle:

- Keep under ~80 lines
- Extract feature sections when page grows
- Colocate related components

```tsx
export function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
  return (
    <button className={cn(variantClasses[variant], className)} {...rest}>
      {children}
    </button>
  )
}
```

## Routing

### Next.js App Router Structure

```
app/
├── page.tsx                    → / (home)
└── (pages)/
    ├── layout.tsx              → Wraps all pages in this group
    ├── events/page.tsx         → /events
    └── about/page.tsx          → /about
```

### Layout Pattern

**Root Layout** (`app/layout.tsx`):

- Renders `<html>` and `<body>` tags
- Imports global CSS
- Sets metadata (title, description, favicon)

**Pages Layout** (`app/(pages)/layout.tsx`):

- Wraps standard pages with Header + Footer
- Uses route groups `(pages)` to share layout without affecting URL

**Home Page** (`app/page.tsx`):

- Special case - doesn't use pages layout
- Renders Header separately with `transparent` prop, positioned over HeroSection
- HeroSection is purely presentational (no Header inside)

### Navigation

Use Next.js `Link` component:

```tsx
import Link from 'next/link'

<Link href="/events">Tadbirlar</Link>
```

### Adding New Routes

1. **Standard page** (with Header/Footer):

   ```
   app/(pages)/partners/page.tsx
   ```

2. **Special page** (custom layout):
   ```
   app/landing/page.tsx
   ```

## Utilities

### cn (Class Names)

Simple utility for merging class names:

```tsx
import { cn } from '@/lib/utils'

<div className={cn('base-class', isActive && 'active-class', className)} />
```

## Scripts

```bash
npm run dev         # Start Next.js dev server (http://localhost:3000)
npm run build       # Build for production
npm start           # Start production server
npm run lint        # Run Next.js ESLint
npm run type-check  # Run TypeScript check
```

## Code Quality

- ✓ TypeScript strict mode enabled
- ✓ Next.js ESLint configured
- ✓ Zero arbitrary Tailwind values (all use design tokens)
- ✓ Consistent icon sizing
- ✓ All images have proper alt text
- ✓ Accessible keyboard navigation
- ✓ Server Components by default
- ✓ Client Components only where needed

## Next.js Features Ready to Use

- **Server Components** - Fetch data directly in components
- **Loading States** - Add `loading.tsx` files
- **Error Handling** - Add `error.tsx` files
- **Metadata** - Dynamic metadata per page
- **Image Optimization** - Use `next/image` (all images use Next.js Image component)
- **Font Optimization** - Use `next/font`

## Images and Assets

All images use Next.js `<Image>` component for automatic optimization:

```tsx
import Image from 'next/image'
import logo from '@/assets/images/logo.svg'

// Fixed size
<Image src={logo} alt="Logo" className="h-16 w-auto" />

// Fill parent container
<div className="relative h-64">
  <Image src={bg} alt="" fill className="object-cover" />
</div>
```

**Import pattern:**

- Import images directly from their paths
- No barrel exports (`index.ts`) in assets folder
- Next.js automatically optimizes all imported images

## When to Add State Management

**TanStack Query** - Add when you need:

- Server data fetching
- Caching and synchronization
- Optimistic updates

**Zustand** - Add when you need:

- Global client state (modals, filters)
- State shared across multiple components
- Simple, flat state management

Don't add directories or files until you actually need them. Start with Server Components and URL state.
