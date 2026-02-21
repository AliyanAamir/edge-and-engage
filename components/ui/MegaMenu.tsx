"use client"

import Link from "next/link"
import type { MegaMenuData } from "@/lib/data/navigation"

interface MegaMenuProps {
  data: MegaMenuData
  onClose: () => void
}

export default function MegaMenu({ data, onClose }: MegaMenuProps) {
  return (
    <div className="absolute left-0 right-0 top-full z-50 bg-white border-t border-gray-100 shadow-2xl">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-10">
        {/* Section title */}
        <p className="text-[var(--color-teal)] text-xs font-bold uppercase tracking-widest mb-6">
          {data.title}
        </p>

        {/* Columns */}
        <div
          className="grid gap-10"
          style={{ gridTemplateColumns: `repeat(${data.columns.length}, minmax(0, 1fr))` }}
        >
          {data.columns.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-8">
              {col.groups.map((group, gi) => (
                <div key={gi}>
                  {group.heading && (
                    <p className="text-gray-900 font-bold text-sm mb-3">{group.heading}</p>
                  )}
                  <ul className="flex flex-col gap-2">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="text-gray-500 text-sm hover:text-[var(--color-teal)] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
