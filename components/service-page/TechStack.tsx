interface Props {
  techStack: string[]
}

export default function TechStack({ techStack }: Props) {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-[var(--color-teal)] text-xs font-bold uppercase tracking-widest mb-3">
          Technology
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 leading-tight">
          Our Technology Stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] transition-all cursor-default shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
