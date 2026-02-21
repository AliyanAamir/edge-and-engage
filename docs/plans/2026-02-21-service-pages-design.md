# Service Pages Design

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:writing-plans to create the implementation plan.

**Goal:** Build 4 service pages (Web Development, App Development, Custom Software Development, UX/UI Design) using a shared `ServicePageTemplate` component and per-service data files, following the structure of the devsinc reference site adapted for the Edge and Engage white theme.

**Architecture:** Dynamic route `/app/services/[slug]/page.tsx` with `generateStaticParams`. All pages use a single `ServicePageTemplate` that renders sections from a typed `ServicePageData` object. Each service has its own data file in `lib/data/service-pages/`.

**Tech Stack:** Next.js 16.1.6 App Router, TypeScript strict, Tailwind CSS v4, existing `InsightCard` + `ContactFormSection` + `Navbar` + `Footer` components.

---

## Routing

- Route: `app/services/[slug]/page.tsx`
- Slugs: `website-development`, `mobile-development`, `custom-development`, `ui-ux-design`
- Static generation via `generateStaticParams`
- Each page has unique `<title>` and `<description>` metadata

---

## Data Architecture

### Type: `ServicePageData` (`lib/data/service-pages/types.ts`)

```typescript
export interface ServicePageData {
  slug: string
  meta: { title: string; description: string }
  hero: {
    label: string        // e.g. "Services"
    heading: string      // e.g. "Web Development"
    tagline: string      // e.g. "Building Seamless Experiences"
    ctaLabel: string
    ctaHref: string
    backgroundImage: string
  }
  overview: {
    label: string
    heading: string
    description: string
    capabilities: { icon: string; title: string; description: string }[]
  }
  services: {
    heading: string
    items: { title: string; description: string }[]
  }
  whyChooseUs: {
    heading: string
    points: { title: string; description: string }[]
  }
  industries: string[]
  techStack: { name: string; src: string }[]
  cta: {
    heading: string
    subtext: string
    ctaLabel: string
    ctaHref: string
  }
}
```

### Data files
- `lib/data/service-pages/types.ts` — shared types
- `lib/data/service-pages/web-development.ts`
- `lib/data/service-pages/mobile-development.ts`
- `lib/data/service-pages/custom-development.ts`
- `lib/data/service-pages/ui-ux-design.ts`
- `lib/data/service-pages/index.ts` — exports all pages, keyed by slug

---

## Section Breakdown & Components

All components live in `components/service-page/`.

### 1. ServiceHero
- Full-viewport hero with dark gradient overlay over background image
- Left-aligned: label (teal), large heading, tagline, CTA button (teal pill)
- Reuses the same visual pattern as `HeroSection`

### 2. EngagementModels
- White section, 3 cards side by side: Onshoring, Offshoring, Nearshoring
- Each card: icon, title, short description
- **Identical content across all service pages** — no per-page data needed
- Standalone component with hardcoded content

### 3. ServiceOverview
- Gray-50 background, left: heading + description, right: 2×2 grid of capability cards
- Each capability card: small icon, title, 1-line description

### 4. ServiceCards
- White background, heading + responsive grid of cards
- Each card: bold title + description paragraph
- Card count varies by service (6–10 items)

### 5. WhyChooseUs
- Gray-50 background, heading + 2×2 grid of differentiator points
- Each point: teal number/icon, bold title, description

### 6. IndustriesServed
- White background, heading + flex-wrap of teal-bordered pill tags
- Industry names from per-page data

### 7. TechStack
- Gray-50 background, heading + responsive logo grid
- Uses `next/image` with `unoptimized` (external URLs)

### 8. FeaturedInsights (reused)
- Already exists as `InsightsSection` on the landing page
- Reuse the same component — no changes needed

### 9. ServiceCTA
- Teal background, centered heading + subtext + white CTA button
- Per-page heading/subtext from data

### 10. ContactFormSection (reused)
- Already exists, reused as-is

---

## ServicePageTemplate

`components/service-page/ServicePageTemplate.tsx` — server component that:
1. Receives `ServicePageData`
2. Renders all 10 sections in order
3. Reuses `InsightsSection` and `ContactFormSection` from landing page

---

## Page File

`app/services/[slug]/page.tsx`:
```typescript
import { allServicePages } from "@/lib/data/service-pages"
import ServicePageTemplate from "@/components/service-page/ServicePageTemplate"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return Object.keys(allServicePages).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const page = allServicePages[params.slug]
  if (!page) return {}
  return { title: page.meta.title, description: page.meta.description }
}

export default function ServicePage({ params }) {
  const page = allServicePages[params.slug]
  if (!page) notFound()
  return <ServicePageTemplate data={page} />
}
```

---

## White Theme Consistency

- All sections follow the same bg alternation: `bg-white` / `bg-gray-50`
- Headings: `text-gray-900`
- Body: `text-gray-500`
- Accent: `text-[var(--color-teal)]` / `border-[var(--color-teal)]`
- CTA section: `bg-[var(--color-teal)]` with `text-black`
- No dark backgrounds except `ServiceHero` overlay (same as landing HeroSection)

---

## Files to Create

```
app/services/[slug]/page.tsx
lib/data/service-pages/types.ts
lib/data/service-pages/web-development.ts
lib/data/service-pages/mobile-development.ts
lib/data/service-pages/custom-development.ts
lib/data/service-pages/ui-ux-design.ts
lib/data/service-pages/index.ts
components/service-page/ServicePageTemplate.tsx
components/service-page/ServiceHero.tsx
components/service-page/EngagementModels.tsx
components/service-page/ServiceOverview.tsx
components/service-page/ServiceCards.tsx
components/service-page/WhyChooseUs.tsx
components/service-page/IndustriesServed.tsx
components/service-page/TechStack.tsx
components/service-page/ServiceCTA.tsx
```

**Reused (no changes):**
```
components/sections/InsightsSection.tsx
components/sections/ContactFormSection.tsx
components/layout/Navbar.tsx
components/layout/Footer.tsx
```
