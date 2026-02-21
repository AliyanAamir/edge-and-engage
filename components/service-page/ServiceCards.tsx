import type { ServicePageData } from "@/lib/data/service-pages/types"

interface Props {
  services: ServicePageData["services"]
}

export default function ServiceCards({ services }: Props) {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 leading-tight">
          {services.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-7 hover:border-[var(--color-teal)] hover:shadow-md transition-all group"
            >
              <span className="text-[var(--color-teal)] text-xs font-bold uppercase tracking-widest mb-4 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-gray-900 font-bold text-base mb-3 group-hover:text-[var(--color-teal)] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
