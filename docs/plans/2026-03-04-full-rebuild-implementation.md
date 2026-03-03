# Full Website Rebuild Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild Edge and Engage website from scratch — dark editorial agency aesthetic, electric violet accent, Framer Motion animations, 13 page templates, Resend contact form.

**Architecture:** Next.js 16 App Router, all pages are React Server Components by default, interactive sections use `"use client"`. Framer Motion wraps scroll-reveal and transition logic. Static data lives in `lib/data/`. Resend handles contact form via `/api/contact` route.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, Resend, React Hook Form, Zod, Syne + Inter (next/font), embla-carousel-react, lucide-react

---

## Phase 1 — Foundation

### Task 1: Install new dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install packages**
```bash
npm install framer-motion resend @react-email/components @react-email/render
```

**Step 2: Verify install**
```bash
npx tsc --noEmit
```
Expected: no errors

**Step 3: Commit**
```bash
git add package.json package-lock.json
git commit -m "chore: add framer-motion, resend, react-email dependencies"
```

---

### Task 2: Update global CSS tokens

**Files:**
- Modify: `app/globals.css`

**Step 1: Replace entire globals.css**
```css
@import "tailwindcss";

@theme {
  --color-bg: #050507;
  --color-surface: #0d0d14;
  --color-surface-2: #13131f;
  --color-violet: #7c3aed;
  --color-violet-light: #a78bfa;
  --color-violet-glow: rgba(124, 58, 237, 0.15);
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: rgba(255, 255, 255, 0.08);

  --font-display: var(--font-syne);
  --font-body: var(--font-inter);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body), sans-serif;
  -webkit-font-smoothing: antialiased;
}

::selection {
  background: var(--color-violet);
  color: #fff;
}

::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: var(--color-bg);
}
::-webkit-scrollbar-thumb {
  background: var(--color-violet);
  border-radius: 2px;
}
```

**Step 2: Verify build**
```bash
npm run dev
```
Expected: app loads, background is `#050507`

**Step 3: Commit**
```bash
git add app/globals.css
git commit -m "chore: update design tokens to violet theme"
```

---

### Task 3: Update root layout with Syne + Inter fonts

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Replace layout.tsx**
```tsx
import type { Metadata } from "next"
import { Syne, Inter } from "next/font/google"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Edge and Engage — Building at the Speed of AI",
  description:
    "We help companies across North America, Middle East, Africa and Asia Pacific with technological development.",
  openGraph: {
    title: "Edge and Engage",
    description: "Building at the Speed of AI",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

**Step 2: Verify**
```bash
npx tsc --noEmit
```

**Step 3: Commit**
```bash
git add app/layout.tsx
git commit -m "chore: switch to Syne + Inter fonts"
```

---

### Task 4: Delete old components (clean slate)

**Files:**
- Delete: all files under `components/` and `lib/data/` (keep `lib/utils.ts`, `lib/validations/contact.ts`, `lib/data/site.ts`, `lib/data/navigation.ts`, `lib/data/services.ts`)

**Step 1: Delete old component folders**
```bash
rm -rf components/sections components/service-page components/ui/InsightCard.tsx components/ui/LeaderCard.tsx components/ui/LogoCarousel.tsx components/ui/MegaMenu.tsx components/ui/ServiceCard.tsx components/ui/ContactForm.tsx
rm -rf lib/data/awards.ts lib/data/hero.ts lib/data/industries.ts lib/data/insights.ts lib/data/leadership.ts lib/data/stats.ts
rm -rf lib/data/service-pages
```

**Step 2: Update app/page.tsx to blank slate**
```tsx
export default function HomePage() {
  return <main />
}
```

**Step 3: Verify**
```bash
npm run dev
```
Expected: blank dark page, no errors

**Step 4: Commit**
```bash
git add -A
git commit -m "chore: delete old components, start clean slate"
```

---

## Phase 2 — Shared UI Primitives

### Task 5: Animation variants library

**Files:**
- Create: `lib/animations.ts`

**Step 1: Create file**
```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}
```

**Step 2: Commit**
```bash
git add lib/animations.ts
git commit -m "feat: add shared Framer Motion animation variants"
```

---

### Task 6: Button component (magnetic hover)

**Files:**
- Create: `components/ui/Button.tsx`

**Step 1: Create file**
```tsx
"use client"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  href?: string
  onClick?: () => void
  className?: string
  type?: "button" | "submit"
  disabled?: boolean
}

export function Button({ children, variant = "primary", size = "md", href, onClick, className, type = "button", disabled }: ButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 300, damping: 20 })
  const sy = useSpring(y, { stiffness: 300, damping: 20 })

  function onMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.25)
  }
  function onMouseLeave() { x.set(0); y.set(0) }

  const base = "inline-flex items-center justify-center font-semibold rounded-full transition-colors cursor-pointer select-none"
  const sizes = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-sm", lg: "px-8 py-4 text-base" }
  const variants = {
    primary: "bg-violet-600 text-white hover:bg-violet-500",
    outline: "border border-violet-600 text-violet-400 hover:bg-violet-600/10",
    ghost: "text-white hover:text-violet-400",
  }

  const Tag = href ? "a" : "button"
  return (
    <motion.a
      ref={ref as any}
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      disabled={disabled}
      style={{ x: sx, y: sy }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(base, sizes[size], variants[variant], disabled && "opacity-50 pointer-events-none", className)}
    >
      {children}
    </motion.a>
  )
}
```

**Step 2: Verify**
```bash
npx tsc --noEmit
```

**Step 3: Commit**
```bash
git add components/ui/Button.tsx
git commit -m "feat: add magnetic Button component"
```

---

### Task 7: SectionHeading component

**Files:**
- Create: `components/ui/SectionHeading.tsx`

**Step 1: Create file**
```tsx
"use client"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({ label, title, subtitle, align = "left", className }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}
    >
      {label && (
        <span className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-3 block">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
```

**Step 2: Commit**
```bash
git add components/ui/SectionHeading.tsx
git commit -m "feat: add SectionHeading component"
```

---

### Task 8: AnimatedNumber (count-up)

**Files:**
- Create: `components/ui/AnimatedNumber.tsx`

**Step 1: Create file**
```tsx
"use client"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedNumberProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function AnimatedNumber({ value, suffix = "", prefix = "", duration = 2000, className }: AnimatedNumberProps) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  )
}
```

**Step 2: Commit**
```bash
git add components/ui/AnimatedNumber.tsx
git commit -m "feat: add AnimatedNumber count-up component"
```

---

### Task 9: PageTransition wrapper

**Files:**
- Create: `components/ui/PageTransition.tsx`

**Step 1: Create file**
```tsx
"use client"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

