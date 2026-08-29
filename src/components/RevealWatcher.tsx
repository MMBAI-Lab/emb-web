'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Revela los bloques `.reveal-in-view` al entrar en viewport.
 *
 * Por qué un IntersectionObserver y no `animation-timeline: view()`: la versión
 * CSS deja el elemento en su estado inicial (invisible) cuando nunca llega a
 * "entrar" -- ventana más alta que el documento, páginas cortas, capturas de
 * página completa. Con el observer eso no pasa: dispara igual para lo que ya
 * está en pantalla al cargar.
 *
 * Dos cosas lo mantienen sincronizado con la navegación, y las dos hacen falta:
 *
 *  - `pathname` en las dependencias. Este componente vive en el layout, así que
 *    al cambiar de solapa NO se vuelve a montar. Sin esto, el observer seguía
 *    apuntando a los nodos de la página anterior y el contenido de la nueva se
 *    quedaba en opacity 0 hasta recargar a mano.
 *  - Un MutationObserver, por si aparecen bloques después del efecto.
 *
 * El estado oculto lo aplica `html.js`, que pone el script inline de layout.tsx.
 * Si este componente no llega a montar, ese script se retira la clase solo y el
 * contenido queda visible. El sitio es estático: el texto no puede depender de
 * que hidrate el JS.
 */
export default function RevealWatcher() {
  const pathname = usePathname()

  useEffect(() => {
    // avisa al script inline que el observer sí arrancó
    window.__revealReady = true

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

    const observeNew = () => {
      for (const el of document.querySelectorAll('.reveal-in-view:not(.is-in)')) {
        io.observe(el)
      }
    }

    observeNew()

    // Reobservar lo que aparezca despues, agrupado por frame para no rehacer la
    // consulta en cada mutacion (el countdown toca el DOM una vez por segundo).
    let pending = 0
    const mo = new MutationObserver(() => {
      if (pending) return
      pending = requestAnimationFrame(() => {
        pending = 0
        observeNew()
      })
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      if (pending) cancelAnimationFrame(pending)
      mo.disconnect()
      io.disconnect()
    }
  }, [pathname])

  return null
}
