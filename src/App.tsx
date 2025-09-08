// src/App.jsx
import { ME } from "./data/me";
import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import CopyEmailButton from "./components/CopyEmailButton";
import Nav from "./components/Nav";
import tailwindcss from "@tailwindcss/vite";

export default function App() {
  const fullName = `${ME.firstName} ${ME.lastName}`;

  return (
    <div className="min-h-screen bg-[var(--ivory)] text-slate-900 antialiased dark:bg-[var(--ink)] dark:text-slate-100">
      <Nav/>


<header
  id="inicio"
  className="relative overflow-hidden bg-[var(--ivory)]"
>
  
  <div className="absolute inset-0 bg-gradient-to-br from-[var(--ivory)] via-[var(--taupe-400)]/20 to-[var(--lav-700)]/20"></div>

  <div className="relative mx-auto max-w-6xl px-4 py-20 text-center">
  
    <div className="mx-auto mb-6 h-36 w-36 overflow-hidden rounded-full ring-4 ring-[var(--lav-700)]/30 shadow-lg">
      <img
        src={ME.photoUrl}
        alt={`${ME.firstName} ${ME.lastName}`}
        className="h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />
    </div>

   
    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--lav-900)]">
      <span>{ME.firstName} </span>
      <span className="text-[var(--lav-700)]">{ME.lastName}</span>
    </h1>

    <p className="mt-3 text-lg text-slate-700">{ME.role}</p>
    <p className="mt-2 text-base max-w-2xl mx-auto text-slate-600">
      {ME.tagline}
    </p>

   
    <div className="mt-6 flex flex-wrap justify-center gap-3">
      <a
        href={`mailto:${ME.email}`}
        className="rounded-full bg-[var(--lav-700)] px-5 py-2 text-sm font-medium text-white shadow hover:bg-[var(--lav-900)] transition"
      >
        Escríbeme
      </a>
      <CopyEmailButton email={ME.email} />
      <a
        href={ME.linkedin}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-[var(--lav-700)] px-5 py-2 text-sm font-medium text-[var(--lav-700)] hover:bg-[var(--lav-700)] hover:text-white transition"
      >
        LinkedIn
      </a>
      <a
        href={ME.github}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-[var(--lav-700)] px-5 py-2 text-sm font-medium text-[var(--lav-700)] hover:bg-[var(--lav-700)] hover:text-white transition"
      >
        GitHub
      </a>
    </div>
  </div>
</header>


      <div className="h-2 w-full bg-gradient-to-r from-[var(--lav-900)] via-[var(--lav-700)] to-[var(--taupe-400)]" />

      {/* CONTENIDO */}
      <main className="mx-auto max-w-6xl px-4 pb-20">
        {/* PROYECTOS */}
        <section id="proyectos" className="pt-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--lav-900)] mb-8">
            Proyectos destacados
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
          <div className="mt-6">
            <a
              href={`${ME.github}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
              className="text-md underline text-[var(--lav-900)] hover:opacity-80 dark:text-[var(--taupe-400)]"
            >
              Ver todos en GitHub →
            </a>
          </div>
        </section>

        {/* SOBRE MI */}
        {/* STACK PRINCIPAL */}
        <section id="sobre-mi" className="mt-20 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--lav-900)] mb-6">
            Stack principal
          </h2>
          <div className="rounded-2xl border p-6 inline-block dark:border-slate-700 bg-white/60 dark:bg-white/5">
            <div className="mt-3 flex flex-wrap justify-center gap-2 text-sm">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Angular",
                "Node.js",
                "MongoDB",
                "SQL",
                "Python",
                "HTML",
                "CSS",
                "Meteor",
                "TDD",
                "Testing",
                "Tailwind",
                "PrimeNg",
                "PrimeFlex",
                "PrimeReact"
              ].map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t py-8 text-center text-sm text-slate-600 dark:text-slate-400 dark:border-white/10">
        <div className="flex items-center justify-center gap-3 mb-3">
          <a href={`mailto:${ME.email}`} className="underline">Email</a>
          <span>·</span>
          <a href={ME.linkedin} target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
          <span>·</span>
          <a href={ME.github} target="_blank" rel="noreferrer" className="underline">GitHub</a>
        </div>
        © {new Date().getFullYear()} {fullName}. Hecho con React y cariño.
      </footer>
    </div>
  );
}
