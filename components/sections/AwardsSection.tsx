import { awardBadges } from "@/lib/data/awards"
import Image from "next/image"

export default function AwardsSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto text-center">
        <h2 className="text-3xl font-black text-gray-900 mb-12">
          Awards and Certifications
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {awardBadges.map((award) => (
            <div key={award.name} className="relative h-20 w-20 md:h-24 md:w-24">
              <Image
                src={award.src}
                alt={award.name}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
