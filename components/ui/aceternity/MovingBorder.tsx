"use client"
import { useRef } from "react"
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface MovingBorderProps {
  children: React.ReactNode
  duration?: number
  className?: string
  containerClassName?: string
  borderRadius?: string
  as?: React.ElementType
  borderClassName?: string
}

export function MovingBorder({
  children,
  duration = 4000,
  className,
  containerClassName,
  borderRadius = "1rem",
  as: Component = "div",
  borderClassName,
}: MovingBorderProps) {
  return (
    <Component
      className={cn(
        "relative overflow-hidden bg-transparent p-[1px]",
        containerClassName,
      )}
      style={{ borderRadius }}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius }}
      >
        <MovingBorderGradient duration={duration} borderClassName={borderClassName} rx="30%" ry="30%" />
      </div>
      <div
        className={cn("relative z-10 border border-transparent bg-surface backdrop-blur-xl", className)}
        style={{ borderRadius: `calc(${borderRadius} - 1px)` }}
      >
        {children}
      </div>
    </Component>
  )
}

function MovingBorderGradient({
  duration = 4000,
  rx = "30%",
  ry = "30%",
  borderClassName,
}: {
  duration?: number
  rx?: string
  ry?: string
  borderClassName?: string
}) {
  const pathRef = useRef<SVGRectElement>(null)
  const progress = useMotionValue<number>(0)

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength()
    if (length) {
      const pxPerMs = length / duration
      progress.set((time * pxPerMs) % length)
    }
  })

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val)?.x ?? 0)
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val)?.y ?? 0)
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="absolute h-full w-full"
      width="100%"
      height="100%"
    >
      <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      <foreignObject width="100%" height="100%">
        <div className="absolute inset-0">
          <motion.div
            style={{ transform }}
            className={cn(
              "h-20 w-20 rounded-full bg-[radial-gradient(#7c3aed_40%,transparent_60%)] opacity-80",
              borderClassName,
            )}
          />
        </div>
      </foreignObject>
    </svg>
  )
}
