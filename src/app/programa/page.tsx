import type { Metadata } from 'next'
import { NeonButton, Notice, Rise, Section, SectionHeading } from '@/components/ui'
import { EVENT } from '@/content/event'
import { CONFIRMED, MODULES, WEEKS } from '@/content/programa'

export const metadata: Metadata = {
  title: 'Cronograma',
  description: `Cronograma día por día de la Escuela de Modelado de Biomoléculas ${EVENT.edition}, del ${EVENT.dateLabel}.`,
}

export default function Programa() {
  return (
    <>
      <Section className="pt-28 sm:pt-36">
        <SectionHeading kicker={`${EVENT.format} · ${EVENT.dateLabel}`}>Cronograma</SectionHeading>

        {!CONFIRMED && (
          <Notice>
            Cronograma provisional. La grilla definitiva de la edición {EVENT.edition} se publica
            junto con la apertura de la inscripción.
          </Notice>
        )}

        <Rise>
          <p className="max-w-3xl text-lg leading-relaxed text-paper-200/85">
            Dos semanas intensivas: teóricas por la mañana y prácticas en computadora por la tarde.
            Cada dia cierra un tema, de modo que las prácticas se apoyen siempre en la teorica de
            esa misma jornada.
          </p>
        </Rise>

        {/* Semanas. */}
        <div className="mt-16 space-y-20">
          {WEEKS.map((week) => (
            <Rise key={week.label}>
              <div className="mb-8 flex flex-wrap items-baseline gap-x-6 gap-y-1">
                <h3
                  className="text-3xl font-semibold text-neon-magenta glow-magenta sm:text-4xl"
                  style={{ fontFamily: 'var(--font-cond)' }}
                >
                  {week.label}
                </h3>
                <span className="label-cond text-[0.7rem] text-paper-200/50">{week.range}</span>
              </div>

              <ul className="divide-y divide-neon-cyan/12 border-y border-neon-cyan/20">
                {week.days.map((day) => (
                  <li
                    key={day.date}
                    className="grid gap-4 py-6 transition-colors hover:bg-ink-600/20 sm:grid-cols-12 sm:gap-6"
                  >
                    <div className="sm:col-span-2">
                      <p
                        className="text-2xl font-semibold text-neon-cyan glow-cyan"
                        style={{ fontFamily: 'var(--font-cond)' }}
                      >
                        {day.date}
                      </p>
                      <p className="label-cond text-[0.6rem] text-paper-200/45">{day.weekday}</p>
                    </div>

                    <div className="space-y-4 sm:col-span-10">
                      {day.blocks.map((b) => (
                        <div key={b.title} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                          <div className="flex shrink-0 items-center gap-3 sm:w-52">
                            <span
                              className={`h-2 w-2 shrink-0 ${
                                b.kind === 'teorica' ? 'bg-neon-cyan' : 'bg-neon-lime'
                              }`}
                              aria-hidden="true"
                            />
                            <span className="label-cond text-[0.6rem] text-paper-200/70">
                              {b.time} · {b.kind}
                            </span>
                          </div>
                          <p className="leading-snug text-paper-100">{b.title}</p>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </Rise>
          ))}
        </div>

        {/* Referencia de colores. */}
        <Rise className="mt-10 flex flex-wrap gap-6">
          <span className="label-cond flex items-center gap-2 text-[0.6rem] text-paper-200/70">
            <span className="h-2 w-2 bg-neon-cyan" aria-hidden="true" /> Teórica
          </span>
          <span className="label-cond flex items-center gap-2 text-[0.6rem] text-paper-200/70">
            <span className="h-2 w-2 bg-neon-lime" aria-hidden="true" /> Práctica
          </span>
        </Rise>
      </Section>

      {/* Módulos tematicos. */}
      <Section className="pb-32 pt-0">
        <SectionHeading kicker="Transversal">Módulos</SectionHeading>

        <ul className="grid gap-5 sm:grid-cols-2">
          {MODULES.map((m, i) => (
            <Rise as="li" key={m.title}>
              <div className="h-full border-l-2 border-neon-violet/50 pl-5">
                <span className="label-cond text-[0.6rem] text-paper-200/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-1 text-2xl text-paper-100">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-200/78">{m.summary}</p>
              </div>
            </Rise>
          ))}
        </ul>

        <Rise className="mt-14">
          <NeonButton href="/inscripcion" tone="cyan">
            Preinscribirme
          </NeonButton>
        </Rise>
      </Section>
    </>
  )
}
