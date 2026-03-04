"use client"
import { motion } from "framer-motion"
import { Plane, Radio, Zap, ShoppingBag, Heart, Landmark, Store, Rocket, CreditCard, Gamepad2 } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { industries } from "@/lib/data/industries"
import { stagger, fadeUp } from "@/lib/animations"
import { Button } from "@/components/ui/Button"

const iconMap: Record<string, React.ElementType> = {
  travel: Plane,
  telecom: Radio,
  energy: Zap,
  ecommerce: ShoppingBag,
  health: Heart,
  public: Landmark,
  retail: Store,
  startups: Rocket,
  fintech: CreditCard,
  gaming: Gamepad2,
}

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
          {industries.map((ind) => {
            const Icon = iconMap[ind.id] ?? Landmark
            return (
              <motion.a
                key={ind.id}
                href={ind.href}
                variants={fadeUp}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-border hover:border-violet-600/60 hover:bg-violet-600/5 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-600/15 flex items-center justify-center group-hover:bg-violet-600/25 transition-colors">
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>
                <p className="text-zinc-400 group-hover:text-white text-xs font-medium transition-colors leading-snug">
                  {ind.label}
                </p>
              </motion.a>
            )
          })}
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
