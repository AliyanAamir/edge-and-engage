"use client"
import { motion } from "framer-motion"
import { ArrowRight, Brain, Cloud, Globe, Smartphone, Shield, BarChart3, Gamepad2, Layers } from "lucide-react"
import { services } from "@/lib/data/services"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { stagger, scaleIn } from "@/lib/animations"
import { Button } from "@/components/ui/Button"

const icons = [Brain, Cloud, Globe, Smartphone, Shield, BarChart3, Gamepad2, Layers]

export function ServicesPreview() {
  const preview = services.slice(0, 8)
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading label="What We Do" title="Services Built for Scale" />
          <Button href="/services" variant="outline" size="sm">
            View All Services
          </Button>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {preview.map((s, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.a
                key={s.id}
                href={s.href}
                variants={scaleIn}
                className="group p-6 rounded-2xl bg-surface border border-border hover:border-violet-600/60 hover:bg-surface-2 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center mb-4 group-hover:bg-violet-600/30 transition-colors">
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>
                <p className="text-white font-medium text-sm mb-3 leading-snug">{s.name}</p>
                <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
