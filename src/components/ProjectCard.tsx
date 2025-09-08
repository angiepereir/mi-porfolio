// src/components/ProjectCard.tsx
import type { Project } from '../data/projects'
import Tag from './Tag'

export default function ProjectCard({ p }: { p: Project }) {
  const hasImage = Boolean((p as any).image)

  return (
    <article
      className="
        group rounded-2xl border p-4 shadow-sm ring-1 transition
        bg-white/70 backdrop-blur
        border-[color-mix(in_oklab,var(--lav-700)_22%,#fff_78%)]
        ring-[color-mix(in_oklab,var(--lav-700)_20%,#e2e8f0_80%)]
        hover:shadow-md hover:-translate-y-0.5
        dark:bg-white/5 dark:border-[color-mix(in_oklab,var(--lav-700)_25%,#000_75%)]
        dark:ring-[color-mix(in_oklab,var(--lav-700)_30%,#000_70%)]
      "
    >
      <a href={p.demoUrl || p.repoUrl} target="_blank" rel="noreferrer" className="block relative">
        {hasImage ? (
          <img
            src={(p as any).image}
            alt={p.imageAlt || p.title}
            loading="lazy"
            decoding="async"
            className="
              aspect-video w-full rounded-xl object-cover ring-1
              ring-[color-mix(in_oklab,var(--lav-700)_18%,#e2e8f0_82%)]
              dark:ring-[color-mix(in_oklab,var(--lav-700)_35%,#0b1220_65%)]
            "
          />
        ) : (
          <div
            className="
              aspect-video w-full overflow-hidden rounded-xl ring-1
              bg-gradient-to-br from-[var(--ivory)] via-[var(--taupe-400)]/25 to-[var(--lav-700)]/25
              ring-[color-mix(in_oklab,var(--lav-700)_18%,#e2e8f0_82%)]
              dark:from-transparent dark:via-[var(--lav-700)]/10 dark:to-[var(--lav-700)]/20
              dark:ring-[color-mix(in_oklab,var(--lav-700)_35%,#0b1220_65%)]
            "
            aria-label={p.imageAlt || p.title}
          />
        )}

        {/* sutil overlay al hover */}
        <span
          className="
            pointer-events-none absolute inset-0 rounded-xl opacity-0 transition
            group-hover:opacity-100
            bg-gradient-to-t from-[var(--lav-700)]/10 via-transparent to-transparent
          "
        />
      </a>

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3
          className="
            text-lg font-semibold
            text-[var(--lav-900)] dark:text-[var(--ivory)]
          "
        >
          {p.title}
        </h3>

        <div className="flex gap-2">
          {p.repoUrl && (
            <a
              className="
                rounded-full border px-3 py-1 text-xs font-medium transition
                border-[var(--lav-700)] text-[var(--lav-700)]
                hover:bg-[var(--lav-700)] hover:text-white
                dark:border-[var(--lav-700)] dark:text-[var(--lav-700)]
              "
              href={p.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Código
            </a>
          )}
          {p.demoUrl && (
            <a
              className="
                rounded-full px-3 py-1 text-xs font-semibold text-white transition
                bg-[var(--lav-700)] hover:bg-[var(--lav-900)]
                dark:bg-[var(--lav-700)] dark:hover:bg-[var(--lav-900)]
              "
              href={p.demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          )}
        </div>
      </div>

      <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{p.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="chip">
            <Tag label={t} />
          </span>
        ))}
      </div>
    </article>
  )
}
