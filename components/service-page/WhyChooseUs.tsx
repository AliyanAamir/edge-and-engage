import type { ServicePageData } from "@/lib/data/service-pages/types"

interface Props {
  whyChooseUs: ServicePageData["whyChooseUs"]
}

export default function WhyChooseUs({ whyChooseUs }: Props) {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 leading-tight">
          {whyChooseUs.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {whyChooseUs.points.map((point) => (
            <div
              key={point.title}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[var(--color-teal)] hover:shadow-sm transition-all"
            >
              <h3 className="text-gray-900 font-bold text-base mb-3">{point.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
