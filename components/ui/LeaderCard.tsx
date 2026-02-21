import Link from "next/link"
import { Linkedin } from "lucide-react"
import type { Leader } from "@/lib/data/leadership"

export default function LeaderCard({ leader }: { leader: Leader }) {
  const initials = leader.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)

  return (
    <div className="flex-shrink-0 w-52 bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-[var(--color-teal)] hover:shadow-md transition-all">
      <div className="h-20 w-20 mx-auto mb-4 rounded-full bg-[var(--color-teal)]/10 border-2 border-[var(--color-teal)]/30 flex items-center justify-center">
        <span className="text-[var(--color-teal)] font-black text-xl">{initials}</span>
      </div>
      <h3 className="text-gray-900 font-bold text-sm mb-1">{leader.name}</h3>
      <p className="text-gray-500 text-xs mb-4 leading-snug">{leader.title}</p>
      <Link
        href={leader.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-[var(--color-teal)] text-xs hover:underline"
      >
        <Linkedin size={12} />
        LinkedIn
      </Link>
    </div>
  )
}
