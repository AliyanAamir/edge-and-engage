import { MapPin, Globe, ArrowLeftRight } from "lucide-react"

const models = [
  {
    icon: MapPin,
    title: "Onshoring",
    description:
      "Work with a local team in your timezone and region for maximum collaboration and zero communication overhead.",
  },
  {
    icon: Globe,
    title: "Offshoring",
    description:
      "Leverage our global delivery centers to access top-tier engineering talent at highly competitive rates.",
  },
  {
    icon: ArrowLeftRight,
    title: "Nearshoring",
    description:
      "A hybrid model — nearshore teams in overlapping timezones for the best of cost-efficiency and real-time collaboration.",
  },
]

export default function EngagementModels() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-[var(--color-teal)] text-xs font-bold uppercase tracking-widest mb-3">
          Engagement Models
        </p>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-10">
          Flexible Ways to Work With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model) => {
            const Icon = model.icon
            return (
              <div
                key={model.title}
                className="border border-gray-200 rounded-2xl p-8 hover:border-[var(--color-teal)] hover:shadow-md transition-all"
              >
                <div className="p-3 bg-[var(--color-teal)]/10 rounded-xl w-fit mb-5">
                  <Icon size={24} className="text-[var(--color-teal)]" />
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-3">{model.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{model.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
