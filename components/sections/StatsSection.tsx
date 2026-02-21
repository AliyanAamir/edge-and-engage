import Link from "next/link"
import { stats, statsContent } from "@/lib/data/stats"

export default function StatsSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div className="lg:w-1/2">
            <p className="text-[var(--color-teal)] text-xs font-bold uppercase tracking-widest mb-3">
              {statsContent.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              {statsContent.heading}
            </h2>
            <p className="text-gray-500 text-base mb-4 leading-relaxed">
              {statsContent.paragraph1}
            </p>
            <p className="text-gray-500 text-base mb-10 leading-relaxed">
              {statsContent.paragraph2}
            </p>
            <Link
              href={statsContent.ctaHref}
              className="inline-block px-8 py-4 bg-[var(--color-teal)] text-black font-bold rounded-full hover:bg-[var(--color-teal-dark)] transition-all"
            >
              {statsContent.ctaLabel}
            </Link>
          </div>

          {/* Right stats grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-4xl md:text-5xl font-black text-[var(--color-teal)] mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-700 font-semibold text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
