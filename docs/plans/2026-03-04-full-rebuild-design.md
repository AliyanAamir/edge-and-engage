# Full Website Rebuild — Edge and Engage

**Date:** 2026-03-04
**Status:** Approved
**Visual Direction:** Option A — Dark Editorial Agency
**Reference:** https://kota.co.uk/blog/5-beautifully-designed-agency-websites-and-what-you-can-learn-from-them

---

## Design Inspiration

Five agency principles distilled:
- **KOTA** — website as experience; movement, depth, energy, personality
- **ISI Global** — clean foundation + one strategic accent color; scroll-triggered animations; serif + sans-serif pairing
- **Pixel Artworks** — atmospheric, sensory, rich contrast, motion throughout
- **Tangerine** — editorial boldness, big typography, Lottie/After Effects animations, let work breathe
- **Stepping Stone** — smooth usability, clean layout, strategic flair, adaptive

---

## Tech Stack

| Concern | Solution |
|---|---|
| Framework | Next.js 16.1 (App Router, Turbopack) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Animations | **Framer Motion** — all micro-animations, scroll reveals, page transitions |
| Forms | React Hook Form + Zod |
| Email | **Resend** + @react-email/components |
| Fonts | next/font — **Syne** (display) + **Inter** (body) |
| Icons | lucide-react |
| Carousels | embla-carousel-react |
| Phone input | react-international-phone |

---

## Design System

### Color Tokens

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#050507` | Page background |
| `--color-surface` | `#0d0d14` | Cards, panels |
| `--color-surface-2` | `#13131f` | Elevated cards, modals |
| `--color-violet` | `#7c3aed` | Primary accent, CTAs, highlights |
| `--color-violet-light` | `#a78bfa` | Hover states, glow edges |
| `--color-violet-glow` | `rgba(124,58,237,0.15)` | Card glow, ambient backgrounds |
| `--color-text` | `#ffffff` | Primary text |
| `--color-muted` | `#71717a` | Secondary text, captions |
| `--color-border` | `rgba(255,255,255,0.08)` | Card borders, dividers |

### Typography

| Role | Font | Weight | Size Range |
|---|---|---|---|
| Display headings | Syne | 700–800 | 4xl–8xl |
| Section headings | Syne | 600–700 | 2xl–4xl |
| Body copy | Inter | 400 | base–lg |
| Labels / caps | Inter | 500–600 | xs–sm, tracked |
| Stat numbers | Syne | 800 | 4xl–7xl |

### Animation System (Framer Motion)

| Pattern | Trigger | Where Used |
|---|---|---|
| Fade-up reveal (`y: 40→0, opacity: 0→1`) | Scroll into view | Every section entry |
| Stagger children (`staggerChildren: 0.08s`) | Parent enters view | Card grids, nav links, list items |
| Magnetic button (mouse-follow offset) | Mouse proximity | All CTAs and primary buttons |
| Number count-up | Viewport enter | Stats section |
| Page route transition (opacity + y slide) | Route change | Every route |
| Hover card lift (`y: -4px, border violet`) | Mouse enter | Service/industry/blog cards |
| Navbar scroll-shrink + blur backdrop | Scroll Y > 50 | Sticky nav |
| Floating violet orb parallax | Scroll Y | Hero background |
| Text reveal (clip-path mask) | Mount | Hero H1, major headings |

---

## Page Map (13 page templates)

| Route | Template Type | Description |
|---|---|---|
| `/` | Static | Full landing page — 10 sections |
| `/about-us` | Static | Company story, timeline, culture, offices, leadership |
| `/contact` | Static + Form | Resend form, offices, FAQ |
| `/services` | Static | Filterable grid of all 30 services |
| `/services/[slug]` | Dynamic | 30 service detail pages via one template |
| `/articles` | Static | Blog listing — card grid, tag filter |
| `/articles/[slug]` | Dynamic | Blog post — reading progress, related posts |
| `/case-studies` | Static | Case study listing — industry filter |
| `/case-studies/[slug]` | Dynamic | Case study detail — Challenge/Solution/Results |
| `/careers` | Static | Culture, values, job listings → Workable |
| `/not-found` | Static | Animated 404 page |

---

## Page-by-Page Breakdown

### Home (`/`)

10 sections in order:

1. **Navbar** — sticky, scroll-blur backdrop (`backdrop-blur`), violet hover underlines, mega-menu with stagger-in animation, "Let's Talk Business" slide-in drawer (right side), mobile hamburger
2. **Hero** — full-viewport, floating violet orb parallax (Framer Motion), clip-path text reveal on H1 "Building at the Speed of AI", subheading fade-in, violet pill CTA button, "Featured in" logo strip with publication names
3. **Services Preview** — dark surface bg, 4-col responsive card grid, glass cards with violet glow on hover, "View All Services" link → `/services`
4. **Stats Band** — full-width violet-tinted strip, 4 animated count-up numbers: 3,000+ Projects / 23+ Countries / 250+ Clients / 15+ Years
5. **Industries** — dark bg, 5×2 icon grid, hover reveals violet border + label; full-width violet CTA band below
6. **Why E&E** — split layout: left bold Syne statement headline, right 3 feature pills with violet icons and descriptions
7. **Insights Preview** — masonry 3-card grid, tag pills (Case Study = violet, Blog = zinc), arrow links to detail pages
8. **Leadership Carousel** — Framer Motion draggable carousel, circular headshots, name + title + LinkedIn icon
9. **Global Presence** — animated SVG world map with 5 office pin markers, hover tooltip with address
10. **Contact CTA** — full-width dark section, large Syne heading, two violet buttons ("Get in Touch" + "Explore Careers")

