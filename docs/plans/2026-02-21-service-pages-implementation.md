# Service Pages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Build 4 service pages (Web Development, App Development, Custom Software, UX/UI Design) using a shared `ServicePageTemplate` + per-service data files under a dynamic Next.js route `/services/[slug]`.

**Architecture:** `app/services/[slug]/page.tsx` with `generateStaticParams`. All pages share one `ServicePageTemplate` component that renders 10 sections. Content lives in `lib/data/service-pages/`. Components live in `components/service-page/`. Reuses existing `InsightsSection`, `ContactFormSection`, `Navbar`, `Footer`.

**Tech Stack:** Next.js 16.1.6 App Router, TypeScript strict, Tailwind CSS v4 (`@import "tailwindcss"`, no `tailwind.config.ts`), lucide-react, existing CSS vars (`--color-teal`, `--color-teal-dark`).

---

## Task 1: Data Types

**Files:**
- Create: `lib/data/service-pages/types.ts`

**Step 1: Create the types file**

```typescript
// lib/data/service-pages/types.ts

export interface ServiceCapability {
  title: string
  description: string
}

export interface ServiceItem {
  title: string
  description: string
}

export interface WhyPoint {
  title: string
  description: string
}

export interface ServicePageData {
  slug: string
  meta: {
    title: string
    description: string
  }
  hero: {
    label: string
    heading: string
    tagline: string
    ctaLabel: string
    ctaHref: string
  }
  overview: {
    label: string
    heading: string
    description: string
    capabilities: ServiceCapability[]
  }
  services: {
    heading: string
    items: ServiceItem[]
  }
  whyChooseUs: {
    heading: string
    points: WhyPoint[]
  }
  industries: string[]
  techStack: string[]
  cta: {
    heading: string
    subtext: string
    ctaLabel: string
    ctaHref: string
  }
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add lib/data/service-pages/types.ts
git commit -m "feat: add ServicePageData types"
```

---

## Task 2: Web Development Data

**Files:**
- Create: `lib/data/service-pages/web-development.ts`

**Step 1: Create the data file**

```typescript
// lib/data/service-pages/web-development.ts
import type { ServicePageData } from "./types"

export const webDevelopment: ServicePageData = {
  slug: "website-development",
  meta: {
    title: "Web Development | Edge and Engage",
    description:
      "Build high-performance, scalable web experiences. Edge and Engage delivers custom web development, e-commerce, CMS, and web applications across all industries.",
  },
  hero: {
    label: "Services",
    heading: "Web Development",
    tagline: "Building Seamless Digital Experiences",
    ctaLabel: "Build Your Website Now",
    ctaHref: "/contact",
  },
  overview: {
    label: "What We Do",
    heading: "Enterprise Web Development at Scale",
    description:
      "We craft high-performance web solutions tailored to your business goals. From responsive landing pages to complex enterprise platforms, our engineering teams deliver quality at every layer of the stack.",
    capabilities: [
      {
        title: "Modern Tech Frameworks",
        description: "React, Next.js, Angular, Vue.js — we choose the right stack for your project.",
      },
      {
        title: "Responsive by Default",
        description: "Pixel-perfect across all devices and screen sizes, always.",
      },
      {
        title: "Performance Optimized",
        description: "Core Web Vitals, lazy loading, CDN — built for speed from day one.",
      },
      {
        title: "Security First",
        description: "OWASP best practices, data encryption, and secure API design baked in.",
      },
    ],
  },
  services: {
    heading: "Our Web Development Services",
    items: [
      {
        title: "Custom Web Development",
        description:
          "Bespoke web applications built from the ground up to fit your exact business processes and user needs.",
      },
      {
        title: "E-Commerce Development",
        description:
          "Scalable online stores with seamless checkout, inventory management, and payment integrations.",
      },
      {
        title: "Content Management Systems",
        description:
          "Headless CMS and traditional CMS solutions that empower your team to manage content independently.",
      },
      {
        title: "Web Application Development",
        description:
          "Complex SaaS platforms, dashboards, and business tools with real-time data and rich interactivity.",
      },
      {
        title: "API Integration & Development",
        description:
          "RESTful and GraphQL APIs that connect your web applications with third-party services and internal systems.",
      },
      {
        title: "Website Maintenance & Support",
        description:
          "Ongoing monitoring, updates, and performance tuning to keep your web presence running at peak condition.",
      },
      {
        title: "SEO & Digital Marketing Integration",
        description:
          "Technical SEO foundations, structured data, and marketing tool integrations to drive organic growth.",
      },
      {
        title: "Web Security Solutions",
        description:
          "Vulnerability assessments, SSL, DDoS protection, and compliance-ready security hardening.",
      },
      {
        title: "Performance Optimization",
        description:
          "Audits, caching strategies, and infrastructure tuning to cut load times and improve conversion rates.",
      },
      {
        title: "UI/UX Design Integration",
        description:
          "Design systems, component libraries, and pixel-perfect implementation from Figma to production.",
      },
    ],
  },
  whyChooseUs: {
    heading: "Why Choose Edge and Engage for Web Development",
    points: [
      {
        title: "15+ Years of Engineering Excellence",
        description:
          "A decade and a half of delivering web solutions across 23+ countries gives us the depth to solve any challenge.",
      },
      {
        title: "Full-Stack Ownership",
        description:
          "From UX wireframes to cloud infrastructure, we own the entire delivery chain with no handoffs to unknown subcontractors.",
      },
      {
        title: "Agile & Transparent",
        description:
          "Weekly demos, live dashboards, and direct Slack access — you always know exactly where your project stands.",
      },
      {
        title: "3,000+ Successful Projects",
        description:
          "Our track record across 250+ active clients proves we ship on time, on budget, and above expectations.",
      },
    ],
  },
  industries: [
    "Education",
    "Retail & E-Commerce",
    "Healthcare",
    "Logistics",
    "Finance & Fintech",
    "Travel & Hospitality",
    "Real Estate",
    "Gaming",
  ],
  techStack: [
    "React",
    "Next.js",
    "Angular",
    "Vue.js",
    "TypeScript",
    "Node.js",
    "Express",
    "Laravel",
    "Django",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "Tailwind CSS",
    "Nginx",
  ],
  cta: {
    heading: "Ready to Build Your Web Presence?",
    subtext: "Let's talk about your project — no commitment, just clarity.",
    ctaLabel: "Start a Conversation",
    ctaHref: "/contact",
  },
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add lib/data/service-pages/web-development.ts
git commit -m "feat: add web development service page data"
```

