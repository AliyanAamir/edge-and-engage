import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import InsightsSection from "@/components/sections/InsightsSection"
import ContactFormSection from "@/components/sections/ContactFormSection"
import ServiceHero from "./ServiceHero"
import EngagementModels from "./EngagementModels"
import ServiceOverview from "./ServiceOverview"
import ServiceCards from "./ServiceCards"
import WhyChooseUs from "./WhyChooseUs"
import IndustriesServed from "./IndustriesServed"
import TechStack from "./TechStack"
import ServiceCTA from "./ServiceCTA"
import type { ServicePageData } from "@/lib/data/service-pages/types"

interface Props {
  data: ServicePageData
}

export default function ServicePageTemplate({ data }: Props) {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero hero={data.hero} />
        <EngagementModels />
        <ServiceOverview overview={data.overview} />
        <ServiceCards services={data.services} />
        <WhyChooseUs whyChooseUs={data.whyChooseUs} />
        <IndustriesServed industries={data.industries} />
        <TechStack techStack={data.techStack} />
        <InsightsSection />
        <ServiceCTA cta={data.cta} />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  )
}
