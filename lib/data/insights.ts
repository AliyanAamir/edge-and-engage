export interface Insight {
  id: string
  type: "Case Study" | "Blog"
  title: string
  href: string
}

export const insights: Insight[] = [
  { id: "recurate", type: "Case Study", title: "US Fashion Resale Platform Scales to 100K Monthly Transactions", href: "/case-studies/recurate" },
  { id: "cloud-small-biz", type: "Blog", title: "How Cloud Computing Can Transform Small Businesses", href: "/articles/how-cloud-computing-can-transform-small-businesses" },
  { id: "custom-web-app", type: "Blog", title: "Custom Web Application Development: Everything You Need to Know", href: "/articles/custom-web-app-development-what-you-need-to-know" },
  { id: "mobile-design", type: "Blog", title: "Trends of Mobile Design: What's Next for Your Business?", href: "/articles/trends-of-mobile-design-whats-next-for-your-business" },
  { id: "gen-ai-ops", type: "Blog", title: "How Generative AI is Transforming Business Operations", href: "/articles/how-generative-ai-is-transforming-business-operations" },
  { id: "xquic", type: "Case Study", title: "Hospitality AI Platform Reconciles $300M+ in OTA Commissions Automatically", href: "/case-studies/empowering-xquic-for-automated-financial-accuracy" },
  { id: "interwood", type: "Case Study", title: "Pakistan Furniture Leader's Shopify Migration Drives 55% Growth", href: "/case-studies/interwood" },
  { id: "fintech-ai", type: "Case Study", title: "US Fintech's AI Financial Modeling Secures $2M+ Funding", href: "/case-studies/financial-automation" },
]
