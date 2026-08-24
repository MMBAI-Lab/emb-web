import Hero from '@/components/Hero'
import { NeonButton, NeonPanel, Rise, Section, SectionHeading } from '@/components/ui'
import { ABOUT, EVENT } from '@/content/event'
import { COUNTRY_LABEL, INSTITUTIONS } from '@/content/institutions'
import { ORGANIZERS } from '@/content/people'
import { MODULES } from '@/content/programa'

export default function Home() {
  return (
    <>
      <Hero />

      {/* ---------------------------------------------------------------- */}
      <Section id="sobre">
        <SectionHeading index="01" kicker="La escuela">
          {ABOUT.heading}
        </SectionHeading>

        <div className="grid gap-12 lg:grid-cols-12">
          <Rise className="lg:col-span-7">
            <p className="text-xl leading-relaxed text-paper-100 sm:text-2xl">{ABOUT.lead}</p>
            {ABOUT.body.map((p) => (
              <p key={p.slice(0, 24)} className="mt-6 leading-relaxed text-paper-200/80">
                {p}
              </p>
            ))}
          </Rise>

          <Rise className="lg:col-span-5">
            <NeonPanel>
              <dl className="grid gap-6">
                {ABOUT.highlights.map((h) => (
                  <div key={h.label} className="flex items-baseline gap-4">
                    <dd
                      className="text-4xl font-semibold text-neon-magenta glow-magenta"
                      style={{ fontFamily: 'var(--font-cond)' }}
                    >
                      {h.value}
                    </dd>
                    <dt className="label-cond text-[0.7rem] text-paper-200/80">{h.label}</dt>
                  </div>
                ))}
              </dl>
            </NeonPanel>
          </Rise>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section id="programa">
        <SectionHeading index="02" kicker="Contenidos">
          Qué se estudia
        </SectionHeading>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m, i) => (
            <Rise as="li" key={m.title}>
              <NeonPanel className="h-full" tone={i % 2 === 0 ? 'cyan' : 'magenta'}>
                <span className="label-cond text-[0.65rem] text-paper-200/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 text-2xl text-neon-cyan">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-200/80">{m.summary}</p>
              </NeonPanel>
            </Rise>
          ))}
        </ul>

        <Rise className="mt-12">
          <NeonButton href="/programa" tone="ghost">
            Cronograma completo, día por día
          </NeonButton>
        </Rise>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section id="organizan">
        <SectionHeading index="03" kicker="Comité">
          Organizan
        </SectionHeading>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ORGANIZERS.map((p) => (
            <Rise as="li" key={p.name}>
              <div className="border-l-2 border-neon-cyan/40 pl-4 transition-colors hover:border-neon-magenta">
                <p className="text-xl text-paper-100">{p.name}</p>
                <p className="label-cond mt-1 text-[0.65rem] text-neon-cyan/70">{p.affiliation}</p>
              </div>
            </Rise>
          ))}
        </ul>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section id="participan">
        <SectionHeading index="04" kicker={`${INSTITUTIONS.length} instituciones`}>
          Participan
        </SectionHeading>

        <ul className="grid gap-px overflow-hidden border border-neon-cyan/15 bg-neon-cyan/10 sm:grid-cols-2">
          {INSTITUTIONS.map((inst) => (
            <Rise as="li" key={inst.unit} className="bg-ink-900/85">
              <div className="flex h-full flex-col justify-between gap-3 p-6 transition-colors hover:bg-ink-600/40">
                <div>
                  <p className="text-lg leading-snug text-paper-100">{inst.unit}</p>
                  {inst.org && <p className="mt-1 text-sm text-paper-200/72">{inst.org}</p>}
                </div>
                <p className="label-cond text-[0.6rem] text-neon-magenta/80">
                  {COUNTRY_LABEL[inst.country]}
                </p>
              </div>
            </Rise>
          ))}
        </ul>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section id="sede">
        <SectionHeading index="05" kicker="Dónde">
          Sede
        </SectionHeading>

        <div className="grid gap-10 lg:grid-cols-12">
          <Rise className="lg:col-span-7">
            <p className="text-2xl leading-snug text-paper-100">{EVENT.venue.name}</p>
            <p className="mt-2 text-lg text-paper-200/80">{EVENT.venue.org}</p>
            <p className="mt-1 text-paper-200/70">{EVENT.venue.city}</p>
            {!EVENT.venue.confirmed && (
              <p className="label-cond mt-6 border-l-2 border-neon-lime pl-4 text-[0.7rem] leading-relaxed text-neon-lime">
                Sede a confirmar para la edición {EVENT.edition}
              </p>
            )}
          </Rise>

          <Rise className="lg:col-span-5">
            <NeonPanel tone="magenta">
              <p className="label-cond text-[0.65rem] text-paper-200/45">Fechas</p>
              <p
                className="mt-2 text-4xl font-semibold text-neon-magenta glow-magenta"
                style={{ fontFamily: 'var(--font-cond)' }}
              >
                {EVENT.dateLabel}
              </p>
              <p className="mt-2 text-sm text-paper-200/80">{EVENT.format}</p>
            </NeonPanel>
          </Rise>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section id="contacto" className="pb-32">
        <SectionHeading index="06" kicker="Escribinos">
          Contacto
        </SectionHeading>

        <Rise>
          <p className="max-w-2xl text-xl leading-relaxed text-paper-200/85">
            Dudas sobre el curso, los cupos, los aranceles o el reconocimiento de créditos: se
            responden por correo.
          </p>
          <a
            href={`mailto:${EVENT.email}`}
            className="mt-6 inline-block text-2xl text-neon-cyan glow-cyan transition-colors hover:text-neon-magenta sm:text-4xl"
          >
            {EVENT.email}
          </a>
        </Rise>

        <Rise className="mt-12">
          <NeonButton href="/inscripcion" tone="magenta">
            Ir a la preinscripción
          </NeonButton>
        </Rise>
      </Section>
    </>
  )
}
