"use client"

import { motion } from "framer-motion"
import { PageTransition } from "@/components/ui/PageTransition"
import { Button } from "@/components/ui/Button"
import { TextGenerateEffect } from "@/components/ui/aceternity/TextGenerateEffect"
import { MovingBorder } from "@/components/ui/aceternity/MovingBorder"
import type { ServicePageData } from "@/lib/data/service-pages/index"

interface ServiceDetailClientProps {
  data: ServicePageData
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

export function ServiceDetailClient({ data }: ServiceDetailClientProps) {
  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        {/* Hero */}
        <section className="py-24 bg-bg">
          <div className="max-w-4xl mx-auto px-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold text-violet-400 uppercase tracking-widest"
            >
              Service
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-bold text-white mt-3 mb-4"
            >
              {data.name}
            </motion.h1>
            <TextGenerateEffect
              words={data.description}
              className="text-muted text-lg mb-8 max-w-2xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button href="/contact" size="lg">
                Start a Project
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-display text-2xl font-bold text-white mb-8"
            >
              {"What's Included"}
            </motion.h2>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {data.features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="p-5 rounded-2xl bg-surface-2 border border-border hover:border-violet-600/60 transition-all"
                >
                  <div className="w-6 h-6 rounded-md bg-violet-600/20 mb-3" />
                  <p className="text-white text-sm font-medium mb-1">{f.title}</p>
                  <p className="text-muted text-xs leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-display text-2xl font-bold text-white mb-6"
            >
              Tech Stack
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {data.techStack.map((t) => (
                <motion.span
                  key={t}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-full bg-surface border border-border text-muted text-sm hover:border-violet-600/60 hover:text-violet-400 transition-all cursor-default"
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-display text-2xl font-bold text-white mb-8"
            >
              Why Choose Us
            </motion.h2>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {data.whyUs.map((w) => (
                <motion.div key={w.title} variants={fadeUp}>
                  <MovingBorder duration={3000}>
                    <div className="p-6 rounded-2xl bg-surface-2 border border-border h-full">
                      <h3 className="text-white font-semibold mb-2">{w.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{w.desc}</p>
                    </div>
                  </MovingBorder>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-bg text-center">
          <div className="max-w-2xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-display text-3xl font-bold text-white mb-4"
            >
              Ready to get started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted mb-8"
            >
              {`Let's discuss your ${data.name} project and create something remarkable together.`}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button href="/contact" size="lg">
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