---

## Task 3: Mobile Development Data

**Files:**
- Create: `lib/data/service-pages/mobile-development.ts`

**Step 1: Create the data file**

```typescript
// lib/data/service-pages/mobile-development.ts
import type { ServicePageData } from "./types"

export const mobileDevelopment: ServicePageData = {
  slug: "mobile-development",
  meta: {
    title: "Mobile App Development | Edge and Engage",
    description:
      "Custom mobile apps for iOS and Android. Edge and Engage builds native, cross-platform, and enterprise mobility solutions that users love.",
  },
  hero: {
    label: "Services",
    heading: "Mobile App Development",
    tagline: "Custom Mobile Apps for Tomorrow",
    ctaLabel: "Make Your App Now",
    ctaHref: "/contact",
  },
  overview: {
    label: "What We Do",
    heading: "Mobile Experiences That Drive Engagement",
    description:
      "We design and engineer mobile applications that combine intuitive UX with rock-solid performance. Whether native iOS/Android or cross-platform, we deliver apps your users will open every day.",
    capabilities: [
      {
        title: "Native iOS & Android",
        description: "Swift and Kotlin for apps that fully leverage device hardware and OS features.",
      },
      {
        title: "Cross-Platform Excellence",
        description: "React Native and Flutter for shared codebases without sacrificing performance.",
      },
      {
        title: "Enterprise Mobility",
        description: "Secure, scalable apps for field teams, internal workflows, and enterprise operations.",
      },
      {
        title: "End-to-End Delivery",
        description: "From App Store submission to ongoing analytics — we own the full mobile lifecycle.",
      },
    ],
  },
  services: {
    heading: "Our Mobile Development Services",
    items: [
      {
        title: "Native App Development",
        description:
          "Purpose-built iOS and Android applications with maximum performance and platform-native UX patterns.",
      },
      {
        title: "Cross-Platform Development",
        description:
          "React Native and Flutter apps that share 90%+ of code while delivering near-native experiences on both platforms.",
      },
      {
        title: "Custom Mobile Applications",
        description:
          "Fully tailored mobile solutions built around your unique business logic, brand, and user journeys.",
      },
      {
        title: "Enterprise Mobility Solutions",
        description:
          "Secure, MDM-compatible applications for large workforces with SSO, offline mode, and compliance requirements.",
      },
      {
        title: "App Modernization & Optimization",
        description:
          "Revamping legacy mobile apps with modern architecture, faster performance, and updated design systems.",
      },
      {
        title: "UI/UX Design for Mobile",
        description:
          "Human-centered design for small screens — thumb-friendly layouts, micro-interactions, and accessibility.",
      },
      {
        title: "Mobile App Testing & QA",
        description:
          "Automated and manual testing across devices, OS versions, and network conditions before every release.",
      },
      {
        title: "Ongoing Maintenance & Support",
        description:
          "Post-launch monitoring, crash reporting, OS update compatibility, and feature iterations at your pace.",
      },
    ],
  },
  whyChooseUs: {
    heading: "Why Choose Edge and Engage for Mobile",
    points: [
      {
        title: "Platform-Agnostic Expertise",
        description:
          "We build for iOS, Android, and cross-platform — recommending the right approach for your audience and budget.",
      },
      {
        title: "App Store Proven",
        description:
          "Hundreds of apps shipped to the App Store and Google Play with 4+ star ratings across categories.",
      },
      {
        title: "Performance by Architecture",
        description:
          "We design for offline-first, low-latency, and battery efficiency — not as afterthoughts but as core requirements.",
      },
      {
        title: "Dedicated Mobile Teams",
        description:
          "Specialist iOS, Android, and RN engineers — not generalists who do mobile on the side.",
      },
    ],
  },
  industries: [
    "Healthcare",
    "E-Commerce",
    "Finance & Fintech",
    "Education",
    "Real Estate",
    "Travel & Hospitality",
    "Logistics",
    "Manufacturing",
  ],
  techStack: [
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "Java",
    "Dart",
    "Expo",
    "Firebase",
    "Supabase",
    "AWS Amplify",
    "Redux",
    "MobX",
    "Jest",
    "XCTest",
    "Fastlane",
    "App Center",
  ],
  cta: {
    heading: "Ready to Launch Your Mobile App?",
    subtext: "Tell us what you're building — we'll tell you how to ship it fast.",
    ctaLabel: "Start a Conversation",
    ctaHref: "/contact",
  },
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add lib/data/service-pages/mobile-development.ts
git commit -m "feat: add mobile development service page data"
```

