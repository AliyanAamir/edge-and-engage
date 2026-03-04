export type InsightType = "Case Study" | "Blog"
export interface Insight {
  id: string
  title: string
  type: InsightType
  excerpt: string
  href: string
  date: string
  readTime: string
}
export const insights: Insight[] = [
  {
    id: "1",
    title: "How Generative AI Cut Development Time by 40%",
    type: "Case Study",
    excerpt: "A fintech client reduced sprint cycles dramatically with our AI-assisted engineering workflow.",
    href: "/case-studies/genai-fintech",
    date: "2026-02-10",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "Building Scalable Cloud Architecture on Azure",
    type: "Blog",
    excerpt: "Key patterns for multi-region failover and cost-optimised Azure deployments.",
    href: "/articles/azure-cloud-architecture",
    date: "2026-01-28",
    readTime: "7 min",
  },
  {
    id: "3",
    title: "Mobile-First E-commerce: 3x Conversion Uplift",
    type: "Case Study",
    excerpt: "How a React Native rebuild transformed checkout conversion for a UAE retailer.",
    href: "/case-studies/ecommerce-mobile",
    date: "2026-01-15",
    readTime: "4 min",
  },
  {
    id: "4",
    title: "Digital Health Platform Serving 2M+ Patients",
    type: "Case Study",
    excerpt: "Building a HIPAA-compliant unified health platform with telemedicine and AI triage across 50+ clinics.",
    href: "/case-studies/healthcare-platform",
    date: "2026-02-18",
    readTime: "6 min",
  },
  {
    id: "5",
    title: "The DevOps Maturity Model: Where Does Your Team Stand?",
    type: "Blog",
    excerpt: "A practical framework for assessing and advancing your organisation's DevOps capabilities.",
    href: "/articles/devops-maturity-model",
    date: "2026-02-20",
    readTime: "8 min",
  },
  {
    id: "6",
    title: "Enterprise Cloud Migration: $4M Annual Savings",
    type: "Case Study",
    excerpt: "Phased migration of 200+ applications to Azure with zero downtime and massive cost reduction.",
    href: "/case-studies/cloud-migration-enterprise",
    date: "2026-02-28",
    readTime: "5 min",
  },
]
