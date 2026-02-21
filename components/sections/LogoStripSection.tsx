import Image from "next/image"
import { awardBadges } from "@/lib/data/awards"

export default function LogoStripSection() {
  return (
    <section className="bg-white py-8 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-8">
          {awardBadges.map((award) => (
            <div key={award.name} className="relative h-10 w-28">
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
