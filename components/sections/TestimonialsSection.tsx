'use client';

import { motion } from 'framer-motion';
import { InfiniteMovingCards } from '@/components/ui/aceternity/InfiniteMovingCards';
import { testimonials } from '@/lib/data/testimonials';
import { cn } from '@/lib/utils';

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-surface relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-4 text-text"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted max-w-2xl mx-auto"
          >
            Trusted by leading companies and innovators worldwide
          </motion.p>
        </div>

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