---

## Task 4: Custom Software Development Data

**Files:**
- Create: `lib/data/service-pages/custom-development.ts`

**Step 1: Create the data file**

```typescript
// lib/data/service-pages/custom-development.ts
import type { ServicePageData } from "./types"

export const customDevelopment: ServicePageData = {
  slug: "custom-development",
  meta: {
    title: "Custom Software Development | Edge and Engage",
    description:
      "Bespoke software solutions engineered for your exact business needs. From enterprise systems to SaaS products, Edge and Engage builds software that scales.",
  },
  hero: {
    label: "Services",
    heading: "Custom Software Development",
    tagline: "Solutions Built for Innovation",
    ctaLabel: "Get a Proposal",
    ctaHref: "/contact",
  },
  overview: {
    label: "What We Do",
    heading: "Software Engineered Around Your Business",
    description:
      "Off-the-shelf software forces your business to adapt to its limitations. We build the other way around — software that conforms to your processes, scales with your growth, and integrates with your ecosystem.",
    capabilities: [
      {
        title: "Scalable Architecture",
        description: "Microservices, event-driven design, and cloud-native patterns built to grow with you.",
      },
      {
        title: "Full-Stack Development",
        description: "Backend APIs, frontend interfaces, and data layers — all under one roof.",
      },
      {
        title: "Legacy Modernization",
        description: "Migrate and modernize aging systems without disrupting business operations.",
      },
      {
        title: "API-First Design",
        description: "Every system we build exposes clean, documented APIs for easy integration.",
      },
    ],
  },
  services: {
    heading: "Our Custom Software Services",
    items: [
      {
        title: "End-to-End Software Development",
        description:
          "Complete product ownership from discovery and architecture through development, testing, and launch.",
      },
      {
        title: "Enterprise Systems",
        description:
          "ERP, CRM, HRMS, and custom enterprise platforms that integrate deeply with your existing infrastructure.",
      },
      {
        title: "SaaS Product Development",
        description:
          "Multi-tenant SaaS applications with subscription billing, usage analytics, and white-label capabilities.",
      },
      {
        title: "Legacy System Modernization",
        description:
          "Strangler-pattern rewrites and incremental migrations that eliminate technical debt without big-bang risk.",
      },
      {
        title: "API Integration & Middleware",
        description:
          "Custom middleware, event buses, and integration layers to connect disparate systems in your tech landscape.",
      },
      {
        title: "Custom Mobile Applications",
        description:
          "Native and cross-platform mobile extensions of your software ecosystem for field teams and customers.",
      },
    ],
  },
  whyChooseUs: {
    heading: "Why Choose Edge and Engage for Custom Software",
    points: [
      {
        title: "Deep Discovery Process",
        description:
          "We spend time understanding your workflows before writing a line of code — requirements gaps are the #1 cause of project failure.",
      },
      {
        title: "Transparent Fixed-Scope or T&M",
        description:
          "Choose the engagement model that fits your risk tolerance — we work both ways with full budget visibility.",
      },
      {
        title: "Cloud-Native by Default",
        description:
          "Every system we build is containerized, CI/CD-ready, and deployable to AWS, Azure, or GCP from day one.",
      },
      {
        title: "Long-Term Partnership",
        description:
          "We don't disappear after launch — our teams stay on for maintenance, scaling, and product iteration.",
      },
    ],
  },
  industries: [
    "Finance & Fintech",
    "Healthcare",
    "Real Estate",
    "Education",
    "Retail & E-Commerce",
    "Logistics",
    "Manufacturing",
    "Public Sector",
  ],
  techStack: [
    "Python",
    "Node.js",
    "Java",
    ".NET",
    "Go",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Redis",
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "REST API",
    "Terraform",
    "GitHub Actions",
  ],
  cta: {
    heading: "Ready to Build Software That Fits?",
    subtext: "Share your requirements — we'll propose a path to production.",
    ctaLabel: "Get a Proposal",
    ctaHref: "/contact",
  },
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add lib/data/service-pages/custom-development.ts
git commit -m "feat: add custom software development service page data"
```

