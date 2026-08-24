import type { Variants } from 'framer-motion'

/**
 * Variantes compartidas. Las entradas y el scroll van por framer-motion; los
 * loops de ambiente infinitos viven en CSS (ver globals.css) para no tener
 * ~150 animaciones corriendo en JS.
 */

export const EASE_OUT = [0.16, 1, 0.3, 1] as const

/** Aparicion estandar de una sección al entrar en viewport. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
}

/** Contenedor que escalona la entrada de sus hijos. */
export const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})

/** Item de una lista escalonada. */
export const riseItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
}

/** Entrada del hero: mas lenta y con mas recorrido que el resto. */
export const heroLine: Variants = {
  hidden: { opacity: 0, y: 42, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.95, ease: EASE_OUT },
  },
}

/** Props de viewport que usamos en todas las secciones. */
export const inView = { once: true, amount: 0.2 } as const
