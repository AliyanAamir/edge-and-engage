"use client"
import { motion } from "framer-motion"
import { ArrowRight, Brain, Cloud, ShoppingCart } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { insights } from "@/lib/data/insights"
import { stagger, fadeUp } from "@/lib/animations"
import { Button } from "@/components/ui/Button"

const cardVisuals = [
  {
    bg: "from-violet-600/30 via-violet-900/20 to-transparent",
    Icon: Brain,
    iconColor: "text-violet-300",
  },
  {
    bg: "from-blue-600/25 via-blue-900/15 to-transparent",
    Icon: Cloud,
    iconColor: "text-blue-300",
  },
  {
    bg: "from-violet-600/30 via-purple-900/20 to-transparent",
    Icon: ShoppingCart,
    iconColor: "text-violet-300",
  },
]

export function InsightsPreview() {
  const preview = insights.slice(0, 3)
  
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading label="Insights" title="Stories of Transformation" />
          <Button href="/articles" variant="ghost" size="sm">
            Explore More <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {preview.map((item, i) => {
            const visual = cardVisuals[i % cardVisuals.length]
            const { Icon } = visual
            return (
              <motion.a
                key={item.id}
                href={item.href}
                variants={fadeUp}
                className="group flex flex-col rounded-2xl bg-surface border border-border hover:border-violet-600/60 transition-all overflow-hidden h-full"
              >
                {/* Visual header */}
                <div className={`relative h-44 bg-gradient-to-br ${visual.bg} bg-surface-2 flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/5 blur-2xl" />
                    <div className="absolute bottom-0 left-8 w-20 h-20 rounded-full bg-violet-600/20 blur-xl" />
                  </div>
                  <div className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                    <Icon className={`w-7 h-7 ${visual.iconColor}`} />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] text-zinc-500 font-medium">{item.readTime} read</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
                      item.type === "Case Study"
                        ? "bg-violet-600/20 text-violet-400"
                        : "bg-zinc-800 text-zinc-400"
                    }`}
                  >
                    {item.type}
                  </span>
                  <p className="text-white font-semibold text-base leading-snug mb-3 group-hover:text-violet-300 transition-colors line-clamp-3">
                    {item.title}
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed flex-1 line-clamp-2">{item.excerpt}</p>
                  <div className="flex items-center gap-1 mt-4 text-violet-400 text-xs font-medium group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
