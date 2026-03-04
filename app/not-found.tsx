"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg flex flex-col items-center justify-center text-center px-6">
      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="font-display text-[12rem] font-bold text-violet-600/20 leading-none select-none"
      >
        404
      </motion.p>
      <h1 className="font-display text-3xl font-bold text-white -mt-8 mb-4">Page not found</h1>
      <p className="text-muted mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button href="/" size="lg">
        Back to Home
      </Button>
    </main>
  )
}
