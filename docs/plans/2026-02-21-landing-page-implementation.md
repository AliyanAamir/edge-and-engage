# Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a pixel-accurate clone of the devsinc.com landing page as the foundation of the edge-n-engage project.

**Architecture:** Next.js 16 App Router with one page composed of isolated Server Components per section; only interactive pieces (carousels, forms, navbar drawer) are Client Components. All styling via Tailwind CSS v4 utility classes — no CSS modules, no inline styles.

**Tech Stack:** Next.js 16.1 · TypeScript (strict) · Tailwind CSS v4 · React Hook Form · Zod · embla-carousel-react · lucide-react · next/font · react-international-phone

---

## Pre-flight Checklist
- Node.js ≥ 20 installed (`node -v`)
- Working directory: `D:/Aliyan/Project/edge-n-engage`
- Git repo already initialised (confirmed)

---

### Task 1: Scaffold Next.js 16 Project

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`

**Step 1: Bootstrap the project**

Run inside `D:/Aliyan/Project/edge-n-engage`:
```bash
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --app \
  --src-dir=false \
  --import-alias="@/*" \
  --turbopack \
  --yes
```
Expected: Next.js 16 project scaffolded in current directory. Answer "Yes" to all prompts if interactive.

**Step 2: Install additional dependencies**
```bash
npm install \
  react-hook-form \
  @hookform/resolvers \
  zod \
  embla-carousel-react \
  embla-carousel-autoplay \
  lucide-react \
  react-international-phone \
  clsx \
  tailwind-merge
```

**Step 3: Enable React Compiler in `next.config.ts`**

Replace contents of `next.config.ts`:
```typescript
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.devsinc.com",
      },
      {
        protocol: "https",
        hostname: "devsinc.com",
      },
    ],
  },
}

export default nextConfig
```

**Step 4: Verify dev server starts**
```bash
npm run dev
```
Expected: Server running at http://localhost:3000 with default Next.js page. No errors in terminal.

**Step 5: Commit**
```bash
git add -A
git commit -m "feat: scaffold Next.js 16 project with TypeScript and Tailwind"
```

---

### Task 2: Global Styles, Fonts & Utility Helpers

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Create: `lib/utils.ts`

**Step 1: Set up CSS variables and base styles in `app/globals.css`**
```css
@import "tailwindcss";

:root {
  --color-teal: #0ebab1;
  --color-bg: #000000;
  --color-surface: #111111;
  --color-surface-2: #1a1a1a;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #2a2a2a;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #111;
}
::-webkit-scrollbar-thumb {
  background: var(--color-teal);
  border-radius: 3px;
}
```

**Step 2: Update `app/layout.tsx` with Montserrat font and metadata**
```typescript
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Edge-n-Engage | Leading Software & Product Development Agency",
  description:
    "We help companies across North America, Middle East, Africa and Asia Pacific with technological development.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
```

**Step 3: Create `lib/utils.ts` (className merge helper)**
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Step 4: Update `tailwind.config.ts` to register font variable**
```typescript
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        teal: {
          DEFAULT: "#0ebab1",
          dark: "#0ca39b",
        },
      },
    },
  },
  plugins: [],
}

export default config
```

**Step 5: Commit**
```bash
git add -A
git commit -m "feat: add global styles, Montserrat font, and utility helpers"
```

---

### Task 3: Navbar Component

**Files:**
- Create: `components/layout/Navbar.tsx`
- Create: `components/layout/SideDrawer.tsx`

**Step 1: Create the Navbar**

`components/layout/Navbar.tsx`:
```typescript
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import SideDrawer from "./SideDrawer"

