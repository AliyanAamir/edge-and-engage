import { caseStudies } from "@/lib/data/case-studies"
import { PageTransition } from "@/components/ui/PageTransition"
import { ArrowRight } from "lucide-react"

export const metadata = { title: "Case Studies — Edge and Engage" }

export default function CaseStudiesPage() {
  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">
            Work
          </span>
          <h1 className="font-display text-5xl font-bold text-white mt-3 mb-12">
            Case Studies
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <a
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group p-8 rounded-2xl bg-surface border border-border hover:border-violet-600/60 transition-all"
              >
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-600/20 text-violet-400">
                  {cs.industry}
                </span>
                <h2 className="text-white font-display font-bold text-xl mt-4 mb-2 group-hover:text-violet-300 transition-colors">
                  {cs.title}
                </h2>
                <p className="text-muted text-sm">{cs.client}</p>
                <div className="flex items-center gap-1 mt-6 text-violet-400 text-sm font-medium">
                  Read case study <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
