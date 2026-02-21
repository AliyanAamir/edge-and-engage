"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import ServiceCard from "@/components/ui/ServiceCard"
import { services } from "@/lib/data/services"

const INITIAL_VISIBLE = 12

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? services : services.slice(0, INITIAL_VISIBLE)

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-[var(--color-teal)] text-xs font-bold uppercase tracking-widest mb-3">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-black mb-12">
          Transform Your Business
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {visible.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)] border border-[var(--color-teal)] px-6 py-3 rounded-full hover:bg-[var(--color-teal)] hover:text-black transition-all"
          >
            {showAll ? "Show Less" : "View More Services"}
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>
    </section>
  )
}
