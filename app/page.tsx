import { PageTransition } from "@/components/ui/PageTransition"
import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesPreview } from "@/components/sections/ServicesPreview"
import { StatsBand } from "@/components/sections/StatsBand"
import { IndustriesSection } from "@/components/sections/IndustriesSection"
import { InsightsPreview } from "@/components/sections/InsightsPreview"
import { LeadershipCarousel } from "@/components/sections/LeadershipCarousel"
import { ContactCTA } from "@/components/sections/ContactCTA"
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { PartnersMarquee } from "@/components/sections/PartnersMarquee"

export default function HomePage() {
  return (
    <PageTransition>
      <main>
        <HeroSection />
        <ServicesPreview />
        <StatsBand />
        <HowWeWorkSection />
        <IndustriesSection />
        <TestimonialsSection />
        <InsightsPreview />
        <PartnersMarquee />
        <LeadershipCarousel />
        <ContactCTA />
      </main>
    </PageTransition>
  )
}
