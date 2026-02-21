import type { ServicePageData } from "./types"

export const webDevelopment: ServicePageData = {
  slug: "website-development",
  meta: {
    title: "Web Development | Edge and Engage",
    description:
      "Build high-performance, scalable web experiences. Edge and Engage delivers custom web development, e-commerce, CMS, and web applications across all industries.",
  },
  hero: {
    label: "Services",
    heading: "Web Development",
    tagline: "Building Seamless Digital Experiences",
    ctaLabel: "Build Your Website Now",
    ctaHref: "/contact",
  },
  overview: {
    label: "What We Do",
    heading: "Enterprise Web Development at Scale",
    description:
      "We craft high-performance web solutions tailored to your business goals. From responsive landing pages to complex enterprise platforms, our engineering teams deliver quality at every layer of the stack.",
    capabilities: [
      { title: "Modern Tech Frameworks", description: "React, Next.js, Angular, Vue.js — we choose the right stack for your project." },
      { title: "Responsive by Default", description: "Pixel-perfect across all devices and screen sizes, always." },
      { title: "Performance Optimized", description: "Core Web Vitals, lazy loading, CDN — built for speed from day one." },
      { title: "Security First", description: "OWASP best practices, data encryption, and secure API design baked in." },
    ],
  },
  services: {
    heading: "Our Web Development Services",
    items: [
      { title: "Custom Web Development", description: "Bespoke web applications built from the ground up to fit your exact business processes and user needs." },
      { title: "E-Commerce Development", description: "Scalable online stores with seamless checkout, inventory management, and payment integrations." },
      { title: "Content Management Systems", description: "Headless CMS and traditional CMS solutions that empower your team to manage content independently." },
      { title: "Web Application Development", description: "Complex SaaS platforms, dashboards, and business tools with real-time data and rich interactivity." },
      { title: "API Integration & Development", description: "RESTful and GraphQL APIs that connect your web applications with third-party services and internal systems." },
      { title: "Website Maintenance & Support", description: "Ongoing monitoring, updates, and performance tuning to keep your web presence running at peak condition." },
      { title: "SEO & Digital Marketing Integration", description: "Technical SEO foundations, structured data, and marketing tool integrations to drive organic growth." },
      { title: "Web Security Solutions", description: "Vulnerability assessments, SSL, DDoS protection, and compliance-ready security hardening." },
      { title: "Performance Optimization", description: "Audits, caching strategies, and infrastructure tuning to cut load times and improve conversion rates." },
      { title: "UI/UX Design Integration", description: "Design systems, component libraries, and pixel-perfect implementation from Figma to production." },
    ],
  },
  whyChooseUs: {
    heading: "Why Choose Edge and Engage for Web Development",
    points: [
      { title: "15+ Years of Engineering Excellence", description: "A decade and a half of delivering web solutions across 23+ countries gives us the depth to solve any challenge." },
      { title: "Full-Stack Ownership", description: "From UX wireframes to cloud infrastructure, we own the entire delivery chain with no handoffs to unknown subcontractors." },
      { title: "Agile & Transparent", description: "Weekly demos, live dashboards, and direct Slack access — you always know exactly where your project stands." },
      { title: "3,000+ Successful Projects", description: "Our track record across 250+ active clients proves we ship on time, on budget, and above expectations." },
    ],
  },
  industries: ["Education", "Retail & E-Commerce", "Healthcare", "Logistics", "Finance & Fintech", "Travel & Hospitality", "Real Estate", "Gaming"],
  techStack: ["React", "Next.js", "Angular", "Vue.js", "TypeScript", "Node.js", "Express", "Laravel", "Django", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes", "GraphQL", "Tailwind CSS", "Nginx"],
  cta: {
    heading: "Ready to Build Your Web Presence?",
    subtext: "Let's talk about your project — no commitment, just clarity.",
    ctaLabel: "Start a Conversation",
    ctaHref: "/contact",
  },
}
