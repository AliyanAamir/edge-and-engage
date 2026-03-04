import { notFound } from "next/navigation"
import { caseStudies } from "@/lib/data/case-studies"
import { CaseStudyDetailClient } from "@/components/sections/CaseStudyDetailClient"

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  return { title: cs ? `${cs.title} — Edge and Engage` : "Case Study — Edge and Engage" }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return notFound()

  return <CaseStudyDetailClient cs={cs} />
}
