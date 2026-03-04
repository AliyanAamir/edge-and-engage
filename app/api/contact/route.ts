import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { contactSchema } from "@/lib/validations/contact"
import { ContactEmail } from "@/emails/ContactEmail"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()
  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  const { fullName, email, company, message, services } = parsed.data
  await resend.emails.send({
    from: "Edge and Engage <noreply@edgeandenggage.com>",
    to: "global.business@edgeandenggage.com",
    subject: `New enquiry from ${fullName} — ${company}`,
    react: ContactEmail({ fullName, email, company, message, services }),
  })

  return NextResponse.json({ ok: true })
}
