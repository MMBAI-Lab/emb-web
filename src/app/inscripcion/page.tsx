import type { Metadata } from 'next'
import FormEmbed from '@/components/FormEmbed'
import { NeonPanel, Notice, Rise, Section, SectionHeading } from '@/components/ui'
import { EVENT } from '@/content/event'
import {
  CREDITS,
  DISCOUNTS,
  EXCEPTION_DEADLINE,
  EXEMPTIONS,
  EXEMPTIONS_SOURCE,
  FEES,
  FEES_CONFIRMED,
  PRIORITY,
} from '@/content/inscripcion'

export const metadata: Metadata = {
  title: 'Inscripción',
  description: `Preinscripción, aranceles, exenciones y créditos de la Escuela de Modelado de Biomoléculas ${EVENT.edition}.`,
}

export default function Inscripcion() {
  return (
    <>
      <Section className="pt-28 sm:pt-36">
        <SectionHeading kicker={`Edición ${EVENT.edition} · ${EVENT.dateLabel}`}>
          Inscripción
        </SectionHeading>

        <Rise>
          <p className="max-w-3xl text-lg leading-relaxed text-paper-200/85">
            La preinscripción es el primer paso y no implica pago. Con el formulario enviado, el
            comité confirma el cupo y comunica por correo cómo completar la inscripción.
          </p>
        </Rise>

        <Rise className="mt-12">
          <FormEmbed />
        </Rise>
      </Section>

      {/* Aranceles. */}
      <Section className="pt-0">
        <SectionHeading kicker="Costos">Aranceles</SectionHeading>

        {!FEES_CONFIRMED && (
          <Notice>
            Los montos que figuran son los de la edición 2025 y se actualizan antes de abrir la
            inscripción {EVENT.edition}. Tomalos como referencia.
          </Notice>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          {FEES.map((f) => (
            <Rise key={f.audience}>
              <NeonPanel className="h-full">
                <p className="label-cond text-[0.65rem] text-paper-200/50">{f.audience}</p>
                <p
                  className="mt-3 text-4xl font-semibold text-neon-cyan glow-cyan sm:text-5xl"
                  style={{ fontFamily: 'var(--font-cond)' }}
                >
                  {f.amount}
                </p>
                <p className="mt-3 text-sm text-paper-200/70">{f.note}</p>
              </NeonPanel>
            </Rise>
          ))}
        </div>

        {/* Exenciones y descuentos. */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <Rise>
            <h3 className="text-3xl text-neon-magenta glow-magenta">Exenciones</h3>
            <p className="mt-3 text-sm text-paper-200/72">
              Quedan exentos del arancel ({EXEMPTIONS_SOURCE}):
            </p>
            <ul className="mt-5 space-y-3">
              {EXEMPTIONS.map((e) => (
                <li key={e} className="flex gap-3 text-paper-100">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-neon-lime" aria-hidden="true" />
                  <span className="leading-snug">{e}</span>
                </li>
              ))}
            </ul>
          </Rise>

          <Rise>
            <h3 className="text-3xl text-neon-magenta glow-magenta">Descuentos</h3>
            <ul className="mt-8 space-y-6">
              {DISCOUNTS.map((d) => (
                <li key={d.value} className="flex items-baseline gap-5">
                  <span
                    className="text-4xl font-semibold text-neon-lime glow-lime"
                    style={{ fontFamily: 'var(--font-cond)' }}
                  >
                    {d.value}
                  </span>
                  <span className="leading-snug text-paper-200/85">{d.who}</span>
                </li>
              ))}
            </ul>
          </Rise>
        </div>
      </Section>

      {/* Cupos, créditos, excepciones. */}
      <Section className="pb-32 pt-0">
        <SectionHeading kicker="Letra chica">Antes de inscribirte</SectionHeading>

        <div className="grid gap-5 lg:grid-cols-3">
          {[PRIORITY, CREDITS].map((block) => (
            <Rise key={block.heading}>
              <NeonPanel className="h-full" tone="magenta">
                <h3 className="text-2xl text-paper-100">{block.heading}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-200/80">{block.body}</p>
              </NeonPanel>
            </Rise>
          ))}

          <Rise>
            <NeonPanel className="h-full" tone="magenta">
              <h3 className="text-2xl text-paper-100">Excepciones</h3>
              <p
                className="mt-3 text-2xl font-semibold text-neon-lime glow-lime"
                style={{ fontFamily: 'var(--font-cond)' }}
              >
                {EXCEPTION_DEADLINE.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-paper-200/80">
                {EXCEPTION_DEADLINE.body}
              </p>
              <a
                href={`mailto:${EVENT.email}`}
                className="mt-4 inline-block text-sm text-neon-cyan transition-colors hover:text-neon-magenta"
              >
                {EVENT.email}
              </a>
            </NeonPanel>
          </Rise>
        </div>
      </Section>
    </>
  )
}
