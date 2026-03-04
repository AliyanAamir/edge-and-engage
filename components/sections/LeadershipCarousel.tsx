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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeading label="Our Team" title="Global Leadership" />
          <p className="text-zinc-500 text-sm max-w-xs md:text-right">
            Experienced leaders driving innovation across 23+ countries.
          </p>
        </div>
        <div ref={ref} className="overflow-hidden">
          <div className="flex gap-4 pb-2">
            {leaders.map((l) => (
              <div
                key={l.name}
                className="flex-none w-56 p-5 rounded-2xl bg-surface-2 border border-border hover:border-violet-600/40 transition-all flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-600/30 to-violet-800/20 border border-violet-600/20 flex items-center justify-center text-violet-300 font-display font-bold text-lg">
                  {l.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{l.name}</p>
                  <p className="text-zinc-500 text-xs mt-0.5 leading-snug">{l.title}</p>
                </div>
                <a
                  href={l.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-violet-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <p className="text-zinc-600 text-xs mt-4">← Drag to explore →</p>
      </div>
    </section>
  )
}
