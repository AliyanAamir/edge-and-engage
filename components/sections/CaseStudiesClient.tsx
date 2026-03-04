"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { PageTransition } from "@/components/ui/PageTransition"
import { TextGenerateEffect } from "@/components/ui/aceternity/TextGenerateEffect"
import type { CaseStudy } from "@/lib/data/case-studies"

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

interface CaseStudiesClientProps {
  caseStudies: CaseStudy[]
}

export function CaseStudiesClient({ caseStudies }: CaseStudiesClientProps) {
  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold text-violet-400 uppercase tracking-widest"
          >
            Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl font-bold text-white mt-3 mb-4"
          >
            Case Studies
          </motion.h1>
          <TextGenerateEffect
            words="Real-world examples of how we've helped companies transform their business through innovative technology solutions. See the results we've delivered for leading organizations."
            className="text-muted text-lg mb-12 max-w-2xl"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {caseStudies.map((cs) => (
              <motion.div key={cs.slug} variants={fadeUp}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group p-8 rounded-2xl bg-surface border border-border hover:border-violet-600/60 transition-all h-full flex flex-col"
                >
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-600/20 text-violet-400 w-fit">
                    {cs.industry}
                  </span>
                  <h2 className="text-white font-display font-bold text-xl mt-4 mb-2 group-hover:text-violet-300 transition-colors flex-1">
                    {cs.title}
                  </h2>
                  <p className="text-muted text-sm mb-4">{cs.client}</p>
                  {cs.results && (
                    <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                      {cs.results.slice(0, 2).map((r) => (
                        <div key={r.label} className="bg-surface-2 p-3 rounded-lg">
                          <p className="text-violet-400 font-bold">{r.value}</p>
                          <p className="text-muted">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-1 text-violet-400 text-sm font-medium group-hover:gap-2 transition-all">
                    Read case study <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </PageTransition>
  )
}
