import { Button } from "@/components/ui/Button"
import { site } from "@/lib/data/site"

export function ContactCTA() {
  return (
    <section className="py-24 bg-bg border-t border-border">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-4">
          Ready to start?
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
          Let's build something
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
            remarkable.
          </span>
        </h2>
        <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
          Tell us about your project and we'll get back within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg">
            Get in Touch
          </Button>
          <Button href={`mailto:${site.email}`} variant="outline" size="lg">
            Email Us Directly
          </Button>
        </div>
      </div>
    </section>
  )
}
