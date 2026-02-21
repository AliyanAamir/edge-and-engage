export interface Industry {
  id: string
  name: string
  href: string
}

export const industries: Industry[] = [
  { id: "travel", name: "Travel & Hospitality", href: "/industry/travel-hospitality" },
  { id: "public", name: "Public Sector", href: "/industry/public-sector" },
  { id: "telecom", name: "Telecommunication", href: "/industry/telecommunication" },
  { id: "retail", name: "Retail & CPG", href: "/industry/retail-and-cpg" },
  { id: "energy", name: "Oil, Gas, and Energy", href: "/industry/oil-gas-and-energy" },
  { id: "startups", name: "Startups", href: "/industry/startups" },
  { id: "ecommerce", name: "E-commerce", href: "/industry/e-commerce-software-development" },
  { id: "fintech", name: "Banking & Fintech", href: "/industry/banking-fintech" },
  { id: "healthcare", name: "Healthcare & Pharmaceuticals", href: "/industry/healthcare-pharmaceuticals" },
  { id: "gaming", name: "Gaming", href: "/industry/gaming" },
]
