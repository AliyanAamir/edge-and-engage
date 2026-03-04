"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlowingStarsCardProps {
  children: React.ReactNode
  className?: string
}

export function GlowingStarsCard({ children, className }: GlowingStarsCardProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-border bg-surface p-6", className)}>
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-violet-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
