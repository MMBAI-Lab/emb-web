import { BUILDINGS, FLOOR_RAYS, FLOOR_SCANS, VANISHING } from '@/lib/flyer-data'

/**
 * Los grupos `skyline` y `piso` del flyer: el perfil de ciudad sobre el
 * horizonte y la grilla en fuga.
 *
 * En el SVG original `piso` se dibuja después de `skyline`, así que la grilla
 * pasa por encima de la base de los edificios y produce el efecto de piso
 * reflectante. Mantenemos ese orden.
 *
 * Las 8 horizontales del flyer estan en y = 1200 + 554*(i/8)^2. Aca se dibujan
 * todas en el horizonte y el keyframe grid-tunnel las baja siguiendo esa misma
 * ley, con un retardo negativo por linea: la grilla queda en movimiento
 * continuo hacia el observador.
 */
export default function CityGrid() {
  const TUNNEL = FLOOR_SCANS.length

  return (
    <svg
      className="h-full w-full"
      viewBox="0 980 1240 774"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Resplandor del horizonte: un solo blur para las dos elipses. */}
      <g className="blur-glow">
        <ellipse cx={660} cy={1545} rx={780} ry={190} fill="#ff2fd1" opacity={0.55} />
        <ellipse cx={300} cy={1518} rx={440} ry={150} fill="#2ae4ff" opacity={0.45} />
      </g>

      {/* Edificios. */}
      {BUILDINGS.map((b, i) => (
        <g key={b.x}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="#07041a" />
          {b.spire && <path d={b.spire} fill="#07041a" />}

          {b.edge && (
            <rect x={b.edge.x} y={b.edge.y} width={b.edge.w} height={2.5} fill={b.edge.c} opacity={0.55} />
          )}

          {/* Columna de luz del borde: pulsa con fase propia. */}
          {b.col && (
            <rect
              className="amb-column"
              x={b.col.x}
              y={b.col.y}
              width={2.5}
              height={b.col.h}
              fill={b.col.c}
              style={{ animationDelay: `${-(i * 0.53) % 4.5}s` }}
            />
          )}

          {/* Ventanas encendidas: titilan escalonadas, cada una con su opacidad
              base del flyer en --win-op. */}
          {b.win.map((w, j) => (
            <rect
              key={`${w.x}-${w.y}`}
              className="amb-window"
              x={w.x}
              y={w.y}
              width={7}
              height={13}
              fill={w.c}
              style={
                {
                  '--win-op': w.o,
                  opacity: w.o,
                  animationDelay: `${-((i * 6 + j) * 0.41) % 5}s`,
                  animationDuration: `${4 + ((i + j) % 5) * 1.3}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </g>
      ))}

      {/* Linea de horizonte. */}
      <rect x={0} y={1558} width={1240} height={3} fill="#2ae4ff" opacity={0.55} />

      {/* Piso en fuga: los 23 rayos son fijos. */}
      <g>
        {FLOOR_RAYS.map((x2) => (
          <line
            key={x2}
            x1={VANISHING.x}
            y1={VANISHING.y}
            x2={x2}
            y2={1754}
            stroke="#8b5cff"
            strokeWidth={1.6}
            opacity={0.2}
          />
        ))}
      </g>

      {/* Horizontales en movimiento: el túnel. */}
      <g>
        {FLOOR_SCANS.map((_, i) => (
          <line
            key={i}
            className="amb-tunnel"
            x1={0}
            y1={VANISHING.y}
            x2={1240}
            y2={VANISHING.y}
            stroke="#2ae4ff"
            strokeWidth={1.4}
            style={{ animationDelay: `${-(i / TUNNEL) * 9}s` }}
          />
        ))}
      </g>
    </svg>
  )
}
