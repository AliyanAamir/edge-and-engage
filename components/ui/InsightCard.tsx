import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Insight } from "@/lib/data/insights"
import { cn } from "@/lib/utils"

export default function InsightCard({ insight }: { insight: Insight }) {
  return (
    <div className="group rounded-xl bg-white border border-gray-200 hover:border-[var(--color-teal)] hover:shadow-md transition-all duration-300 p-5">
      <div className="mb-3">
        <span
          className={cn(
            "text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full",
            insight.type === "Case Study"
              ? "bg-[var(--color-teal)]/10 text-[var(--color-teal)]"
              : "bg-gray-100 text-gray-500"
          )}
        >
          {insight.type}
        </span>
      </div>
      <h3 className="text-gray-900 font-bold text-sm leading-snug mb-4 line-clamp-3">
        {insight.title}
      </h3>
      <Link
        href={insight.href}
        className="flex items-center gap-2 text-[var(--color-teal)] text-xs font-semibold hover:gap-3 transition-all"
      >
        Explore More <ArrowRight size={14} />
      </Link>
    </div>
  )
}
