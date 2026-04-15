# Mall of America — Interactive Sales Deck

A purpose-built, cinematic interactive sales tool for **Mall of America** (Bloomington, Minnesota). This is not a slide deck — it's a non-linear, video-first, luxury-grade web experience designed to convert three distinct commercial audiences.

---

## Live Demo

🔗 **[https://moa-deck.vercel.app](https://moa-deck.vercel.app)**

---

## Target Audiences

| Audience | Goal |
|---|---|
| 🏪 Retail Tenants | Brands wanting to open a store or flagship |
| 🤝 Corporate Sponsors | Brands seeking activations & partnerships |
| 🎤 Event Organizers | Booking concerts, launches, conventions |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 8 |
| Styling | Vanilla CSS (design tokens, BEM) |
| Animation | CSS keyframes + IntersectionObserver |
| Video | YouTube iframe API (with postMessage mute control) |
| Fonts | Playfair Display, Inter, JetBrains Mono (Google Fonts) |
| Deployment | Vercel |

---

## Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/suthardinesh626/get-into-mall.git
cd get-into-mall/mall-of-america-deck

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → http://localhost:3000

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
```

---

## Design Decisions

### 1. Non-Linear Navigation
A fixed dot-navigation sidebar allows users to jump to any section at any time. This mirrors the DigiDeck pattern — the user controls the journey, not a forced slide order.

### 2. Video as Primary Medium
YouTube iframes are embedded with `autoplay`, `mute`, `loop`, and `controls=0`. The Hero mute/unmute control uses `postMessage` with `enablejsapi=1` so React state stays in sync with the iframe's audio state — no full re-render needed.

### 3. CSS-Only Animations
All animations (stat counters, bar charts, section reveals, gold-line transitions) use CSS keyframes + IntersectionObserver. No GSAP or external animation library — keeps the bundle lean and Lighthouse score high.

### 4. Luxury Aesthetic
- **Palette:** Pure black backgrounds, 24K gold (`#C9A84C`) accents, white typography
- **Typography:** Playfair Display (editorial display) + Inter (body) + JetBrains Mono (data)
- **Glassmorphism:** `backdrop-filter: blur()` used sparingly on overlaid UI controls
- **Custom Cursor:** 8px gold dot → 32px ring on hover (desktop only, respects `hover: none`)

### 5. Section Transitions
Between each section a `SectionTransition` component draws a gold line (CSS `width` transition) and reveals a monospaced section label (`01 / WHY THIS PROPERTY`) — communicating structure without a traditional nav bar.

### 6. Loading Screen
A luxury-grade loading screen (no spinner): MOA wordmark fades in → gold progress bar fills over 2s → entire screen fades out → Hero fades in. Avoids the "loading spinner" pattern common in cheap web apps.

### 7. Performance
- Code-split sections via React `lazy()` + `Suspense`
- Images served with `loading="lazy"` and explicit dimensions
- No render-blocking scripts
- CSS design tokens prevent duplicate property values
- Vite `manualChunks` groups vendor/animations into separate bundles

---

## AI Tools Used

- **Antigravity (Google DeepMind)** — Primary AI pair programmer used for:
  - Component architecture and layout decisions
  - CSS animation design (gold line draws, stat counters, bar charts)
  - YouTube postMessage API integration
  - Responsive layout debugging (Leasing overflow fix)
  - Deployment configuration and Vite build error resolution

All AI suggestions were reviewed, tested, and refined manually before integration.

---

## What I Would Improve With More Time

| Priority | Improvement |
|---|---|
| 🔴 High | Replace all YouTube placeholder videos with official MOA marketing footage |
| 🔴 High | Replace placeholder images with official MOA photography from their press kit |
| 🟡 Medium | Integrate lite-youtube-embed for a 90% reduction in initial video load time |
| 🟡 Medium | Add a real backend for the Leasing contact form (Resend / SendGrid) |
| 🟡 Medium | Add a CMS layer (Sanity.io or Contentful) so the MOA marketing team can update stats/copy without a developer |
| 🟢 Low | Add page transition animations between "sub-deck" views using React Router |
| 🟢 Low | Implement analytics (PostHog) to track which sections get the most engagement |
| 🟢 Low | Add a PDF export mode for the sales deck to be downloadable as a leave-behind |
| 🟢 Low | Conduct a full WCAG 2.1 audit and add keyboard navigation for all interactive components |

---

## Project Structure

```
src/
├── components/
│   ├── CustomCursor.jsx      # Gold dot cursor with hover ring
│   ├── LoadingScreen.jsx     # Luxury loading experience
│   ├── Navigation.jsx        # Fixed dot-nav sidebar
│   ├── SectionTransition.jsx # Gold line + section label
│   ├── StatCounter.jsx       # rAF count-up with IntersectionObserver
│   ├── VideoBackground.jsx   # YouTube iframe + direct video support
│   └── CTAButton.jsx         # Reusable gold/outline button
├── sections/
│   ├── Hero.jsx              # Cinematic opener with YouTube BG
│   ├── WhyMOA.jsx            # Data proof + CSS bar charts
│   ├── Retail.jsx            # Horizontal scroll + marquee
│   ├── Luxury.jsx            # Pure black boutique layout
│   ├── Dining.jsx            # Magazine editorial grid
│   ├── Entertainment.jsx     # Theme park energy + horizontal cards
│   ├── Events.jsx            # Venue cards + interactive filter
│   ├── Sponsorship.jsx       # Demographic bars + tier cards
│   └── Leasing.jsx           # Tabbed paths + contact form
├── hooks/
│   └── useScrollAnimation.js # MutationObserver-aware scroll reveals
└── styles/
    ├── tokens.css             # Design tokens (colors, spacing, fonts)
    ├── global.css             # Reset, utilities, glass-card
    └── animations.css         # Shared keyframe library
```

---

*Built as a screening assignment — Mall of America Interactive Sales Deck.*
