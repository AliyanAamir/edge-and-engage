import LogoCarousel from "@/components/ui/LogoCarousel"
import { partners } from "@/lib/data/awards"

export default function PartnershipsSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">
          Our Partnerships
        </h2>
        <LogoCarousel logos={partners} />
      </div>
    </section>
  )
}
