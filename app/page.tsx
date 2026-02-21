import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import LogoStripSection from "@/components/sections/LogoStripSection"
import ServicesSection from "@/components/sections/ServicesSection"
import IndustriesSection from "@/components/sections/IndustriesSection"
import AwardsSection from "@/components/sections/AwardsSection"
import PartnershipsSection from "@/components/sections/PartnershipsSection"
import InsightsSection from "@/components/sections/InsightsSection"
import StatsSection from "@/components/sections/StatsSection"
import CareersSection from "@/components/sections/CareersSection"
import LeadershipSection from "@/components/sections/LeadershipSection"
import ContactFormSection from "@/components/sections/ContactFormSection"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoStripSection />
        <ServicesSection />
        <IndustriesSection />
        <AwardsSection />
        <PartnershipsSection />
        <InsightsSection />
        <StatsSection />
        <CareersSection />
        <LeadershipSection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  )
}