---

## Task 5: UX/UI Design Data

**Files:**
- Create: `lib/data/service-pages/ui-ux-design.ts`

**Step 1: Create the data file**

```typescript
// lib/data/service-pages/ui-ux-design.ts
import type { ServicePageData } from "./types"

export const uiUxDesign: ServicePageData = {
  slug: "ui-ux-design",
  meta: {
    title: "UI/UX Design | Edge and Engage",
    description:
      "Adaptive, human-centered design that converts. Edge and Engage crafts intuitive user experiences backed by research, testing, and design systems.",
  },
  hero: {
    label: "Services",
    heading: "UI/UX Design",
    tagline: "Adaptive, Human-Centered Designs",
    ctaLabel: "Get Designs That Convert",
    ctaHref: "/contact",
  },
  overview: {
    label: "What We Do",
    heading: "Design That Drives Business Outcomes",
    description:
      "Great design is not decoration — it is the difference between software that gets adopted and software that gets abandoned. We design with user psychology, business goals, and engineering constraints in mind simultaneously.",
    capabilities: [
      {
        title: "Research-Driven",
        description: "User interviews, heatmaps, and competitive analysis ground every design decision.",
      },
      {
        title: "Systems Thinking",
        description: "Design systems and component libraries that scale across your entire product suite.",
      },
      {
        title: "Prototype Before Code",
        description: "Interactive Figma prototypes validated with real users before a single line is written.",
      },
      {
        title: "Accessibility First",
        description: "WCAG 2.1 AA compliance, keyboard navigation, and screen reader support built in.",
      },
    ],
  },
  services: {
    heading: "Our UI/UX Design Services",
    items: [
      {
        title: "User Research & Analysis",
        description:
          "Qualitative and quantitative research — interviews, surveys, usability sessions — to understand your users deeply.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Low and high-fidelity prototypes in Figma for rapid iteration and stakeholder alignment before development begins.",
      },
      {
        title: "UI Design & Visual Identity",
        description:
          "Polished, brand-consistent visual design with typography, color systems, and iconography that tell your story.",
      },
      {
        title: "Responsive Web & Mobile Design",
        description:
          "Fluid layouts and adaptive components that deliver a consistent experience from desktop to mobile.",
      },
      {
        title: "Usability Testing & Optimization",
        description:
          "Moderated and unmoderated testing sessions, A/B experiments, and conversion rate optimization.",
      },
      {
        title: "Interaction Design (IxD)",
        description:
          "Micro-interactions, transitions, and animation that make interfaces feel alive and responsive.",
      },
      {
        title: "Information Architecture (IA)",
        description:
          "Site maps, navigation structures, and content hierarchies that make complex products feel simple.",
      },
      {
        title: "Design Systems & UI Kits",
        description:
          "Scalable component libraries in Figma and code (Storybook) that keep design and engineering in sync.",
      },
    ],
  },
  whyChooseUs: {
    heading: "Why Choose Edge and Engage for UX/UI",
    points: [
      {
        title: "Design + Engineering in One Team",
        description:
          "Our designers work alongside engineers — no handoff friction, no 'that's not buildable' surprises.",
      },
      {
        title: "Metric-Driven Design",
        description:
          "We tie every design decision to conversion, retention, or task completion metrics — not just aesthetics.",
      },
      {
        title: "Figma-First Workflow",
        description:
          "Full design token support, component variants, and dev mode handoff — your engineers will thank us.",
      },
      {
        title: "Post-Launch Iteration",
        description:
          "We monitor real user behaviour after launch and iterate fast to improve outcomes continuously.",
      },
    ],
  },
  industries: [
    "Technology & SaaS",
    "E-Commerce",
    "Healthcare",
    "Finance & Fintech",
    "Education",
    "Travel & Hospitality",
    "Real Estate",
    "Automotive",
  ],
  techStack: [
    "Figma",
    "Adobe XD",
    "Sketch",
    "Framer",
    "InVision",
    "Zeplin",
    "Storybook",
    "Principle",
    "Maze",
    "Hotjar",
    "Lottie",
    "Tailwind CSS",
    "CSS Animations",
    "GSAP",
  ],
  cta: {
    heading: "Ready for Designs That Convert?",
    subtext: "Share your product — we'll show you where users are dropping off and how to fix it.",
    ctaLabel: "Start a Conversation",
    ctaHref: "/contact",
  },
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add lib/data/service-pages/ui-ux-design.ts
git commit -m "feat: add UX/UI design service page data"
```

