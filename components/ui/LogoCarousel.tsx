"use client"

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

interface Logo {
  name: string
  src: string
}

interface LogoCarouselProps {
  logos: Logo[]
  className?: string
}

export default function LogoCarousel({ logos, className }: LogoCarouselProps) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  )

  return (
    <div className={`overflow-hidden ${className ?? ""}`} ref={emblaRef}>
      <div className="flex gap-8 items-center">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex-shrink-0 relative h-12 w-32"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
