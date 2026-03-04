export interface Industry {
  id: string
  label: string
  href: string
  description: string
}

export const industries: Industry[] = [
  { id: "travel", label: "Travel & Hospitality", href: "/industry/travel-hospitality", description: "Booking engines, loyalty platforms, and guest experience solutions for the travel industry." },
  { id: "telecom", label: "Telecommunication", href: "/industry/telecommunication", description: "Network management, billing systems, and customer self-service portals for telecom providers." },
  { id: "energy", label: "Oil, Gas & Energy", href: "/industry/oil-gas-and-energy", description: "IoT monitoring, predictive maintenance, and operational analytics for energy enterprises." },
  { id: "ecommerce", label: "E-commerce", href: "/industry/e-commerce-software-development", description: "High-conversion storefronts, marketplace platforms, and personalisation engines." },
  { id: "health", label: "Healthcare", href: "/industry/healthcare-pharmaceuticals", description: "EHR systems, telemedicine platforms, and AI-driven diagnostic tools for healthcare providers." },
  { id: "public", label: "Public Sector", href: "/industry/public-sector", description: "Citizen-facing digital services, document automation, and smart city infrastructure." },
  { id: "retail", label: "Retail & CPG", href: "/industry/retail-and-cpg", description: "Omnichannel commerce, inventory optimisation, and consumer analytics for retail brands." },
  { id: "startups", label: "Startups", href: "/industry/startups", description: "MVP development, technical co-founding, and rapid prototyping for early-stage ventures." },
  { id: "fintech", label: "Banking & Fintech", href: "/industry/banking-fintech", description: "Payment processing, regulatory compliance, and AI-powered risk assessment platforms." },
  { id: "gaming", label: "Gaming", href: "/industry/gaming", description: "Game engine development, multiplayer infrastructure, and blockchain-based asset systems." },
]