**Step 2: Commit**
```bash
git add components/ui/PageTransition.tsx
git commit -m "feat: add PageTransition wrapper"
```

---

## Phase 3 — Layout Components

### Task 10: Navbar

**Files:**
- Create: `components/layout/Navbar.tsx`

**Step 1: Create file**
```tsx
"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { navItems } from "@/lib/data/navigation"
import { site } from "@/lib/data/site"
import { stagger, fadeUp } from "@/lib/animations"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-bg/80 border-b border-border" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-display font-bold text-sm">E</span>
          <span className="font-display font-bold text-white text-sm hidden sm:block">{site.name}</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label} className="relative"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}>
              <button className="flex items-center gap-1 text-sm text-muted hover:text-white transition-colors">
                {item.label}
                {item.megaMenu && <ChevronDown className="w-3 h-3" />}
              </button>
              <AnimatePresence>
                {activeMenu === item.label && item.megaMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max max-w-2xl bg-surface-2 border border-border rounded-2xl p-6 shadow-2xl"
                  >
                    <div className="flex gap-8">
                      {item.megaMenu.columns.map((col, ci) => (
                        <div key={ci} className="flex flex-col gap-4">
                          {col.groups.map((group, gi) => (
                            <div key={gi}>
                              {group.heading && <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-2">{group.heading}</p>}
                              {group.links.map((link) => (
                                <a key={link.href} href={link.href} className="block text-sm text-muted hover:text-white py-1 transition-colors">{link.label}</a>
                              ))}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" size="sm" href={site.careersUrl}>Careers</Button>
          <Button variant="primary" size="sm" href="/contact">Let's Talk</Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-surface border-b border-border px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-muted hover:text-white transition-colors">{item.label}</a>
            ))}
            <Button variant="primary" size="sm" href="/contact" className="mt-2">Let's Talk</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
```

**Step 2: Verify**
```bash
npx tsc --noEmit
```

**Step 3: Commit**
```bash
git add components/layout/Navbar.tsx
git commit -m "feat: add Navbar with mega-menu and scroll-blur"
```

---

### Task 11: Footer

**Files:**
- Create: `components/layout/Footer.tsx`

**Step 1: Create file**
```tsx
import { site } from "@/lib/data/site"
import { footerCompanyLinks, footerIndustryLinks, footerServiceLinks, footerResourceLinks, offices } from "@/lib/data/navigation"
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold text-sm">E</span>
              <span className="font-display font-bold text-white text-sm">{site.name}</span>
            </div>
            <p className="text-muted text-xs leading-relaxed mb-4">{site.tagline}</p>
            <div className="flex gap-3">
              {[{ href: site.socials.facebook, Icon: Facebook }, { href: site.socials.linkedin, Icon: Linkedin },
                { href: site.socials.instagram, Icon: Instagram }, { href: site.socials.twitter, Icon: Twitter }]
                .map(({ href, Icon }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-violet-400 hover:border-violet-600 transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Company</p>
            {footerCompanyLinks.map((l) => <a key={l.href} href={l.href} className="block text-muted hover:text-white text-sm py-1 transition-colors">{l.label}</a>)}
          </div>

          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Industries</p>
            {footerIndustryLinks.slice(0, 6).map((l) => <a key={l.href} href={l.href} className="block text-muted hover:text-white text-sm py-1 transition-colors">{l.label}</a>)}
          </div>

          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Services</p>
            {footerServiceLinks.map((l) => <a key={l.href} href={l.href} className="block text-muted hover:text-white text-sm py-1 transition-colors">{l.label}</a>)}
          </div>

          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Resources</p>
            {footerResourceLinks.map((l) => <a key={l.href} href={l.href} className="block text-muted hover:text-white text-sm py-1 transition-colors">{l.label}</a>)}
            <p className="text-xs font-semibold text-white uppercase tracking-widest mt-6 mb-4">Offices</p>
            {offices.map((o) => (
              <div key={o.country} className="mb-3">
                <p className="text-white text-xs font-medium">{o.country}</p>
                <p className="text-muted text-xs leading-relaxed">{o.address}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="text-muted hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-muted hover:text-white text-xs transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

**Step 2: Commit**
```bash
git add components/layout/Footer.tsx
git commit -m "feat: add Footer component"
```

---

### Task 12: Update root layout to include Navbar + Footer

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Add Navbar and Footer imports**
```tsx
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
// inside <body>:
// <Navbar />
// {children}
// <Footer />
```

**Step 2: Verify**
```bash
npm run dev
```
Expected: Navbar visible on homepage, Footer at bottom

**Step 3: Commit**
```bash
git add app/layout.tsx
git commit -m "feat: add Navbar and Footer to root layout"
```

---

## Phase 4 — Home Page Sections

### Task 13: Static data files

**Files:**
- Create: `lib/data/stats.ts`
- Create: `lib/data/industries.ts`
- Create: `lib/data/insights.ts`
- Create: `lib/data/leadership.ts`

**Step 1: Create stats.ts**
```ts
export const stats = [
  { value: 3000, suffix: "+", label: "Successful Projects" },
  { value: 23, suffix: "+", label: "Countries Supported" },
  { value: 250, suffix: "+", label: "Active Clients" },
  { value: 15, suffix: "+", label: "Years of Experience" },
]
```

**Step 2: Create industries.ts**
```ts
export const industries = [
  { id: "travel", label: "Travel & Hospitality", icon: "Plane", href: "/industry/travel-hospitality" },
  { id: "telecom", label: "Telecommunication", icon: "Radio", href: "/industry/telecommunication" },
  { id: "energy", label: "Oil, Gas & Energy", icon: "Zap", href: "/industry/oil-gas-and-energy" },
  { id: "ecommerce", label: "E-commerce", icon: "ShoppingCart", href: "/industry/e-commerce-software-development" },
  { id: "health", label: "Healthcare", icon: "Heart", href: "/industry/healthcare-pharmaceuticals" },
  { id: "public", label: "Public Sector", icon: "Building2", href: "/industry/public-sector" },
  { id: "retail", label: "Retail & CPG", icon: "Store", href: "/industry/retail-and-cpg" },
  { id: "startups", label: "Startups", icon: "Rocket", href: "/industry/startups" },
  { id: "fintech", label: "Banking & Fintech", icon: "Landmark", href: "/industry/banking-fintech" },
  { id: "gaming", label: "Gaming", icon: "Gamepad2", href: "/industry/gaming" },
]
```

**Step 3: Create insights.ts**
```ts
export type InsightType = "Case Study" | "Blog"
export interface Insight {
  id: string; title: string; type: InsightType; excerpt: string
  href: string; date: string; readTime: string
}
export const insights: Insight[] = [
  { id: "1", title: "How Generative AI Cut Development Time by 40%", type: "Case Study",
    excerpt: "A fintech client reduced sprint cycles dramatically with our AI-assisted engineering workflow.",
    href: "/case-studies/genai-fintech", date: "2026-02-10", readTime: "5 min" },
  { id: "2", title: "Building Scalable Cloud Architecture on Azure", type: "Blog",
    excerpt: "Key patterns for multi-region failover and cost-optimised Azure deployments.",
    href: "/articles/azure-cloud-architecture", date: "2026-01-28", readTime: "7 min" },
  { id: "3", title: "Mobile-First E-commerce: 3x Conversion Uplift", type: "Case Study",
    excerpt: "How a React Native rebuild transformed checkout conversion for a UAE retailer.",
    href: "/case-studies/ecommerce-mobile", date: "2026-01-15", readTime: "4 min" },
]
```

**Step 4: Create leadership.ts**
```ts
export interface Leader {
  name: string; title: string; linkedin: string; initials: string
}
export const leaders: Leader[] = [
  { name: "Usman Asif", title: "Founder & CEO", linkedin: "https://linkedin.com", initials: "UA" },
  { name: "Qamar Abbas Sipra", title: "CFO", linkedin: "https://linkedin.com", initials: "QA" },
  { name: "Maria Sadaf", title: "Chief of Staff", linkedin: "https://linkedin.com", initials: "MS" },
  { name: "Badar Shafiq", title: "Chief Delivery Officer", linkedin: "https://linkedin.com", initials: "BS" },
  { name: "Atta Ur Rahman", title: "CBO", linkedin: "https://linkedin.com", initials: "AR" },
  { name: "Moiz Saleem Varind", title: "Head of Global Marketing", linkedin: "https://linkedin.com", initials: "MV" },
  { name: "Rehmat Qadir", title: "Sr. VP Sales", linkedin: "https://linkedin.com", initials: "RQ" },
  { name: "Ahmed Waqas", title: "VP Human Assets", linkedin: "https://linkedin.com", initials: "AW" },
]
```

**Step 5: Commit**
```bash
git add lib/data/stats.ts lib/data/industries.ts lib/data/insights.ts lib/data/leadership.ts
git commit -m "feat: add static data files for home page sections"
```

---

### Task 14: HeroSection

**Files:**
- Create: `components/sections/HeroSection.tsx`

**Step 1: Create file**
```tsx
"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { site } from "@/lib/data/site"

