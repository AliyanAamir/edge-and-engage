import { z } from "zod"

export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Valid phone required"),
  company: z.string().min(1, "Company name required"),
  services: z.array(z.string()).min(1, "Select at least one service"),
  message: z.string().min(10, "Please describe your project"),
})

export type ContactFormData = z.infer<typeof contactSchema>
