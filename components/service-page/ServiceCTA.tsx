import Link from "next/link"
import type { ServicePageData } from "@/lib/data/service-pages/types"

interface Props {
  cta: ServicePageData["cta"]
}

export default function ServiceCTA({ cta }: Props) {
  return (
    <section className="bg-[var(--color-teal)] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-black mb-4 leading-tight">
          {cta.heading}
        </h2>
        <p className="text-black/70 text-base mb-10 max-w-xl mx-auto">{cta.subtext}</p>
        <Link
          href={cta.ctaHref}
          className="inline-block px-10 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-900 transition-all"
        >
          {cta.ctaLabel}
        </Link>
      </div>
    </section>
  )
}
