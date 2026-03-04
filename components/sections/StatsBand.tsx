import { AnimatedNumber } from "@/components/ui/AnimatedNumber"
import { stats } from "@/lib/data/stats"

export function StatsBand() {
  return (
    <section className="bg-violet-600/10 border-y border-violet-600/20 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl md:text-5xl font-bold text-white">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-muted text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
