import { PageTransition } from "@/components/ui/PageTransition"
import { Button } from "@/components/ui/Button"
import { site } from "@/lib/data/site"

export const metadata = { title: "Careers — Edge and Engage" }

export default function CareersPage() {
  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        <section className="py-24 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">
              Join Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-3 mb-6">
              Human-first is
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
                our foundation.
              </span>
            </h1>
            <p className="text-muted text-lg mb-10">
              We build great products because we build great teams first.
            </p>
            <Button href={site.careersUrl} size="lg">
              View Open Roles
            </Button>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Remote-First Culture",
                  desc: "Work from anywhere with flexible hours and async-friendly processes.",
                },
                {
                  title: "Growth Opportunities",
                  desc: "Regular feedback cycles, mentorship, and clear promotion paths.",
                },
                {
                  title: "Global Team",
                  desc: "Collaborate with talented engineers across 23+ countries.",
                },
              ].map((v) => (
                <div key={v.title} className="p-6 rounded-2xl bg-surface-2 border border-border">
                  <div className="w-8 h-8 rounded-lg bg-violet-600/20 mb-4" />
                  <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-bg text-center">
          <div className="max-w-xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Don&apos;t see your role?
            </h2>
            <p className="text-muted mb-8">
              Send us your CV and we&apos;ll reach out when the right opportunity opens up.
            </p>
            <Button href={`mailto:${site.email}`} variant="outline" size="lg">
              Send Your CV
            </Button>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
