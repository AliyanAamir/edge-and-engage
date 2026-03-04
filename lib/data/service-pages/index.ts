import { services } from "@/lib/data/services"

export interface ServicePageData {
  slug: string
  name: string
  tagline: string
  description: string
  features: string[]
  techStack: string[]
  whyUs: { title: string; desc: string }[]
}

export function getServicePageData(slug: string): ServicePageData {
  const service = services.find((s) => s.href === `/services/${slug}`)
  return {
    slug,
    name: service?.name ?? slug,
    tagline: `Enterprise-grade ${service?.name ?? slug} solutions`,
    description: `Our ${service?.name ?? slug} practice delivers scalable, secure, and high-performance solutions tailored to your business needs.`,
    features: ["Custom architecture", "Agile delivery", "Dedicated team", "Post-launch support"],
    techStack: ["React", "Node.js", "TypeScript", "AWS", "Azure"],
    whyUs: [
      { title: "Proven Track Record", desc: "3,000+ projects delivered across 23+ countries." },
      { title: "Senior-Only Engineers", desc: "Every engagement is staffed with senior talent." },
      { title: "Full Lifecycle", desc: "From discovery to deployment and beyond." },
    ],
  }
}

export function getAllServiceSlugs() {
  return services.map((s) => ({ slug: s.href.replace("/services/", "") }))
}