---

## Task 6: Data Index File

**Files:**
- Create: `lib/data/service-pages/index.ts`

**Step 1: Create the index**

```typescript
// lib/data/service-pages/index.ts
import { webDevelopment } from "./web-development"
import { mobileDevelopment } from "./mobile-development"
import { customDevelopment } from "./custom-development"
import { uiUxDesign } from "./ui-ux-design"
import type { ServicePageData } from "./types"

export type { ServicePageData }

export const allServicePages: Record<string, ServicePageData> = {
  [webDevelopment.slug]: webDevelopment,
  [mobileDevelopment.slug]: mobileDevelopment,
  [customDevelopment.slug]: customDevelopment,
  [uiUxDesign.slug]: uiUxDesign,
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add lib/data/service-pages/index.ts
git commit -m "feat: add service pages data index"
```

---

## Task 7: ServiceHero Component

**Files:**
- Create: `components/service-page/ServiceHero.tsx`

**Step 1: Create the component**

```tsx
// components/service-page/ServiceHero.tsx
import Link from "next/link"
import type { ServicePageData } from "@/lib/data/service-pages/types"

interface Props {
  hero: ServicePageData["hero"]
}

export default function ServiceHero({ hero }: Props) {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center pt-16 bg-gray-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      {/* Subtle teal glow top-left */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[var(--color-teal)]/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full py-24">
        <div className="max-w-3xl">
          <p className="text-[var(--color-teal)] text-xs font-bold uppercase tracking-widest mb-4">
            {hero.label}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            {hero.heading}
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed">
            {hero.tagline}
          </p>
          <Link
            href={hero.ctaHref}
            className="inline-block px-8 py-4 bg-[var(--color-teal)] text-black font-bold rounded-full text-base hover:bg-[var(--color-teal-dark)] transition-all"
          >
            {hero.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add components/service-page/ServiceHero.tsx
git commit -m "feat: add ServiceHero component"
```

---

## Task 8: EngagementModels Component

**Files:**
- Create: `components/service-page/EngagementModels.tsx`

Note: This section is **identical** on all service pages — no per-page data needed.

**Step 1: Create the component**

