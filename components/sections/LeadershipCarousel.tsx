"use client"
import useEmblaCarousel from "embla-carousel-react"
import { Linkedin } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { leaders } from "@/lib/data/leadership"

export function LeadershipCarousel() {
  const [ref] = useEmblaCarousel({ loop: false, align: "start", dragFree: true })
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading label="Our Team" title="Global Leadership" className="mb-10" />
        <div ref={ref} className="overflow-hidden">
          <div className="flex gap-4">
            {leaders.map((l) => (
              <div
                key={l.name}
                className="flex-none w-52 p-5 rounded-2xl bg-surface-2 border border-border flex flex-col items-center text-center gap-3"
              >
                <div className="w-16 h-16 rounded-full bg-violet-600/20 flex items-center justify-center text-violet-400 font-display font-bold text-lg">
                  {l.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{l.name}</p>
                  <p className="text-muted text-xs mt-0.5">{l.title}</p>
                </div>
                <a
                  href={l.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-violet-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
