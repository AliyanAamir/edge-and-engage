"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface HoverEffectItem {
  title: string
  description: string
  link: string
}

interface HoverEffectProps {
  items: HoverEffectItem[]
  className?: string
}

export function HoverEffect({ items, className }: HoverEffectProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.link}
          className="group relative block h-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-2xl bg-violet-600/10"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10 h-full overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors group-hover:border-violet-500/30">
            <h3 className="text-lg font-semibold text-white font-display">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
