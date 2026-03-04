"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/data/services"
import { PageTransition } from "@/components/ui/PageTransition"
import { stagger, scaleIn } from "@/lib/animations"
import { WobbleCard } from "@/components/ui/aceternity/WobbleCard"
import { TextGenerateEffect } from "@/components/ui/aceternity/TextGenerateEffect"

const categories = ["All", "AI & Data", "Cloud", "Web & Mobile", "Gaming", "Engineering", "Business Apps"]

const categoryMap: Record<string, string[]> = {
  "AI & Data": ["genai", "data"],
  "Cloud": ["cloud-app", "cloud-maint", "cloud-migration", "devops"],
  "Web & Mobile": ["web", "mobile", "custom", "uiux", "saas", "ecommerce", "design-dev", "maint-support"],
  "Gaming": ["game", "web3-gaming", "arvr-gaming", "gaming-art", "metaverse", "ar"],
  "Engineering": ["qa", "cyber", "automation", "blockchain"],
  "Business Apps": ["d365-erp", "crm", "powerapps", "salesforce", "staff-aug"],
}

export default function ServicesPage() {
  const [active, setActive] = useState("All")
  const filtered =
    active === "All" ? services : services.filter((s) => categoryMap[active]?.includes(s.id))

  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold text-violet-400 uppercase tracking-widest"
          >
            What We Do
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-bold text-white mt-3 mb-4"
          >
            Our Services
          </motion.h1>
          <TextGenerateEffect
            words="We deliver cutting-edge software solutions across AI, cloud computing, web development, gaming, engineering, and enterprise applications. Each service is tailored to your unique business needs."
            className="text-muted text-lg mb-10 max-w-2xl"
          />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <motion.button
                key={c}
                onClick={() => setActive(c)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active === c
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/50"
                    : "border border-border text-muted hover:border-violet-600/60 hover:text-white"
                }`}
              >
                {c}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={active}
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {filtered.map((s, i) => (
              <WobbleCard key={s.id} containerClassName="min-h-[180px]">
                <motion.a
                  href={s.href}
                  variants={scaleIn}
                  className="group p-6 rounded-2xl bg-surface border border-border hover:border-violet-600/60 hover:bg-surface-2 transition-all h-full flex flex-col"
                >
                  <div className="w-8 h-8 rounded-lg bg-violet-600/20 mb-4 group-hover:bg-violet-600/30 transition-colors" />
                  <p className="text-white font-medium text-sm mb-2">{s.name}</p>
                  <p className="text-xs text-muted mb-4 flex-1 line-clamp-2">{s.desc}</p>
                  <ArrowRight className="w-4 h-4 text-muted group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
                </motion.a>
              </WobbleCard>
            ))}
          </motion.div>
        </div>
      </main>
    </PageTransition>
  )
}
