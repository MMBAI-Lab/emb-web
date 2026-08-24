'use client'

import { useEffect } from 'react'

/**
 * Revela los bloques `.reveal-in-view` al entrar en viewport.
 *
 * Por que un IntersectionObserver y no `animation-timeline: view()`: la version
 * CSS deja el elemento en su estado inicial (invisible) cuando nunca llega a
 * "entrar" -- ventana mas alta que el documento, paginas cortas, capturas de
 * pagina completa. Con el observer eso no pasa: dispara igual para lo que ya
 * esta en pantalla al cargar.
 *
 * El estado oculto lo aplica `html.js`, que pone el script inline de layout.tsx.
 * Si este componente no llega a montar, ese script se retira la clase solo y el
 * contenido queda visible. El sitio es estatico: el texto no puede depender de
 * que hidrate el JS.
 */
export default function RevealWatcher() {
  useEffect(() => {
    // avisa al script inline que el observer si arranco
    window.__revealReady = true

    const targets = document.querySelectorAll<HTMLElement>('.reveal-in-view')

    // Sin soporte de IntersectionObserver, mostrar todo y listo.
    if (typeof IntersectionObserver === 'undefined') {
      document.documentElement.classList.remove('js')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    )

    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  return null
}
