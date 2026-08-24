/**
 * El grupo `membrana` del flyer, regenerado en codigo.
 *
 * El original son 50 lipidos con un patron perfectamente regular: 25 columnas
 * (x arrancando en -10 y alternando +61 / +43) por 2 monocapas. Cada lipido son
 * 5 primitivas: halo r31.2, cabeza r13, especular r4.42 en (cx-4, cy-4) y dos
 * colas onduladas de 8 puntos con paso de 7.7.
 *
 * Regenerarlo en vez de embeberlo cuesta 40 líneas y permite animar cada
 * lipido: el retardo del cabeceo depende de x, así que la bicapa ondula como
 * una onda que viaja de izquierda a derecha. Membrana fluida.
 */

/** Las 25 columnas: -10, 51, 94, 155, ... 1238. */
const COLUMNS: number[] = (() => {
  const xs: number[] = []
  let x = -10
  for (let i = 0; i < 25; i++) {
    xs.push(x)
    x += i % 2 === 0 ? 61 : 43
  }
  return xs
})()

/** Desplazamiento horizontal de las dos colas, punto por punto. */
const TAIL_A = [-8.5, -6.4, -3.7, -1.5, -0.8, -1.8, -4.2, -6.9]
const TAIL_B = [8.5, 9.2, 8.1, 5.7, 3.0, 1.2, 0.9, 2.3]
const TAIL_STEP = 7.7

const LEAFLETS = [
  { cy: 1559, color: '#ff2fd1', dir: 1, tailStart: 1565.5, cls: 'amb-bob' },
  { cy: 1693, color: '#2ae4ff', dir: -1, tailStart: 1686.5, cls: 'amb-bob-down' },
] as const

/** Arma el `d` de una cola a partir de los desplazamientos. */
function tail(cx: number, y0: number, dir: number, dx: number[]): string {
  return dx
    .map((d, i) => `${i === 0 ? 'M' : 'L'}${(cx + d).toFixed(1)} ${(y0 + dir * TAIL_STEP * i).toFixed(1)}`)
    .join('')
}

type Lipid = {
  key: string
  cx: number
  cy: number
  color: string
  cls: string
  /** fase del cabeceo: depende de x, para que la onda viaje */
  delay: string
  tails: [string, string]
}

const LIPIDS: Lipid[] = LEAFLETS.flatMap((l) =>
  COLUMNS.map((cx) => ({
    key: `${l.cy}-${cx}`,
    cx,
    cy: l.cy,
    color: l.color,
    cls: l.cls,
    delay: `${-((cx + 10) / 1248) * 7 - (l.dir > 0 ? 0 : 1.6)}s`,
    tails: [tail(cx, l.tailStart, l.dir, TAIL_A), tail(cx, l.tailStart, l.dir, TAIL_B)] as [string, string],
  }))
)

export default function Membrane() {
  return (
    <svg
      className="h-full w-full"
      viewBox="-45 1522 1330 208"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      {/* Banda oscura de la bicapa y el filo iluminado del centro. */}
      <rect x={0} y={1568} width={1240} height={116} fill="#0a0620" opacity={0.55} />
      <g className="blur-halo">
        <rect x={0} y={1624} width={1240} height={4} fill="#ff2fd1" opacity={0.18} />
      </g>

      {/* Halos: un solo blur para los 50, en vez de los 50 feGaussianBlur del
          SVG original. Cada halo cabecea junto a su cabeza. */}
      <g className="blur-halo amb-breathe">
        {LIPIDS.map((l) => (
          <circle
            key={l.key}
            className={l.cls}
            cx={l.cx}
            cy={l.cy}
            r={31.2}
            fill={l.color}
            opacity={0.22}
            style={{ animationDelay: l.delay }}
          />
        ))}
      </g>

      {/* Cabezas, especulares y colas. */}
      {LIPIDS.map((l) => (
        <g key={l.key} className={l.cls} style={{ animationDelay: l.delay }}>
          <path
            d={l.tails[0]}
            stroke={l.color}
            strokeWidth={3.2}
            fill="none"
            opacity={0.42}
            strokeLinecap="round"
          />
          <path
            d={l.tails[1]}
            stroke={l.color}
            strokeWidth={3.2}
            fill="none"
            opacity={0.42}
            strokeLinecap="round"
          />
          <circle cx={l.cx} cy={l.cy} r={13} fill={l.color} opacity={0.9} />
          <circle cx={l.cx - 4} cy={l.cy - 4} r={4.42} fill="#fff" opacity={0.7} />
        </g>
      ))}
    </svg>
  )
}
