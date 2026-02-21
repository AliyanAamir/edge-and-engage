import type { ServicePageData } from "./types"

export const uiUxDesign: ServicePageData = {
  slug: "ui-ux-design",
  meta: {
    title: "UI/UX Design | Edge and Engage",
    description:
      "Adaptive, human-centered design that converts. Edge and Engage crafts intuitive user experiences backed by research, testing, and design systems.",
  },
  hero: {
    label: "Services",
    heading: "UI/UX Design",
    tagline: "Adaptive, Human-Centered Designs",
    ctaLabel: "Get Designs That Convert",
    ctaHref: "/contact",
  },
  overview: {
    label: "What We Do",
    heading: "Design That Drives Business Outcomes",
    description:
      "Great design is not decoration — it is the difference between software that gets adopted and software that gets abandoned. We design with user psychology, business goals, and engineering constraints in mind simultaneously.",
    capabilities: [
      { title: "Research-Driven", description: "User interviews, heatmaps, and competitive analysis ground every design decision." },
      { title: "Systems Thinking", description: "Design systems and component libraries that scale across your entire product suite." },
      { title: "Prototype Before Code", description: "Interactive Figma prototypes validated with real users before a single line is written." },
      { title: "Accessibility First", description: "WCAG 2.1 AA compliance, keyboard navigation, and screen reader support built in." },
    ],
  },
  services: {
    heading: "Our UI/UX Design Services",
    items: [
      { title: "User Research & Analysis", description: "Qualitative and quantitative research — interviews, surveys, usability sessions — to understand your users deeply." },
      { title: "Wireframing & Prototyping", description: "Low and high-fidelity prototypes in Figma for rapid iteration and stakeholder alignment before development begins." },
      { title: "UI Design & Visual Identity", description: "Polished, brand-consistent visual design with typography, color systems, and iconography that tell your story." },
      { title: "Responsive Web & Mobile Design", description: "Fluid layouts and adaptive components that deliver a consistent experience from desktop to mobile." },
      { title: "Usability Testing & Optimization", description: "Moderated and unmoderated testing sessions, A/B experiments, and conversion rate optimization." },
      { title: "Interaction Design (IxD)", description: "Micro-interactions, transitions, and animation that make interfaces feel alive and responsive." },
      { title: "Information Architecture (IA)", description: "Site maps, navigation structures, and content hierarchies that make complex products feel simple." },
      { title: "Design Systems & UI Kits", description: "Scalable component libraries in Figma and code (Storybook) that keep design and engineering in sync." },
    ],
  },
  whyChooseUs: {
    heading: "Why Choose Edge and Engage for UX/UI",
    points: [
      { title: "Design + Engineering in One Team", description: "Our designers work alongside engineers — no handoff friction, no 'that's not buildable' surprises." },
      { title: "Metric-Driven Design", description: "We tie every design decision to conversion, retention, or task completion metrics — not just aesthetics." },
      { title: "Figma-First Workflow", description: "Full design token support, component variants, and dev mode handoff — your engineers will thank us." },
      { title: "Post-Launch Iteration", description: "We monitor real user behaviour after launch and iterate fast to improve outcomes continuously." },
    ],
  },
  industries: ["Technology & SaaS", "E-Commerce", "Healthcare", "Finance & Fintech", "Education", "Travel & Hospitality", "Real Estate", "Automotive"],
  techStack: ["Figma", "Adobe XD", "Sketch", "Framer", "InVision", "Zeplin", "Storybook", "Principle", "Maze", "Hotjar", "Lottie", "Tailwind CSS", "CSS Animations", "GSAP"],
  cta: {
    heading: "Ready for Designs That Convert?",
    subtext: "Share your product — we'll show you where users are dropping off and how to fix it.",
    ctaLabel: "Start a Conversation",
    ctaHref: "/contact",
  },
}
