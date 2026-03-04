export interface Service {
  id: string
  name: string
  href: string
  desc: string
}

export const services: Service[] = [
  { id: "genai", name: "Generative AI", href: "/services/genai", desc: "Custom LLM agents, AI-assisted workflows, and intelligent automation." },
  { id: "d365-erp", name: "Dynamics 365 ERP", href: "/services/d365-erp", desc: "End-to-end ERP implementation, customisation, and integration." },
  { id: "mobile", name: "Mobile App Development", href: "/services/mobile-development", desc: "Native and cross-platform mobile applications that users love." },
  { id: "staff-aug", name: "Staff Augmentation", href: "/services/staff-augmentation", desc: "Senior engineers who integrate seamlessly with your team." },
  { id: "devops", name: "DevOps", href: "/services/devops", desc: "CI/CD pipelines, infrastructure as code, and cloud automation." },
  { id: "uiux", name: "UI/UX Design", href: "/services/ui-ux-design", desc: "Research-driven design that converts visitors into customers." },
  { id: "web", name: "Web Development", href: "/services/website-development", desc: "High-performance web applications built with modern frameworks." },
  { id: "custom", name: "Custom Software Development", href: "/services/custom-development", desc: "Bespoke software solutions tailored to your exact requirements." },
  { id: "cyber", name: "Cybersecurity", href: "/services/cybersecurity-solutions", desc: "Zero trust architecture, penetration testing, and compliance." },
  { id: "data", name: "Data Analytics & Insights", href: "/services/data-analytics-and-insights", desc: "Turn raw data into actionable business intelligence." },
  { id: "crm", name: "MS D365 CRM", href: "/services/d365-crm", desc: "CRM solutions that drive sales productivity and customer loyalty." },
  { id: "powerapps", name: "Power Apps", href: "/services/power-apps", desc: "Low-code business applications built on Microsoft Power Platform." },
  { id: "cloud-app", name: "Cloud Application", href: "/services/cloud-application", desc: "Cloud-native applications designed for scale and resilience." },
  { id: "cloud-maint", name: "Cloud Maintenance & Integration", href: "/services/cloud-maintenance-integration", desc: "Ongoing cloud operations, monitoring, and system integration." },
  { id: "metaverse", name: "Metaverse", href: "/services/metaverse", desc: "Immersive virtual worlds and persistent multiplayer experiences." },
  { id: "ar", name: "Augmented Reality", href: "/services/augmented-reality", desc: "AR experiences for retail, training, and industrial applications." },
  { id: "blockchain", name: "Blockchain & Cryptography", href: "/services/blockchain-cryptography", desc: "Smart contracts, DeFi protocols, and enterprise blockchain solutions." },
  { id: "game", name: "Game Development", href: "/services/game-development", desc: "AAA and indie game development with Unreal and Unity engines." },
  { id: "web3-gaming", name: "Web3 Gaming", href: "/services/web3-gaming", desc: "Play-to-earn mechanics, NFT integration, and token economies." },
  { id: "arvr-gaming", name: "AR/VR/XR Gaming", href: "/services/ar-vr-xr-gaming", desc: "Extended reality gaming experiences for all major headsets." },
  { id: "gaming-art", name: "Gaming Art & Design", href: "/services/gaming-art-design", desc: "Concept art, 3D modelling, animation, and visual effects." },
  { id: "qa", name: "Quality Assurance", href: "/services/quality-assurance", desc: "Automated and manual testing to ensure flawless releases." },
  { id: "saas", name: "SaaS", href: "/services/saas", desc: "Multi-tenant SaaS platforms with subscription management." },
  { id: "cloud-migration", name: "Cloud Migration & Cloud Ops", href: "/services/cloud-migration-cloud-ops", desc: "Seamless migration to AWS, Azure, or GCP with zero downtime." },
  { id: "ecommerce", name: "E-commerce", href: "/services/e-commerce", desc: "High-conversion storefronts and marketplace platforms." },
  { id: "design-dev", name: "Design & Development", href: "/services/design-development", desc: "Full-stack design and development from concept to launch." },
  { id: "maint-support", name: "Maintenance & Support", href: "/services/maintenance-support", desc: "24/7 monitoring, bug fixes, and performance optimisation." },
  { id: "automation", name: "Automation & Apps", href: "/services/automation-apps", desc: "Workflow automation, RPA, and business process optimisation." },
  { id: "salesforce", name: "Salesforce", href: "/services/salesforce", desc: "Salesforce implementation, customisation, and managed services." },
]
