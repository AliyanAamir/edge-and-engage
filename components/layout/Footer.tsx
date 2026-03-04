import { site } from "@/lib/data/site"
import {
  footerCompanyLinks,
  footerIndustryLinks,
  footerServiceLinks,
  footerResourceLinks,
  offices,
} from "@/lib/data/navigation"
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react"

export function Footer() {
  const socials = [
    { href: site.socials.facebook, Icon: Facebook },
    { href: site.socials.linkedin, Icon: Linkedin },
    { href: site.socials.instagram, Icon: Instagram },
    { href: site.socials.twitter, Icon: Twitter },
  ]

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold text-sm">
                E
              </span>
              <span className="font-display font-bold text-white text-sm">{site.name}</span>
            </div>
            <p className="text-muted text-xs leading-relaxed mb-4">{site.tagline}</p>
            <div className="flex gap-3">
              {socials.map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-violet-400 hover:border-violet-600 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
              Company
            </p>
            {footerCompanyLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block text-muted hover:text-white text-sm py-1 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Industries */}
          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
              Industries
            </p>
            {footerIndustryLinks.slice(0, 6).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block text-muted hover:text-white text-sm py-1 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
              Services
            </p>
            {footerServiceLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block text-muted hover:text-white text-sm py-1 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Resources + Offices */}
          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
              Resources
            </p>
            {footerResourceLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block text-muted hover:text-white text-sm py-1 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <p className="text-xs font-semibold text-white uppercase tracking-widest mt-6 mb-4">
              Offices
            </p>
            {offices.map((o) => (
              <div key={o.country} className="mb-3">
                <p className="text-white text-xs font-medium">{o.country}</p>
                <p className="text-muted text-xs leading-relaxed">{o.address}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="text-muted hover:text-white text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted hover:text-white text-xs transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
