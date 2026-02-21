// lib/data/service-pages/types.ts

export interface ServiceCapability {
  title: string
  description: string
}

export interface ServiceItem {
  title: string
  description: string
}

export interface WhyPoint {
  title: string
  description: string
}

export interface ServicePageData {
  slug: string
  meta: {
    title: string
    description: string
  }
  hero: {
    label: string
    heading: string
    tagline: string
    ctaLabel: string
    ctaHref: string
  }
  overview: {
    label: string
    heading: string
    description: string
    capabilities: ServiceCapability[]
  }
  services: {
    heading: string
    items: ServiceItem[]
  }
  whyChooseUs: {
    heading: string
    points: WhyPoint[]
  }
  industries: string[]
  techStack: string[]
  cta: {
    heading: string
    subtext: string
    ctaLabel: string
    ctaHref: string
  }
}
