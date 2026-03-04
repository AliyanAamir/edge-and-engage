import { services } from "@/lib/data/services"

export interface ServicePageData {
  slug: string
  name: string
  tagline: string
  description: string
  features: { title: string; desc: string }[]
  techStack: string[]
  whyUs: { title: string; desc: string }[]
  process: { title: string; desc: string }[]
  faqs: { question: string; answer: string }[]
}

export function getServicePageData(slug: string): ServicePageData {
  const service = services.find((s) => s.href === `/services/${slug}`)
  const name = service?.name ?? slug
  return {
    slug,
    name,
    tagline: `Enterprise-grade ${name} solutions built for scale`,
    description: `Our ${name} practice combines deep technical expertise with battle-tested delivery methodologies to build solutions that drive measurable business outcomes. With over 3,000 successful projects delivered across 23 countries, we bring a proven approach to every engagement -- from initial discovery through post-launch optimisation.`,
    features: [
      { title: "Custom Architecture Design", desc: "Solutions architected specifically for your business requirements, scalability needs, and compliance obligations." },
      { title: "Agile Delivery", desc: "Two-week sprint cycles with continuous stakeholder feedback, ensuring the final product matches your vision exactly." },
      { title: "Dedicated Engineering Team", desc: "Senior-only engineers assigned exclusively to your project, providing deep context and consistent velocity." },
      { title: "Post-Launch Support", desc: "Ongoing maintenance, monitoring, and optimisation to ensure your solution continues to perform at peak levels." },
      { title: "Quality Assurance", desc: "Comprehensive automated and manual testing with 95%+ code coverage targets and zero-critical-bug launch policy." },
      { title: "Security by Design", desc: "Security integrated from day one with threat modelling, penetration testing, and compliance auditing built into the delivery process." },
      { title: "Performance Optimisation", desc: "Load testing, profiling, and optimisation to ensure sub-second response times under peak traffic conditions." },
      { title: "Seamless Integration", desc: "Deep experience integrating with enterprise systems including SAP, Salesforce, Oracle, and custom APIs." },
    ],
    techStack: ["React", "Next.js", "Node.js", "TypeScript", "Python", "AWS", "Azure", "Docker", "Kubernetes", "PostgreSQL", "Redis", "GraphQL"],
    whyUs: [
      { title: "Proven Track Record", desc: "3,000+ projects delivered across 23 countries with a 98% client retention rate." },
      { title: "Senior-Only Engineers", desc: "Every engagement is staffed with engineers who have 5+ years of professional experience." },
      { title: "Full Lifecycle Ownership", desc: "From discovery workshops to production deployment and beyond -- we own the entire journey." },
      { title: "Industry Expertise", desc: "Deep domain knowledge across fintech, healthcare, e-commerce, energy, and public sector." },
    ],
    process: [
      { title: "Discovery & Planning", desc: "We begin with stakeholder workshops to understand your business objectives, technical constraints, and success metrics." },
      { title: "Architecture & Design", desc: "Our architects design a solution that balances performance, scalability, security, and cost efficiency." },
      { title: "Iterative Development", desc: "Two-week sprints with demos and feedback loops ensure continuous alignment with your vision." },
      { title: "Quality Assurance", desc: "Automated testing, performance testing, security auditing, and user acceptance testing before every release." },
      { title: "Deployment & Launch", desc: "Zero-downtime deployment with rollback capabilities, monitoring, and real-time alerting." },
      { title: "Ongoing Support", desc: "Post-launch monitoring, bug fixes, performance optimisation, and feature enhancements." },
    ],
    faqs: [
      { question: "How long does a typical project take?", answer: "Project timelines vary based on scope and complexity. A typical MVP takes 8-12 weeks, while enterprise-scale projects range from 4-8 months. We provide detailed timeline estimates during the discovery phase." },
      { question: "What is your pricing model?", answer: "We offer fixed-price engagements for well-defined scopes and time-and-materials pricing for evolving requirements. All engagements include transparent weekly progress reports and budget tracking." },
      { question: "Do you work with existing codebases?", answer: "Absolutely. Many of our engagements involve modernising, optimising, or extending existing applications. We start with a thorough code audit to understand the current state before recommending improvements." },
      { question: "How do you ensure code quality?", answer: "We maintain strict quality standards including code reviews on every pull request, automated CI/CD pipelines, 95%+ test coverage targets, and regular security audits." },
      { question: "Can we scale the team up or down?", answer: "Yes. Our engagement model is designed for flexibility. You can scale team size based on project phases, with a two-week notice period for team adjustments." },
    ],
  }
}

export function getAllServiceSlugs() {
  return services.map((s) => ({ slug: s.href.replace("/services/", "") }))
}
