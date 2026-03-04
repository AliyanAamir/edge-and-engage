import { CaseStudiesClient } from "@/components/sections/CaseStudiesClient"
import { caseStudies } from "@/lib/data/case-studies"

export const metadata = { title: "Case Studies — Edge and Engage" }

export default function CaseStudiesPage() {
  return <CaseStudiesClient caseStudies={caseStudies} />
}
