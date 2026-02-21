# Landing Page Design — Edge-n-Engage (devsinc.com Clone)

**Date:** 2026-02-21
**Status:** Approved
**Reference:** https://www.devsinc.com/

---

## Overview

Build a pixel-accurate clone of the devsinc.com landing page using Next.js 16, TypeScript, and Tailwind CSS. Assets will initially use the original site's assets, to be swapped with custom assets later. The project is structured for easy extension to inner pages.

---

## Tech Stack

| Concern | Solution |
|---|---|
| Framework | Next.js 16.1 (App Router, Turbopack) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Forms | React Hook Form + Zod (schema validation) |
| Carousels | embla-carousel-react |
| Fonts | next/font — Montserrat (primary), Oswald |
| Icons | lucide-react |
| Animations | Tailwind animate + CSS transitions + React 19 View Transitions |
| Images | next/image (priority on hero) |
| Phone input | react-international-phone |
| React Compiler | Enabled (auto memoization) |

---

## Color Tokens

| Token | Value | Usage |
|---|---|---|
| `--color-teal` | `#0ebab1` | Primary accent, CTAs, highlights |
| `--color-bg` | `#000000` | Page background |
| `--color-surface` | `#111111` | Card surfaces |
| `--color-text` | `#ffffff` | Primary text |
| `--color-muted` | `#9ca3af` | Secondary text |

---

## Typography

- **Primary font:** Montserrat (weights 400, 600, 700, 800, 900) via `next/font/google`
- **Secondary font:** Oswald (used for some headings)
- **Base size:** 16px, scale via Tailwind

---

## Project Structure

```
edge-n-engage/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, global styles)
│   └── page.tsx                # Landing page (composes all sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar with dropdowns
│   │   └── Footer.tsx          # 5-column footer
│   └── sections/
│       ├── HeroSection.tsx
│       ├── LogoStripSection.tsx
│       ├── ServicesSection.tsx
│       ├── IndustriesSection.tsx
│       ├── AwardsSection.tsx
│       ├── PartnershipsSection.tsx
│       ├── InsightsSection.tsx
│       ├── StatsSection.tsx
│       ├── CareersSection.tsx
│       ├── LeadershipSection.tsx
│       └── ContactFormSection.tsx
├── components/
│   └── ui/
│       ├── Button.tsx
│       ├── ServiceCard.tsx
│       ├── IndustryCard.tsx
│       ├── InsightCard.tsx
│       ├── LeaderCard.tsx
│       └── ContactForm.tsx
├── lib/
│   └── validations/
│       └── contact.ts          # Zod schema for contact form
├── public/
│   └── assets/                 # Images, icons, logos
├── tailwind.config.ts
└── next.config.ts
```

---

## Landing Page Sections (in order)

### 1. Navbar
- Sticky, black background, full-width
- Left: D logo icon + wordmark
- Center: 5 dropdown nav items (What we do / Who we help / Who We Are / How we deliver / Join devsinc)
- Right: dark mode toggle + "Explore Careers" (outlined teal) + "Let's Talk Business" (filled teal) + "Global" dropdown
- Mobile: hamburger collapse menu
- Side drawer: "Let's Talk Business" form slides in from right (with Zod-validated contact form)

### 2. Hero Section
- Full-viewport height
- Background: dark city skyline image (`next/image` with `fill` + `priority`)
- Dark overlay gradient
- Bold white H1: "Building at the Speed of AI"
- White paragraph subtext
- Teal pill CTA button: "Get in Touch" → /contact
- "Featured In:" label + 6 publication logos in a row (Forbes, Business Insider, NY Weekly, Mashable, Khaleej Times, Yahoo Finance)
- Fixed vertical "Let's Talk Business" tab on right edge (opens side drawer)

### 3. Logo Strip / Awards Bar
- White background strip
- Horizontal auto-scrolling carousel of partner/award logo images

### 4. Services Section
- Background: white
- Section label: "Our Services" (teal, small caps)
- H2: "Transform Your Business"
- Responsive grid: 4 cols desktop, 2 cols tablet, 1 col mobile
- ~29 service cards: dark card, icon top-left, service name, teal hover border
- "View More Services" toggle to show/hide additional cards

### 5. Industries Section
- Background: dark/black
- H2: "Discover our Impact Across Industries"
- 5-col grid (desktop) of 10 industry cards: icon + title, hover teal highlight
- Full-width teal CTA band: "Let's Talk Business" button

### 6. Awards & Certifications
- Centered H2: "Awards and Certifications"
- Horizontal row of award badge images

