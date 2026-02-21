import Link from "next/link"
import type { Service } from "@/lib/data/services"

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="group flex flex-col gap-3 p-5 bg-white border border-gray-200 rounded-xl hover:border-[var(--color-teal)] hover:shadow-md transition-all duration-300"
    >
      <div className="h-8 w-8 rounded-lg bg-[var(--color-teal)]/10 flex items-center justify-center">
        <span className="text-[var(--color-teal)] text-xs font-black">
          {service.name.charAt(0)}
        </span>
      </div>
      <h3 className="text-gray-800 text-sm font-semibold leading-snug group-hover:text-[var(--color-teal)] transition-colors">
        {service.name}
      </h3>
    </Link>
  )
}
