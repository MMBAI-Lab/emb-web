import { SEQUENCES } from '@/lib/flyer-data'

/**
 * El grupo `secuencia` del flyer: 11 columnas verticales de secuencia de ARN,
 * con paso de 116 px y opacidad 0.1. Cada columna se repite tres veces y
 * deriva a distinta velocidad, así que la caida nunca muestra una costura.
 *
 * Se oculta en pantallas chicas (mobile-hide): es la capa que menos aporta y
 * la que mas texto obliga a rasterizar.
 */
export default function SequenceRain() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 1240 1754"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {SEQUENCES.map(({ seq, x, c }, i) => (
        <g
          key={x}
          className="amb-rain"
          style={{
            // fases y velocidades distintas por columna
            animationDelay: `${-i * 3.4}s`,
            animationDuration: `${38 + (i % 4) * 7}s`,
          }}
        >
          {/* tres copias apiladas: la columna sigue llena mientras se desplaza */}
          {[-1754, 0, 1754].map((dy) => (
            <text
              key={dy}
              transform={`translate(${x} ${120 + dy}) rotate(90)`}
              fill={c}
              opacity={0.075}
              fontSize={15}
              letterSpacing={9}
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {seq}
            </text>
          ))}
        </g>
      ))}
    </svg>
  )
}
