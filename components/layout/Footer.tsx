import Link from "next/link"
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react"
import {
  footerCompanyLinks,
  footerIndustryLinks,
  footerServiceLinks,
  footerResourceLinks,
  offices,
} from "@/lib/data/navigation"
import { site } from "@/lib/data/site"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Company */}
          <div>
            <h4 className="text-gray-100 font-bold text-xs uppercase tracking-widest mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {footerCompanyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 text-sm hover:text-[var(--color-teal)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-gray-100 font-bold text-xs uppercase tracking-widest mb-5">Industries We Serve</h4>
            <ul className="flex flex-col gap-3">
              {footerIndustryLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 text-sm hover:text-[var(--color-teal)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-100 font-bold text-xs uppercase tracking-widest mb-5">Services & Solutions</h4>
            <ul className="flex flex-col gap-3">
              {footerServiceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 text-sm hover:text-[var(--color-teal)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gray-100 font-bold text-xs uppercase tracking-widest mb-5">Resources</h4>
            <ul className="flex flex-col gap-3">
              {footerResourceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 text-sm hover:text-[var(--color-teal)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-gray-100 font-bold text-xs uppercase tracking-widest mb-5">Our Offices</h4>
            <div className="flex flex-col gap-5">
              {offices.map((office) => (
                <div key={office.country}>
                  <p className="text-gray-100 text-xs font-bold">
                    {office.country}{" "}
                    <span className="text-gray-500 font-normal">({office.type})</span>
                  </p>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">{office.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 flex-wrap">
              <Link href="/" className="text-[var(--color-teal)] font-black text-xl">
                {site.logoLetter}
              </Link>
              <Link href="/terms-conditions" className="text-gray-500 text-xs hover:text-white transition-colors">
                Terms and Conditions
              </Link>
              <Link href="/privacy-policy" className="text-gray-500 text-xs hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>

            <Link
              href={`mailto:${site.email}`}
              className="text-[var(--color-teal)] text-sm font-semibold hover:underline"
            >
              {site.email}
            </Link>

            <div className="flex items-center gap-4">
              <Link href={site.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--color-teal)] transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--color-teal)] transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--color-teal)] transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href={site.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--color-teal)] transition-colors">
                <Twitter size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
