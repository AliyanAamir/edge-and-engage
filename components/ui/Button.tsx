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

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null)
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
  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-colors cursor-pointer select-none"
  const sizes = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-sm", lg: "px-8 py-4 text-base" }
  const variants = {
    primary: "bg-violet-600 text-white hover:bg-violet-500",
    outline: "border border-violet-600 text-violet-400 hover:bg-violet-600/10",
    ghost: "text-white hover:text-violet-400",
  }

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        style={{ x: sx, y: sy }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={cn(
          base,
          sizes[size],
          variants[variant],
          disabled && "opacity-50 pointer-events-none",
          className,
        )}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      type={type}
      disabled={disabled}
      style={{ x: sx, y: sy }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        base,
        sizes[size],
        variants[variant],
        disabled && "opacity-50 pointer-events-none",
        className,
      )}
    >
      {children}
    </motion.button>
  )
}
