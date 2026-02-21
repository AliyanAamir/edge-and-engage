import Link from "next/link"
import { ArrowRight } from "lucide-react"
import InsightCard from "@/components/ui/InsightCard"
import { insights } from "@/lib/data/insights"

export default function InsightsSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column */}
          <div className="lg:w-72 flex-shrink-0">
            <p className="text-[var(--color-teal)] text-xs font-bold uppercase tracking-widest mb-3">
              Featured Insights
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-4 leading-tight">
              Stories of our transformations across Services and Industries
            </h2>
            <p className="text-gray-500 text-sm mb-8">From Concept to Completion</p>
            <Link
              href="/learning"
              className="flex items-center gap-2 text-[var(--color-teal)] font-semibold text-sm hover:gap-3 transition-all"
            >
              Explore More <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">
            {insights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
