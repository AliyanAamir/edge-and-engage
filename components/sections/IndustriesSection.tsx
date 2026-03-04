"use client"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { industries } from "@/lib/data/industries"
import { stagger, fadeUp } from "@/lib/animations"
import { Button } from "@/components/ui/Button"

export function IndustriesSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Who We Help"
          title="Impact Across Industries"
          align="center"
          subtitle="From startups to enterprises, we deliver across every major vertical."
          className="mb-14"
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {industries.map((ind) => (
            <motion.a
              key={ind.id}
              href={ind.href}
              variants={fadeUp}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-border hover:border-violet-600/60 hover:bg-violet-600/5 transition-all text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 group-hover:bg-violet-600/30 transition-colors" />
              <p className="text-muted group-hover:text-white text-xs font-medium transition-colors">
                {ind.label}
              </p>
            </motion.a>
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <Button href="/contact" size="lg">
            Let&apos;s Talk Business
          </Button>
        </div>
      </div>
    </section>
  )
}
