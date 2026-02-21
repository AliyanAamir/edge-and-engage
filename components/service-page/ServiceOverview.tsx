import type { ServicePageData } from "@/lib/data/service-pages/types"

interface Props {
  overview: ServicePageData["overview"]
}

export default function ServiceOverview({ overview }: Props) {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:w-1/2">
            <p className="text-[var(--color-teal)] text-xs font-bold uppercase tracking-widest mb-3">
              {overview.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              {overview.heading}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">{overview.description}</p>
          </div>

          {/* Right: capabilities grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {overview.capabilities.map((cap, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[var(--color-teal)] hover:shadow-sm transition-all"
              >
                <div className="w-8 h-1 bg-[var(--color-teal)] rounded-full mb-4" />
                <h3 className="text-gray-900 font-bold text-sm mb-2">{cap.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
