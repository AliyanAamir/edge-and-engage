import { notFound } from "next/navigation"
import { caseStudies } from "@/lib/data/case-studies"
import { PageTransition } from "@/components/ui/PageTransition"
import { Button } from "@/components/ui/Button"

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return notFound()

  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">
            {cs.industry}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-2">
            {cs.title}
          </h1>
          <p className="text-muted mb-10">{cs.client}</p>

          {/* Results strip */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {cs.results.map((r) => (
              <div
                key={r.label}
                className="p-5 rounded-2xl bg-surface border border-border text-center"
              >
                <p className="font-display text-3xl font-bold text-violet-400">{r.value}</p>
                <p className="text-muted text-xs mt-1">{r.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-white font-semibold mb-2">The Challenge</h2>
              <p className="text-muted leading-relaxed">{cs.challenge}</p>
            </div>
            <div>
              <h2 className="text-white font-semibold mb-2">Our Solution</h2>
              <p className="text-muted leading-relaxed">{cs.solution}</p>
            </div>
          </div>
          <div className="mt-12">
            <Button href="/contact" size="lg">
              Start a Similar Project
            </Button>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
