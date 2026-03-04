import { notFound } from "next/navigation"
import { articles } from "@/lib/data/articles"
import { ArticleDetailClient } from "@/components/sections/ArticleDetailClient"

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  return { title: article ? `${article.title} — Edge and Engage` : "Article — Edge and Engage" }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return notFound()

  return <ArticleDetailClient article={article} />
}
