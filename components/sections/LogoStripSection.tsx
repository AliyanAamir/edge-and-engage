import Image from "next/image"

const awards = [
  { name: "Clutch", src: "https://www.devsinc.com/wp-content/uploads/2022/04/Group-427321147.png" },
  { name: "GoodFirms", src: "https://www.devsinc.com/wp-content/uploads/2022/04/Group-427321148.png" },
  { name: "Designrush", src: "https://www.devsinc.com/wp-content/uploads/2022/04/Group-427321149.png" },
  { name: "Manifest", src: "https://www.devsinc.com/wp-content/uploads/2022/04/Group-427321150.png" },
  { name: "Bark", src: "https://www.devsinc.com/wp-content/uploads/2022/04/Group-427321151.png" },
  { name: "Upwork", src: "https://www.devsinc.com/wp-content/uploads/2022/04/Group-427321152.png" },
]

export default function LogoStripSection() {
  return (
    <section className="bg-white py-8 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-8">
          {awards.map((award) => (
            <div key={award.name} className="relative h-10 w-28">
              <Image
                src={award.src}
                alt={award.name}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
