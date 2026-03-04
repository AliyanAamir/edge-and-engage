"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { PageTransition } from "@/components/ui/PageTransition"
import { TextGenerateEffect } from "@/components/ui/aceternity/TextGenerateEffect"
import type { Article } from "@/lib/data/articles"

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

interface ArticlesClientProps {
  articles: Article[]
}

export function ArticlesClient({ articles }: ArticlesClientProps) {
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
            Insights
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl font-bold text-white mt-3 mb-4"
          >
            Latest Articles
          </motion.h1>
          <TextGenerateEffect
            words="Discover insights, trends, and best practices in technology, software development, and digital transformation. Our team shares knowledge from years of industry experience."
            className="text-muted text-lg mb-12 max-w-2xl"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {articles.map((a, i) => (
              <motion.div key={a.slug} variants={fadeUp}>
                <Link
                  href={`/articles/${a.slug}`}
                  className="group flex flex-col p-6 rounded-2xl bg-surface border border-border hover:border-violet-600/60 transition-all h-full"
                >
                  <div className="h-40 rounded-xl bg-gradient-to-br from-violet-600/20 to-surface-2 mb-5 flex items-center justify-center">
                    <div className="text-3xl font-display font-bold text-violet-400 opacity-50">{i + 1}</div>
                  </div>
                  <span className="self-start text-xs font-semibold px-3 py-1 rounded-full bg-violet-600/20 text-violet-400 mb-3">
                    {a.tag}
                  </span>
                  <p className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-violet-300 transition-colors flex-1">
                    {a.title}
                  </p>
                  <p className="text-muted text-xs leading-relaxed mb-4">{a.excerpt}</p>
                  <div className="flex items-center gap-1 text-violet-400 text-xs font-medium group-hover:gap-2 transition-all">
                    {a.readTime} read <ArrowRight className="w-3 h-3" />
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