const publications = ["Forbes", "Business Insider", "Mashable", "Yahoo Finance", "Khaleej Times"]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg">
      {/* Violet orb */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-violet-600/40 rounded-full px-4 py-1.5 text-xs text-violet-400 font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Trusted by 250+ companies worldwide
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6"
        >
          Building at the<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
            Speed of AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {site.subTagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/contact" size="lg">Get in Touch</Button>
          <Button href="/services" variant="outline" size="lg">Explore Services</Button>
        </motion.div>

        {/* Featured in */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <p className="text-muted text-xs uppercase tracking-widest">Featured In</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {publications.map((p) => (
              <span key={p} className="text-zinc-500 text-sm font-semibold hover:text-zinc-300 transition-colors">{p}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**
```bash
git add components/sections/HeroSection.tsx
git commit -m "feat: add HeroSection with animated orb and headline"
```

---

### Task 15: StatsBand

**Files:**
- Create: `components/sections/StatsBand.tsx`

**Step 1: Create file**
```tsx
import { AnimatedNumber } from "@/components/ui/AnimatedNumber"
import { stats } from "@/lib/data/stats"

export function StatsBand() {
  return (
    <section className="bg-violet-600/10 border-y border-violet-600/20 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl md:text-5xl font-bold text-white">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-muted text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**
```bash
git add components/sections/StatsBand.tsx
git commit -m "feat: add StatsBand with count-up numbers"
```

---

### Task 16: ServicesPreview

**Files:**
- Create: `components/sections/ServicesPreview.tsx`

**Step 1: Create file**
```tsx
"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/data/services"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { stagger, scaleIn } from "@/lib/animations"
import { Button } from "@/components/ui/Button"

export function ServicesPreview() {
  const preview = services.slice(0, 8)
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading label="What We Do" title="Services Built for Scale" />
          <Button href="/services" variant="outline" size="sm">View All Services</Button>
        </div>
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {preview.map((s) => (
            <motion.a key={s.id} href={s.href} variants={scaleIn}
              className="group p-6 rounded-2xl bg-surface border border-border hover:border-violet-600/60 hover:bg-surface-2 transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-violet-600/20 mb-4" />
              <p className="text-white font-medium text-sm mb-1">{s.name}</p>
              <ArrowRight className="w-4 h-4 text-muted group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**
```bash
git add components/sections/ServicesPreview.tsx
git commit -m "feat: add ServicesPreview section"
```

---

### Task 17: IndustriesSection

**Files:**
- Create: `components/sections/IndustriesSection.tsx`

**Step 1: Create file**
```tsx
"use client"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { industries } from "@/lib/data/industries"
import { stagger, fadeUp } from "@/lib/animations"
import { Button } from "@/components/ui/Button"

export function IndustriesSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading label="Who We Help" title="Impact Across Industries" align="center"
          subtitle="From startups to enterprises, we deliver across every major vertical." className="mb-14" />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind) => (
            <motion.a key={ind.id} href={ind.href} variants={fadeUp}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-border hover:border-violet-600/60 hover:bg-violet-600/5 transition-all text-center">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 group-hover:bg-violet-600/30 transition-colors" />
              <p className="text-muted group-hover:text-white text-xs font-medium transition-colors">{ind.label}</p>
            </motion.a>
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <Button href="/contact" size="lg">Let's Talk Business</Button>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**
```bash
git add components/sections/IndustriesSection.tsx
git commit -m "feat: add IndustriesSection"
```

---

### Task 18: InsightsPreview

**Files:**
- Create: `components/sections/InsightsPreview.tsx`

**Step 1: Create file**
```tsx
"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { insights } from "@/lib/data/insights"
import { stagger, fadeUp } from "@/lib/animations"
import { Button } from "@/components/ui/Button"

export function InsightsPreview() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading label="Insights" title="Stories of Transformation" />
          <Button href="/articles" variant="ghost" size="sm">Explore More <ArrowRight className="w-4 h-4 ml-1" /></Button>
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((item) => (
            <motion.a key={item.id} href={item.href} variants={fadeUp}
              className="group flex flex-col p-6 rounded-2xl bg-surface border border-border hover:border-violet-600/60 transition-all">
              <div className="h-40 rounded-xl bg-surface-2 mb-5" />
              <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-3 ${item.type === "Case Study" ? "bg-violet-600/20 text-violet-400" : "bg-zinc-800 text-zinc-400"}`}>
                {item.type}
              </span>
              <p className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-violet-300 transition-colors">{item.title}</p>
              <p className="text-muted text-xs leading-relaxed flex-1">{item.excerpt}</p>
              <div className="flex items-center gap-1 mt-4 text-violet-400 text-xs font-medium">
                Read more <ArrowRight className="w-3 h-3" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**
```bash
git add components/sections/InsightsPreview.tsx
git commit -m "feat: add InsightsPreview section"
```

---

### Task 19: LeadershipCarousel

**Files:**
- Create: `components/sections/LeadershipCarousel.tsx`

**Step 1: Create file**
```tsx
"use client"
import useEmblaCarousel from "embla-carousel-react"
import { Linkedin } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { leaders } from "@/lib/data/leadership"

export function LeadershipCarousel() {
  const [ref] = useEmblaCarousel({ loop: false, align: "start", dragFree: true })
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading label="Our Team" title="Global Leadership" className="mb-10" />
        <div ref={ref} className="overflow-hidden">
          <div className="flex gap-4">
            {leaders.map((l) => (
              <div key={l.name} className="flex-none w-52 p-5 rounded-2xl bg-surface-2 border border-border flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-full bg-violet-600/20 flex items-center justify-center text-violet-400 font-display font-bold text-lg">
                  {l.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{l.name}</p>
                  <p className="text-muted text-xs mt-0.5">{l.title}</p>
                </div>
                <a href={l.linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-muted hover:text-violet-400 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**
```bash
git add components/sections/LeadershipCarousel.tsx
git commit -m "feat: add LeadershipCarousel section"
```

---

### Task 20: ContactCTA + Home page assembly

**Files:**
- Create: `components/sections/ContactCTA.tsx`
- Modify: `app/page.tsx`

**Step 1: Create ContactCTA.tsx**
```tsx
import { Button } from "@/components/ui/Button"

export function ContactCTA() {
  return (
    <section className="py-24 bg-bg border-t border-border">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-4">Ready to start?</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
          Let's build something<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">remarkable.</span>
        </h2>
        <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
          Tell us about your project and we'll get back within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg">Get in Touch</Button>
          <Button href={`mailto:${require("@/lib/data/site").site.email}`} variant="outline" size="lg">Email Us Directly</Button>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Assemble app/page.tsx**
```tsx
import { PageTransition } from "@/components/ui/PageTransition"
import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesPreview } from "@/components/sections/ServicesPreview"
import { StatsBand } from "@/components/sections/StatsBand"
import { IndustriesSection } from "@/components/sections/IndustriesSection"
import { InsightsPreview } from "@/components/sections/InsightsPreview"
import { LeadershipCarousel } from "@/components/sections/LeadershipCarousel"
import { ContactCTA } from "@/components/sections/ContactCTA"

export default function HomePage() {
  return (
    <PageTransition>
      <main>
        <HeroSection />
        <ServicesPreview />
        <StatsBand />
        <IndustriesSection />
        <InsightsPreview />
        <LeadershipCarousel />
        <ContactCTA />
      </main>
    </PageTransition>
  )
}
```

**Step 3: Verify**
```bash
npm run dev
```
Expected: full home page visible at localhost:3000

**Step 4: Commit**
```bash
git add components/sections/ContactCTA.tsx app/page.tsx
git commit -m "feat: assemble home page with all sections"
```

---

## Phase 5 — Inner Pages

### Task 21: About Us page

**Files:**
- Create: `app/about-us/page.tsx`

**Step 1: Create file**
```tsx
import { PageTransition } from "@/components/ui/PageTransition"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { AnimatedNumber } from "@/components/ui/AnimatedNumber"
import { Button } from "@/components/ui/Button"
import { leaders } from "@/lib/data/leadership"
import { offices } from "@/lib/data/navigation"
import { Linkedin } from "lucide-react"

export const metadata = { title: "About Us — Edge and Engage" }

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="pt-24">
        {/* Hero */}
        <section className="py-24 bg-bg text-center">
          <div className="max-w-4xl mx-auto px-6">
            <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">Who We Are</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
              Built on Trust.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">Driven by Innovation.</span>
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Edge and Engage is a global technology partner helping businesses across North America, Middle East, Africa and Asia Pacific transform through cutting-edge software solutions.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-surface border-y border-border">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[{ value: 3000, suffix: "+", label: "Projects Delivered" },
              { value: 23, suffix: "+", label: "Countries" },
              { value: 250, suffix: "+", label: "Active Clients" },
              { value: 15, suffix: "+", label: "Years Experience" }].map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl font-bold text-white">
                  <AnimatedNumber value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-muted text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading label="Our Culture" title="What Drives Us" className="mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{ title: "Client Obsession", desc: "We measure success by the outcomes we create for our clients, not just the code we ship." },
                { title: "Engineering Excellence", desc: "We hold ourselves to the highest technical standards on every engagement." },
                { title: "Global Mindset", desc: "Diverse teams across 5 continents bring perspective that drives better solutions." }].map((v) => (
                <div key={v.title} className="p-6 rounded-2xl bg-surface border border-border">
                  <div className="w-8 h-8 rounded-lg bg-violet-600/20 mb-4" />
                  <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading label="Leadership" title="Meet the Team" className="mb-12" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {leaders.map((l) => (
                <div key={l.name} className="flex flex-col items-center text-center p-5 rounded-2xl bg-surface-2 border border-border">
                  <div className="w-16 h-16 rounded-full bg-violet-600/20 flex items-center justify-center text-violet-400 font-bold text-lg mb-3">{l.initials}</div>
                  <p className="text-white text-sm font-semibold">{l.name}</p>
                  <p className="text-muted text-xs mt-0.5 mb-3">{l.title}</p>
                  <a href={l.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-violet-400 transition-colors"><Linkedin className="w-4 h-4" /></a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offices */}
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading label="Global Presence" title="Our Offices" className="mb-12" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {offices.map((o) => (
                <div key={o.country} className="p-6 rounded-2xl bg-surface border border-border">
                  <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-1">{o.type}</p>
                  <p className="text-white font-semibold mb-2">{o.country}</p>
                  <p className="text-muted text-sm leading-relaxed">{o.address}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
```

**Step 2: Commit**
```bash
git add app/about-us/page.tsx
git commit -m "feat: add About Us page"
```

---

### Task 22: Contact page + Resend API route

**Files:**
- Create: `app/contact/page.tsx`
- Create: `app/api/contact/route.ts`
- Create: `emails/ContactEmail.tsx`
- Modify: `lib/validations/contact.ts`

**Step 1: Update contact schema**
```ts
// lib/validations/contact.ts
import { z } from "zod"
export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Valid phone required"),
  company: z.string().min(1, "Company name required"),
  services: z.array(z.string()).min(1, "Select at least one service"),
  message: z.string().min(10, "Please describe your project"),
})
export type ContactFormData = z.infer<typeof contactSchema>
```

**Step 2: Create emails/ContactEmail.tsx**
```tsx
interface Props { fullName: string; email: string; company: string; message: string; services: string[] }
export function ContactEmail({ fullName, email, company, message, services }: Props) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> {fullName}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Services:</strong> {services.join(", ")}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>
  )
}
```

**Step 3: Create API route**
```ts
// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { contactSchema } from "@/lib/validations/contact"
import { ContactEmail } from "@/emails/ContactEmail"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()
  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })

  const { fullName, email, company, message, services } = parsed.data
  await resend.emails.send({
    from: "Edge and Engage <noreply@edgeandenggage.com>",
    to: "global.business@edgeandenggage.com",
    subject: `New enquiry from ${fullName} — ${company}`,
    react: ContactEmail({ fullName, email, company, message, services }),
  })
  return NextResponse.json({ ok: true })
}
```

**Step 4: Create contact page**
```tsx
// app/contact/page.tsx
"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { contactSchema, type ContactFormData } from "@/lib/validations/contact"
import { Button } from "@/components/ui/Button"
import { PageTransition } from "@/components/ui/PageTransition"
import { offices } from "@/lib/data/navigation"
import { services } from "@/lib/data/services"

const topServices = services.slice(0, 8).map((s) => s.name)

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData) {
    await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    setSent(true)
  }

  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">Get in Touch</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-8">Let's Start a Conversation</h1>
            {sent ? (
              <div className="p-8 rounded-2xl bg-violet-600/10 border border-violet-600/30 text-center">
                <p className="text-white font-semibold text-lg">Message sent!</p>
                <p className="text-muted text-sm mt-2">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                {[{ name: "fullName", label: "Full Name", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                  { name: "phone", label: "Phone", type: "tel" },
                  { name: "company", label: "Company", type: "text" }].map(({ name, label, type }) => (
                  <div key={name}>
                    <label className="text-xs text-muted uppercase tracking-widest mb-1.5 block">{label}</label>
                    <input {...register(name as keyof ContactFormData)} type={type}
                      className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-600 transition-colors" />
                    {errors[name as keyof ContactFormData] && (
                      <p className="text-red-400 text-xs mt-1">{errors[name as keyof ContactFormData]?.message as string}</p>
                    )}
                  </div>
                ))}
                <div>
                  <label className="text-xs text-muted uppercase tracking-widest mb-2 block">Services Interested In</label>
                  <div className="grid grid-cols-2 gap-2">
                    {topServices.map((s) => (
                      <label key={s} className="flex items-center gap-2 text-sm text-muted cursor-pointer">
                        <input type="checkbox" value={s} {...register("services")} className="accent-violet-600" />
                        {s}
                      </label>
                    ))}
                  </div>
                  {errors.services && <p className="text-red-400 text-xs mt-1">{errors.services.message}</p>}
                </div>
                <div>
                  <label className="text-xs text-muted uppercase tracking-widest mb-1.5 block">Message</label>
                  <textarea {...register("message")} rows={4}
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-600 transition-colors resize-none" />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* Offices */}
          <div className="flex flex-col gap-6 pt-20">
            <h2 className="font-display text-2xl font-bold text-white">Our Offices</h2>
            {offices.map((o) => (
              <div key={o.country} className="p-5 rounded-2xl bg-surface border border-border">
                <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-1">{o.type}</p>
                <p className="text-white font-semibold">{o.country}</p>
                <p className="text-muted text-sm mt-1">{o.address}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
```

**Step 5: Verify**
```bash
npx tsc --noEmit
```

**Step 6: Commit**
```bash
git add app/contact/page.tsx app/api/contact/route.ts emails/ContactEmail.tsx lib/validations/contact.ts
git commit -m "feat: add Contact page with Resend API route"
```

---

### Task 23: Services overview page

**Files:**
- Create: `app/services/page.tsx`

**Step 1: Create file**
```tsx
"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/data/services"
import { PageTransition } from "@/components/ui/PageTransition"
import { stagger, scaleIn } from "@/lib/animations"

const categories = ["All", "AI & Data", "Cloud", "Web & Mobile", "Gaming", "Engineering", "Business Apps"]

const categoryMap: Record<string, string[]> = {
  "AI & Data": ["genai", "data"],
  "Cloud": ["cloud-app", "cloud-maint", "cloud-migration", "devops"],
  "Web & Mobile": ["web", "mobile", "custom", "uiux", "saas", "ecommerce", "design-dev", "maint-support"],
  "Gaming": ["game", "web3-gaming", "arvr-gaming", "gaming-art", "metaverse", "ar"],
  "Engineering": ["qa", "cyber", "automation", "blockchain"],
  "Business Apps": ["d365-erp", "crm", "powerapps", "salesforce", "staff-aug"],
}

export default function ServicesPage() {
  const [active, setActive] = useState("All")
  const filtered = active === "All" ? services : services.filter((s) => categoryMap[active]?.includes(s.id))

  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">What We Do</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-3 mb-10">All Services</h1>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <button key={c} onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active === c ? "bg-violet-600 text-white" : "border border-border text-muted hover:border-violet-600/60 hover:text-white"}`}>
                {c}
              </button>
            ))}
          </div>

          <motion.div key={active} variants={stagger} initial="hidden" animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filtered.map((s) => (
              <motion.a key={s.id} href={s.href} variants={scaleIn}
                className="group p-6 rounded-2xl bg-surface border border-border hover:border-violet-600/60 hover:bg-surface-2 transition-all">
                <div className="w-8 h-8 rounded-lg bg-violet-600/20 mb-4" />
                <p className="text-white font-medium text-sm mb-3">{s.name}</p>
                <ArrowRight className="w-4 h-4 text-muted group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </main>
    </PageTransition>
  )
}
```

**Step 2: Commit**
```bash
git add app/services/page.tsx
git commit -m "feat: add Services overview page with category filter"
```

---

### Task 24: Service detail template

**Files:**
- Create: `app/services/[slug]/page.tsx` (replace existing)
- Create: `lib/data/service-pages/index.ts`

**Step 1: Create generic service data index**
```ts
// lib/data/service-pages/index.ts
import { services } from "@/lib/data/services"

export interface ServicePageData {
  slug: string; name: string; tagline: string; description: string
  features: string[]; techStack: string[]; whyUs: { title: string; desc: string }[]
}

export function getServicePageData(slug: string): ServicePageData {
  const service = services.find((s) => s.href === `/services/${slug}`)
  return {
    slug,
    name: service?.name ?? slug,
    tagline: `Enterprise-grade ${service?.name ?? slug} solutions`,
    description: `Our ${service?.name ?? slug} practice delivers scalable, secure, and high-performance solutions tailored to your business needs.`,
    features: ["Custom architecture", "Agile delivery", "Dedicated team", "Post-launch support"],
    techStack: ["React", "Node.js", "TypeScript", "AWS", "Azure"],
    whyUs: [
      { title: "Proven Track Record", desc: "3,000+ projects delivered across 23+ countries." },
      { title: "Senior-Only Engineers", desc: "Every engagement is staffed with senior talent." },
      { title: "Full Lifecycle", desc: "From discovery to deployment and beyond." },
    ],
  }
}

export function getAllServiceSlugs() {
  return services.map((s) => ({ slug: s.href.replace("/services/", "") }))
}
```

**Step 2: Create service detail page**
```tsx
// app/services/[slug]/page.tsx
import { notFound } from "next/navigation"
import { PageTransition } from "@/components/ui/PageTransition"
import { Button } from "@/components/ui/Button"
import { getServicePageData, getAllServiceSlugs } from "@/lib/data/service-pages/index"

export function generateStaticParams() { return getAllServiceSlugs() }

export default function ServicePage({ params }: { params: { slug: string } }) {
  const data = getServicePageData(params.slug)
  if (!data.name) return notFound()

  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        {/* Hero */}
        <section className="py-24 bg-bg">
          <div className="max-w-4xl mx-auto px-6">
            <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">Service</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-3 mb-4">{data.name}</h1>
            <p className="text-muted text-lg mb-8 max-w-2xl">{data.description}</p>
            <Button href="/contact" size="lg">Start a Project</Button>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold text-white mb-8">What's Included</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.features.map((f) => (
                <div key={f} className="p-5 rounded-2xl bg-surface-2 border border-border">
                  <div className="w-6 h-6 rounded-md bg-violet-600/20 mb-3" />
                  <p className="text-white text-sm font-medium">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold text-white mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {data.techStack.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full bg-surface border border-border text-muted text-sm">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold text-white mb-8">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.whyUs.map((w) => (
                <div key={w.title} className="p-6 rounded-2xl bg-surface-2 border border-border">
                  <h3 className="text-white font-semibold mb-2">{w.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-bg text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-muted mb-8">Let's discuss your {data.name} project.</p>
            <Button href="/contact" size="lg">Get in Touch</Button>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
```

**Step 3: Verify all slugs resolve**
```bash
npm run build
```
Expected: all 30 service routes statically generated, zero errors

**Step 4: Commit**
```bash
git add app/services/[slug]/page.tsx lib/data/service-pages/index.ts
git commit -m "feat: add dynamic service detail template for all 30 slugs"
```

---

### Task 25: Blog listing + post pages

**Files:**
- Create: `lib/data/articles.ts`
- Create: `app/articles/page.tsx`
- Create: `app/articles/[slug]/page.tsx`

**Step 1: Create articles data**
```ts
// lib/data/articles.ts
export interface Article {
  slug: string; title: string; excerpt: string; date: string
  readTime: string; tag: string; body: string
}
export const articles: Article[] = [
  { slug: "azure-cloud-architecture", title: "Building Scalable Cloud Architecture on Azure",
    excerpt: "Key patterns for multi-region failover and cost-optimised Azure deployments.",
    date: "2026-01-28", readTime: "7 min", tag: "Cloud",
    body: "Multi-region Azure deployments require careful planning of traffic manager profiles, geo-redundant storage, and active-active failover configurations..." },
  { slug: "genai-product-development", title: "How GenAI Is Reshaping Product Development",
    excerpt: "AI-assisted code review, automated testing, and intelligent sprint planning are changing how teams ship.",
    date: "2026-02-05", readTime: "5 min", tag: "AI",
    body: "Generative AI is no longer a novelty in the engineering team. From co-pilots to autonomous agents, the tooling has matured..." },
  { slug: "mobile-first-ux", title: "Mobile-First UX: Lessons from 100+ App Launches",
    excerpt: "Patterns that consistently improve engagement, retention and conversion in mobile applications.",
    date: "2026-02-15", readTime: "6 min", tag: "Design",
    body: "After launching over a hundred mobile applications across verticals, certain UX patterns emerge as consistently high-performing..." },
]
```

**Step 2: Create blog listing page**
```tsx
// app/articles/page.tsx
import { articles } from "@/lib/data/articles"
import { PageTransition } from "@/components/ui/PageTransition"
import { ArrowRight } from "lucide-react"

export const metadata = { title: "Blog — Edge and Engage" }

export default function ArticlesPage() {
  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">Insights</span>
          <h1 className="font-display text-5xl font-bold text-white mt-3 mb-12">Latest Articles</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a) => (
              <a key={a.slug} href={`/articles/${a.slug}`}
                className="group flex flex-col p-6 rounded-2xl bg-surface border border-border hover:border-violet-600/60 transition-all">
                <div className="h-40 rounded-xl bg-surface-2 mb-5" />
                <span className="self-start text-xs font-semibold px-3 py-1 rounded-full bg-violet-600/20 text-violet-400 mb-3">{a.tag}</span>
                <p className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-violet-300 transition-colors">{a.title}</p>
                <p className="text-muted text-xs leading-relaxed flex-1">{a.excerpt}</p>
                <div className="flex items-center gap-1 mt-4 text-violet-400 text-xs font-medium">
                  {a.readTime} read <ArrowRight className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
```

**Step 3: Create blog post template**
```tsx
// app/articles/[slug]/page.tsx
import { notFound } from "next/navigation"
import { articles } from "@/lib/data/articles"
import { PageTransition } from "@/components/ui/PageTransition"

export function generateStaticParams() { return articles.map((a) => ({ slug: a.slug })) }

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return notFound()
  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">{article.tag}</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-muted text-xs mb-10">
            <span>{article.date}</span><span>·</span><span>{article.readTime} read</span>
          </div>
          <div className="h-64 rounded-2xl bg-surface mb-10" />
          <p className="text-muted leading-relaxed">{article.body}</p>
        </div>
      </main>
    </PageTransition>
  )
}
```

**Step 4: Commit**
```bash
git add lib/data/articles.ts app/articles/page.tsx app/articles/[slug]/page.tsx
git commit -m "feat: add Blog listing and post pages"
```

---

### Task 26: Case Studies pages

**Files:**
- Create: `lib/data/case-studies.ts`
- Create: `app/case-studies/page.tsx`
- Create: `app/case-studies/[slug]/page.tsx`

**Step 1: Create data**
```ts
// lib/data/case-studies.ts
export interface CaseStudy {
  slug: string; client: string; industry: string; title: string
  challenge: string; solution: string; results: { value: string; label: string }[]
}
export const caseStudies: CaseStudy[] = [
  { slug: "genai-fintech", client: "FinEdge Ltd", industry: "Fintech",
    title: "How Generative AI Cut Development Time by 40%",
    challenge: "Manual code review and testing bottlenecks slowed sprint velocity.",
    solution: "Integrated AI-assisted code review, automated test generation, and LLM-powered sprint planning.",
    results: [{ value: "40%", label: "Faster delivery" }, { value: "60%", label: "Fewer bugs" }, { value: "3x", label: "Sprint output" }] },
  { slug: "ecommerce-mobile", client: "GulfCart", industry: "E-commerce",
    title: "Mobile-First Rebuild: 3x Conversion Uplift",
    challenge: "Legacy web app had 2.1% mobile checkout conversion and high abandonment.",
    solution: "React Native rebuild with optimised checkout flow, biometric auth, and offline support.",
    results: [{ value: "3x", label: "Conversion rate" }, { value: "65%", label: "Load time reduction" }, { value: "4.8★", label: "App Store rating" }] },
]
```

**Step 2: Create listing page**
```tsx
// app/case-studies/page.tsx
import { caseStudies } from "@/lib/data/case-studies"
import { PageTransition } from "@/components/ui/PageTransition"
import { ArrowRight } from "lucide-react"

export const metadata = { title: "Case Studies — Edge and Engage" }

export default function CaseStudiesPage() {
  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">Work</span>
          <h1 className="font-display text-5xl font-bold text-white mt-3 mb-12">Case Studies</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <a key={cs.slug} href={`/case-studies/${cs.slug}`}
                className="group p-8 rounded-2xl bg-surface border border-border hover:border-violet-600/60 transition-all">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-600/20 text-violet-400">{cs.industry}</span>
                <h2 className="text-white font-display font-bold text-xl mt-4 mb-2 group-hover:text-violet-300 transition-colors">{cs.title}</h2>
                <p className="text-muted text-sm">{cs.client}</p>
                <div className="flex items-center gap-1 mt-6 text-violet-400 text-sm font-medium">
                  Read case study <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
```

**Step 3: Create detail page**
```tsx
// app/case-studies/[slug]/page.tsx
import { notFound } from "next/navigation"
import { caseStudies } from "@/lib/data/case-studies"
import { PageTransition } from "@/components/ui/PageTransition"
import { Button } from "@/components/ui/Button"
import { AnimatedNumber } from "@/components/ui/AnimatedNumber"

export function generateStaticParams() { return caseStudies.map((cs) => ({ slug: cs.slug })) }

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = caseStudies.find((c) => c.slug === params.slug)
  if (!cs) return notFound()
  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">{cs.industry}</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-2">{cs.title}</h1>
          <p className="text-muted mb-10">{cs.client}</p>

          {/* Results strip */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {cs.results.map((r) => (
              <div key={r.label} className="p-5 rounded-2xl bg-surface border border-border text-center">
                <p className="font-display text-3xl font-bold text-violet-400">{r.value}</p>
                <p className="text-muted text-xs mt-1">{r.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            <div><h2 className="text-white font-semibold mb-2">The Challenge</h2><p className="text-muted leading-relaxed">{cs.challenge}</p></div>
            <div><h2 className="text-white font-semibold mb-2">Our Solution</h2><p className="text-muted leading-relaxed">{cs.solution}</p></div>
          </div>
          <div className="mt-12"><Button href="/contact" size="lg">Start a Similar Project</Button></div>
        </div>
      </main>
    </PageTransition>
  )
}
```

**Step 4: Commit**
```bash
git add lib/data/case-studies.ts app/case-studies/page.tsx app/case-studies/[slug]/page.tsx
git commit -m "feat: add Case Studies listing and detail pages"
```

---

### Task 27: Careers page

**Files:**
- Create: `app/careers/page.tsx`

**Step 1: Create file**
```tsx
import { PageTransition } from "@/components/ui/PageTransition"
import { Button } from "@/components/ui/Button"
import { site } from "@/lib/data/site"

export const metadata = { title: "Careers — Edge and Engage" }

export default function CareersPage() {
  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        <section className="py-24 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">Join Us</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-3 mb-6">
              Human-first is<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">our foundation.</span>
            </h1>
            <p className="text-muted text-lg mb-10">We build great products because we build great teams first.</p>
            <Button href={site.careersUrl} size="lg">View Open Roles</Button>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{ title: "Remote-First Culture", desc: "Work from anywhere with flexible hours and async-friendly processes." },
                { title: "Growth Opportunities", desc: "Regular feedback cycles, mentorship, and clear promotion paths." },
                { title: "Global Team", desc: "Collaborate with talented engineers across 23+ countries." }].map((v) => (
                <div key={v.title} className="p-6 rounded-2xl bg-surface-2 border border-border">
                  <div className="w-8 h-8 rounded-lg bg-violet-600/20 mb-4" />
                  <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-bg text-center">
          <div className="max-w-xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Don't see your role?</h2>
            <p className="text-muted mb-8">Send us your CV and we'll reach out when the right opportunity opens up.</p>
            <Button href={`mailto:${site.email}`} variant="outline" size="lg">Send Your CV</Button>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
```

**Step 2: Commit**
```bash
git add app/careers/page.tsx
git commit -m "feat: add Careers page"
```

---

### Task 28: 404 page

**Files:**
- Create: `app/not-found.tsx`

**Step 1: Create file**
```tsx
"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg flex flex-col items-center justify-center text-center px-6">
      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity }}
        className="font-display text-[12rem] font-bold text-violet-600/20 leading-none select-none"
      >
        404
      </motion.p>
      <h1 className="font-display text-3xl font-bold text-white -mt-8 mb-4">Page not found</h1>
      <p className="text-muted mb-8 max-w-sm">The page you're looking for doesn't exist or has been moved.</p>
      <Button href="/" size="lg">Back to Home</Button>
    </main>
  )
}
```

**Step 2: Commit**
```bash
git add app/not-found.tsx
git commit -m "feat: add animated 404 page"
```

---

## Phase 6 — QA Pass

### Task 29: Fix dead nav links

**Files:**
- Modify: `lib/data/navigation.ts`

**Step 1:** Find all `href: "#"` entries in navItems and replace with real routes:
- "Discovery & Strategy" → `/about-us`
- "Agile Development" → `/about-us`
- "Microsoft" → `https://microsoft.com`
- "AWS" → `https://aws.amazon.com`
- "Google Cloud" → `https://cloud.google.com`

**Step 2: Verify no dead links remain**
```bash
grep -r 'href: "#"' lib/data/navigation.ts
```
Expected: no matches

**Step 3: Commit**
```bash
git add lib/data/navigation.ts
git commit -m "fix: replace all dead href='#' with real routes"
```

---

### Task 30: Add reduced-motion support

**Files:**
- Modify: `app/globals.css`

**Step 1: Append to globals.css**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Step 2: Commit**
```bash
git add app/globals.css
git commit -m "fix: add prefers-reduced-motion CSS support"
```

---

### Task 31: Add RESEND_API_KEY env placeholder

**Files:**
- Create: `.env.local.example`

**Step 1: Create file**
```
RESEND_API_KEY=re_your_api_key_here
```

**Step 2: Ensure .env.local is gitignored**
```bash
grep ".env.local" .gitignore
```
Expected: `.env.local` is listed

**Step 3: Commit**
```bash
git add .env.local.example
git commit -m "chore: add .env.local.example with RESEND_API_KEY placeholder"
```

---

### Task 32: Final production build

**Step 1: Run full build**
```bash
npm run build
```
Expected: `✓ Compiled successfully` with zero TypeScript errors, all routes listed

**Step 2: Check for any missing pages**
Verify these routes appear in build output:
- `/` `/about-us` `/contact` `/careers`
- `/services` `/services/[slug]` (30 pages)
- `/articles` `/articles/[slug]` (3 pages)
- `/case-studies` `/case-studies/[slug]` (2 pages)

**Step 3: Run lint**
```bash
npm run lint
```
Expected: no errors

**Step 4: Final commit**
```bash
git add -A
git commit -m "chore: final QA pass — all routes verified, lint clean"
```

---

## Summary

| Phase | Tasks | What's Built |
|---|---|---|
| 1 | 1–4 | Dependencies, tokens, fonts, clean slate |
| 2 | 5–9 | Animation variants, Button, SectionHeading, AnimatedNumber, PageTransition |
| 3 | 10–12 | Navbar, Footer, root layout |
| 4 | 13–20 | All home page data + 7 sections assembled |
| 5 | 21–28 | About, Contact+Resend, Services, Blog, Case Studies, Careers, 404 |
| 6 | 29–32 | Dead link fix, reduced-motion, env example, final build |

**Total: 32 tasks across 6 phases**

**After build is complete:** Add `RESEND_API_KEY` to Vercel environment variables and redeploy.
