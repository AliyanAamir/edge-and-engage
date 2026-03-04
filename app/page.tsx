import { PageTransition } from "@/components/ui/PageTransition"
import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesPreview } from "@/components/sections/ServicesPreview"
import { StatsBand } from "@/components/sections/StatsBand"
import { IndustriesSection } from "@/components/sections/IndustriesSection"
import { InsightsPreview } from "@/components/sections/InsightsPreview"
import { LeadershipCarousel } from "@/components/sections/LeadershipCarousel"
import { ContactCTA } from "@/components/sections/ContactCTA"

export default function HomePage() {
  return (
    <PageTransition>
      <main>
        <HeroSection />
        <ServicesPreview />
        <StatsBand />
        <IndustriesSection />
        <InsightsPreview />
        <LeadershipCarousel />
        <ContactCTA />
      </main>
    </PageTransition>
  )
}
