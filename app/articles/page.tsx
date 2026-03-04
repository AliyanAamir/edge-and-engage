import { ArticlesClient } from "@/components/sections/ArticlesClient"
import { articles } from "@/lib/data/articles"

export const metadata = { title: "Blog — Edge and Engage" }

export default function ArticlesPage() {
  return <ArticlesClient articles={articles} />
}