const navItems = [
  { label: "What we do", href: "#" },
  { label: "Who we help", href: "#" },
  { label: "Who We Are", href: "#" },
  { label: "How we deliver", href: "#" },
  { label: "Join devsinc", href: "#" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-3 max-w-[1440px] mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-teal font-black text-2xl leading-none">D</span>
              <span className="text-white font-bold text-lg tracking-wide hidden sm:block">
                devsinc
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wide"
              >
                {item.label}
                <ChevronDown size={14} />
              </button>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://apply.workable.com/devsinc-17/"
              target="_blank"
              className="px-4 py-2 text-sm font-semibold text-teal border border-teal rounded-full hover:bg-teal hover:text-black transition-all"
            >
              Explore Careers
            </Link>
            <button
              onClick={() => setDrawerOpen(true)}
              className="px-4 py-2 text-sm font-semibold text-black bg-teal rounded-full hover:bg-teal-dark transition-all"
            >
              Let's Talk Business
            </button>
            <button className="flex items-center gap-1 text-sm text-white/80 hover:text-white ml-2">
              Global
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href="#"
                className="text-white/80 hover:text-white py-2 text-sm font-medium uppercase tracking-wide border-b border-white/10"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-3">
              <Link
                href="https://apply.workable.com/devsinc-17/"
                className="text-center px-4 py-2 text-sm font-semibold text-teal border border-teal rounded-full"
              >
                Explore Careers
              </Link>
              <button
                onClick={() => { setDrawerOpen(true); setMobileOpen(false) }}
                className="px-4 py-2 text-sm font-semibold text-black bg-teal rounded-full"
              >
                Let's Talk Business
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Right edge "Let's Talk Business" tab */}
      <button
        onClick={() => setDrawerOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-teal text-black text-xs font-bold px-2 py-4 writing-mode-vertical [writing-mode:vertical-rl] rotate-180 hover:bg-teal-dark transition-all hidden lg:flex items-center justify-center"
        style={{ writingMode: "vertical-rl" }}
      >
        Let's Talk Business
      </button>

      <SideDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
```

**Step 2: Create `components/layout/SideDrawer.tsx`**
```typescript
"use client"

import { X } from "lucide-react"
import ContactForm from "@/components/ui/ContactForm"

interface SideDrawerProps {
  open: boolean
  onClose: () => void
}

export default function SideDrawer({ open, onClose }: SideDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#111] z-50 overflow-y-auto transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">Get In Touch</h2>
          <button onClick={onClose} className="text-white/60 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <ContactForm />
        </div>
      </div>
    </>
  )
}
```

**Step 3: Verify the file compiles (you'll need ContactForm to exist — placeholder is fine for now)**

Temporarily create `components/ui/ContactForm.tsx`:
```typescript
export default function ContactForm() {
  return <div className="text-white">Form coming soon</div>
}
```

**Step 4: Commit**
```bash
git add -A
git commit -m "feat: add Navbar with mobile menu and side drawer shell"
```

---

### Task 4: Hero Section

**Files:**
- Create: `components/sections/HeroSection.tsx`

**Step 1: Create `components/sections/HeroSection.tsx`**
```typescript
import Image from "next/image"
import Link from "next/link"

const publications = [
  { name: "Forbes", src: "https://www.devsinc.com/wp-content/uploads/2023/08/Forbes-logo.png" },
  { name: "Business Insider", src: "https://www.devsinc.com/wp-content/uploads/2023/08/BI-logo.png" },
  { name: "New York Weekly", src: "https://www.devsinc.com/wp-content/uploads/2023/08/NY-Weekly.png" },
  { name: "Mashable", src: "https://www.devsinc.com/wp-content/uploads/2023/08/Mashable-logo.png" },
  { name: "Khaleej Times", src: "https://www.devsinc.com/wp-content/uploads/2023/08/Khaleej-Times-logo.png" },
  { name: "Yahoo Finance", src: "https://www.devsinc.com/wp-content/uploads/2023/08/Yahoo-Finance-logo.png" },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.devsinc.com/wp-content/uploads/2024/01/hero-bg.jpg"
          alt="City skyline at night"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Building at the Speed of AI
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            We help companies across North America, Middle East, Africa and Asia
            Pacific with technological development
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-teal text-black font-bold rounded-full text-base hover:bg-teal-dark transition-all"
          >
            Get in Touch
          </Link>
        </div>

        {/* Featured In */}
        <div className="mt-16 md:mt-24">
          <p className="text-white/70 text-sm font-semibold mb-6 uppercase tracking-widest">
            Featured In:
          </p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {publications.map((pub) => (
              <div key={pub.name} className="relative h-6 w-24 md:w-32 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src={pub.src}
                  alt={pub.name}
                  fill
                  className="object-contain object-left filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Wire into `app/page.tsx`**
```typescript
import Navbar from "@/components/layout/Navbar"
import HeroSection from "@/components/sections/HeroSection"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  )
}
```

**Step 3: Start dev server and visually verify hero renders**
```bash
npm run dev
```
Expected: Dark navbar + city skyline hero with headline, CTA, and publication logos visible at http://localhost:3000

**Step 4: Commit**
```bash
git add -A
git commit -m "feat: add HeroSection with background image and publication logos"
```

---

### Task 5: Logo Strip / Awards Bar

**Files:**
- Create: `components/sections/LogoStripSection.tsx`

**Step 1: Create the logo strip**
```typescript
import Image from "next/image"

const awards = [
  { name: "Clutch", src: "https://www.devsinc.com/wp-content/uploads/2023/01/clutch-logo.png" },
  { name: "GoodFirms", src: "https://www.devsinc.com/wp-content/uploads/2023/01/goodfirms-logo.png" },
  { name: "ISO", src: "https://www.devsinc.com/wp-content/uploads/2023/01/ISO-logo.png" },
  { name: "Microsoft", src: "https://www.devsinc.com/wp-content/uploads/2023/01/microsoft-partner.png" },
  { name: "AWS", src: "https://www.devsinc.com/wp-content/uploads/2023/01/aws-partner.png" },
  { name: "Google", src: "https://www.devsinc.com/wp-content/uploads/2023/01/google-partner.png" },
]

export default function LogoStripSection() {
  return (
    <section className="bg-white py-8 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-8">
          {awards.map((award) => (
            <div key={award.name} className="relative h-10 w-28">
              <Image
                src={award.src}
                alt={award.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add to `app/page.tsx`**
```typescript
import LogoStripSection from "@/components/sections/LogoStripSection"
// Add after HeroSection
```

**Step 3: Commit**
```bash
git add -A
git commit -m "feat: add logo strip / awards bar section"
```

---

### Task 6: Services Section

**Files:**
- Create: `components/sections/ServicesSection.tsx`
- Create: `components/ui/ServiceCard.tsx`
- Create: `lib/data/services.ts`

**Step 1: Create `lib/data/services.ts`**
```typescript
export interface Service {
  id: string
  name: string
  href: string
  icon: string // URL to icon image
}

export const services: Service[] = [
  { id: "genai", name: "Generative AI", href: "/services/genai", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/genai-icon.svg" },
  { id: "d365-erp", name: "Dynamics 365 ERP", href: "/services/d365-erp", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/d365-icon.svg" },
  { id: "mobile", name: "Mobile App Development", href: "/services/mobile-development", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/mobile-icon.svg" },
  { id: "staff-aug", name: "Staff Augmentation", href: "/services/staff-augmentation", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/staff-icon.svg" },
  { id: "devops", name: "DevOps", href: "/services/devops", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/devops-icon.svg" },
  { id: "uiux", name: "UI/UX Design", href: "/services/ui-ux-design", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/uiux-icon.svg" },
  { id: "web", name: "Web Development", href: "/services/website-development", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/web-icon.svg" },
  { id: "custom", name: "Custom Software Development", href: "/services/custom-development", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/custom-icon.svg" },
  { id: "cyber", name: "Cybersecurity", href: "/services/cybersecurity-solutions", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/cyber-icon.svg" },
  { id: "data", name: "Data Analytics & Insights", href: "/services/data-analytics-and-insights", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/data-icon.svg" },
  { id: "crm", name: "MS D365 CRM", href: "/services/d365-crm", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/crm-icon.svg" },
  { id: "powerapps", name: "Power Apps", href: "/services/power-apps", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/powerapps-icon.svg" },
  { id: "cloud-app", name: "Cloud Application", href: "/services/cloud-application", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/cloud-icon.svg" },
  { id: "cloud-maint", name: "Cloud Maintenance & Integration", href: "/services/cloud-maintenance-integration", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/cloudmaint-icon.svg" },
  { id: "metaverse", name: "Metaverse", href: "/services/metaverse", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/metaverse-icon.svg" },
  { id: "ar", name: "Augmented Reality", href: "/services/augmented-reality", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/ar-icon.svg" },
  { id: "blockchain", name: "Blockchain & Cryptography", href: "/services/blockchain-cryptography", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/blockchain-icon.svg" },
  { id: "game", name: "Game Development", href: "/services/game-development", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/game-icon.svg" },
  { id: "web3-gaming", name: "Web3 Gaming", href: "/services/web3-gaming", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/web3-icon.svg" },
  { id: "arvr-gaming", name: "AR/VR/XR Gaming", href: "/services/ar-vr-xr-gaming", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/arvr-icon.svg" },
  { id: "gaming-art", name: "Gaming Art & Design", href: "/services/gaming-art-design", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/gamingartdesign-icon.svg" },
  { id: "qa", name: "Quality Assurance", href: "/services/quality-assurance", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/qa-icon.svg" },
  { id: "saas", name: "SaaS", href: "/services/saas", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/saas-icon.svg" },
  { id: "cloud-migration", name: "Cloud Migration & Cloud Ops", href: "/services/cloud-migration-cloud-ops", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/cloudmigration-icon.svg" },
  { id: "ecommerce", name: "E-commerce", href: "/services/e-commerce", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/ecommerce-icon.svg" },
  { id: "design-dev", name: "Design & Development", href: "/services/design-development", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/designdev-icon.svg" },
  { id: "maint-support", name: "Maintenance & Support", href: "/services/maintenance-support", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/maintenance-icon.svg" },
  { id: "automation", name: "Automation & Apps", href: "/services/automation-apps", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/automation-icon.svg" },
  { id: "salesforce", name: "Salesforce", href: "/services/salesforce", icon: "https://www.devsinc.com/wp-content/uploads/2024/01/salesforce-icon.svg" },
]
```

**Step 2: Create `components/ui/ServiceCard.tsx`**
```typescript
import Image from "next/image"
import Link from "next/link"
import type { Service } from "@/lib/data/services"

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="group flex flex-col gap-4 p-6 bg-[#111] border border-[#2a2a2a] rounded-xl hover:border-teal transition-all duration-300"
    >
      <div className="relative h-10 w-10">
        <Image
          src={service.icon}
          alt={service.name}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-white text-sm font-semibold leading-snug group-hover:text-teal transition-colors">
        {service.name}
      </h3>
    </Link>
  )
}
```

**Step 3: Create `components/sections/ServicesSection.tsx`**
```typescript
"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import ServiceCard from "@/components/ui/ServiceCard"
import { services } from "@/lib/data/services"

const INITIAL_VISIBLE = 12

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? services : services.slice(0, INITIAL_VISIBLE)

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-teal text-xs font-bold uppercase tracking-widest mb-3">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-black mb-12">
          Transform Your Business
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {visible.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-sm font-semibold text-teal border border-teal px-6 py-3 rounded-full hover:bg-teal hover:text-black transition-all"
          >
            {showAll ? "Show Less" : "View More Services"}
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>
    </section>
  )
}
```

**Step 4: Add to `app/page.tsx`**

**Step 5: Commit**
```bash
git add -A
git commit -m "feat: add ServicesSection with 29 service cards and show more toggle"
```

---

### Task 7: Industries Section

**Files:**
- Create: `components/sections/IndustriesSection.tsx`
- Create: `lib/data/industries.ts`

**Step 1: Create `lib/data/industries.ts`**
```typescript
export interface Industry {
  id: string
  name: string
  href: string
  icon: string
}

export const industries: Industry[] = [
  { id: "travel", name: "Travel & Hospitality", href: "/industry/travel-hospitality", icon: "https://www.devsinc.com/wp-content/uploads/2023/industry/travel.svg" },
  { id: "public", name: "Public Sector", href: "/industry/public-sector", icon: "https://www.devsinc.com/wp-content/uploads/2023/industry/public.svg" },
  { id: "telecom", name: "Telecommunication", href: "/industry/telecommunication", icon: "https://www.devsinc.com/wp-content/uploads/2023/industry/telecom.svg" },
  { id: "retail", name: "Retail & CPG", href: "/industry/retail-and-cpg", icon: "https://www.devsinc.com/wp-content/uploads/2023/industry/retail.svg" },
  { id: "energy", name: "Oil, Gas, and Energy", href: "/industry/oil-gas-and-energy", icon: "https://www.devsinc.com/wp-content/uploads/2023/industry/energy.svg" },
  { id: "startups", name: "Startups", href: "/industry/startups", icon: "https://www.devsinc.com/wp-content/uploads/2023/industry/startups.svg" },
  { id: "ecommerce", name: "E-commerce", href: "/industry/e-commerce-software-development", icon: "https://www.devsinc.com/wp-content/uploads/2023/industry/ecommerce.svg" },
  { id: "fintech", name: "Banking & Fintech", href: "/industry/banking-fintech", icon: "https://www.devsinc.com/wp-content/uploads/2023/industry/fintech.svg" },
  { id: "healthcare", name: "Healthcare & Pharmaceuticals", href: "/industry/healthcare-pharmaceuticals", icon: "https://www.devsinc.com/wp-content/uploads/2023/industry/healthcare.svg" },
  { id: "gaming", name: "Gaming", href: "/industry/gaming", icon: "https://www.devsinc.com/wp-content/uploads/2023/industry/gaming.svg" },
]
```

**Step 2: Create `components/sections/IndustriesSection.tsx`**
```typescript
import Image from "next/image"
import Link from "next/link"
import { industries } from "@/lib/data/industries"

export default function IndustriesSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
          Discover our Impact Across Industries
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href={industry.href}
              className="group flex flex-col items-center gap-4 p-6 bg-[#111] border border-[#2a2a2a] rounded-xl hover:border-teal transition-all duration-300 text-center"
            >
              <div className="relative h-12 w-12">
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-white text-sm font-semibold group-hover:text-teal transition-colors">
                {industry.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* CTA Band */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/contact"
            className="px-10 py-4 bg-teal text-black font-bold text-base rounded-full hover:bg-teal-dark transition-all"
          >
            Let's Talk Business
          </Link>
        </div>
      </div>
    </section>
  )
}
```

**Step 3: Add to `app/page.tsx`** after ServicesSection.

**Step 4: Commit**
```bash
git add -A
git commit -m "feat: add IndustriesSection with 10 industry cards and CTA band"
```

---

### Task 8: Awards & Partnerships Sections

**Files:**
- Create: `components/sections/AwardsSection.tsx`
- Create: `components/sections/PartnershipsSection.tsx`
- Create: `components/ui/LogoCarousel.tsx`

**Step 1: Create `components/ui/LogoCarousel.tsx`** (reusable embla carousel for logos)
```typescript
"use client"

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

interface Logo {
  name: string
  src: string
}

interface LogoCarouselProps {
  logos: Logo[]
  className?: string
}

export default function LogoCarousel({ logos, className }: LogoCarouselProps) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  )

  return (
    <div className={`overflow-hidden ${className}`} ref={emblaRef}>
      <div className="flex gap-8">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex-shrink-0 relative h-12 w-32"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
```

**Step 2: Create `components/sections/AwardsSection.tsx`**
```typescript
import Image from "next/image"

const awards = [
  { name: "Clutch Top 1000", src: "https://www.devsinc.com/wp-content/uploads/2023/badges/clutch-top-1000.png" },
  { name: "Clutch Global", src: "https://www.devsinc.com/wp-content/uploads/2023/badges/clutch-global.png" },
  { name: "GoodFirms Top", src: "https://www.devsinc.com/wp-content/uploads/2023/badges/goodfirms-top.png" },
  { name: "ISO 27001", src: "https://www.devsinc.com/wp-content/uploads/2023/badges/iso-27001.png" },
  { name: "ISO 9001", src: "https://www.devsinc.com/wp-content/uploads/2023/badges/iso-9001.png" },
]

export default function AwardsSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto text-center">
        <h2 className="text-3xl font-black text-black mb-12">
          Awards and Certifications
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {awards.map((award) => (
            <div key={award.name} className="relative h-20 w-20 md:h-24 md:w-24">
              <Image src={award.src} alt={award.name} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 3: Create `components/sections/PartnershipsSection.tsx`**
```typescript
import LogoCarousel from "@/components/ui/LogoCarousel"

const partners = [
  { name: "Microsoft", src: "https://www.devsinc.com/wp-content/uploads/partners/microsoft.png" },
  { name: "AWS", src: "https://www.devsinc.com/wp-content/uploads/partners/aws.png" },
  { name: "Google Cloud", src: "https://www.devsinc.com/wp-content/uploads/partners/google-cloud.png" },
  { name: "Salesforce", src: "https://www.devsinc.com/wp-content/uploads/partners/salesforce.png" },
  { name: "HubSpot", src: "https://www.devsinc.com/wp-content/uploads/partners/hubspot.png" },
  { name: "SAP", src: "https://www.devsinc.com/wp-content/uploads/partners/sap.png" },
]

export default function PartnershipsSection() {
  return (
    <section className="bg-[#f9f9f9] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl font-black text-black mb-12 text-center">
          Our Partnerships
        </h2>
        <LogoCarousel logos={partners} />
      </div>
    </section>
  )
}
```

**Step 4: Add both sections to `app/page.tsx`** after IndustriesSection.

**Step 5: Commit**
```bash
git add -A
git commit -m "feat: add Awards, Partnerships sections with reusable LogoCarousel"
```

---

### Task 9: Featured Insights Section

**Files:**
- Create: `components/sections/InsightsSection.tsx`
- Create: `components/ui/InsightCard.tsx`
- Create: `lib/data/insights.ts`

**Step 1: Create `lib/data/insights.ts`**
```typescript
export interface Insight {
  id: string
  type: "Case Study" | "Blog"
  title: string
  href: string
  image: string
}

export const insights: Insight[] = [
  {
    id: "recurate",
    type: "Case Study",
    title: "US Fashion Resale Platform Scales to 100K Monthly Transactions",
    href: "/case-studies/recurate",
    image: "https://www.devsinc.com/wp-content/uploads/2024/case-studies/recurate.jpg",
  },
  {
    id: "cloud-small-biz",
    type: "Blog",
    title: "How Cloud Computing Can Transform Small Businesses",
    href: "/articles/how-cloud-computing-can-transform-small-businesses",
    image: "https://www.devsinc.com/wp-content/uploads/2024/blog/cloud-computing.jpg",
  },
  {
    id: "custom-web-app",
    type: "Blog",
    title: "Custom Web Application Development: Everything You Need to Know",
    href: "/articles/custom-web-app-development-what-you-need-to-know",
    image: "https://www.devsinc.com/wp-content/uploads/2024/blog/custom-web-app.jpg",
  },
  {
    id: "mobile-design",
    type: "Blog",
    title: "Trends of Mobile Design: What's Next for Your Business?",
    href: "/articles/trends-of-mobile-design-whats-next-for-your-business",
    image: "https://www.devsinc.com/wp-content/uploads/2024/blog/mobile-design.jpg",
  },
  {
    id: "gen-ai-ops",
    type: "Blog",
    title: "How Generative AI is Transforming Business Operations",
    href: "/articles/how-generative-ai-is-transforming-business-operations",
    image: "https://www.devsinc.com/wp-content/uploads/2024/blog/gen-ai.jpg",
  },
  {
    id: "xquic",
    type: "Case Study",
    title: "Hospitality AI Platform Reconciles $300M+ in OTA Commissions Automatically",
    href: "/case-studies/empowering-xquic-for-automated-financial-accuracy",
    image: "https://www.devsinc.com/wp-content/uploads/2024/case-studies/xquic.jpg",
  },
  {
    id: "interwood",
    type: "Case Study",
    title: "Pakistan Furniture Leader's Shopify Migration Drives 55% Growth",
    href: "/case-studies/interwood",
    image: "https://www.devsinc.com/wp-content/uploads/2024/case-studies/interwood.jpg",
  },
  {
    id: "fintech-ai",
    type: "Case Study",
    title: "US Fintech's AI Financial Modeling Secures $2M+ Funding",
    href: "/case-studies/financial-automation",
    image: "https://www.devsinc.com/wp-content/uploads/2024/case-studies/fintech-ai.jpg",
  },
]
```

**Step 2: Create `components/ui/InsightCard.tsx`**
```typescript
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Insight } from "@/lib/data/insights"
import { cn } from "@/lib/utils"

export default function InsightCard({ insight }: { insight: Insight }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-[#111] border border-[#2a2a2a] hover:border-teal/50 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={insight.image}
          alt={insight.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <span
          className={cn(
            "text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full",
            insight.type === "Case Study"
              ? "bg-teal/20 text-teal"
              : "bg-white/10 text-white/70"
          )}
        >
          {insight.type}
        </span>
        <h3 className="text-white font-bold text-sm leading-snug mt-3 mb-4 line-clamp-3">
          {insight.title}
        </h3>
        <Link
          href={insight.href}
          className="flex items-center gap-2 text-teal text-xs font-semibold hover:gap-3 transition-all"
        >
          Explore More <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
```

**Step 3: Create `components/sections/InsightsSection.tsx`**
```typescript
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import InsightCard from "@/components/ui/InsightCard"
import { insights } from "@/lib/data/insights"

export default function InsightsSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column */}
          <div className="lg:w-72 flex-shrink-0">
            <p className="text-teal text-xs font-bold uppercase tracking-widest mb-3">
              Featured Insights
            </p>
            <h2 className="text-3xl font-black text-white mb-4 leading-tight">
              Stories of our transformations across Services and Industries
            </h2>
            <p className="text-white/60 text-sm mb-8">From Concept to Completion</p>
            <Link
              href="/learning"
              className="flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all"
            >
              Explore More <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right masonry grid */}
          <div className="flex-1 columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {insights.map((insight) => (
              <div key={insight.id} className="break-inside-avoid">
                <InsightCard insight={insight} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 4: Add to `app/page.tsx`**

**Step 5: Commit**
```bash
git add -A
git commit -m "feat: add InsightsSection with masonry blog and case study cards"
```

---

### Task 10: Stats / Achievements Section

**Files:**
- Create: `components/sections/StatsSection.tsx`

**Step 1: Create `components/sections/StatsSection.tsx`**
```typescript
import Link from "next/link"

const stats = [
  { number: "3,000+", label: "Successful Projects" },
  { number: "23+", label: "Countries Supported" },
  { number: "250+", label: "Active Clients" },
  { number: "15+", label: "Years of Enablement Experience" },
]

export default function StatsSection() {
  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div className="lg:w-1/2">
            <p className="text-teal text-xs font-bold uppercase tracking-widest mb-3">
              Pioneering Trust and Innovation
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              Devsinc's Achievements
            </h2>
            <p className="text-white/60 text-base mb-4">
              We take pride in empowering businesses worldwide with innovative solutions.
            </p>
            <p className="text-white/60 text-base mb-10">
              Devsinc brings an unwavering commitment to excellence, backed by a global presence.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-teal text-black font-bold rounded-full hover:bg-teal-dark transition-all"
            >
              Get in Touch
            </Link>
          </div>

          {/* Right stats grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-4xl md:text-5xl font-black text-teal mb-2">
                  {stat.number}
                </p>
                <p className="text-white font-semibold text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add to `app/page.tsx`**

**Step 3: Commit**
```bash
git add -A
git commit -m "feat: add StatsSection with 4 achievement counters"
```

---

### Task 11: Careers CTA Section

**Files:**
- Create: `components/sections/CareersSection.tsx`

**Step 1: Create `components/sections/CareersSection.tsx`**
```typescript
import Image from "next/image"
import Link from "next/link"

export default function CareersSection() {
  return (
    <section className="bg-[#111] py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: office photo */}
          <div className="lg:w-1/2 relative h-80 lg:h-96 w-full rounded-2xl overflow-hidden">
            <Image
              src="https://www.devsinc.com/wp-content/uploads/2024/careers/office-team.jpg"
              alt="Devsinc team"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: content */}
          <div className="lg:w-1/2">
            <p className="text-teal text-xs font-bold uppercase tracking-widest mb-4">
              careers
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              Human-first is our foundation.
            </h2>
            <p className="text-white/60 text-base mb-10">
              Join a culture that celebrates excellence and diversity, Globally!
            </p>
            <Link
              href="/career"
              className="inline-block px-8 py-4 bg-teal text-black font-bold rounded-full hover:bg-teal-dark transition-all"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add to `app/page.tsx`**

**Step 3: Commit**
```bash
git add -A
git commit -m "feat: add CareersSection with team photo and CTA"
```

---

### Task 12: Global Leadership Carousel

**Files:**
- Create: `components/sections/LeadershipSection.tsx`
- Create: `components/ui/LeaderCard.tsx`
- Create: `lib/data/leadership.ts`

**Step 1: Create `lib/data/leadership.ts`**
```typescript
export interface Leader {
  id: string
  name: string
  title: string
  photo: string
  linkedin: string
}

export const leaders: Leader[] = [
  { id: "usman", name: "Usman Asif", title: "Founder & CEO", photo: "https://www.devsinc.com/wp-content/uploads/team/usman-asif.jpg", linkedin: "https://www.linkedin.com/in/therealusman/" },
  { id: "qamar", name: "Qamar Abbas Sipra", title: "Chief Finance Officer", photo: "https://www.devsinc.com/wp-content/uploads/team/qamar-sipra.jpg", linkedin: "https://www.linkedin.com/in/qamar-abbas-sipra-01b78316/" },
  { id: "maria", name: "Maria Sadaf", title: "Chief of Staff", photo: "https://www.devsinc.com/wp-content/uploads/team/maria-sadaf.jpg", linkedin: "https://www.linkedin.com/in/maria-sadaf-399a14107/" },
  { id: "badar", name: "Badar Shafiq", title: "Chief Delivery Officer", photo: "https://www.devsinc.com/wp-content/uploads/team/badar-shafiq.jpg", linkedin: "https://www.linkedin.com/in/badarshafiq/" },
  { id: "atta", name: "Atta Ur Rahman", title: "Chief Business Officer", photo: "https://www.devsinc.com/wp-content/uploads/team/atta-ur-rahman.jpg", linkedin: "https://www.linkedin.com/in/arm47/" },
  { id: "moiz", name: "Moiz Saleem Varind", title: "Head of Global Marketing", photo: "https://www.devsinc.com/wp-content/uploads/team/moiz-varind.jpg", linkedin: "https://www.linkedin.com/in/moizsaleemvarind/" },
  { id: "rehmat", name: "Rehmat Qadir", title: "Sr. VP Sales Engineering", photo: "https://www.devsinc.com/wp-content/uploads/team/rehmat-qadir.jpg", linkedin: "https://www.linkedin.com/in/rqbukhari/" },
  { id: "umar", name: "Umar Farooq", title: "Sr. VP E-Commerce & Digital Retail", photo: "https://www.devsinc.com/wp-content/uploads/team/umar-farooq.jpg", linkedin: "https://www.linkedin.com/in/umar77/" },
  { id: "ahmed", name: "Ahmed Waqas", title: "VP Human Assets", photo: "https://www.devsinc.com/wp-content/uploads/team/ahmed-waqas.jpg", linkedin: "https://www.linkedin.com/in/ahmed-waqas-akhtar-60694215/" },
  { id: "yasir", name: "Yasir Barkat", title: "VP Professional Services", photo: "https://www.devsinc.com/wp-content/uploads/team/yasir-barkat.jpg", linkedin: "https://www.linkedin.com/in/yasir-barkat-a9226716/" },
]
```

**Step 2: Create `components/ui/LeaderCard.tsx`**
```typescript
import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"
import type { Leader } from "@/lib/data/leadership"

export default function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <div className="flex-shrink-0 w-56 bg-[#111] border border-[#2a2a2a] rounded-xl p-6 text-center">
      <div className="relative h-24 w-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-teal/30">
        <Image
          src={leader.photo}
          alt={leader.name}
          fill
          className="object-cover object-top"
        />
      </div>
      <h3 className="text-white font-bold text-sm mb-1">{leader.name}</h3>
      <p className="text-white/60 text-xs mb-4 leading-snug">{leader.title}</p>
      <Link
        href={leader.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-teal text-xs hover:underline"
      >
        <Linkedin size={12} />
        LinkedIn
      </Link>
    </div>
  )
}
```

**Step 3: Create `components/sections/LeadershipSection.tsx`**
```typescript
"use client"

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback } from "react"
import LeaderCard from "@/components/ui/LeaderCard"
import { leaders } from "@/lib/data/leadership"

export default function LeadershipSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-20" id="global-leaders">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Our Global Leadership
          </h2>
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="p-2 border border-white/20 rounded-full text-white hover:border-teal hover:text-teal transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="p-2 border border-white/20 rounded-full text-white hover:border-teal hover:text-teal transition-all"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {leaders.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 4: Add to `app/page.tsx`**

**Step 5: Commit**
```bash
git add -A
git commit -m "feat: add LeadershipSection with embla carousel and 10 leader cards"
```

---

### Task 13: Contact Form with Zod Validation

**Files:**
- Create: `lib/validations/contact.ts`
- Replace: `components/ui/ContactForm.tsx`
- Create: `components/sections/ContactFormSection.tsx`

**Step 1: Create `lib/validations/contact.ts`**
```typescript
import { z } from "zod"

export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  companyName: z.string().min(1, "Company name is required"),
  companyUrl: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  region: z.string().min(1, "Please select a region"),
  services: z
    .array(z.string())
    .min(1, "Please select at least one service"),
  projectDetails: z
    .string()
    .min(10, "Please provide at least 10 characters describing your project"),
  lookingForJob: z.enum(["Please Select", "Yes", "No"]).refine(
    (val) => val !== "Please Select",
    { message: "Please select an option" }
  ),
})

export type ContactFormData = z.infer<typeof contactSchema>
```

**Step 2: Replace `components/ui/ContactForm.tsx`**
```typescript
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema, type ContactFormData } from "@/lib/validations/contact"
import { cn } from "@/lib/utils"

const regions = [
  "Middle East & North Africa",
  "USA",
  "Canada",
  "Kingdom of Saudi Arabia",
  "Australia & New Zealand",
  "Asia",
  "Europe",
  "Rest of World",
]

const serviceOptions = [
  "Remote IT Resources",
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "AR/VR",
  "Gaming",
  "Cyber Security",
  "Other IT Services",
]

const inputClass =
  "w-full bg-transparent border border-[#3a3a3a] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal transition-colors"

const labelClass = "block text-white/70 text-xs font-semibold uppercase tracking-wide mb-2"

const errorClass = "text-red-400 text-xs mt-1"

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      services: [],
      lookingForJob: "Please Select",
    },
  })

  async function onSubmit(data: ContactFormData) {
    // TODO: wire to backend / HubSpot API
    console.log("Form data:", data)
    await new Promise((r) => setTimeout(r, 800)) // simulate request
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {/* Full Name */}
      <div>
        <label className={labelClass}>Full Name *</label>
        <input {...register("fullName")} className={inputClass} placeholder="John Doe" />
        {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>Email *</label>
        <input {...register("email")} type="email" className={inputClass} placeholder="john@company.com" />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className={labelClass}>Phone Number *</label>
        <input {...register("phone")} type="tel" className={inputClass} placeholder="+1 (201) 555-0123" />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      {/* Company Name */}
      <div>
        <label className={labelClass}>Company Name *</label>
        <input {...register("companyName")} className={inputClass} placeholder="Acme Corp" />
        {errors.companyName && <p className={errorClass}>{errors.companyName.message}</p>}
      </div>

      {/* Company URL */}
      <div>
        <label className={labelClass}>Company URL</label>
        <input {...register("companyUrl")} type="url" className={inputClass} placeholder="https://yourcompany.com" />
        {errors.companyUrl && <p className={errorClass}>{errors.companyUrl.message}</p>}
      </div>

      {/* Region */}
      <div>
        <label className={labelClass}>Region *</label>
        <select {...register("region")} className={cn(inputClass, "bg-[#1a1a1a]")}>
          <option value="">Select Region</option>
          {regions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        {errors.region && <p className={errorClass}>{errors.region.message}</p>}
      </div>

      {/* Services */}
      <div>
        <label className={labelClass}>Services you are looking for *</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {serviceOptions.map((service) => (
            <label key={service} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                value={service}
                {...register("services")}
                className="accent-teal h-4 w-4"
              />
              <span className="text-white/70 text-xs">{service}</span>
            </label>
          ))}
        </div>
        {errors.services && <p className={errorClass}>{errors.services.message}</p>}
      </div>

      {/* Project Details */}
      <div>
        <label className={labelClass}>Project Details *</label>
        <textarea
          {...register("projectDetails")}
          className={cn(inputClass, "resize-none h-28")}
          placeholder="Describe your project..."
        />
        {errors.projectDetails && <p className={errorClass}>{errors.projectDetails.message}</p>}
      </div>

      {/* Looking for job */}
      <div>
        <label className={labelClass}>I am looking for a job *</label>
        <select {...register("lookingForJob")} className={cn(inputClass, "bg-[#1a1a1a]")}>
          <option value="Please Select">Please Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {errors.lookingForJob && <p className={errorClass}>{errors.lookingForJob.message}</p>}
      </div>

      {isSubmitSuccessful && (
        <p className="text-green-400 text-sm font-semibold text-center py-2">
          Thank you! We'll be in touch soon.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-teal text-black font-bold py-4 rounded-lg hover:bg-teal-dark disabled:opacity-60 transition-all text-sm uppercase tracking-wide"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  )
}
```

**Step 3: Create `components/sections/ContactFormSection.tsx`**
```typescript
import Link from "next/link"
import { Globe, Users } from "lucide-react"
import ContactForm from "@/components/ui/ContactForm"

export default function ContactFormSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: form */}
          <div className="lg:w-1/2 xl:w-2/5">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-10">
              Get In Touch
            </h2>
            <ContactForm />
          </div>

          {/* Right: callout cards */}
          <div className="lg:w-1/2 xl:w-3/5 flex flex-col gap-6 lg:pt-20">
            {/* Global Presence */}
            <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-8 flex gap-6 items-start hover:border-teal/50 transition-all">
              <div className="p-3 bg-teal/10 rounded-xl text-teal">
                <Globe size={28} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Global Presence</h3>
                <p className="text-white/60 text-sm mb-4">
                  We're across 5 continents, explore our office nearest to you.
                </p>
                <Link
                  href="/about-us#geography"
                  className="text-teal text-sm font-semibold hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Global Leaders */}
            <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-8 flex gap-6 items-start hover:border-teal/50 transition-all">
              <div className="p-3 bg-teal/10 rounded-xl text-teal">
                <Users size={28} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Global Leaders</h3>
                <p className="text-white/60 text-sm mb-4">
                  Our capability and competencies are backed by diverse global leadership.
                </p>
                <Link
                  href="/#global-leaders"
                  className="text-teal text-sm font-semibold hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 4: Add to `app/page.tsx`**

**Step 5: Commit**
```bash
git add -A
git commit -m "feat: add ContactForm with Zod validation and ContactFormSection"
```

---

### Task 14: Footer

**Files:**
- Create: `components/layout/Footer.tsx`

**Step 1: Create `components/layout/Footer.tsx`**
```typescript
import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react"

const companyLinks = ["Home", "About", "Careers", "Blog", "Contact"]
const industryLinks = [
  "Travel & Hospitality", "Public Sector", "Telecommunication",
  "Retail & CPG", "Oil, Gas & Energy", "Startups",
  "E-commerce", "Banking & Fintech", "Healthcare", "Gaming",
]
const serviceLinks = [
  "Generative AI", "Mobile App Development", "Web Development",
  "Custom Software", "DevOps", "UI/UX Design", "Cybersecurity",
  "Data Analytics", "Cloud Application", "Staff Augmentation",
]
const resourceLinks = ["Blogs", "Case Studies", "Whitepapers", "Events"]

const offices = [
  { country: "Pakistan", type: "Global Delivery Center", address: "Plot B, 281 Ghazi Rd, Khuda Buksh Colony KB Society, Lahore, Punjab" },
  { country: "USA", type: "Regional Office", address: '18 S 2nd Street #120, San Jose, CA, 95113, United States' },
  { country: "UAE", type: "Regional Office", address: "34HW+5J5 - Parkside Retail Level - Cluster R - Jumeirah Lakes Towers - Dubai" },
  { country: "UK", type: "Regional Office", address: "128 City Road London, EC1V 2NX, United Kingdom" },
  { country: "KSA", type: "Regional Office", address: "3141 Anas Ibn Malik Rd, Al Malqa, Riyadh 13521 KSA" },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main footer */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/50 text-sm hover:text-teal transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Industries We Serve</h4>
            <ul className="flex flex-col gap-3">
              {industryLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/50 text-sm hover:text-teal transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Services & Solutions</h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/50 text-sm hover:text-teal transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Resources</h4>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/50 text-sm hover:text-teal transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Our Offices</h4>
            <div className="flex flex-col gap-5">
              {offices.map((office) => (
                <div key={office.country}>
                  <p className="text-white text-xs font-bold">
                    {office.country}{" "}
                    <span className="text-white/40 font-normal">({office.type})</span>
                  </p>
                  <p className="text-white/50 text-xs mt-1 leading-relaxed">{office.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo + legal */}
          <div className="flex items-center gap-6">
            <Link href="/" className="text-teal font-black text-xl">D</Link>
            <Link href="/terms-conditions" className="text-white/40 text-xs hover:text-white transition-colors">
              Terms and Conditions
            </Link>
            <Link href="/privacy-policy" className="text-white/40 text-xs hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>

          {/* Email */}
          <Link
            href="mailto:global.business@devsinc.com"
            className="text-teal text-sm font-semibold hover:underline"
          >
            global.business@devsinc.com
          </Link>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <Link href="https://www.facebook.com/devsinc.official/" target="_blank" className="text-white/40 hover:text-teal transition-colors">
              <Facebook size={18} />
            </Link>
            <Link href="https://www.linkedin.com/company/developers-inc" target="_blank" className="text-white/40 hover:text-teal transition-colors">
              <Linkedin size={18} />
            </Link>
            <Link href="https://www.instagram.com/devsinc.official/" target="_blank" className="text-white/40 hover:text-teal transition-colors">
              <Instagram size={18} />
            </Link>
            <Link href="https://x.com/devsinc" target="_blank" className="text-white/40 hover:text-teal transition-colors">
              <Twitter size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

**Step 2: Add Footer to `app/layout.tsx`** (or `app/page.tsx` — add after all sections before closing `</main>`)

**Step 3: Commit**
```bash
git add -A
git commit -m "feat: add Footer with 5-column layout, offices, and social links"
```

---

### Task 15: Compose Full `app/page.tsx`

**Files:**
- Replace: `app/page.tsx`

**Step 1: Replace `app/page.tsx` with full composition**
```typescript
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import LogoStripSection from "@/components/sections/LogoStripSection"
import ServicesSection from "@/components/sections/ServicesSection"
import IndustriesSection from "@/components/sections/IndustriesSection"
import AwardsSection from "@/components/sections/AwardsSection"
import PartnershipsSection from "@/components/sections/PartnershipsSection"
import InsightsSection from "@/components/sections/InsightsSection"
import StatsSection from "@/components/sections/StatsSection"
import CareersSection from "@/components/sections/CareersSection"
import LeadershipSection from "@/components/sections/LeadershipSection"
import ContactFormSection from "@/components/sections/ContactFormSection"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoStripSection />
        <ServicesSection />
        <IndustriesSection />
        <AwardsSection />
        <PartnershipsSection />
        <InsightsSection />
        <StatsSection />
        <CareersSection />
        <LeadershipSection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  )
}
```

**Step 2: Run dev server and do full visual QA pass**
```bash
npm run dev
```

Check each section at http://localhost:3000:
- [ ] Navbar sticky and links visible
- [ ] Hero full viewport with city background
- [ ] Publication logos visible
- [ ] Services grid renders 12 cards + expand button
- [ ] Industries 10 cards in grid
- [ ] Awards badge row visible
- [ ] Partnerships carousel auto-scrolling
- [ ] Insights masonry grid
- [ ] Stats 4 numbers visible
- [ ] Careers 2-column section
- [ ] Leadership carousel with prev/next
- [ ] Contact form validates with Zod on submit
- [ ] Footer 5 columns + social icons

**Step 3: Final commit**
```bash
git add -A
git commit -m "feat: compose full landing page with all 13 sections"
```

---

### Task 16: Build Verification

**Step 1: Run production build**
```bash
npm run build
```
Expected: Build completes with no TypeScript errors and no Tailwind warnings. Output shows all routes compiled.

**Step 2: Run production server to verify**
```bash
npm run start
```
Visit http://localhost:3000 and verify the page loads correctly in production mode.

**Step 3: Fix any build errors** (TypeScript strict mode may catch issues — resolve them before proceeding)

**Step 4: Final commit if fixes were needed**
```bash
git add -A
git commit -m "fix: resolve production build issues"
```

---

## Summary

| Task | Component | Status |
|---|---|---|
| 1 | Project scaffold | ⬜ |
| 2 | Global styles + fonts | ⬜ |
| 3 | Navbar + SideDrawer | ⬜ |
| 4 | HeroSection | ⬜ |
| 5 | LogoStripSection | ⬜ |
| 6 | ServicesSection | ⬜ |
| 7 | IndustriesSection | ⬜ |
| 8 | Awards + Partnerships | ⬜ |
| 9 | InsightsSection | ⬜ |
| 10 | StatsSection | ⬜ |
| 11 | CareersSection | ⬜ |
| 12 | LeadershipSection | ⬜ |
| 13 | ContactForm (Zod) | ⬜ |
| 14 | Footer | ⬜ |
| 15 | Compose page.tsx | ⬜ |
| 16 | Build verification | ⬜ |
