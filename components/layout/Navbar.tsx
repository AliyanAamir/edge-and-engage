"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { navItems } from "@/lib/data/navigation"
import { site } from "@/lib/data/site"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const activeItem = navItems.find((i) => i.label === activeMenu)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-bg/90 border-b border-border" : "bg-transparent"
      }`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-display font-bold text-sm">
            E
          </span>
          <span className="font-display font-bold text-white text-sm hidden sm:block">
            {site.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li
              key={item.label}
              onMouseEnter={() => setActiveMenu(item.label)}
            >
              <button className="flex items-center gap-1.5 text-sm text-zinc-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">
                {item.label}
                {item.megaMenu && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === item.label ? "rotate-180 text-violet-400" : ""
                    }`}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" size="sm" href={site.careersUrl}>
            Careers
          </Button>
          <Button variant="primary" size="sm" href="/contact">
            Let&apos;s Talk
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white p-1" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Full-width Mega Menu Dropdown */}
      <AnimatePresence>
        {activeItem?.megaMenu && (
          <motion.div
            key={activeMenu}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="border-b border-border bg-surface-2 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="flex gap-10">
                {activeItem.megaMenu.columns.map((col, ci) => (
                  <div key={ci} className="flex flex-col gap-6 min-w-40">
                    {col.groups.map((group, gi) => (
                      <div key={gi}>
                        {group.heading && (
                          <p className="text-[10px] font-bold text-violet-400 uppercase tracking-[0.15em] mb-2.5 pb-2 border-b border-white/5">
                            {group.heading}
                          </p>
                        )}
                        <div className="flex flex-col">
                          {group.links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 px-2 py-1.5 rounded-md transition-all duration-150 group"
                            >
                              <span className="w-1 h-1 rounded-full bg-violet-600/50 group-hover:bg-violet-400 transition-colors shrink-0" />
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-zinc-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-border flex gap-2">
                <Button variant="outline" size="sm" href={site.careersUrl} className="flex-1 justify-center">
                  Careers
                </Button>
                <Button variant="primary" size="sm" href="/contact" className="flex-1 justify-center">
                  Let&apos;s Talk
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
