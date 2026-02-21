import Link from "next/link"
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react"

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Careers", href: "/career" },
  { label: "Blog", href: "/articles" },
  { label: "Contact", href: "/contact" },
]

const industryLinks = [
  { label: "Travel & Hospitality", href: "/industry/travel-hospitality" },
  { label: "Public Sector", href: "/industry/public-sector" },
  { label: "Telecommunication", href: "/industry/telecommunication" },
  { label: "Retail & CPG", href: "/industry/retail-and-cpg" },
  { label: "Oil, Gas & Energy", href: "/industry/oil-gas-and-energy" },
  { label: "Startups", href: "/industry/startups" },
  { label: "E-commerce", href: "/industry/e-commerce-software-development" },
  { label: "Banking & Fintech", href: "/industry/banking-fintech" },
  { label: "Healthcare", href: "/industry/healthcare-pharmaceuticals" },
  { label: "Gaming", href: "/industry/gaming" },
]

const serviceLinks = [
  { label: "Generative AI", href: "/services/genai" },
  { label: "Mobile App Development", href: "/services/mobile-development" },
  { label: "Web Development", href: "/services/website-development" },
  { label: "Custom Software", href: "/services/custom-development" },
  { label: "DevOps", href: "/services/devops" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "Cybersecurity", href: "/services/cybersecurity-solutions" },
  { label: "Data Analytics", href: "/services/data-analytics-and-insights" },
  { label: "Cloud Application", href: "/services/cloud-application" },
  { label: "Staff Augmentation", href: "/services/staff-augmentation" },
]

const resourceLinks = [
  { label: "Blogs", href: "/articles" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Learning", href: "/learning" },
]

const offices = [
  { country: "Pakistan", type: "Global Delivery Center", address: "Plot B, 281 Ghazi Rd, Khuda Buksh Colony KB Society, Lahore, Punjab" },
  { country: "USA", type: "Regional Office", address: "18 S 2nd Street #120, San Jose, CA, 95113, United States" },
  { country: "UAE", type: "Regional Office", address: "34HW+5J5 - Parkside Retail Level - Cluster R - Jumeirah Lakes Towers - Dubai" },
  { country: "UK", type: "Regional Office", address: "128 City Road London, EC1V 2NX, United Kingdom" },
  { country: "KSA", type: "Regional Office", address: "3141 Anas Ibn Malik Rd, Al Malqa, Riyadh 13521 KSA" },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/50 text-sm hover:text-[var(--color-teal)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Industries We Serve</h4>
            <ul className="flex flex-col gap-3">
              {industryLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/50 text-sm hover:text-[var(--color-teal)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Services & Solutions</h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/50 text-sm hover:text-[var(--color-teal)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Resources</h4>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/50 text-sm hover:text-[var(--color-teal)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Our Offices</h4>
            <div className="flex flex-col gap-5">
              {offices.map((office) => (
                <div key={office.country}>
                  <p className="text-white text-xs font-bold">
                    {office.country}{" "}
                    <span className="text-white/40 font-normal">({office.type})</span>
                  </p>
                  <p className="text-white/50 text-xs mt-1 leading-relaxed">{office.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 flex-wrap">
              <Link href="/" className="text-[var(--color-teal)] font-black text-xl">D</Link>
              <Link href="/terms-conditions" className="text-white/40 text-xs hover:text-white transition-colors">
                Terms and Conditions
              </Link>
              <Link href="/privacy-policy" className="text-white/40 text-xs hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>

            <Link
              href="mailto:global.business@devsinc.com"
              className="text-[var(--color-teal)] text-sm font-semibold hover:underline"
            >
              global.business@devsinc.com
            </Link>

            <div className="flex items-center gap-4">
              <Link href="https://www.facebook.com/devsinc.official/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[var(--color-teal)] transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="https://www.linkedin.com/company/developers-inc" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[var(--color-teal)] transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link href="https://www.instagram.com/devsinc.official/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[var(--color-teal)] transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="https://x.com/devsinc" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[var(--color-teal)] transition-colors">
                <Twitter size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
