import LogoCarousel from "@/components/ui/LogoCarousel"

const partners = [
  { name: "Microsoft", src: "https://www.devsinc.com/wp-content/uploads/2022/04/microsoft.png" },
  { name: "AWS", src: "https://www.devsinc.com/wp-content/uploads/2022/04/aws.png" },
  { name: "Google Cloud", src: "https://www.devsinc.com/wp-content/uploads/2022/04/google-cloud.png" },
  { name: "Salesforce", src: "https://www.devsinc.com/wp-content/uploads/2022/04/salesforce.png" },
  { name: "HubSpot", src: "https://www.devsinc.com/wp-content/uploads/2022/04/hubspot.png" },
  { name: "Shopify", src: "https://www.devsinc.com/wp-content/uploads/2022/04/shopify.png" },
]

export default function PartnershipsSection() {
  return (
    <section className="bg-[#f9f9f9] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl font-black text-black mb-12 text-center">
          Our Partnerships
        </h2>
        <LogoCarousel logos={partners} />
      </div>
    </section>
  )
}
