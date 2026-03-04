"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { contactSchema, type ContactFormData } from "@/lib/validations/contact"
import { Button } from "@/components/ui/Button"
import { PageTransition } from "@/components/ui/PageTransition"
import { offices } from "@/lib/data/navigation"
import { services } from "@/lib/data/services"

const topServices = services.slice(0, 8).map((s) => s.name)

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData) {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    setSent(true)
  }

  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">
              Get in Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-8">
              Let&apos;s Start a Conversation
            </h1>
            {sent ? (
              <div className="p-8 rounded-2xl bg-violet-600/10 border border-violet-600/30 text-center">
                <p className="text-white font-semibold text-lg">Message sent!</p>
                <p className="text-muted text-sm mt-2">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                {[
                  { name: "fullName", label: "Full Name", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                  { name: "phone", label: "Phone", type: "tel" },
                  { name: "company", label: "Company", type: "text" },
                ].map(({ name, label, type }) => (
                  <div key={name}>
                    <label className="text-xs text-muted uppercase tracking-widest mb-1.5 block">
                      {label}
                    </label>
                    <input
                      {...register(name as keyof ContactFormData)}
                      type={type}
                      className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-600 transition-colors"
                    />
                    {errors[name as keyof ContactFormData] && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors[name as keyof ContactFormData]?.message as string}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label className="text-xs text-muted uppercase tracking-widest mb-2 block">
                    Services Interested In
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {topServices.map((s) => (
                      <label key={s} className="flex items-center gap-2 text-sm text-muted cursor-pointer">
                        <input
                          type="checkbox"
                          value={s}
                          {...register("services")}
                          className="accent-violet-600"
                        />
                        {s}
                      </label>
                    ))}
                  </div>
                  {errors.services && (
                    <p className="text-red-400 text-xs mt-1">{errors.services.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-xs text-muted uppercase tracking-widest mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-600 transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* Offices */}
          <div className="flex flex-col gap-6 pt-20">
            <h2 className="font-display text-2xl font-bold text-white">Our Offices</h2>
            {offices.map((o) => (
              <div key={o.country} className="p-5 rounded-2xl bg-surface border border-border">
                <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-1">
                  {o.type}
                </p>
                <p className="text-white font-semibold">{o.country}</p>
                <p className="text-muted text-sm mt-1">{o.address}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
