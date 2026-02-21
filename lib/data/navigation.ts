// ─── Mega Menu Types ──────────────────────────────────────────────────────────

export interface MegaMenuLink {
  label: string
  href: string
}

export interface MegaMenuGroup {
  heading?: string
  links: MegaMenuLink[]
}

export interface MegaMenuColumn {
  groups: MegaMenuGroup[]
}

export interface MegaMenuData {
  title: string
  columns: MegaMenuColumn[]
}

// ─── Nav Items ────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
  megaMenu?: MegaMenuData
}

export const navItems: NavItem[] = [
  {
    label: "What we do",
    href: "#",
    megaMenu: {
      title: "Capabilities",
      columns: [
        {
          groups: [
            {
              heading: "Digital Transformation",
              links: [
                { label: "Web Development", href: "/services/website-development" },
                { label: "App Development", href: "/services/mobile-development" },
                { label: "Custom Software Development", href: "/services/custom-development" },
                { label: "UX/UI Design", href: "/services/ui-ux-design" },
              ],
            },
            {
              heading: "Business Applications",
              links: [
                { label: "Dynamics 365 ERP", href: "/services/d365-erp" },
                { label: "Dynamics 365 CRM", href: "/services/d365-crm" },
                { label: "Power Apps", href: "/services/power-apps" },
                { label: "Salesforce", href: "/services/salesforce" },
              ],
            },
          ],
        },
        {
          groups: [
            {
              heading: "Emerging Technologies",
              links: [
                { label: "Metaverse", href: "/services/metaverse" },
                { label: "Augmented Reality", href: "/services/augmented-reality" },
                { label: "Blockchain & Cryptography", href: "/services/blockchain-cryptography" },
              ],
            },
            {
              heading: "Data & Intelligence",
              links: [
                { label: "Generative AI", href: "/services/genai" },
                { label: "Data Analytics & Insights", href: "/services/data-analytics-and-insights" },
              ],
            },
            {
              heading: "Cloud",
              links: [
                { label: "Cloud Application", href: "/services/cloud-application" },
                { label: "Cloud Ops & Migration", href: "/services/cloud-migration-cloud-ops" },
                { label: "Cloud Maintenance & Integration", href: "/services/cloud-maintenance-integration" },
              ],
            },
          ],
        },
        {
          groups: [
            {
              heading: "Engineering",
              links: [
                { label: "Quality Assurance", href: "/services/quality-assurance" },
                { label: "DevOps", href: "/services/devops" },
                { label: "Cybersecurity", href: "/services/cybersecurity-solutions" },
                { label: "SaaS", href: "/services/saas" },
                { label: "Staff Augmentation", href: "/services/staff-augmentation" },
              ],
            },
            {
              heading: "E-commerce",
              links: [
                { label: "Design & Development", href: "/services/design-development" },
                { label: "Maintenance & Support", href: "/services/maintenance-support" },
                { label: "Automation & Apps", href: "/services/automation-apps" },
              ],
            },
            {
              heading: "Gaming",
              links: [
                { label: "Art & Design", href: "/services/gaming-art-design" },
                { label: "Web3 Gaming", href: "/services/web3-gaming" },
                { label: "AR/VR/XR", href: "/services/ar-vr-xr-gaming" },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    label: "Who we help",
    href: "#",
    megaMenu: {
      title: "Industries",
      columns: [
        {
          groups: [
            {
              links: [
                { label: "Travel & Hospitality", href: "/industry/travel-hospitality" },
                { label: "Telecommunication", href: "/industry/telecommunication" },
                { label: "Oil, Gas & Energy", href: "/industry/oil-gas-and-energy" },
                { label: "E-commerce", href: "/industry/e-commerce-software-development" },
                { label: "Healthcare & Pharmaceuticals", href: "/industry/healthcare-pharmaceuticals" },
              ],
            },
          ],
        },
        {
          groups: [
            {
              links: [
                { label: "Public Sector", href: "/industry/public-sector" },
                { label: "Retail & CPG", href: "/industry/retail-and-cpg" },
                { label: "Startups", href: "/industry/startups" },
                { label: "Banking & Fintech", href: "/industry/banking-fintech" },
                { label: "Gaming", href: "/industry/gaming" },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    label: "Who We Are",
    href: "#",
    megaMenu: {
      title: "Company",
      columns: [
        {
          groups: [
            {
              heading: "About Us",
              links: [
                { label: "Our Story", href: "/about-us" },
                { label: "Global Leadership", href: "/#global-leaders" },
                { label: "Our Culture", href: "/about-us#culture" },
                { label: "Global Offices", href: "/about-us#geography" },
              ],
            },
          ],
        },
        {
          groups: [
            {
              heading: "Insights",
              links: [
                { label: "Case Studies", href: "/case-studies" },
                { label: "Blog", href: "/articles" },
                { label: "Learning", href: "/learning" },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    label: "How we deliver",
    href: "#",
    megaMenu: {
      title: "Our Approach",
      columns: [
        {
          groups: [
            {
              heading: "Methodology",
              links: [
                { label: "Discovery & Strategy", href: "#" },
                { label: "Agile Development", href: "#" },
                { label: "Quality Assurance", href: "/services/quality-assurance" },
                { label: "DevOps & Deployment", href: "/services/devops" },
              ],
            },
          ],
        },
        {
          groups: [
            {
              heading: "Partnerships",
              links: [
                { label: "Microsoft", href: "#" },
                { label: "AWS", href: "#" },
                { label: "Google Cloud", href: "#" },
                { label: "Salesforce", href: "/services/salesforce" },
              ],
            },
          ],
        },
      ],
    },
  },
]

// ─── Footer Links ─────────────────────────────────────────────────────────────

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

// ─── Offices ──────────────────────────────────────────────────────────────────

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
