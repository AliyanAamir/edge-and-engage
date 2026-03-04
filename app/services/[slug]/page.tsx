import { notFound } from "next/navigation"
import { getServicePageData, getAllServiceSlugs } from "@/lib/data/service-pages/index"
import { ServiceDetailClient } from "@/components/sections/ServiceDetailClient"

export function generateStaticParams() {
  return getAllServiceSlugs()
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = getServicePageData(slug)
  return { title: data.name ? `${data.name} — Edge and Engage` : "Service — Edge and Engage" }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = getServicePageData(slug)
  if (!data.name) return notFound()

  return <ServiceDetailClient data={data} />
}
