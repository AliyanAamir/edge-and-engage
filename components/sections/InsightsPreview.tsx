"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { insights } from "@/lib/data/insights"
import { stagger, fadeUp } from "@/lib/animations"
import { Button } from "@/components/ui/Button"

export function InsightsPreview() {
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
          {insights.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              variants={fadeUp}
              className="group flex flex-col p-6 rounded-2xl bg-surface border border-border hover:border-violet-600/60 transition-all"
            >
              <div className="h-40 rounded-xl bg-surface-2 mb-5" />
              <span
                className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
                  item.type === "Case Study"
                    ? "bg-violet-600/20 text-violet-400"
                    : "bg-zinc-800 text-zinc-400"
                }`}
              >
                {item.type}
              </span>
              <p className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-violet-300 transition-colors">
                {item.title}
              </p>
              <p className="text-muted text-xs leading-relaxed flex-1">{item.excerpt}</p>
              <div className="flex items-center gap-1 mt-4 text-violet-400 text-xs font-medium">
                Read more <ArrowRight className="w-3 h-3" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
