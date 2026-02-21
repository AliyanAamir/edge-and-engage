export default function AwardsSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto text-center">
        <h2 className="text-3xl font-black text-black mb-12">
          Awards and Certifications
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {["Clutch Top 1000", "Clutch Global", "GoodFirms Top", "ISO 27001", "ISO 9001"].map((award) => (
            <div
              key={award}
              className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200"
            >
              <span className="text-gray-500 text-[10px] font-bold text-center leading-tight px-2">
                {award}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
