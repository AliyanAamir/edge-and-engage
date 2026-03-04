"use client"

import { motion } from "framer-motion"
import { PageTransition } from "@/components/ui/PageTransition"
import { TextGenerateEffect } from "@/components/ui/aceternity/TextGenerateEffect"
import type { Article } from "@/lib/data/articles"

interface ArticleDetailClientProps {
  article: Article
}

export function ArticleDetailClient({ article }: ArticleDetailClientProps) {
  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold text-violet-400 uppercase tracking-widest"
          >
            {article.tag}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-4"
          >
            {article.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 text-muted text-xs mb-10"
          >
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime} read</span>
            <span>·</span>
            <span>{article.author}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-64 rounded-2xl bg-gradient-to-br from-violet-600/20 to-surface-2 mb-10 border border-border flex items-center justify-center"
          >
            <div className="text-5xl font-display font-bold text-violet-400 opacity-30">
              {article.title.substring(0, 1)}
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted leading-relaxed mb-10"
          >
            {article.body}
          </motion.p>
          <div className="flex flex-col gap-10">
            {article.sections.map((s, i) => (
              <motion.div
                key={s.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-xl font-bold text-white mb-3">{s.heading}</h2>
                <p className="text-muted leading-relaxed">{s.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
