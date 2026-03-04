interface Props {
  fullName: string
  email: string
  company: string
  message: string
  services: string[]
}

export function ContactEmail({ fullName, email, company, message, services }: Props) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h2>New Contact Form Submission</h2>
      <p>
        <strong>Name:</strong> {fullName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Company:</strong> {company}
      </p>
      <p>
        <strong>Services:</strong> {services.join(", ")}
      </p>
      <p>
        <strong>Message:</strong> {message}
      </p>
    </div>
  )
}
