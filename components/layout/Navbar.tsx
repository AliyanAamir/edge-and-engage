"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import SideDrawer from "./SideDrawer"
import { navItems } from "@/lib/data/navigation"
import { site } from "@/lib/data/site"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-6 py-3 max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-[var(--color-teal)] font-black text-2xl leading-none">
              {site.logoLetter}
            </span>
            <span className="text-gray-900 font-bold text-lg tracking-wide hidden sm:block">
              {site.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors uppercase tracking-wide"
              >
                {item.label}
                <ChevronDown size={14} />
              </button>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setDrawerOpen(true)}
              className="px-4 py-2 text-sm font-semibold text-black bg-[var(--color-teal)] rounded-full hover:bg-[var(--color-teal-dark)] transition-all"
            >
              Let&apos;s Talk Business
            </button>
            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 ml-2 transition-colors">
              Global
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="text-left text-gray-600 hover:text-gray-900 py-2 text-sm font-medium uppercase tracking-wide border-b border-gray-100 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col gap-3 pt-3">
              <button
                onClick={() => {
                  setDrawerOpen(true)
                  setMobileOpen(false)
                }}
                className="px-4 py-2 text-sm font-semibold text-black bg-[var(--color-teal)] rounded-full"
              >
                Let&apos;s Talk Business
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Fixed vertical "Let's Talk Business" tab on right edge */}
      <button
        onClick={() => setDrawerOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[var(--color-teal)] text-black text-xs font-bold px-2 py-4 hover:bg-[var(--color-teal-dark)] transition-all hidden lg:flex items-center justify-center"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
        aria-label="Open contact form"
      >
        Let&apos;s Talk Business
      </button>

      <SideDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
