// lib/data/service-pages/types.ts

export interface LabeledItem {
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
    capabilities: LabeledItem[]
  }
  services: {
    heading: string
    items: LabeledItem[]
  }
  whyChooseUs: {
    heading: string
    points: LabeledItem[]
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
