"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { insights } from "@/lib/data/insights"
import { stagger } from "@/lib/animations"
import { Button } from "@/components/ui/Button"
import { HoverEffect } from "@/components/ui/aceternity/HoverEffect"

export function InsightsPreview() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading label="Insights" title="Stories of Transformation" />
          <Button href="/articles" variant="ghost" size="sm">
            Explore More <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <HoverEffect items={insights.map((item) => ({
            link: item.href,
            title: item.title,
            description: item.excerpt,
          }))} />
        </motion.div>
      </div>
    </section>
  )
}
