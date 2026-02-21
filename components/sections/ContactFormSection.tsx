import Link from "next/link"
import { Globe, Users } from "lucide-react"
import ContactForm from "@/components/ui/ContactForm"

export default function ContactFormSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: form */}
          <div className="lg:w-1/2 xl:w-2/5">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10">
              Get In Touch
            </h2>
            <ContactForm />
          </div>

          {/* Right: callout cards */}
          <div className="lg:w-1/2 xl:w-3/5 flex flex-col gap-6 lg:pt-20">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex gap-6 items-start hover:border-[var(--color-teal)]/50 transition-all">
              <div className="p-3 bg-[var(--color-teal)]/10 rounded-xl text-[var(--color-teal)] flex-shrink-0">
                <Globe size={28} />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">Global Presence</h3>
                <p className="text-gray-500 text-sm mb-4">
                  We&apos;re across 5 continents, explore our office nearest to you.
                </p>
                <Link
                  href="/about-us#geography"
                  className="text-[var(--color-teal)] text-sm font-semibold hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex gap-6 items-start hover:border-[var(--color-teal)]/50 transition-all">
              <div className="p-3 bg-[var(--color-teal)]/10 rounded-xl text-[var(--color-teal)] flex-shrink-0">
                <Users size={28} />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">Global Leaders</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Our capability and competencies are backed by diverse global leadership.
                </p>
                <Link
                  href="/#global-leaders"
                  className="text-[var(--color-teal)] text-sm font-semibold hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
