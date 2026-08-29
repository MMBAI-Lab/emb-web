/**
 * El grupo `atmósfera` del flyer: scanlines, cuatro sombras direccionales y
 * viñeta. En el SVG se pinta DESPUES del arte, así que va encima de las
 * moleculas y debajo del contenido.
 *
 * Es la unica capa que no se mueve: son las scanlines, las sombras y la viñeta
 * del poster, tal cual. El barrido CRT y el parpadeo de tubo de neon que habia
 * acá se sacaron a pedido; para un curso de posgrado sobraban.
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
    </div>
  )
}
