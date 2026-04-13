# Mall of America — Interactive Sales Deck

A purpose-built, cinematic interactive sales tool for **Mall of America** (Bloomington, Minnesota).
Designed as a premium DigiDeck-style presentation for 3 audiences:
- 🏪 Retail Tenants
- 🤝 Corporate Sponsors
- 🎤 Event Organizers

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 + Vite |
| Styling | Vanilla CSS with design tokens |
| Animations | GSAP + CSS keyframes |
| Fonts | Playfair Display · Inter · JetBrains Mono |
| Deployment | Vercel / Netlify ready |

## Project Structure

```
mall-of-america-deck/
├── index.html               ← App shell with OG meta, font preloads
├── vite.config.js           ← Build config with code splitting
├── src/
│   ├── App.jsx              ← Lazy-loaded section orchestrator
│   ├── main.jsx             ← React entry point
│   ├── sections/
│   │   ├── Hero.jsx/.css          ← Cinematic hero with audience switcher
│   │   ├── WhyMOA.jsx/.css        ← Stats + 4-pillar value proposition
│   │   ├── Retail.jsx/.css        ← Leasing opportunities (3 formats)
│   │   ├── Luxury.jsx/.css        ← Premium brand ecosystem
│   │   ├── Dining.jsx/.css        ← F&B leasing
│   │   ├── Entertainment.jsx/.css ← 4 attraction categories
│   │   ├── Events.jsx/.css        ← Concert/launch/convention booking
│   │   ├── Sponsorship.jsx/.css   ← 3-tier sponsorship packages
│   │   └── Leasing.jsx/.css       ← Contact + inquiry form
│   ├── components/
│   │   ├── Navigation.jsx/.css    ← Fixed side-dot nav (8 sections)
│   │   ├── LoadingScreen.jsx/.css ← 3-phase loading animation
│   │   ├── VideoBackground.jsx    ← Lazy autoplay video wrapper
│   │   ├── StatCounter.jsx        ← Viewport-triggered count-up
│   │   ├── CTAButton.jsx          ← Primary/outline/ghost variants
│   │   └── SectionTransition.jsx  ← Section connector decorations
│   ├── hooks/
│   │   ├── useScrollAnimation.js  ← IntersectionObserver + count-up
│   │   └── useVideoAutoplay.js    ← Video play/pause on scroll
│   └── styles/
│       ├── tokens.css             ← All CSS variables / design tokens
│       ├── global.css             ← Reset, typography, utilities
│       └── animations.css         ← Keyframes + reveal classes
└── public/
    ├── videos/                    ← Drop .mp4 files here
    ├── images/                    ← Drop images here
    └── fonts/                     ← Self-hosted font fallbacks
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Design System

### Colors
| Token | Value | Use |
|-------|-------|-----|
| `--color-gold` | `#C9A84C` | Primary accent |
| `--color-gold-light` | `#E8C87A` | Gradient highlight |
| `--color-surface` | `#0A0A0A` | Primary background |
| `--color-surface-2` | `#111111` | Alternate sections |
| `--color-surface-3` | `#1A1A1A` | Cards/elevated |

### Fonts
- **Playfair Display** — hero headlines, section titles
- **Inter** — body, UI elements, labels
- **JetBrains Mono** — statistics, numbers, codes

## Navigation

The fixed right-side navigation supports:
- **Click** → smooth scroll to section
- **Arrow keys (↑↓)** → navigate between sections
- **Hover** → section name label reveals
- **Active state** → gold dot with glow effect

## Adding Videos

Drop `.mp4` files in `/public/videos/` and reference them in any section:

```jsx
<VideoBackground src="/videos/hero-reel.mp4" poster="/images/hero-poster.jpg" />
```

## Deployment

### Vercel (recommended)
```bash
npm run build
# Push to GitHub → connect to Vercel → auto-deploy
```

### Netlify
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"
```

## Sections

| # | Section | Audience | CTA |
|---|---------|----------|-----|
| 1 | Hero | All | Explore / Contact |
| 2 | Why MOA | All | → Retail |
| 3 | Retail | Tenants | Lease Inquiry |
| 4 | Luxury | Premium Tenants | Luxury Lease |
| 5 | Dining | F&B Operators | F&B Inquiry |
| 6 | Entertainment | Sponsors | Partnerships |
| 7 | Events | Event Organizers | Book Event |
| 8 | Sponsorship | Corporate Sponsors | Get Proposal |
| 9 | Partners | All | Contact Form |

---

*Built as a screening assignment for Mall of America partnership sales.*
