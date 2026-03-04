'use client';

import { Button } from "@/components/ui/Button"
import { site } from "@/lib/data/site"
import { Lamp } from "@/components/ui/aceternity/Lamp"
import { motion } from "framer-motion"

export function ContactCTA() {
  return (
    <section className="relative py-24 bg-bg border-t border-border overflow-hidden">
      <Lamp />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-4">
            Ready to start?
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Let&apos;s build something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
              remarkable.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Tell us about your project and we&apos;ll get back within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              Get in Touch
            </Button>
            <Button href={`mailto:${site.email}`} variant="outline" size="lg">
              Email Us Directly
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
