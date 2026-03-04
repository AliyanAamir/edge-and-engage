"use client"
import { motion } from "framer-motion"
import { AnimatedNumber } from "@/components/ui/AnimatedNumber"
import { stats } from "@/lib/data/stats"
import { stagger, fadeUp } from "@/lib/animations"

export function StatsBand() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-violet-600/5 to-violet-600/10 border-y border-violet-600/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="flex flex-col items-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-white leading-none">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </p>
              <div className="w-8 h-px bg-violet-600/60 my-3" />
              <p className="text-zinc-400 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
