/**
 * Preinscripción, aranceles y exenciones de la edición 2027.
 *
 * El arancel, las exenciones y los descuentos son los que fija la FCEyN por
 * resolución (Res. CD 091/24 el arancel, Res. CD 1775/25 las exenciones), asi
 * que el texto sigue de cerca la letra de la norma en vez de parafrasearla.
 */

/** Google Form de preinscripción 2027 (link corto: https://forms.gle/GGQrfJnMrGHtdjTM6). */
export const FORM_URL: string =
  'https://docs.google.com/forms/d/e/1FAIpQLSfA5hSRjUvyi61-PWH9eF3TQRJI0LAGZN9kxC78tMIAS3u_yw/viewform'

export const FEES_CONFIRMED = true

export const FEES = [
  {
    audience: 'Valor del curso',
    amount: '$438.000',
    note:
      'El arancel lo fija la FCEyN y se actualiza según la hora del cargo testigo ' +
      '(Res. CD 091/24).',
  },
] as const

/** La resolucion que fija exenciones y descuentos, citada en la pagina. */
export const EXEMPTIONS_SOURCE = 'Res. CD 1775/25'

export const EXEMPTIONS = [
  'Estudiantes de grado y de doctorado de la FCEyN-UBA',
  'Docentes, investigadores, becarios y personal de apoyo que realicen sus tareas ' +
    'en la FCEyN-UBA',
  'Alumnos de doctorado de otras facultades de la UBA o de otras universidades ' +
    'nacionales con las cuales haya reciprocidad en la exención de aranceles para ' +
    'cursos de posgrado',
] as const

export const DISCOUNTS = [
  {
    value: '50%',
    who:
      'Alumnos regulares de carreras de doctorado de otras facultades de la UBA con ' +
      'las cuales no haya reciprocidad en la exención de aranceles para cursos de ' +
      'posgrado.',
  },
  {
    value: '20%',
    who:
      'Estudiantes regulares de carreras de doctorado de otras universidades ' +
      'nacionales con las cuales no haya reciprocidad en la exención de aranceles ' +
      'para cursos de posgrado.',
  },
] as const

export const CREDITS = {
  heading: 'Créditos',
  body:
    'El curso otorga 3 créditos para la Licenciatura en Ciencias Químicas (materia ' +
    'optativa) y para el doctorado. Quienes cursen en otra carrera deben verificar ' +
    'el reconocimiento con su departamento.',
} as const

export const PRIORITY = {
  heading: 'Cupos y prioridad',
  body:
    'Para cursar el curso completo (teóricas y prácticas) tienen prioridad los ' +
    'estudiantes de grado de Exactas-UBA y los doctorandos de cualquier ' +
    'universidad.',
} as const

export const EXCEPTION_DEADLINE = {
  label: '31/10/2026',
  body:
    'Los estudiantes regulares de doctorado que provengan de grupos de investigación ' +
    'con colaboraciones demostrables con la FCEyN pueden solicitar la exención del ' +
    'arancel. Se pide por correo, hasta esa fecha, con una nota que explique la ' +
    'relevancia del curso en su doctorado y los detalles de la colaboración vigente.',
} as const
