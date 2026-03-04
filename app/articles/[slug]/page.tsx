import { notFound } from "next/navigation"
import { articles } from "@/lib/data/articles"
import { PageTransition } from "@/components/ui/PageTransition"

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
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">
            {article.tag}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-muted text-xs mb-10">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime} read</span>
          </div>
          <div className="h-64 rounded-2xl bg-surface mb-10" />
          <p className="text-muted leading-relaxed">{article.body}</p>
        </div>
      </main>
    </PageTransition>
  )
}
