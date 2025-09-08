// src/components/Navbar.tsx (o .jsx)
import React from 'react'
import { ME } from '../data/me'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  // Cierra el panel al cambiar de tamaño a desktop
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <nav className="sticky top-0 z-20 border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-black/30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Marca/NOMBRE (izquierda). Si no lo quieres, bórralo */}
        <a href="#inicio" className="font-semibold tracking-tight text-[var(--lav-900)] dark:text-[var(--ivory)]">
          {ME.firstName ? `${ME.firstName} ${ME.lastName}` : ME.lastName}
        </a>

        {/* Desktop (>= md): acciones alineadas a la derecha */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={ME.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--lav-700)] px-4 py-2 text-xs font-medium text-[var(--lav-700)] hover:bg-[var(--lav-700)] hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href={ME.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--lav-700)] px-4 py-2 text-xs font-medium text-[var(--lav-700)] hover:bg-[var(--lav-700)] hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href={ME.cvUrl}
            className="rounded-full bg-[var(--lav-700)] px-4 py-2 text-xs font-semibold text-white hover:bg-[var(--lav-900)] transition"
          >
            Descargar CV
          </a>
        </div>

        {/* Mobile (< md): botón hamburguesa a la derecha */}
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-full border border-[var(--lav-700)] p-2 text-[var(--lav-700)] hover:bg-[var(--lav-700)] hover:text-white transition"
        >
          {!open ? (
            // icono hamburguesa
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" stroke="currentColor" strokeLinecap="round"/>
            </svg>
          ) : (
            // icono cerrar
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6 6l12 12M18 6l-12 12" strokeWidth="2" stroke="currentColor" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Panel móvil */}
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-black/40">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
            <a
              href={ME.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--lav-700)] px-4 py-2 text-sm font-medium text-[var(--lav-700)] hover:bg-[var(--lav-700)] hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              LinkedIn
            </a>
            <a
              href={ME.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--lav-700)] px-4 py-2 text-sm font-medium text-[var(--lav-700)] hover:bg-[var(--lav-700)] hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              GitHub
            </a>
            <a
              href={ME.cvUrl}
              className="rounded-full bg-[var(--lav-700)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--lav-900)] transition"
              onClick={() => setOpen(false)}
            >
              Descargar CV
            </a>

          </div>
        </div>
      )}
    </nav>
  )
}
