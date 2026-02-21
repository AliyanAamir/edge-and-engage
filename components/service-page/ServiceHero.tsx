import Link from "next/link"
import type { ServicePageData } from "@/lib/data/service-pages/types"

interface Props {
  hero: ServicePageData["hero"]
}

export default function ServiceHero({ hero }: Props) {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center pt-16 bg-gray-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      {/* Subtle teal glow top-left */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[var(--color-teal)]/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full py-24">
        <div className="max-w-3xl">
          <p className="text-[var(--color-teal)] text-xs font-bold uppercase tracking-widest mb-4">
            {hero.label}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            {hero.heading}
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed">
            {hero.tagline}
          </p>
          <Link
            href={hero.ctaHref}
            className="inline-block px-8 py-4 bg-[var(--color-teal)] text-black font-bold rounded-full text-base hover:bg-[var(--color-teal-dark)] transition-all"
          >
            {hero.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
