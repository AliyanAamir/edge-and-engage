import { AboutClient } from "@/components/sections/AboutClient"
import { leaders } from "@/lib/data/leadership"
import { offices } from "@/lib/data/navigation"

export const metadata = { title: "About Us — Edge and Engage" }

export default function AboutPage() {
  return <AboutClient leaders={leaders} offices={offices} />
}
