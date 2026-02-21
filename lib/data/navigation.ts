export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: "What we do", href: "#" },
  { label: "Who we help", href: "#" },
  { label: "Who We Are", href: "#" },
  { label: "How we deliver", href: "#" },
]

export interface FooterLink {
  label: string
  href: string
}

export const footerCompanyLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Blog", href: "/articles" },
  { label: "Contact", href: "/contact" },
]

export const footerIndustryLinks: FooterLink[] = [
  { label: "Travel & Hospitality", href: "/industry/travel-hospitality" },
  { label: "Public Sector", href: "/industry/public-sector" },
  { label: "Telecommunication", href: "/industry/telecommunication" },
  { label: "Retail & CPG", href: "/industry/retail-and-cpg" },
  { label: "Oil, Gas & Energy", href: "/industry/oil-gas-and-energy" },
  { label: "Startups", href: "/industry/startups" },
  { label: "E-commerce", href: "/industry/e-commerce-software-development" },
  { label: "Banking & Fintech", href: "/industry/banking-fintech" },
  { label: "Healthcare", href: "/industry/healthcare-pharmaceuticals" },
  { label: "Gaming", href: "/industry/gaming" },
]

export const footerServiceLinks: FooterLink[] = [
  { label: "Generative AI", href: "/services/genai" },
  { label: "Mobile App Development", href: "/services/mobile-development" },
  { label: "Web Development", href: "/services/website-development" },
  { label: "Custom Software", href: "/services/custom-development" },
  { label: "DevOps", href: "/services/devops" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "Cybersecurity", href: "/services/cybersecurity-solutions" },
  { label: "Data Analytics", href: "/services/data-analytics-and-insights" },
  { label: "Cloud Application", href: "/services/cloud-application" },
  { label: "Staff Augmentation", href: "/services/staff-augmentation" },
]

export const footerResourceLinks: FooterLink[] = [
  { label: "Blogs", href: "/articles" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Learning", href: "/learning" },
]

export interface Office {
  country: string
  type: string
  address: string
}

export const offices: Office[] = [
  {
    country: "Pakistan",
    type: "Global Delivery Center",
    address: "Plot B, 281 Ghazi Rd, Khuda Buksh Colony KB Society, Lahore, Punjab",
  },
  {
    country: "USA",
    type: "Regional Office",
    address: "18 S 2nd Street #120, San Jose, CA, 95113, United States",
  },
  {
    country: "UAE",
    type: "Regional Office",
    address: "34HW+5J5 - Parkside Retail Level - Cluster R - Jumeirah Lakes Towers - Dubai",
  },
  {
    country: "UK",
    type: "Regional Office",
    address: "128 City Road London, EC1V 2NX, United Kingdom",
  },
  {
    country: "KSA",
    type: "Regional Office",
    address: "3141 Anas Ibn Malik Rd, Al Malqa, Riyadh 13521 KSA",
  },
]
