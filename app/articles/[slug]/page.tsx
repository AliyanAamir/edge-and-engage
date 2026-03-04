'use client';

import { notFound } from "next/navigation"
import { articles } from "@/lib/data/articles"
import { PageTransition } from "@/components/ui/PageTransition"
import { motion } from "framer-motion"
import { TextGenerateEffect } from "@/components/ui/aceternity/TextGenerateEffect"

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return notFound()

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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-64 rounded-2xl bg-gradient-to-br from-violet-600/20 to-surface-2 mb-10 border border-border flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-5xl font-display font-bold text-violet-400 opacity-30">{article.title.substring(0, 1)}</div>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted leading-relaxed space-y-4 prose prose-invert max-w-none"
          >
            {article.body}
          </motion.p>
        </div>
      </main>
    </PageTransition>
  )
}
