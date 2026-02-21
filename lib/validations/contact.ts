import { z } from "zod"

export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  companyName: z.string().min(1, "Company name is required"),
  companyUrl: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  region: z.string().min(1, "Please select a region"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  projectDetails: z
    .string()
    .min(10, "Please provide at least 10 characters describing your project"),
  lookingForJob: z
    .string()
    .refine((val) => val !== "Please Select", { message: "Please select an option" }),
})

export type ContactFormData = z.infer<typeof contactSchema>
