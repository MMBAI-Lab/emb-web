import Link from 'next/link'
import { EVENT, HEADER_ORGS } from '@/content/event'

export default function Footer() {
  return (
    <footer className="relative border-t border-neon-cyan/15 bg-ink-900/70 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="label-cond text-sm">
              <span className="text-neon-cyan glow-cyan">EMB</span>{' '}
              <span className="text-neon-magenta">{EVENT.edition}</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper-200/72">
              {EVENT.title}. {EVENT.format}, {EVENT.dateLabel}.
            </p>
          </div>

          <div>
            <p className="label-cond mb-3 text-[0.65rem] text-paper-200/45">Organizan</p>
            {HEADER_ORGS.flat()
              .filter(Boolean)
              .map((org) => (
                <p key={org} className="text-sm leading-relaxed text-paper-200/80">
                  {org}
                </p>
              ))}
          </div>

          <div>
            <p className="label-cond mb-3 text-[0.65rem] text-paper-200/45">Contacto</p>
            <a
              href={`mailto:${EVENT.email}`}
              className="text-sm text-neon-cyan transition-colors hover:text-neon-magenta"
            >
              {EVENT.email}
            </a>
            <div className="mt-4 flex flex-col gap-1">
              <Link href="/programa" className="label-cond text-[0.65rem] text-paper-200/72 hover:text-paper-100">
                Cronograma
              </Link>
              <Link
                href="/inscripcion"
                className="label-cond text-[0.65rem] text-paper-200/72 hover:text-paper-100"
              >
                Inscripción
              </Link>
            </div>
          </div>
        </div>

        <hr className="rule-neon mt-10 border-0 opacity-40" />
        <p className="label-cond mt-5 text-[0.6rem] text-paper-200/35">
          Escuela de Modelado de Biomoléculas · Edición {EVENT.edition}
        </p>
        <p className="label-cond mt-1.5 text-[0.6rem] text-paper-200/35">
          Sitio diseñado por{' '}
          <a
            href="https://www.danslab.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper-200/55 underline decoration-neon-cyan/30 underline-offset-4 transition-colors hover:text-neon-cyan"
          >
            DansLab
          </a>
        </p>
      </div>
    </footer>
  )
}
