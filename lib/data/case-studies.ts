export interface CaseStudy {
  slug: string
  client: string
  industry: string
  title: string
  challenge: string
  solution: string
  results: { value: string; label: string }[]
  technologies: string[]
  testimonial?: { quote: string; name: string; role: string }
  detailedChallenge: string
  detailedSolution: string
  keyOutcomes: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "genai-fintech",
    client: "FinEdge Ltd",
    industry: "Fintech",
    title: "How Generative AI Cut Development Time by 40%",
    challenge: "Manual code review and testing bottlenecks slowed sprint velocity.",
    solution: "Integrated AI-assisted code review, automated test generation, and LLM-powered sprint planning.",
    detailedChallenge: "FinEdge Ltd, a rapidly scaling fintech company processing over 2 million transactions daily, was struggling with engineering bottlenecks that threatened their ambitious product roadmap. Manual code reviews consumed 30% of senior engineer time, test coverage sat at an insufficient 45%, and sprint estimation was consistently off by 40-60%. With regulatory compliance demands increasing and three major product launches on the horizon, they needed to dramatically accelerate their delivery cadence without compromising on the quality standards that financial services demand.",
    detailedSolution: "We implemented a comprehensive AI-augmented engineering workflow across their 40-person development team. This included deploying custom-trained code review agents that understand their specific codebase conventions and compliance requirements, an automated test generation pipeline that creates unit, integration, and regression tests from code changes, and an intelligent sprint planning system that analyses historical data to predict realistic delivery timelines. The rollout followed a phased approach over 12 weeks, starting with a pilot team of 8 engineers before expanding organisation-wide.",
    keyOutcomes: "Within the first quarter, FinEdge saw sprint velocity increase by 40%, test coverage rise from 45% to 92%, and code review turnaround drop from 48 hours to 4 hours. More importantly, their bug escape rate to production decreased by 60%, and developer satisfaction scores increased by 35%. The team has since shipped all three planned product launches ahead of schedule, and the AI-augmented workflow has become a competitive advantage in recruiting top engineering talent.",
    results: [
      { value: "40%", label: "Faster delivery" },
      { value: "60%", label: "Fewer bugs" },
      { value: "3x", label: "Sprint output" },
      { value: "92%", label: "Test coverage" },
    ],
    technologies: ["OpenAI GPT-4", "GitHub Actions", "Python", "TypeScript", "Azure DevOps", "Custom LLM Agents"],
    testimonial: {
      quote: "Edge and Engage transformed our engineering culture. The AI tools they implemented did not replace our engineers -- they unleashed them.",
      name: "Sarah Chen",
      role: "CTO, FinEdge Ltd",
    },
  },
  {
    slug: "ecommerce-mobile",
    client: "GulfCart",
    industry: "E-commerce",
    title: "Mobile-First Rebuild: 3x Conversion Uplift",
    challenge: "Legacy web app had 2.1% mobile checkout conversion and high abandonment.",
    solution: "React Native rebuild with optimised checkout flow, biometric auth, and offline support.",
    detailedChallenge: "GulfCart, a leading UAE-based e-commerce platform with 500,000 monthly active users, was losing millions in revenue to their underperforming mobile experience. Their legacy responsive web application converted at just 2.1% on mobile devices, compared to 8.3% on desktop. Cart abandonment was 78%, average page load time was 6.2 seconds on 4G connections, and the checkout process required 7 steps across 4 separate pages. User feedback consistently cited slow performance, confusing navigation, and a tedious checkout flow as primary pain points.",
    detailedSolution: "We executed a complete mobile-first rebuild using React Native, enabling code sharing between iOS and Android while delivering native performance. The redesigned checkout flow reduced steps from 7 to 3 with biometric authentication replacing password entry, saved payment methods with one-tap reorder, and an intelligent address autocomplete that reduced input errors by 90%. We implemented offline-first architecture with optimistic updates, image lazy loading with progressive enhancement, and a predictive prefetching system that loads likely next pages in the background. The rebuild was completed in 16 weeks with a phased rollout to minimise risk.",
    keyOutcomes: "Post-launch metrics exceeded all targets. Mobile conversion rate tripled from 2.1% to 6.8%, cart abandonment dropped from 78% to 31%, and average session duration increased by 45%. The app achieved a 4.8-star rating on both app stores within the first month, with users specifically praising the speed and checkout experience. GulfCart reported a 127% increase in mobile revenue within the first quarter after launch.",
    results: [
      { value: "3x", label: "Conversion rate" },
      { value: "65%", label: "Load time reduction" },
      { value: "4.8", label: "App Store rating" },
      { value: "127%", label: "Revenue increase" },
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "Redis", "PostgreSQL", "AWS CloudFront"],
    testimonial: {
      quote: "The difference was night and day. Our customers love the new app, and our revenue numbers speak for themselves.",
      name: "Ahmed Al-Rashidi",
      role: "CEO, GulfCart",
    },
  },
  {
    slug: "healthcare-platform",
    client: "MedConnect Pro",
    industry: "Healthcare",
    title: "Digital Health Platform Serving 2M+ Patients",
    challenge: "Fragmented patient records across 50+ clinics with no unified digital experience.",
    solution: "Built a HIPAA-compliant unified health platform with telemedicine, EHR integration, and AI triage.",
    detailedChallenge: "MedConnect Pro, a healthcare network operating 50+ clinics across the Middle East and North Africa, faced a critical fragmentation problem. Patient records existed in siloed legacy systems, making it impossible for physicians to access complete medical histories. Patients had to repeat tests when visiting different clinics, appointment scheduling required phone calls during business hours, and there was no digital channel for follow-up consultations. The lack of a unified system was not just inefficient -- it posed genuine patient safety risks.",
    detailedSolution: "We designed and built a comprehensive digital health platform from the ground up. The core of the system is a HL7 FHIR-compliant unified health record that aggregates data from all 50+ clinic systems through custom integration adapters. On top of this, we built a patient-facing mobile app with appointment scheduling, telemedicine video consultations, prescription management, and an AI-powered symptom triage system that routes patients to the appropriate care level. The platform was designed with healthcare-grade security including end-to-end encryption, role-based access controls, and full audit logging for regulatory compliance.",
    keyOutcomes: "The platform processed over 2 million patient interactions in its first year. Telemedicine adoption reached 34% of all consultations, reducing clinic overcrowding by 28%. The AI triage system correctly categorised urgency levels with 94% accuracy, ensuring critical cases received immediate attention. Administrative overhead dropped by 45% as automated scheduling, reminders, and prescription renewals replaced manual processes. MedConnect Pro has since expanded to 3 additional countries using the platform.",
    results: [
      { value: "2M+", label: "Patients served" },
      { value: "34%", label: "Telemedicine adoption" },
      { value: "94%", label: "AI triage accuracy" },
      { value: "45%", label: "Admin cost reduction" },
    ],
    technologies: ["React", "Node.js", "HL7 FHIR", "Azure Health APIs", "WebRTC", "TensorFlow", "PostgreSQL"],
    testimonial: {
      quote: "This platform has fundamentally changed how we deliver care. Patients are healthier and our physicians are more efficient.",
      name: "Dr. Fatima Al-Mansoori",
      role: "Chief Medical Officer, MedConnect Pro",
    },
  },
  {
    slug: "public-sector-digital",
    client: "GovServe Digital",
    industry: "Public Sector",
    title: "Government Digital Transformation: 10M Citizens Onboarded",
    challenge: "Paper-based government services with 15-day average processing times.",
    solution: "End-to-end digital government services platform with biometric verification and automated workflows.",
    detailedChallenge: "A major government entity was struggling with citizen service delivery. Processes for permits, licenses, and registrations required in-person visits, physical document submissions, and manual verification steps that averaged 15 business days to complete. Citizen satisfaction scores were at 32%, and the administrative burden required over 3,000 government employees dedicated solely to document processing. Additionally, fraud and identity verification challenges resulted in an estimated 8% error rate in processed applications.",
    detailedSolution: "We delivered a comprehensive digital government services platform that transformed 150+ citizen services from paper-based to fully digital. The platform features biometric identity verification using facial recognition and fingerprint matching, an intelligent document processing system that extracts and validates information from uploaded documents using computer vision, and automated workflow engines that route applications through approval chains without manual intervention. A citizen-facing super-app provides a single interface for all government services, real-time application tracking, and push notification updates.",
    keyOutcomes: "Within 18 months of launch, 10 million citizens were onboarded to the digital platform. Average processing time dropped from 15 days to 2.3 days for standard services and under 4 hours for simple applications. Citizen satisfaction scores rose from 32% to 89%. The automated document processing system reduced the error rate from 8% to 0.3%, and the government was able to redeploy over 2,000 employees from document processing to higher-value citizen engagement roles.",
    results: [
      { value: "10M", label: "Citizens onboarded" },
      { value: "85%", label: "Faster processing" },
      { value: "89%", label: "Satisfaction score" },
      { value: "0.3%", label: "Error rate" },
    ],
    technologies: ["React", "Kotlin", "Azure AI", "Computer Vision", "Blockchain", "Kubernetes", "PostgreSQL"],
    testimonial: {
      quote: "This is the largest digital transformation project in our country's history, and Edge and Engage delivered it flawlessly.",
      name: "Mohammed Al-Harbi",
      role: "Director of Digital Transformation",
    },
  },
  {
    slug: "gaming-metaverse",
    client: "Nexus Realms",
    industry: "Gaming",
    title: "Metaverse Gaming Platform with 500K+ Active Players",
    challenge: "Build a persistent multiplayer metaverse with real-time physics and blockchain-based asset ownership.",
    solution: "Custom game engine integration with Unreal Engine 5, blockchain asset layer, and global server mesh.",
    detailedChallenge: "Nexus Realms envisioned a persistent multiplayer metaverse where players could own, trade, and monetise digital assets across interconnected game worlds. The technical challenges were immense: real-time physics simulation for hundreds of concurrent players per zone, sub-50ms latency for competitive gameplay, blockchain integration for asset ownership without disrupting the gaming experience, and a content creation toolkit that would allow the community to build and publish their own experiences within the metaverse.",
    detailedSolution: "We assembled a specialised team of game engineers, blockchain developers, and infrastructure architects. The technical solution included a custom networking layer built on top of Unreal Engine 5 for high-fidelity real-time multiplayer, a global server mesh spanning 12 regions for low-latency gameplay worldwide, a Layer 2 blockchain integration that handles asset minting, trading, and ownership verification without gas fees or transaction delays, and a visual scripting toolkit that enables non-programmer creators to build interactive experiences. The development spanned 14 months with monthly alpha releases to the community.",
    keyOutcomes: "Nexus Realms launched to 500,000 active players within the first three months, with peak concurrent users exceeding 50,000. The in-game economy processed over 12 million USD in asset transactions in the first quarter. Player retention at Day 30 was 45%, significantly above the industry average of 12% for new multiplayer titles. The creator toolkit attracted over 5,000 community developers who published 800+ custom experiences.",
    results: [
      { value: "500K+", label: "Active players" },
      { value: "$12M", label: "Asset transactions" },
      { value: "45%", label: "D30 retention" },
      { value: "50K", label: "Peak concurrent" },
    ],
    technologies: ["Unreal Engine 5", "C++", "Solidity", "Polygon L2", "AWS GameLift", "Redis", "Kubernetes"],
    testimonial: {
      quote: "Edge and Engage understood both the gaming and blockchain sides. They delivered a technical marvel that players actually enjoy.",
      name: "Alex Rivera",
      role: "Founder, Nexus Realms",
    },
  },
  {
    slug: "cloud-migration-enterprise",
    client: "Atlas Energy Corp",
    industry: "Energy",
    title: "Enterprise Cloud Migration: $4M Annual Savings",
    challenge: "Legacy on-premise infrastructure with 99.2% uptime was too costly and inflexible for modern demands.",
    solution: "Phased migration to Azure with zero-downtime cutover, modernised microservices, and automated scaling.",
    detailedChallenge: "Atlas Energy Corp operated 200+ applications on aging on-premise infrastructure that cost $8.5 million annually to maintain. While the systems achieved 99.2% uptime, every maintenance window required weekend work by a 15-person operations team. Scaling for seasonal demand spikes required 6-week lead times for hardware procurement. The company needed to modernise its infrastructure to support IoT sensor data from 10,000+ field devices, real-time analytics for operational decision-making, and a modern developer experience to attract and retain engineering talent.",
    detailedSolution: "We designed a phased 18-month migration strategy that categorised all 200+ applications into rehost, replatform, refactor, or retire buckets. Critical real-time systems were refactored into event-driven microservices on Azure Kubernetes Service. IoT data ingestion was rebuilt using Azure IoT Hub and Event Hubs, processing 50 million events per day. Legacy databases were migrated to Azure SQL with geo-replication, and a comprehensive monitoring stack using Azure Monitor and Grafana provided real-time operational visibility. Every migration phase maintained zero downtime through blue-green deployment patterns.",
    keyOutcomes: "The migration reduced annual infrastructure costs from $8.5M to $4.5M -- a $4M saving. System uptime improved from 99.2% to 99.97%. Scaling for demand spikes went from 6-week lead times to automated auto-scaling in under 2 minutes. The IoT data pipeline now processes 50 million events daily with end-to-end latency under 500ms. The modernised infrastructure has become a showcase for Atlas Energy's digital transformation, helping them attract top engineering talent.",
    results: [
      { value: "$4M", label: "Annual savings" },
      { value: "99.97%", label: "Uptime achieved" },
      { value: "200+", label: "Apps migrated" },
      { value: "50M", label: "Daily IoT events" },
    ],
    technologies: ["Azure Kubernetes", "Terraform", "Azure IoT Hub", "Event Hubs", "Grafana", "PostgreSQL", "Redis"],
    testimonial: {
      quote: "The migration was seamless. Our teams did not miss a single day of productivity, and the cost savings exceeded our projections.",
      name: "James Patterson",
      role: "VP Technology, Atlas Energy Corp",
    },
  },
]
