// src/components/ProjectCard.tsx
import type { Project } from '../data/projects'
import Tag from './Tag'

export default function ProjectCard({ p }: { p: Project }) {
  const hasImage = Boolean((p as any).image)

  return (
    <article className="group rounded-2xl border bg-white/60 p-4 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800/60 dark:ring-slate-700">
      <a href={p.demoUrl || p.repoUrl} target="_blank" rel="noreferrer" className="block">
        {hasImage ? (
          <img
            src={(p as any).image}
            alt={p.imageAlt || p.title}
            loading="lazy"
            decoding="async"
            className="aspect-video w-full rounded-xl object-cover ring-1 ring-inset ring-slate-200 dark:ring-slate-700"
          />
        ) : (
          <div
            className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 ring-1 ring-inset ring-slate-200 dark:from-slate-900 dark:to-slate-800 dark:ring-slate-700"
            aria-label={p.imageAlt || p.title}
          />
        )}
      </a>

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {p.title}
        </h3>
        <div className="flex gap-2">
          {p.repoUrl && (
            <a
              className="rounded-lg border px-3 py-1 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-700"
              href={p.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Código
            </a>
          )}
          {p.demoUrl && (
            <a
              className="rounded-lg bg-slate-900 px-3 py-1 text-xs font-semibold text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              href={p.demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          )}
        </div>
      </div>

      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </article>
  )
}
