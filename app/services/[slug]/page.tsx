import { notFound } from "next/navigation"
import { PageTransition } from "@/components/ui/PageTransition"
import { Button } from "@/components/ui/Button"
import { getServicePageData, getAllServiceSlugs } from "@/lib/data/service-pages/index"

export function generateStaticParams() {
  return getAllServiceSlugs()
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = getServicePageData(slug)
  if (!data.name) return notFound()

  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        {/* Hero */}
        <section className="py-24 bg-bg">
          <div className="max-w-4xl mx-auto px-6">
            <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">
              Service
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-3 mb-4">
              {data.name}
            </h1>
            <p className="text-muted text-lg mb-8 max-w-2xl">{data.description}</p>
            <Button href="/contact" size="lg">
              Start a Project
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold text-white mb-8">What&apos;s Included</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.features.map((f) => (
                <div key={f} className="p-5 rounded-2xl bg-surface-2 border border-border">
                  <div className="w-6 h-6 rounded-md bg-violet-600/20 mb-3" />
                  <p className="text-white text-sm font-medium">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold text-white mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {data.techStack.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full bg-surface border border-border text-muted text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold text-white mb-8">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.whyUs.map((w) => (
                <div key={w.title} className="p-6 rounded-2xl bg-surface-2 border border-border">
                  <h3 className="text-white font-semibold mb-2">{w.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-bg text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-muted mb-8">Let&apos;s discuss your {data.name} project.</p>
            <Button href="/contact" size="lg">
              Get in Touch
            </Button>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
