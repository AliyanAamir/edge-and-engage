"use client"

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback } from "react"
import LeaderCard from "@/components/ui/LeaderCard"
import { leaders } from "@/lib/data/leadership"

export default function LeadershipSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20" id="global-leaders">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Our Global Leadership
          </h2>
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="p-2 border border-gray-300 rounded-full text-gray-600 hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="p-2 border border-gray-300 rounded-full text-gray-600 hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] transition-all"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {leaders.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