### 7. Partnerships Section
- Background: white
- H2: "Our Partnerships"
- Logo carousel (embla-carousel-react, auto-scroll)

### 8. Featured Insights
- Dark background
- Left column: "Featured Insights" label, H2: "Stories of our transformations...", "Explore More" CTA
- Right: masonry-style grid of 7 cards (image, tag pill, H3 title, "Explore More" arrow link)
- Card types: Case Study (teal tag) and Blog (gray tag)

### 9. Stats / Achievements Section
- Split layout: dark left panel + dark right panel
- Left: "Pioneering Trust and Innovation" label, H2: "Devsinc's Achievements", paragraph, "Get in Touch" CTA
- Right: 2×2 grid of stat items (number in large teal/white, label below)
  - 3,000+ Successful Projects
  - 23+ Countries Supported
  - 250+ Active Clients
  - 15+ Years of Enablement Experience

### 10. Careers CTA Section
- Dark background, two-column layout
- Left: office/team photo
- Right: "careers" label, H2: "Human-first is our foundation.", subtext, "Join Us" teal button → /career

### 11. Global Leadership Carousel
- H2: "Our Global Leadership" + prev/next arrow buttons
- Horizontal embla-carousel of 10 leader cards
- Card: circular photo, name, title, LinkedIn icon link
- 10 leaders: Usman Asif (Founder & CEO), Qamar Abbas Sipra (CFO), Maria Sadaf (Chief of Staff), Badar Shafiq (Chief Delivery Officer), Atta Ur Rahman (CBO), Moiz Saleem Varind (Head of Global Marketing), Rehmat Qadir (Sr. VP Sales), Umar Farooq (Sr. VP E-Commerce), Ahmed Waqas (VP Human Assets), Yasir Barkat (VP Professional Services)

### 12. Contact Form Section
- Two-column layout
- Left: H2 "Get In Touch", full contact form
  - Fields: Full Name, Email, Phone (with country selector), Company Name, Company URL, Region (dropdown), Services checkboxes (8 options), Project Details (textarea), Job inquiry dropdown
  - Zod schema validates all required fields
  - React Hook Form handles state + submission
  - Submit button (teal, full-width)
- Right top: "Global Presence" card (globe icon, heading, paragraph, "Learn more" link)
- Right bottom: "Global Leaders" card (people icon, heading, paragraph, "Learn more" link)

### 13. Footer
- Dark background, 5-column top section:
  1. Company (Home, About, Careers)
  2. Industries We Serve (10 links)
  3. Services and Solutions (30+ links, collapsed accordion on mobile)
  4. Resources (Blogs, Case Studies, etc.)
  5. Regional Offices (expandable on mobile)
- Office addresses: Pakistan, USA, UAE, UK, KSA
- Email: global.business@devsinc.com
- Bottom bar: Terms & Conditions | Privacy Policy | social icons (FB, LinkedIn, Instagram, X)
- Logo + copyright

---

## Form Validation (Zod Schema)

```typescript
// lib/validations/contact.ts
import { z } from "zod"

export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  companyName: z.string().min(1, "Company name is required"),
  companyUrl: z.string().url().optional().or(z.literal("")),
  region: z.string().min(1, "Please select a region"),
  services: z.array(z.string()).min(1, "Select at least one service"),
  projectDetails: z.string().min(10, "Please describe your project"),
  lookingForJob: z.enum(["Yes", "No", "Please Select"]),
  pageUrl: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>
```

---

## Responsive Breakpoints

| Breakpoint | Width | Notes |
|---|---|---|
| mobile | < 768px | Single column, hamburger nav |
| tablet | 768px–1024px | 2-col grids, condensed nav |
| desktop | > 1024px | Full layout as designed |

---

## Implementation Notes

- All sections are React Server Components by default; interactive carousels/forms use `"use client"`
- Hero background image loaded with `priority` to avoid LCP penalty
- `"use cache"` directive on static data sections (services list, industries list, leadership data)
- React Compiler enabled in `next.config.ts` for auto memoization
- Turbopack is the default bundler (no config needed in Next.js 16)
- `proxy.ts` used instead of deprecated `middleware.ts`

---

## Assets (Initial)

All images sourced from devsinc.com for scaffolding. To be replaced with custom assets in a later phase.

- Hero background: Dubai/city skyline night photo
- Publication logos: Forbes, Business Insider, NY Weekly, Mashable, Khaleej Times, Yahoo Finance
- Service icons: SVG icons per service
- Industry icons: SVG icons per industry
- Leadership photos: team headshots
- Award badges: certification/award images
