import Image from "next/image"
import Link from "next/link"

const publications = [
  {
    name: "Forbes",
    src: "https://www.devsinc.com/wp-content/uploads/2022/11/Forbes-1.png",
    width: 100,
  },
  {
    name: "Business Insider",
    src: "https://www.devsinc.com/wp-content/uploads/2022/11/Business-Insider-1.png",
    width: 130,
  },
  {
    name: "New York Weekly",
    src: "https://www.devsinc.com/wp-content/uploads/2022/11/New-York-Weekly-1.png",
    width: 130,
  },
  {
    name: "Mashable",
    src: "https://www.devsinc.com/wp-content/uploads/2022/11/Mashable-1.png",
    width: 110,
  },
  {
    name: "Khaleej Times",
    src: "https://www.devsinc.com/wp-content/uploads/2022/11/Khaleej-Times-1.png",
    width: 120,
  },
  {
    name: "Yahoo Finance",
    src: "https://www.devsinc.com/wp-content/uploads/2022/11/Yahoo-Finance-1.png",
    width: 120,
  },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.devsinc.com/wp-content/uploads/2024/04/hero-bg.webp"
          alt="City skyline at night"
          fill
          priority
          className="object-cover object-center"
          unoptimized
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Building at the Speed of AI
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            We help companies across North America, Middle East, Africa and Asia
            Pacific with technological development
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[var(--color-teal)] text-black font-bold rounded-full text-base hover:bg-[var(--color-teal-dark)] transition-all"
          >
            Get in Touch
          </Link>
        </div>

        {/* Featured In */}
        <div className="mt-20 md:mt-28">
          <p className="text-white/60 text-xs font-bold mb-6 uppercase tracking-widest">
            Featured In:
          </p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {publications.map((pub) => (
              <div
                key={pub.name}
                className="relative h-6 opacity-70 hover:opacity-100 transition-opacity"
                style={{ width: pub.width }}
              >
                <Image
                  src={pub.src}
                  alt={pub.name}
                  fill
                  className="object-contain object-left brightness-0 invert"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