---

### About Us (`/about-us`)

5 sections:
1. **Hero banner** — page title + company story paragraph, violet underline accent
2. **Mission + Vision** — two-col split with large stat numbers
3. **Timeline** — horizontal scroll timeline (founding → now), Framer Motion scroll-snap
4. **Culture grid** — 6 value cards with violet icons
5. **Global offices accordion** — 5 offices, expand/collapse with Framer layout animation
6. **Leadership grid** — photo grid of all leaders with name/title overlay on hover

---

### Contact (`/contact`)

- Two-col layout (desktop), stacked (mobile)
- **Left:** Full Resend-powered contact form
  - Fields: Full Name, Email, Phone (country selector), Company Name, Services (checkboxes), Message (textarea)
  - Zod validation, React Hook Form
  - Submit → Resend API route → confirmation toast
- **Right:** Office addresses list + FAQ accordion (Framer AnimatePresence for open/close)

---

### Services Overview (`/services`)

- Filterable pill tabs: All / AI & Data / Cloud / Web & Mobile / Gaming / Engineering / Business Apps
- Animated grid of all 30 service cards (stagger on tab change)
- Each card: violet icon, service name, one-line description, arrow link → `/services/[slug]`

---

### Service Detail (`/services/[slug]`)

6 sections (one dynamic template for all 30 slugs):
1. Hero — service name, description, violet CTA
2. Overview — what it is, key benefits list
3. Cards grid — 3–4 feature cards
4. Tech Stack — violet pills
5. Why Choose Us — 3 bullet points with icons
6. CTA — "Let's Talk" form drawer trigger

---

### Blog Listing (`/articles`)

- Hero with "Latest Insights" heading
- Tag filter row (All, AI, Cloud, Web, Gaming, etc.)
- 3-col card grid — image placeholder, tag pill, title, excerpt, date, read-time
- Pagination

---

### Blog Post (`/articles/[slug]`)

- Reading progress bar (violet, top of viewport)
- Hero image + title + author + date
- Full article body (prose styles)
- Related posts row at bottom (3 cards)

---

### Case Studies (`/case-studies`)

- Hero heading
- Industry filter tabs
- 2-col card grid — client logo placeholder, industry tag, title, brief description
- Hover reveals full card overlay with "View Case Study" CTA

---

### Case Study Detail (`/case-studies/[slug]`)

- Hero — client name, industry, headline
- 3-col stat strip — animated count-up results
- Challenge section
- Solution section (with tech stack pills)
- Results section — large bold numbers with context
- Related case studies row

---

### Careers (`/careers`)

- Hero — "Join Edge and Engage"
- 3 culture value cards
- Team photo grid (placeholder)
- Open roles section — card list linking to Workable (`apply.workable.com/edge-and-engage/`)
- "Don't see your role? Send us your CV" CTA

---

### 404 Page

- Full-viewport dark
- Animated violet glitch "404" (Framer Motion keyframes)
- "This page doesn't exist" subtext
- "Back to Home" violet button

---

## Contact Form — Resend Integration

```
POST /api/contact
Body: ContactFormData (Zod validated)
→ Resend.send({ from, to: global.business@edgeandenggage.com, react: ContactEmail })
→ 200 OK + confirmation toast
```

API key stored in `RESEND_API_KEY` env variable (user to provide after build).

---

## Responsive Breakpoints

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 768px | Single column, hamburger nav, stacked layouts |
| Tablet | 768px–1024px | 2-col grids, condensed nav |
| Desktop | > 1024px | Full layout as designed |

---

## Project Structure (post-rebuild)

```
edge-n-engage/
├── app/
│   ├── layout.tsx                    # Root layout — fonts, metadata, Framer providers
│   ├── page.tsx                      # Home
│   ├── globals.css                   # CSS tokens + base styles
│   ├── about-us/page.tsx
│   ├── contact/page.tsx
│   ├── careers/page.tsx
│   ├── services/
│   │   ├── page.tsx                  # Services overview
│   │   └── [slug]/page.tsx           # Dynamic service detail
│   ├── articles/
│   │   ├── page.tsx                  # Blog listing
│   │   └── [slug]/page.tsx           # Blog post
│   ├── case-studies/
│   │   ├── page.tsx                  # Case studies listing
│   │   └── [slug]/page.tsx           # Case study detail
│   ├── api/
│   │   └── contact/route.ts          # Resend API route
│   └── not-found.tsx                 # 404 page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── SideDrawer.tsx
│   ├── sections/                     # Home page sections
│   ├── service-page/                 # Service detail sections
│   ├── about/                        # About page sections
│   ├── blog/                         # Blog components
│   ├── case-studies/                 # Case study components
│   └── ui/                           # Shared UI primitives
├── lib/
│   ├── data/                         # All static content data
│   ├── validations/contact.ts        # Zod schema
│   └── utils.ts
├── emails/
│   └── ContactEmail.tsx              # React Email template
└── public/
```

---

## Quality Checklist (pre-launch)

- [ ] All nav links and buttons are functional (no dead `href="#"`)
- [ ] Contact form submits via Resend (API key needed from user)
- [ ] All 30 service slugs resolve without 404
- [ ] All 10 industry slugs resolve without 404
- [ ] Mobile layout fully tested at 375px, 430px, 768px
- [ ] All Framer Motion animations work on reduced-motion preference
- [ ] No console errors in production build
- [ ] `next build` passes with zero TypeScript errors
- [ ] All external links (Workable, socials) open in new tab with `rel="noopener"`
