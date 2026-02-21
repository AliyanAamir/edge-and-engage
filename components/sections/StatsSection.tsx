import Link from "next/link"

const stats = [
  { number: "3,000+", label: "Successful Projects" },
  { number: "23+", label: "Countries Supported" },
  { number: "250+", label: "Active Clients" },
  { number: "15+", label: "Years of Enablement Experience" },
]

export default function StatsSection() {
  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div className="lg:w-1/2">
            <p className="text-[var(--color-teal)] text-xs font-bold uppercase tracking-widest mb-3">
              Pioneering Trust and Innovation
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              Devsinc&apos;s Achievements
            </h2>
            <p className="text-white/60 text-base mb-4 leading-relaxed">
              We take pride in empowering businesses worldwide with innovative solutions.
            </p>
            <p className="text-white/60 text-base mb-10 leading-relaxed">
              Devsinc brings an unwavering commitment to excellence, backed by a global presence.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[var(--color-teal)] text-black font-bold rounded-full hover:bg-[var(--color-teal-dark)] transition-all"
            >
              Get in Touch
            </Link>
          </div>

          {/* Right stats grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-4xl md:text-5xl font-black text-[var(--color-teal)] mb-2">
                  {stat.number}
                </p>
                <p className="text-white font-semibold text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
