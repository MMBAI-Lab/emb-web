import Countdown from '@/components/Countdown'
import { GlitchText, NeonButton } from '@/components/ui'
import { EVENT, HEADER_ORGS } from '@/content/event'

/**
 * El flyer 2027 puesto en movimiento.
 *
 * Se respeta la composicion del poster: la franja de instituciones arriba, el
 * bloque de título a la derecha y la mitad izquierda libre para que se vea la
 * proteina del backdrop. En pantallas chicas el texto pasa a ocupar todo el
 * ancho, porque ahi la proteina queda detras y no compite.
 *
 * La entrada escalonada va por CSS (clase `reveal` con --step). No usa
 * framer-motion a propósito: el título del evento no puede depender de que
 * hidrate el JS.
 */

/** Orden de aparición de cada bloque del hero. */
const step = (n: number) => ({ '--step': n }) as React.CSSProperties

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-14">
      {/* Franja de instituciones, como el encabezado del poster. */}
      <div className="mx-auto w-full max-w-7xl">
        {HEADER_ORGS.map((line, i) => (
          <p
            key={i}
            className="reveal label-cond text-[0.6rem] leading-relaxed text-paper-200/80 glow-soft sm:text-[0.7rem]"
            style={step(i)}
          >
            {line.filter(Boolean).join('  ·  ')}
          </p>
        ))}
      </div>

      {/* Bloque de título. */}
      <div className="mx-auto my-auto grid w-full max-w-7xl gap-10 py-8 lg:grid-cols-12">
        {/* columna vacia: acá se ve la proteina del backdrop */}
        <div className="hidden lg:col-span-4 lg:block" aria-hidden="true" />

        <div className="lg:col-span-8">
          <div className="reveal flex flex-wrap items-end gap-x-6 gap-y-1" style={step(2)}>
            <span className="label-cond text-sm text-paper-100 glow-soft sm:text-base">
              {EVENT.kicker}
            </span>
            <span
              className="text-5xl font-medium leading-none text-neon-cyan glow-cyan sm:text-6xl lg:text-7xl"
              style={{ fontFamily: 'var(--font-cond)' }}
            >
              {EVENT.edition}
            </span>
          </div>

          <h1 className="mt-4 text-[clamp(2.4rem,7.4vw,5.6rem)] font-light leading-[0.92] text-neon-cyan glow-cyan">
            {EVENT.titleLines.map((line, i) => (
              <span key={line} className="reveal block" style={step(3 + i)}>
                {i === 2 ? <GlitchText text={line} /> : line}
              </span>
            ))}
          </h1>

          <p
            className="reveal mt-6 text-lg font-medium text-paper-100 glow-soft sm:text-2xl"
            style={{ ...step(6), fontFamily: 'var(--font-cond)' }}
          >
            {EVENT.format}
          </p>

          <p
            className="reveal mt-1 text-[clamp(2rem,5.8vw,4.2rem)] font-semibold leading-none text-paper-100 glow-soft"
            style={{ ...step(7), fontFamily: 'var(--font-cond)' }}
          >
            {EVENT.dateLabel}
          </p>

          {/* El countdown va antes de los botones: mas abajo caeria sobre la
              membrana del fondo y los numeros dejarian de leerse. */}
          <div className="reveal mt-7" style={step(8)}>
            <Countdown />
          </div>

          <div className="reveal mt-7 flex flex-wrap items-center gap-4" style={step(9)}>
            <NeonButton href="/inscripcion" tone="cyan">
              Preinscribirme
            </NeonButton>
            <NeonButton href="/programa" tone="ghost">
              Ver cronograma
            </NeonButton>
          </div>
        </div>
      </div>
    </section>
  )
}
