"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LampProps {
  children?: React.ReactNode
  className?: string
}

export function Lamp({ children, className }: LampProps) {
  return (
    <div className={cn("relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden", className)}>
      <div className="relative flex w-full flex-1 items-center justify-center">
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
          }}
          className="bg-gradient-conic absolute inset-auto right-1/2 h-56 overflow-visible from-violet-500 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-bg [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 z-20 h-full w-40 bg-bg [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
          }}
          className="bg-gradient-conic absolute inset-auto left-1/2 h-56 from-transparent via-transparent to-violet-500 [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute bottom-0 right-0 z-20 h-full w-40 bg-bg [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute bottom-0 right-0 z-20 h-40 w-full bg-bg [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 bg-bg blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-violet-400 opacity-50 blur-3xl"
        />
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "20rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-80 -translate-y-[7rem] bg-violet-400"
        />
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-bg" />
      </div>
      <div className="relative z-50 -mt-32 flex flex-col items-center px-5">
        {children}
      </div>
    </div>
  )
}
