import { RUNGS } from '@/lib/flyer-data'
import { ARN_BACKBONE_CYAN, ARN_BACKBONE_VIOLET } from '@/lib/paths'

/**
 * El grupo `arn` del flyer: la doble hélice que sube desde abajo a la derecha.
 *
 * Las dos hebras son las unicas curvas del poster que no vale reconstruir (son
 * la proyeccion 3D de la hélice), así que sus `d` se extraen verbatim del SVG.
 * Los 36 pares de bases si son datos: segmentos rectos con color ciclando
 * violeta / lima / cyan / magenta.
 *
 * El flyer finge la profundidad con ~160 segmentos cortos de ancho variable.
 * Aca eso se reemplaza por un trazo único mas un especular punteado, y se suma
 * un pulso de luz que recorre cada hebra (pathLength normalizado a 1000, así el
 * navegador calcula el largo real y el dash viaja parejo).
 */

const STRANDS = [
  { d: ARN_BACKBONE_CYAN, color: '#2ae4ff', delay: '0s' },
  { d: ARN_BACKBONE_VIOLET, color: '#8b5cff', delay: '-3s' },
] as const

export default function Helix() {
  return (
    <svg
      className="h-full w-full"
      viewBox="660 790 590 930"
      preserveAspectRatio="xMaxYMax meet"
      aria-hidden="true"
    >
      {/* Aura de las dos hebras: un solo blur para toda la capa. */}
      <g className="blur-aura">
        {STRANDS.map((s) => (
          <path
            key={s.color}
            d={s.d}
            stroke={s.color}
            strokeWidth={37.7}
            fill="none"
            opacity={0.2}
            strokeLinecap="round"
          />
        ))}
      </g>

      {/* Pares de bases. La onda de brillo viaja de abajo hacia arriba. */}
      <g>
        {RUNGS.map((r, i) => (
          <line
            key={i}
            className="amb-rung"
            x1={r.x1}
            y1={r.y1}
            x2={r.x2}
            y2={r.y2}
            stroke={r.c}
            strokeWidth={r.w}
            strokeLinecap="round"
            style={
              {
                '--rung-op': r.o,
                opacity: r.o,
                animationDelay: `${-(i / RUNGS.length) * 3.2}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </g>

      {/* Hebras nitidas + especular punteado que sugiere el enrollado. */}
      {STRANDS.map((s) => (
        <g key={`crisp-${s.color}`}>
          <path d={s.d} stroke={s.color} strokeWidth={13} fill="none" opacity={0.8} strokeLinecap="round" />
          <path
            d={s.d}
            stroke="#fff"
            strokeWidth={3.9}
            fill="none"
            opacity={0.3}
            strokeDasharray="3 15"
            strokeLinecap="round"
          />
        </g>
      ))}

      {/* Pulso de luz recorriendo cada hebra. */}
      {STRANDS.map((s) => (
        <path
          key={`trace-${s.color}`}
          className="amb-trace"
          d={s.d}
          pathLength={1000}
          stroke="#fff"
          strokeWidth={15}
          fill="none"
          strokeLinecap="round"
          strokeDasharray="70 930"
          style={{ '--trace-len': 1000, animationDelay: s.delay } as React.CSSProperties}
        />
      ))}
    </svg>
  )
}
