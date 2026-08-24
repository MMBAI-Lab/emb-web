import {
  BETA_LIME,
  BETA_VIOLET,
  HELIX_CYAN,
  HELIX_MAGENTA,
  HELIX_VIOLET,
  LOOP_BOTTOM,
  LOOP_TOP,
  PROTEIN_TRANSFORM,
} from '@/lib/paths'

/**
 * El grupo `proteina` del flyer: la cinta de neon de arriba a la izquierda.
 *
 * Las tres hélices alfa, las dos láminas beta y los dos loops se extraen
 * verbatim (geometría irregular, no vale reconstruirla). El flyer las dibuja
 * con ~150 segmentos cortos de ancho variable para fingir profundidad; acá cada
 * una es un trazo único mas un especular punteado.
 *
 * El dibujado de entrada es CSS puro: con pathLength="1" las unidades de dash
 * quedan normalizadas, así que no hay que medir el path en JS. Eso importa
 * porque el sitio es estático: la cinta se dibuja igual con el JS deshabilitado,
 * y `forwards` la deja visible al terminar.
 */

const HELICES = [
  { d: HELIX_CYAN, color: '#2ae4ff' },
  { d: HELIX_MAGENTA, color: '#ff2fd1' },
  { d: HELIX_VIOLET, color: '#8b5cff' },
] as const

const BETAS = [
  { d: BETA_LIME, color: '#b6ff2e' },
  { d: BETA_VIOLET, color: '#8b5cff' },
] as const

const LOOPS = [LOOP_TOP, LOOP_BOTTOM] as const

export default function Protein() {
  return (
    <svg
      className="h-full w-full"
      viewBox="60 165 620 700"
      preserveAspectRatio="xMinYMin meet"
      aria-hidden="true"
    >
      <g transform={PROTEIN_TRANSFORM}>
        {/* Aura de toda la cinta: un solo blur para las 5 piezas. */}
        <g className="blur-aura">
          {HELICES.map((h) => (
            <path
              key={h.color}
              d={h.d}
              stroke={h.color}
              strokeWidth={49.3}
              fill="none"
              opacity={0.2}
              strokeLinecap="round"
            />
          ))}
          {BETAS.map((b) => (
            <path key={`aura-${b.color}`} d={b.d} fill={b.color} opacity={0.16} />
          ))}
        </g>

        {/* Laminas beta: relleno plano + contorno + filo interior blanco. */}
        {BETAS.map((b) => (
          <g key={`beta-${b.color}`}>
            <path d={b.d} fill={b.color} opacity={0.2} />
            <path d={b.d} stroke={b.color} strokeWidth={3.6} fill="none" opacity={0.78} />
            <path d={b.d} stroke="#fff" strokeWidth={1.2} fill="none" opacity={0.28} />
          </g>
        ))}

        {/* Hélices alfa: se dibujan solas al cargar. */}
        {HELICES.map((h, i) => (
          <g key={`helix-${h.color}`}>
            <path
              className="amb-draw"
              d={h.d}
              pathLength={1}
              stroke={h.color}
              strokeWidth={24}
              fill="none"
              strokeLinecap="round"
              opacity={0.82}
              style={{ animationDelay: `${i * 0.35}s` }}
            />
            {/* especular punteado: sugiere el enrollado sin 25 segmentos */}
            <path
              d={h.d}
              stroke="#fff"
              strokeWidth={5.1}
              fill="none"
              strokeLinecap="round"
              opacity={0.26}
              strokeDasharray="3 17"
            />
          </g>
        ))}

        {/* Loops que conectan las hélices. */}
        {LOOPS.map((d, i) => (
          <path
            key={d}
            className="amb-draw"
            d={d}
            pathLength={1}
            stroke="#b6ff2e"
            strokeWidth={9}
            fill="none"
            strokeLinecap="round"
            opacity={0.7}
            style={{ animationDelay: `${1.1 + i * 0.25}s` }}
          />
        ))}
      </g>
    </svg>
  )
}