```tsx
// components/service-page/EngagementModels.tsx
import { MapPin, Globe, ArrowLeftRight } from "lucide-react"

const models = [
  {
    icon: MapPin,
    title: "Onshoring",
    description:
      "Work with a local team in your timezone and region for maximum collaboration and zero communication overhead.",
  },
  {
    icon: Globe,
    title: "Offshoring",
    description:
      "Leverage our global delivery centers to access top-tier engineering talent at highly competitive rates.",
  },
  {
    icon: ArrowLeftRight,
    title: "Nearshoring",
    description:
      "A hybrid model — nearshore teams in overlapping timezones for the best of cost-efficiency and real-time collaboration.",
  },
]

export default function EngagementModels() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-[var(--color-teal)] text-xs font-bold uppercase tracking-widest mb-3">
          Engagement Models
        </p>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-10">
          Flexible Ways to Work With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model) => {
            const Icon = model.icon
            return (
              <div
                key={model.title}
                className="border border-gray-200 rounded-2xl p-8 hover:border-[var(--color-teal)] hover:shadow-md transition-all"
              >
                <div className="p-3 bg-[var(--color-teal)]/10 rounded-xl w-fit mb-5">
                  <Icon size={24} className="text-[var(--color-teal)]" />
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-3">{model.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{model.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add components/service-page/EngagementModels.tsx
git commit -m "feat: add EngagementModels component"
```

---

## Task 9: ServiceOverview Component

**Files:**
- Create: `components/service-page/ServiceOverview.tsx`

**Step 1: Create the component**

```tsx
// components/service-page/ServiceOverview.tsx
import type { ServicePageData } from "@/lib/data/service-pages/types"

interface Props {
  overview: ServicePageData["overview"]
}

export default function ServiceOverview({ overview }: Props) {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:w-1/2">
            <p className="text-[var(--color-teal)] text-xs font-bold uppercase tracking-widest mb-3">
              {overview.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              {overview.heading}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">{overview.description}</p>
          </div>

          {/* Right: capabilities grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {overview.capabilities.map((cap, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[var(--color-teal)] hover:shadow-sm transition-all"
              >
                <div className="w-8 h-1 bg-[var(--color-teal)] rounded-full mb-4" />
                <h3 className="text-gray-900 font-bold text-sm mb-2">{cap.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add components/service-page/ServiceOverview.tsx
git commit -m "feat: add ServiceOverview component"
```

---

## Task 10: ServiceCards Component

**Files:**
- Create: `components/service-page/ServiceCards.tsx`

**Step 1: Create the component**

```tsx
// components/service-page/ServiceCards.tsx
import type { ServicePageData } from "@/lib/data/service-pages/types"

interface Props {
  services: ServicePageData["services"]
}

export default function ServiceCards({ services }: Props) {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 leading-tight">
          {services.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-7 hover:border-[var(--color-teal)] hover:shadow-md transition-all group"
            >
              <span className="text-[var(--color-teal)] text-xs font-bold uppercase tracking-widest mb-4 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-gray-900 font-bold text-base mb-3 group-hover:text-[var(--color-teal)] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add components/service-page/ServiceCards.tsx
git commit -m "feat: add ServiceCards component"
```

---

## Task 11: WhyChooseUs Component

**Files:**
- Create: `components/service-page/WhyChooseUs.tsx`

**Step 1: Create the component**

```tsx
// components/service-page/WhyChooseUs.tsx
import type { ServicePageData } from "@/lib/data/service-pages/types"

interface Props {
  whyChooseUs: ServicePageData["whyChooseUs"]
}

export default function WhyChooseUs({ whyChooseUs }: Props) {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 leading-tight">
          {whyChooseUs.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {whyChooseUs.points.map((point, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[var(--color-teal)] hover:shadow-sm transition-all"
            >
              <span className="text-4xl font-black text-[var(--color-teal)]/20 leading-none block mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-gray-900 font-bold text-base mb-3">{point.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add components/service-page/WhyChooseUs.tsx
git commit -m "feat: add WhyChooseUs component"
```

---

## Task 12: IndustriesServed Component

**Files:**
- Create: `components/service-page/IndustriesServed.tsx`

**Step 1: Create the component**

