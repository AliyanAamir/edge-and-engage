export interface Article {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tag: string
  body: string
}

export const articles: Article[] = [
  {
    slug: "azure-cloud-architecture",
    title: "Building Scalable Cloud Architecture on Azure",
    excerpt: "Key patterns for multi-region failover and cost-optimised Azure deployments.",
    date: "2026-01-28",
    readTime: "7 min",
    tag: "Cloud",
    body: "Multi-region Azure deployments require careful planning of traffic manager profiles, geo-redundant storage, and active-active failover configurations. In this article we explore the key architectural patterns that help engineering teams build resilient, cost-optimised infrastructure on Azure.",
  },
  {
    slug: "genai-product-development",
    title: "How GenAI Is Reshaping Product Development",
    excerpt: "AI-assisted code review, automated testing, and intelligent sprint planning are changing how teams ship.",
    date: "2026-02-05",
    readTime: "5 min",
    tag: "AI",
    body: "Generative AI is no longer a novelty in the engineering team. From co-pilots to autonomous agents, the tooling has matured to the point where teams can meaningfully accelerate delivery cycles without sacrificing code quality. Here is how leading product teams are adopting AI across the entire development lifecycle.",
  },
  {
    slug: "mobile-first-ux",
    title: "Mobile-First UX: Lessons from 100+ App Launches",
    excerpt: "Patterns that consistently improve engagement, retention and conversion in mobile applications.",
    date: "2026-02-15",
    readTime: "6 min",
    tag: "Design",
    body: "After launching over a hundred mobile applications across verticals, certain UX patterns emerge as consistently high-performing. From progressive disclosure in onboarding to thumb-zone optimisation in navigation, these evidence-based principles translate directly into measurable retention and conversion gains.",
  },
]
