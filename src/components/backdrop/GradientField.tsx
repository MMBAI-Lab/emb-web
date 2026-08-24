/**
 * Los tres rects del grupo `fondo` del flyer, reimplementados en CSS.
 *   gBase: radial #1d0c40 -> #0b0620 (46%) -> #05030e, centro en (22%, 6%)
 *   gTop:  radial magenta 0.20 -> 0 (70%), centro en (78%, 0)
 *   gBot:  lineal cyan 0.16 -> 0 desde el borde inferior
 * Mas dos manchas que derivan lento para que el fondo nunca quede quieto.
 */
export default function GradientField() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background: [
            'radial-gradient(120% 88% at 78% 0%, rgb(255 47 209 / 0.20), transparent 70%)',
            'linear-gradient(to top, rgb(42 228 255 / 0.16), transparent 40%)',
            'radial-gradient(150% 125% at 22% 6%, #1d0c40 0%, #0b0620 46%, #05030e 100%)',
          ].join(','),
        }}
      />

      {/* Manchas de color que derivan: dan vida al fondo sin dibujar nada. */}
      <div
        className="amb-drift-a blur-glow absolute -left-[15%] top-[-10%] h-[55vh] w-[55vw] rounded-full"
        style={{ background: 'radial-gradient(circle, rgb(139 92 255 / 0.28), transparent 65%)' }}
      />
      <div
        className="amb-drift-b blur-glow absolute -right-[10%] top-[18%] h-[45vh] w-[45vw] rounded-full"
        style={{ background: 'radial-gradient(circle, rgb(255 47 209 / 0.22), transparent 65%)' }}
      />
    </div>
  )
}
