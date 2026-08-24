'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Atmosphere from './Atmosphere'
import CityGrid from './CityGrid'
import GradientField from './GradientField'
import Helix from './Helix'
import Membrane from './Membrane'
import Protein from './Protein'
import SequenceRain from './SequenceRain'

/**
 * La escena del flyer, viva y a pantalla completa detras de todo el sitio.
 *
 * Orden de pintado, igual que el SVG original (`fondo` -> `moleculas` ->
 * `atmósfera`), con la viñeta y las scanlines por encima del arte:
 *
 *   GradientField -> SequenceRain -> CityGrid -> Membrane -> Helix -> Protein
 *   -> Atmosphere
 *
 * Cada capa se posiciona donde esta en el poster (proteina arriba a la
 * izquierda, ADN abajo a la derecha, membrana al pie, ciudad en el horizonte) en
 * vez de escalar el A4 entero: así la composicion se sostiene en cualquier
 * relacion de aspecto.
 *
 * Parallax: el fondo es `fixed`, así que sin transform quedaria infinitamente
 * lejos. Un desplazamiento chico en la direccion del scroll da la profundidad;
 * las capas cercanas (proteina, ADN) se mueven mas que las lejanas (ciudad).
 */
export default function Backdrop() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const yCity = useTransform(scrollYProgress, [0, 1], ['0vh', '-7vh'])
  const yMembrane = useTransform(scrollYProgress, [0, 1], ['0vh', '-12vh'])
  const yHelix = useTransform(scrollYProgress, [0, 1], ['0vh', '-20vh'])
  const yProtein = useTransform(scrollYProgress, [0, 1], ['0vh', '-27vh'])
  const ySeq = useTransform(scrollYProgress, [0, 1], ['0vh', '4vh'])

  /** Con reduced-motion no hay parallax: las capas quedan donde estan. */
  const py = (v: typeof yCity) => (reduce ? undefined : v)

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
      style={{ contain: 'paint' }}
    >
      <GradientField />

      <motion.div className="mobile-hide absolute inset-0" style={{ y: py(ySeq) }}>
        <SequenceRain />
      </motion.div>

      {/* Ciudad y grilla en fuga: ancladas al borde inferior. */}
      <motion.div className="absolute inset-x-0 bottom-0 h-[64vh]" style={{ y: py(yCity) }}>
        <CityGrid />
      </motion.div>

      {/* ADN: entra por abajo a la derecha, como en el poster. */}
      <motion.div
        className="absolute bottom-0 right-0 h-[88vh] w-[54vw] max-w-[660px]"
        style={{ y: py(yHelix) }}
      >
        <div className="amb-drift-b h-full w-full">
          <Helix />
        </div>
      </motion.div>

      {/* Membrana: al pie, a sangre. Va sobre el ADN, igual que en el flyer. */}
      <motion.div
        className="absolute inset-x-0 bottom-0"
        /* La relacion de aspecto sale del flyer (1330 x 208): así la bicapa
           entra completa a cualquier ancho, sin recortar las cabezas. */
        style={{ y: py(yMembrane), aspectRatio: "1330 / 208" }}
      >
        <Membrane />
      </motion.div>

      {/* Proteina: arriba a la izquierda. */}
      <motion.div
        className="absolute left-[-3vw] top-[7vh] h-[62vh] w-[48vw] max-w-[600px]"
        style={{ y: py(yProtein) }}
      >
        <div className="amb-drift-a h-full w-full">
          <Protein />
        </div>
      </motion.div>

      <Atmosphere />
    </div>
  )
}
