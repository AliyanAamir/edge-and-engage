import { articles } from "@/lib/data/articles"
import { PageTransition } from "@/components/ui/PageTransition"
import { ArrowRight } from "lucide-react"

export const metadata = { title: "Blog — Edge and Engage" }

export default function ArticlesPage() {
  return (
    <PageTransition>
      <main className="pt-24 min-h-screen bg-bg">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">
            Insights
          </span>
          <h1 className="font-display text-5xl font-bold text-white mt-3 mb-12">
            Latest Articles
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a) => (
              <a
                key={a.slug}
                href={`/articles/${a.slug}`}
                className="group flex flex-col p-6 rounded-2xl bg-surface border border-border hover:border-violet-600/60 transition-all"
              >
                <div className="h-40 rounded-xl bg-surface-2 mb-5" />
                <span className="self-start text-xs font-semibold px-3 py-1 rounded-full bg-violet-600/20 text-violet-400 mb-3">
                  {a.tag}
                </span>
                <p className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-violet-300 transition-colors">
                  {a.title}
                </p>
                <p className="text-muted text-xs leading-relaxed flex-1">{a.excerpt}</p>
                <div className="flex items-center gap-1 mt-4 text-violet-400 text-xs font-medium">
                  {a.readTime} read <ArrowRight className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
