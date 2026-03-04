export interface CaseStudy {
  slug: string
  client: string
  industry: string
  title: string
  challenge: string
  solution: string
  results: { value: string; label: string }[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "genai-fintech",
    client: "FinEdge Ltd",
    industry: "Fintech",
    title: "How Generative AI Cut Development Time by 40%",
    challenge: "Manual code review and testing bottlenecks slowed sprint velocity.",
    solution:
      "Integrated AI-assisted code review, automated test generation, and LLM-powered sprint planning.",
    results: [
      { value: "40%", label: "Faster delivery" },
      { value: "60%", label: "Fewer bugs" },
      { value: "3x", label: "Sprint output" },
    ],
  },
  {
    slug: "ecommerce-mobile",
    client: "GulfCart",
    industry: "E-commerce",
    title: "Mobile-First Rebuild: 3x Conversion Uplift",
    challenge: "Legacy web app had 2.1% mobile checkout conversion and high abandonment.",
    solution:
      "React Native rebuild with optimised checkout flow, biometric auth, and offline support.",
    results: [
      { value: "3x", label: "Conversion rate" },
      { value: "65%", label: "Load time reduction" },
      { value: "4.8★", label: "App Store rating" },
    ],
  },
]
