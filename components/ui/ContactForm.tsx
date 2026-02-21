"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema, type ContactFormData } from "@/lib/validations/contact"
import { cn } from "@/lib/utils"

const regions = [
  "Middle East & North Africa",
  "USA",
  "Canada",
  "Kingdom of Saudi Arabia",
  "Australia & New Zealand",
  "Asia",
  "Europe",
  "Rest of World",
]

const serviceOptions = [
  "Remote IT Resources",
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "AR/VR",
  "Gaming",
  "Cyber Security",
  "Other IT Services",
]

const inputClass =
  "w-full bg-transparent border border-[#3a3a3a] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[var(--color-teal)] transition-colors"

const labelClass =
  "block text-white/70 text-xs font-semibold uppercase tracking-wide mb-2"

const errorClass = "text-red-400 text-xs mt-1"

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      services: [],
      lookingForJob: "Please Select",
    },
  })

  async function onSubmit(data: ContactFormData) {
    console.log("Form data:", data)
    await new Promise((r) => setTimeout(r, 800))
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div>
        <label className={labelClass}>Full Name *</label>
        <input
          {...register("fullName")}
          className={inputClass}
          placeholder="John Doe"
        />
        {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Email *</label>
        <input
          {...register("email")}
          type="email"
          className={inputClass}
          placeholder="john@company.com"
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Phone Number *</label>
        <input
          {...register("phone")}
          type="tel"
          className={inputClass}
          placeholder="+1 (201) 555-0123"
        />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Company Name *</label>
        <input
          {...register("companyName")}
          className={inputClass}
          placeholder="Acme Corp"
        />
        {errors.companyName && <p className={errorClass}>{errors.companyName.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Company URL</label>
        <input
          {...register("companyUrl")}
          type="url"
          className={inputClass}
          placeholder="https://yourcompany.com"
        />
        {errors.companyUrl && <p className={errorClass}>{errors.companyUrl.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Region *</label>
        <select
          {...register("region")}
          className={cn(inputClass, "bg-[#1a1a1a] cursor-pointer")}
        >
          <option value="">Select Region</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        {errors.region && <p className={errorClass}>{errors.region.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Services you are looking for *</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
          {serviceOptions.map((service) => (
            <label key={service} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                value={service}
                {...register("services")}
                className="h-4 w-4 accent-[var(--color-teal)] rounded"
              />
              <span className="text-white/70 text-xs">{service}</span>
            </label>
          ))}
        </div>
        {errors.services && <p className={errorClass}>{errors.services.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Project Details *</label>
        <textarea
          {...register("projectDetails")}
          className={cn(inputClass, "resize-none h-28")}
          placeholder="Describe your project..."
        />
        {errors.projectDetails && (
          <p className={errorClass}>{errors.projectDetails.message}</p>
        )}
      </div>

      <div>
        <label className={labelClass}>I am looking for a job *</label>
        <select
          {...register("lookingForJob")}
          className={cn(inputClass, "bg-[#1a1a1a] cursor-pointer")}
        >
          <option value="Please Select">Please Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {errors.lookingForJob && (
          <p className={errorClass}>{errors.lookingForJob.message}</p>
        )}
      </div>

      {isSubmitSuccessful && (
        <p className="text-green-400 text-sm font-semibold text-center py-2 bg-green-400/10 rounded-lg">
          Thank you! We&apos;ll be in touch soon.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[var(--color-teal)] text-black font-bold py-4 rounded-lg hover:bg-[var(--color-teal-dark)] disabled:opacity-60 transition-all text-sm uppercase tracking-wide"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  )
}
