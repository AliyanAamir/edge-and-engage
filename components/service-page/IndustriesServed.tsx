interface Props {
  industries: string[]
}

export default function IndustriesServed({ industries }: Props) {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-[var(--color-teal)] text-xs font-bold uppercase tracking-widest mb-3">
          Industries
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 leading-tight">
          Industries We Serve
        </h2>
        <div className="flex flex-wrap gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="px-5 py-2.5 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] transition-all cursor-default"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
