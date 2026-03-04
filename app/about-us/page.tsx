import { PageTransition } from "@/components/ui/PageTransition"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { AnimatedNumber } from "@/components/ui/AnimatedNumber"
import { Button } from "@/components/ui/Button"
import { leaders } from "@/lib/data/leadership"
import { offices } from "@/lib/data/navigation"
import { Linkedin } from "lucide-react"

export const metadata = { title: "About Us — Edge and Engage" }

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="pt-24">
        {/* Hero */}
        <section className="py-24 bg-bg text-center">
          <div className="max-w-4xl mx-auto px-6">
            <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">
              Who We Are
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
              Built on Trust.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
                Driven by Innovation.
              </span>
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Edge and Engage is a global technology partner helping businesses across North
              America, Middle East, Africa and Asia Pacific transform through cutting-edge software
              solutions.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-surface border-y border-border">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: 3000, suffix: "+", label: "Projects Delivered" },
              { value: 23, suffix: "+", label: "Countries" },
              { value: 250, suffix: "+", label: "Active Clients" },
              { value: 15, suffix: "+", label: "Years Experience" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl font-bold text-white">
                  <AnimatedNumber value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-muted text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading label="Our Culture" title="What Drives Us" className="mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Client Obsession",
                  desc: "We measure success by the outcomes we create for our clients, not just the code we ship.",
                },
                {
                  title: "Engineering Excellence",
                  desc: "We hold ourselves to the highest technical standards on every engagement.",
                },
                {
                  title: "Global Mindset",
                  desc: "Diverse teams across 5 continents bring perspective that drives better solutions.",
                },
              ].map((v) => (
                <div key={v.title} className="p-6 rounded-2xl bg-surface border border-border">
                  <div className="w-8 h-8 rounded-lg bg-violet-600/20 mb-4" />
                  <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading label="Leadership" title="Meet the Team" className="mb-12" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {leaders.map((l) => (
                <div
                  key={l.name}
                  className="flex flex-col items-center text-center p-5 rounded-2xl bg-surface-2 border border-border"
                >
                  <div className="w-16 h-16 rounded-full bg-violet-600/20 flex items-center justify-center text-violet-400 font-bold text-lg mb-3">
                    {l.initials}
                  </div>
                  <p className="text-white text-sm font-semibold">{l.name}</p>
                  <p className="text-muted text-xs mt-0.5 mb-3">{l.title}</p>
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
        </section>

        {/* Offices */}
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading label="Global Presence" title="Our Offices" className="mb-12" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {offices.map((o) => (
                <div key={o.country} className="p-6 rounded-2xl bg-surface border border-border">
                  <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-1">
                    {o.type}
                  </p>
                  <p className="text-white font-semibold mb-2">{o.country}</p>
                  <p className="text-muted text-sm leading-relaxed">{o.address}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
