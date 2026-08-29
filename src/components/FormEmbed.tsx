import { NeonButton, NeonPanel } from '@/components/ui'
import { EVENT } from '@/content/event'
import { FORM_URL } from '@/content/inscripcion'

/**
 * Formulario de preinscripción embebido.
 *
 * El iframe de Google Forms no se puede tematizar por dentro: el interior queda
 * con el estilo de Google. Lo que si controlamos es el marco, y siempre se
 * ofrece el link para abrirlo en una pestaña nueva, que en pantallas chicas
 * funciona mucho mejor que el iframe.
 *
 * Mientras FORM_URL este vacio se muestra el estado de "todavia no abrio", con
 * las vias de contacto.
 */
export default function FormEmbed() {
  if (!FORM_URL) {
    return (
      <NeonPanel className="max-w-3xl">
        <p className="label-cond text-[0.65rem] text-neon-lime">Preinscripción no abierta</p>
        <h3 className="mt-3 text-3xl text-paper-100">El formulario todavía no está publicado</h3>
        <p className="mt-4 leading-relaxed text-paper-200/80">
          La preinscripción de la edición {EVENT.edition} abre unos meses antes del curso. Para
          recibir el aviso o hacer una consulta, escribinos por correo.
        </p>
        <div className="mt-8">
          <NeonButton href={`mailto:${EVENT.email}`} tone="cyan" external>
            {EVENT.email}
          </NeonButton>
        </div>
      </NeonPanel>
    )
  }

  const embedded = FORM_URL.includes('?') ? `${FORM_URL}&embedded=true` : `${FORM_URL}?embedded=true`

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <p className="label-cond text-[0.65rem] text-neon-cyan">Formulario de preinscripción</p>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="label-cond text-[0.65rem] text-paper-200/72 underline decoration-neon-cyan/40 underline-offset-4 transition-colors hover:text-neon-cyan"
        >
          Abrir en una pestaña nueva &#8599;
        </a>
      </div>

      {/* Marco de neon con marcas en las esquinas: el interior es de Google. */}
      <div className="relative border border-neon-cyan/30 bg-ink-900/60 p-1 sm:p-2">
        <span
          className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-neon-magenta"
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-neon-magenta"
          aria-hidden="true"
        />
        <iframe
          src={embedded}
          title="Formulario de preinscripción"
          loading="lazy"
          className="h-[1100px] w-full bg-white sm:h-[1250px]"
        >
          Cargando el formulario...
        </iframe>
      </div>
    </div>
  )
}
