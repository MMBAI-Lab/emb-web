/**
 * Un icono por eje tematico, para la seccion "Que se estudia".
 *
 * Son dibujos de linea propios, no una libreria de iconos: a 28px hay que
 * quitar todo el detalle y quedarse con la silueta que identifica el tema
 * (la membrana son dos filas de cabezas con colas, el campo de fuerzas es un
 * resorte entre dos atomos). Heredan el color con `currentColor`, asi que el
 * tono lo decide quien los usa.
 */

export type TopicIconName =
  | 'electronica'
  | 'campos'
  | 'dinamica'
  | 'qmmm'
  | 'membranas'
  | 'ml'
  | 'energias'
  | 'farmacos'
  | 'granogrueso'

/** Rotulo para lectores de pantalla: el icono no aporta nada que el titulo no diga. */
const PATHS: Record<TopicIconName, React.ReactNode> = {
  // Orbitales alrededor de un nucleo.
  electronica: (
    <>
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </>
  ),
  // Dos atomos unidos por un resorte: el enlace parametrizado.
  campos: (
    <>
      <circle cx="3.6" cy="12" r="2.2" />
      <circle cx="20.4" cy="12" r="2.2" />
      <path d="M5.8 12h1.6l1.1-2.8 2 5.6 2-5.6 2 5.6 1.1-2.8h1.6" />
    </>
  ),
  // Molecula de tres centros con una estela de movimiento.
  dinamica: (
    <>
      <circle cx="7" cy="8.5" r="2.1" />
      <circle cx="17" cy="10.5" r="2.1" />
      <circle cx="11.5" cy="17.5" r="2.1" />
      <path d="M9.1 8.9 14.9 10.1M15.7 12.2l-2.9 3.6M10.5 15.6 7.9 10.4" />
      <path d="M1.8 6.6h2.4M1.2 9.4h2.6" />
    </>
  ),
  // Region cuantica embebida en un entorno clasico.
  qmmm: (
    <>
      <rect x="2.5" y="3.5" width="19" height="17" rx="1.6" strokeDasharray="2 2" />
      <path d="M9.4 9.1 12 7.6l2.6 1.5v3l-2.6 1.5-2.6-1.5Z" />
      <circle cx="12" cy="10.6" r="0.9" fill="currentColor" stroke="none" />
      <path d="M6 17.4h12" />
    </>
  ),
  // Bicapa lipidica: cabezas y colas enfrentadas.
  membranas: (
    <>
      <g>
        <circle cx="5" cy="5.4" r="1.7" />
        <circle cx="12" cy="5.4" r="1.7" />
        <circle cx="19" cy="5.4" r="1.7" />
        <path d="M5 7.1v3.3M12 7.1v3.3M19 7.1v3.3" />
      </g>
      <g>
        <circle cx="5" cy="18.6" r="1.7" />
        <circle cx="12" cy="18.6" r="1.7" />
        <circle cx="19" cy="18.6" r="1.7" />
        <path d="M5 16.9v-3.3M12 16.9v-3.3M19 16.9v-3.3" />
      </g>
    </>
  ),
  // Nodos y conexiones de una red.
  ml: (
    <>
      <circle cx="4.2" cy="6.5" r="1.8" />
      <circle cx="4.2" cy="17.5" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="19.8" cy="6.5" r="1.8" />
      <circle cx="19.8" cy="17.5" r="1.8" />
      <path d="m5.8 7.4 4.6 3.7M5.8 16.6l4.6-3.7M13.6 11.1l4.6-3.7M13.6 12.9l4.6 3.7" />
    </>
  ),
  // Superficie de energia libre con la particula en el minimo.
  energias: (
    <>
      <path d="M2 5.5c2.6 0 2.6 11 6.4 11s2.6-8.2 6-8.2 3 10.2 6.4 10.2c.6 0 1-.4 1.2-.9" />
      <circle cx="8.4" cy="15" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  // Capsula: el farmaco.
  farmacos: (
    <>
      <rect x="4.6" y="9.2" width="14.8" height="5.6" rx="2.8" transform="rotate(-45 12 12)" />
      <path d="M9.9 9.9l4.2 4.2" />
    </>
  ),
  // Cadena de perlas: el grano grueso.
  granogrueso: (
    <>
      <circle cx="3.8" cy="15.5" r="2" />
      <circle cx="9.3" cy="8.8" r="2" />
      <circle cx="14.7" cy="15.5" r="2" />
      <circle cx="20.2" cy="8.8" r="2" />
      <path d="m5.1 13.9 2.9-3.5M10.6 10.4l2.9 3.5M16 13.9l2.9-3.5" />
    </>
  ),
}

export default function TopicIcon({
  name,
  className = '',
}: {
  name: TopicIconName
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {PATHS[name]}
    </svg>
  )
}
