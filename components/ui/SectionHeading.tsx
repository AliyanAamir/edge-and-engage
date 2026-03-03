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

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
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
