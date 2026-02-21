import type { ServicePageData } from "./types"

export const mobileDevelopment: ServicePageData = {
  slug: "mobile-development",
  meta: {
    title: "Mobile App Development | Edge and Engage",
    description:
      "Custom mobile apps for iOS and Android. Edge and Engage builds native, cross-platform, and enterprise mobility solutions that users love.",
  },
  hero: {
    label: "Services",
    heading: "Mobile App Development",
    tagline: "Custom Mobile Apps for Tomorrow",
    ctaLabel: "Make Your App Now",
    ctaHref: "/contact",
  },
  overview: {
    label: "What We Do",
    heading: "Mobile Experiences That Drive Engagement",
    description:
      "We design and engineer mobile applications that combine intuitive UX with rock-solid performance. Whether native iOS/Android or cross-platform, we deliver apps your users will open every day.",
    capabilities: [
      { title: "Native iOS & Android", description: "Swift and Kotlin for apps that fully leverage device hardware and OS features." },
      { title: "Cross-Platform Excellence", description: "React Native and Flutter for shared codebases without sacrificing performance." },
      { title: "Enterprise Mobility", description: "Secure, scalable apps for field teams, internal workflows, and enterprise operations." },
      { title: "End-to-End Delivery", description: "From App Store submission to ongoing analytics — we own the full mobile lifecycle." },
    ],
  },
  services: {
    heading: "Our Mobile Development Services",
    items: [
      { title: "Native App Development", description: "Purpose-built iOS and Android applications with maximum performance and platform-native UX patterns." },
      { title: "Cross-Platform Development", description: "React Native and Flutter apps that share 90%+ of code while delivering near-native experiences on both platforms." },
      { title: "Custom Mobile Applications", description: "Fully tailored mobile solutions built around your unique business logic, brand, and user journeys." },
      { title: "Enterprise Mobility Solutions", description: "Secure, MDM-compatible applications for large workforces with SSO, offline mode, and compliance requirements." },
      { title: "App Modernization & Optimization", description: "Revamping legacy mobile apps with modern architecture, faster performance, and updated design systems." },
      { title: "UI/UX Design for Mobile", description: "Human-centered design for small screens — thumb-friendly layouts, micro-interactions, and accessibility." },
      { title: "Mobile App Testing & QA", description: "Automated and manual testing across devices, OS versions, and network conditions before every release." },
      { title: "Ongoing Maintenance & Support", description: "Post-launch monitoring, crash reporting, OS update compatibility, and feature iterations at your pace." },
    ],
  },
  whyChooseUs: {
    heading: "Why Choose Edge and Engage for Mobile",
    points: [
      { title: "Platform-Agnostic Expertise", description: "We build for iOS, Android, and cross-platform — recommending the right approach for your audience and budget." },
      { title: "App Store Proven", description: "Hundreds of apps shipped to the App Store and Google Play with 4+ star ratings across categories." },
      { title: "Performance by Architecture", description: "We design for offline-first, low-latency, and battery efficiency — not as afterthoughts but as core requirements." },
      { title: "Dedicated Mobile Teams", description: "Specialist iOS, Android, and RN engineers — not generalists who do mobile on the side." },
    ],
  },
  industries: ["Healthcare", "E-Commerce", "Finance & Fintech", "Education", "Real Estate", "Travel & Hospitality", "Logistics", "Manufacturing"],
  techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Java", "Dart", "Expo", "Firebase", "Supabase", "AWS Amplify", "Redux", "MobX", "Jest", "XCTest", "Fastlane", "App Center"],
  cta: {
    heading: "Ready to Launch Your Mobile App?",
    subtext: "Tell us what you're building — we'll tell you how to ship it fast.",
    ctaLabel: "Start a Conversation",
    ctaHref: "/contact",
  },
}
