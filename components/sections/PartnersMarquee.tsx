'use client';

import { motion } from 'framer-motion';
import { partners } from '@/lib/data/partners';
import { cn } from '@/lib/utils';

export function PartnersMarquee() {
  return (
    <section className="py-12 px-4 md:px-8 bg-bg border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-muted mb-8 uppercase tracking-widest">
          Trusted by industry leaders
        </p>

        {/* Marquee effect using CSS */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 whitespace-nowrap animate-scroll" style={{ '--animation-duration': '30s' } as any}>
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-fit px-8 py-4 bg-surface-2 border border-border rounded-lg hover:border-violet hover:bg-surface transition-all duration-300"
              >
                <span className="text-text font-semibold text-sm">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
