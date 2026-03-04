"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

interface TimelineProps {
  data: TimelineEntry[]
  className?: string
}

export function Timeline({ data, className }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div ref={ref} className="relative mx-auto max-w-5xl pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-10 md:pt-24">
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-surface md:left-3">
                <div className="h-4 w-4 rounded-full border border-violet-500 bg-violet-600/30" />
              </div>
              <h3 className="hidden text-xl font-bold text-white md:block md:pl-20 font-display">
                {item.title}
              </h3>
            </div>
            <div className="relative w-full pl-16 pr-4 md:pl-4">
              <h3 className="mb-4 block text-left text-lg font-bold text-white md:hidden font-display">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div className="absolute left-8 top-0 h-full w-[2px] overflow-hidden bg-zinc-800 md:left-8">
          <motion.div
            style={{ height: heightTransform }}
            className="w-full bg-gradient-to-b from-violet-500 via-violet-400 to-transparent"
          />
        </div>
      </div>
    </div>
  )
}
