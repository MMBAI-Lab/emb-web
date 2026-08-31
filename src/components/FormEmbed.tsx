import { NeonButton, NeonPanel } from '@/components/ui'
import { EVENT } from '@/content/event'
import { FORM_URL } from '@/content/inscripcion'

/**
 * Acceso al formulario de preinscripcion.
 *
 * Es un boton que abre el Google Form en una pestana nueva, no un iframe: el
 * interior del iframe no se puede tematizar (queda con el estilo de Google
 * dentro del sitio), en pantallas chicas se navega mal, y obliga a cargar el
 * formulario aunque el visitante solo venga a leer los aranceles.
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

  return (
    <NeonPanel className="max-w-3xl">
      <p className="label-cond text-[0.65rem] text-neon-cyan">Preinscripción abierta</p>
      <h3 className="mt-3 text-3xl text-paper-100">Completá el formulario</h3>
      <p className="mt-4 leading-relaxed text-paper-200/80">
        Se abre en una pestaña nueva. Lleva unos minutos y no implica pago: el comité confirma el
        cupo por correo.
      </p>
      <div className="mt-8">
        <NeonButton href={FORM_URL} tone="cyan" external>
          Ir al formulario
        </NeonButton>
      </div>
    </NeonPanel>
  )
}
