"use client"

import { motion } from "framer-motion"
import { PageTransition } from "@/components/ui/PageTransition"
import { Button } from "@/components/ui/Button"
import { TextGenerateEffect } from "@/components/ui/aceternity/TextGenerateEffect"
import type { CaseStudy } from "@/lib/data/case-studies"

interface CaseStudyDetailClientProps {
  cs: CaseStudy
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function CaseStudyDetailClient({ cs }: CaseStudyDetailClientProps) {
  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold text-violet-400 uppercase tracking-widest"
          >
            {cs.industry}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-2"
          >
            {cs.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted mb-10"
          >
            {cs.client}
          </motion.p>

          {/* Results strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 mb-12"
          >
            {cs.results.map((r) => (
              <motion.div
                key={r.label}
                whileHover={{ scale: 1.05 }}
                className="p-5 rounded-2xl bg-surface border border-border text-center transition-all"
              >
                <p className="font-display text-3xl font-bold text-violet-400">{r.value}</p>
                <p className="text-muted text-xs mt-1">{r.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white font-display font-semibold text-2xl mb-3">The Challenge</h2>
              <TextGenerateEffect words={cs.challenge} className="text-muted leading-relaxed" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white font-display font-semibold text-2xl mb-3">Our Solution</h2>
              <p className="text-muted leading-relaxed">{cs.solution}</p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Button href="/contact" size="lg">
              Start a Similar Project
            </Button>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  )
}
