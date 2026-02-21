import type { ServicePageData } from "./types"

export const customDevelopment: ServicePageData = {
  slug: "custom-development",
  meta: {
    title: "Custom Software Development | Edge and Engage",
    description:
      "Bespoke software solutions engineered for your exact business needs. From enterprise systems to SaaS products, Edge and Engage builds software that scales.",
  },
  hero: {
    label: "Services",
    heading: "Custom Software Development",
    tagline: "Solutions Built for Innovation",
    ctaLabel: "Get a Proposal",
    ctaHref: "/contact",
  },
  overview: {
    label: "What We Do",
    heading: "Software Engineered Around Your Business",
    description:
      "Off-the-shelf software forces your business to adapt to its limitations. We build the other way around — software that conforms to your processes, scales with your growth, and integrates with your ecosystem.",
    capabilities: [
      { title: "Scalable Architecture", description: "Microservices, event-driven design, and cloud-native patterns built to grow with you." },
      { title: "Full-Stack Development", description: "Backend APIs, frontend interfaces, and data layers — all under one roof." },
      { title: "Legacy Modernization", description: "Migrate and modernize aging systems without disrupting business operations." },
      { title: "API-First Design", description: "Every system we build exposes clean, documented APIs for easy integration." },
    ],
  },
  services: {
    heading: "Our Custom Software Services",
    items: [
      { title: "End-to-End Software Development", description: "Complete product ownership from discovery and architecture through development, testing, and launch." },
      { title: "Enterprise Systems", description: "ERP, CRM, HRMS, and custom enterprise platforms that integrate deeply with your existing infrastructure." },
      { title: "SaaS Product Development", description: "Multi-tenant SaaS applications with subscription billing, usage analytics, and white-label capabilities." },
      { title: "Legacy System Modernization", description: "Strangler-pattern rewrites and incremental migrations that eliminate technical debt without big-bang risk." },
      { title: "API Integration & Middleware", description: "Custom middleware, event buses, and integration layers to connect disparate systems in your tech landscape." },
      { title: "Custom Mobile Applications", description: "Native and cross-platform mobile extensions of your software ecosystem for field teams and customers." },
    ],
  },
  whyChooseUs: {
    heading: "Why Choose Edge and Engage for Custom Software",
    points: [
      { title: "Deep Discovery Process", description: "We spend time understanding your workflows before writing a line of code — requirements gaps are the #1 cause of project failure." },
      { title: "Transparent Fixed-Scope or T&M", description: "Choose the engagement model that fits your risk tolerance — we work both ways with full budget visibility." },
      { title: "Cloud-Native by Default", description: "Every system we build is containerized, CI/CD-ready, and deployable to AWS, Azure, or GCP from day one." },
      { title: "Long-Term Partnership", description: "We don't disappear after launch — our teams stay on for maintenance, scaling, and product iteration." },
    ],
  },
  industries: ["Finance & Fintech", "Healthcare", "Real Estate", "Education", "Retail & E-Commerce", "Logistics", "Manufacturing", "Public Sector"],
  techStack: ["Python", "Node.js", "Java", ".NET", "Go", "PostgreSQL", "MongoDB", "MySQL", "Redis", "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "GraphQL", "REST API", "Terraform", "GitHub Actions"],
  cta: {
    heading: "Ready to Build Software That Fits?",
    subtext: "Share your requirements — we'll propose a path to production.",
    ctaLabel: "Get a Proposal",
    ctaHref: "/contact",
  },
}
