import Link from "next/link"
import { industries } from "@/lib/data/industries"

export default function IndustriesSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
          Discover our Impact Across Industries
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href={industry.href}
              className="group flex flex-col items-center gap-4 p-6 bg-[#111] border border-[#2a2a2a] rounded-xl hover:border-[var(--color-teal)] transition-all duration-300 text-center"
            >
              <div className="h-12 w-12 rounded-full bg-[var(--color-teal)]/10 flex items-center justify-center">
                <span className="text-[var(--color-teal)] font-black text-lg">
                  {industry.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-white text-sm font-semibold group-hover:text-[var(--color-teal)] transition-colors leading-snug">
                {industry.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* CTA Band */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/contact"
            className="px-10 py-4 bg-[var(--color-teal)] text-black font-bold text-base rounded-full hover:bg-[var(--color-teal-dark)] transition-all"
          >
            Let&apos;s Talk Business
          </Link>
        </div>
      </div>
    </section>
  )
}
