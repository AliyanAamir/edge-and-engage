'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Discovery & Strategy',
    description: 'We begin by deeply understanding your business goals, market landscape, and target audience. Through collaborative workshops and research, we define a clear strategic roadmap.',
    icon: '🔍'
  },
  {
    title: 'Design & Planning',
    description: 'Our creative team crafts compelling designs and detailed implementation plans. We create prototypes and wireframes to validate concepts before development.',
    icon: '✏️'
  },
  {
    title: 'Development & Build',
    description: 'Using cutting-edge technologies, we build scalable, performant solutions. Our development follows best practices with continuous testing and quality assurance.',
    icon: '⚙️'
  },
  {
    title: 'Launch & Optimize',
    description: 'We carefully deploy your solution with monitoring and support. Post-launch, we continuously optimize based on user feedback and performance metrics.',
    icon: '🚀'
  },
  {
    title: 'Growth & Scale',
    description: 'As your business grows, we scale your solutions. We provide ongoing maintenance, feature enhancements, and strategic improvements.',
    icon: '📈'
  }
];

export function HowWeWorkSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-4 text-text"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted max-w-2xl mx-auto"
          >
            Our proven process ensures successful project delivery every time
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="font-display text-lg font-semibold text-text mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
