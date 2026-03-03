"use client"
import { useState, useEffect } from "react"
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-bg/80 border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-display font-bold text-sm">
            E
          </span>
          <span className="font-display font-bold text-white text-sm hidden sm:block">
            {site.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
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
                              {group.heading && (
                                <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-2">
                                  {group.heading}
                                </p>
                              )}
                              {group.links.map((link) => (
                                <a
                                  key={link.href}
                                  href={link.href}
                                  className="block text-sm text-muted hover:text-white py-1 transition-colors"
                                >
                                  {link.label}
                                </a>
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

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" size="sm" href={site.careersUrl}>
            Careers
          </Button>
          <Button variant="primary" size="sm" href="/contact">
            Let's Talk
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface border-b border-border px-6 py-4 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" size="sm" href="/contact" className="mt-2">
              Let's Talk
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
