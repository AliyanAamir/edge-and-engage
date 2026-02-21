import Image from "next/image"
import Link from "next/link"

export default function CareersSection() {
  return (
    <section className="bg-[#111] py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: office photo placeholder */}
          <div className="lg:w-1/2 relative h-80 lg:h-96 w-full rounded-2xl overflow-hidden bg-[#1a1a1a] border border-[#2a2a2a]">
            <Image
              src="https://www.devsinc.com/wp-content/uploads/2023/10/Human-First-Image.webp"
              alt="Devsinc team"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Right: content */}
          <div className="lg:w-1/2">
            <p className="text-[var(--color-teal)] text-xs font-bold uppercase tracking-widest mb-4">
              careers
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              Human-first is our foundation.
            </h2>
            <p className="text-white/60 text-base mb-10 leading-relaxed">
              Join a culture that celebrates excellence and diversity, Globally!
            </p>
            <Link
              href="/career"
              className="inline-block px-8 py-4 bg-[var(--color-teal)] text-black font-bold rounded-full hover:bg-[var(--color-teal-dark)] transition-all"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
