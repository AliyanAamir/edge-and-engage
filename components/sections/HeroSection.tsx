"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { site } from "@/lib/data/site"

const publications = ["Forbes", "Business Insider", "Mashable", "Yahoo Finance", "Khaleej Times"]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Violet orb */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/20 blur-[140px] pointer-events-none"
      />
      {/* Secondary orb */}
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-800/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-violet-600/40 bg-violet-600/5 rounded-full px-4 py-1.5 text-xs text-violet-400 font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Trusted by 250+ companies worldwide
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6"
        >
          Building at the
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-300 to-violet-600">
            Speed of AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {site.subTagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/contact" size="lg">
            Get in Touch
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Explore Services
          </Button>
        </motion.div>

        {/* Featured in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex flex-col items-center gap-5"
        >
          <p className="text-zinc-600 text-xs uppercase tracking-[0.2em]">As Featured In</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {publications.map((p) => (
              <span
                key={p}
                className="text-zinc-600 text-sm font-bold uppercase tracking-wide hover:text-zinc-400 transition-colors"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-violet-400/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