```tsx
// components/service-page/IndustriesServed.tsx
interface Props {
  industries: string[]
}

export default function IndustriesServed({ industries }: Props) {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-[var(--color-teal)] text-xs font-bold uppercase tracking-widest mb-3">
          Industries
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 leading-tight">
          Industries We Serve
        </h2>
        <div className="flex flex-wrap gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="px-5 py-2.5 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] transition-all cursor-default"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add components/service-page/IndustriesServed.tsx
git commit -m "feat: add IndustriesServed component"
```

---

## Task 13: TechStack Component

**Files:**
- Create: `components/service-page/TechStack.tsx`

**Step 1: Create the component**

```tsx
// components/service-page/TechStack.tsx
interface Props {
  techStack: string[]
}

export default function TechStack({ techStack }: Props) {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-[var(--color-teal)] text-xs font-bold uppercase tracking-widest mb-3">
          Technology
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 leading-tight">
          Our Technology Stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] transition-all cursor-default shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add components/service-page/TechStack.tsx
git commit -m "feat: add TechStack component"
```

---

## Task 14: ServiceCTA Component

**Files:**
- Create: `components/service-page/ServiceCTA.tsx`

**Step 1: Create the component**

```tsx
// components/service-page/ServiceCTA.tsx
import Link from "next/link"
import type { ServicePageData } from "@/lib/data/service-pages/types"

interface Props {
  cta: ServicePageData["cta"]
}

export default function ServiceCTA({ cta }: Props) {
  return (
    <section className="bg-[var(--color-teal)] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-black mb-4 leading-tight">
          {cta.heading}
        </h2>
        <p className="text-black/70 text-base mb-10 max-w-xl mx-auto">{cta.subtext}</p>
        <Link
          href={cta.ctaHref}
          className="inline-block px-10 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-900 transition-all"
        >
          {cta.ctaLabel}
        </Link>
      </div>
    </section>
  )
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add components/service-page/ServiceCTA.tsx
git commit -m "feat: add ServiceCTA component"
```

---

## Task 15: ServicePageTemplate

**Files:**
- Create: `components/service-page/ServicePageTemplate.tsx`

**Step 1: Create the template**

```tsx
// components/service-page/ServicePageTemplate.tsx
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import InsightsSection from "@/components/sections/InsightsSection"
import ContactFormSection from "@/components/sections/ContactFormSection"
import ServiceHero from "./ServiceHero"
import EngagementModels from "./EngagementModels"
import ServiceOverview from "./ServiceOverview"
import ServiceCards from "./ServiceCards"
import WhyChooseUs from "./WhyChooseUs"
import IndustriesServed from "./IndustriesServed"
import TechStack from "./TechStack"
import ServiceCTA from "./ServiceCTA"
import type { ServicePageData } from "@/lib/data/service-pages/types"

interface Props {
  data: ServicePageData
}

export default function ServicePageTemplate({ data }: Props) {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero hero={data.hero} />
        <EngagementModels />
        <ServiceOverview overview={data.overview} />
        <ServiceCards services={data.services} />
        <WhyChooseUs whyChooseUs={data.whyChooseUs} />
        <IndustriesServed industries={data.industries} />
        <TechStack techStack={data.techStack} />
        <InsightsSection />
        <ServiceCTA cta={data.cta} />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  )
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add components/service-page/ServicePageTemplate.tsx
git commit -m "feat: add ServicePageTemplate component"
```

---

## Task 16: Dynamic Route Page + Build Verification

**Files:**
- Create: `app/services/[slug]/page.tsx`

**Step 1: Create the dynamic route**

```tsx
// app/services/[slug]/page.tsx
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { allServicePages } from "@/lib/data/service-pages"
import ServicePageTemplate from "@/components/service-page/ServicePageTemplate"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return Object.keys(allServicePages).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = allServicePages[slug]
  if (!page) return {}
  return {
    title: page.meta.title,
    description: page.meta.description,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const page = allServicePages[slug]
  if (!page) notFound()
  return <ServicePageTemplate data={page} />
}
```

**Step 2: Run full production build**

Run: `npm run build`

Expected output:
```
✓ Compiled successfully
Route (app)
┌ ○ /
├ ● /services/[slug]
│ ├  /services/website-development
│ ├  /services/mobile-development
│ ├  /services/custom-development
│ └  /services/ui-ux-design
└ ○ /_not-found
```

All 4 service pages should appear as statically generated (`●`).

**Step 3: Commit**

```bash
git add app/services/[slug]/page.tsx
git commit -m "feat: add dynamic service page route, all 4 service pages live"
```
