/**
 * El grupo `atmósfera` del flyer: scanlines, cuatro sombras direccionales y
 * viñeta. En el SVG se pinta DESPUES del arte, así que va encima de las
 * moleculas y debajo del contenido.
 *
 * Se le suman los dos gestos CRT que el poster impreso no puede tener: una
 * linea de escaneo que barre la pantalla y un parpadeo global de tubo de neon.
 */
export default function Atmosphere() {
  return (
    <div className="absolute inset-0">
      {/* Scanlines: el patron `scan` del SVG (5 px de paso, 1 px al 5% de blanco). */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, rgb(255 255 255 / 0.05) 0 1px, transparent 1px 5px)',
        }}
      />

      {/* Las cuatro sombras direccionales, que empujan la mirada al centro. */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            'linear-gradient(to bottom, rgb(3 2 10 / 0.94) 0%, transparent 11%)',
            'linear-gradient(to left, rgb(5 3 16 / 0.8) 0%, transparent 45%)',
            'linear-gradient(to right, rgb(5 3 16 / 0.72) 0%, transparent 50%)',
            'linear-gradient(to top left, rgb(4 2 12 / 0.82) 0%, transparent 30%)',
          ].join(','),
        }}
      />

      {/* Viñeta. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(125% 105% at 52% 45%, transparent 55%, rgb(0 0 0 / 0.72) 100%)',
        }}
      />

      {/* Linea de escaneo CRT. */}
      <div className="amb-sweep absolute inset-x-0 top-0 h-[22vh]">
        <div
          className="h-full w-full"
          style={{
            background:
              'linear-gradient(to bottom, transparent, rgb(42 228 255 / 0.05) 60%, rgb(42 228 255 / 0.13) 92%, rgb(255 255 255 / 0.16))',
          }}
        />
      </div>

      {/* Parpadeo global. */}
      <div className="amb-flicker absolute inset-0 bg-ink-900/[0.06]" />
    </div>
  )
}
