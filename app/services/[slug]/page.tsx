import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { allServicePages } from "@/lib/data/service-pages"
import ServicePageTemplate from "@/components/service-page/ServicePageTemplate"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return Object.keys(allServicePages).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = allServicePages[slug]
  if (!page) return {}
  return {
    title: page.meta.title,
    description: page.meta.description,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const page = allServicePages[slug]
  if (!page) notFound()
  return <ServicePageTemplate data={page} />
}
