# UzGeeks v3

A modern corporate event organizing website built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Features

- ✓ Next.js 15 with App Router
- ✓ TypeScript strict mode
- ✓ Tailwind CSS v4 with custom design tokens
- ✓ Server Components by default
- ✓ SEO optimized with metadata API
- ✓ Responsive design
- ✓ Self-hosted fonts (Montserrat, Nunito Sans)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/uzgeeks-v3.git
cd uzgeeks-v3

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev         # Start Next.js dev server
npm run build       # Build for production
npm start           # Start production server
npm run lint        # Run Next.js ESLint
npm run type-check  # Run TypeScript type checking
```

## Tech Stack

| Layer     | Tool                    |
| --------- | ----------------------- |
| Framework | Next.js 15 (App Router) |
| Language  | TypeScript (strict)     |
| Styling   | Tailwind CSS v4         |
| Icons     | Lucide React            |

## Project Structure

```
app/                       # Next.js App Router
├── (pages)/               # Route group for standard pages
│   ├── events/page.tsx    # /events route
│   ├── about/page.tsx     # /about route
│   └── layout.tsx         # Shared layout (Header + Footer)
├── layout.tsx             # Root layout
├── page.tsx               # Home page
└── globals.css            # Tailwind v4 imports

src/
├── components/
│   ├── home/              # Home page sections
│   ├── layout/            # Header, Footer
│   └── ui/                # Reusable components
├── data/                  # Static data
├── lib/                   # Utils, constants
├── styles/                # Design tokens
└── types/                 # TypeScript types
```

## Routes

- `/` - Home page with hero, events, about sections
- `/events` - Events listing page
- `/about` - About page

## Documentation

- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Architecture and structure guide
- [CLAUDE.md](./CLAUDE.md) - Development guidelines and conventions

## Development

### Adding a New Page

Create a new page in `app/(pages)/`:

```tsx
// app/(pages)/partners/page.tsx
export default function Partners() {
  return (
    <section>
      <h1>Our Partners</h1>
    </section>
  )
}
```

Automatically gets Header and Footer from the layout.

### Server vs Client Components

**Default to Server Components** - only add `'use client'` when you need:

- React hooks (useState, useEffect, etc.)
- Event handlers (onClick, onChange, etc.)
- Browser APIs (localStorage, window, etc.)

### Design Tokens

All design tokens are in `src/styles/variables.css` using Tailwind's `@theme`:

```css
@theme {
  --color-brand: #38bfc4;
  --color-body: #1e1e1e;
  --font-size-base: 16px;
  --spacing-section: 96px;
}
```

Use in components:

```tsx
<div className="text-brand py-[--spacing-section]">
  Content
</div>
```

## Code Quality

- TypeScript strict mode enabled
- Next.js ESLint configured
- Zero `any` types allowed
- All components properly typed
- Consistent icon sizing
- Accessible navigation

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```bash
# Build
docker build -t uzgeeks-v3 .

# Run
docker run -p 3000:3000 uzgeeks-v3
```

### Manual

```bash
# Build
npm run build

# Start
npm start
```

## Environment Variables

Create `.env.local` for local development:

```env
# API URLs
NEXT_PUBLIC_API_URL=https://api.example.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT

## Links

- [UzGeeks Community](https://uzgeeks.uz)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com)
