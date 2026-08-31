/**
 * Preinscripción, aranceles y exenciones.
 *
 * Los montos y la fecha límite son los de la edición 2025 y estan marcados como
 * no confirmados: /inscripción muestra un aviso mientras FEES_CONFIRMED sea
 * false.
 */

/** Google Form de preinscripción 2027 (link corto: https://forms.gle/GGQrfJnMrGHtdjTM6). */
export const FORM_URL: string =
  'https://docs.google.com/forms/d/e/1FAIpQLSfA5hSRjUvyi61-PWH9eF3TQRJI0LAGZN9kxC78tMIAS3u_yw/viewform'

export const FEES_CONFIRMED = false

export const FEES = [
  {
    audience: 'Residentes en Argentina',
    amount: '$92.492',
    note: 'Valor de la edición 2025, a actualizar.',
  },
  {
    audience: 'Estudiantes del exterior',
    amount: 'USD 400',
    note: 'Valor de la edición 2025, a actualizar.',
  },
] as const

export const EXEMPTIONS = [
  'Doctorandos de Exactas (UBA)',
  'Estudiantes de grado de Exactas (UBA)',
  'Docentes con dedicación exclusiva',
  'Integrantes de CONICET',
  'Investigadores con afiliación a instituciones científicas',
  'Instituciones con convenio de reciprocidad',
] as const

export const DISCOUNTS = [
  {
    value: '50%',
    who: 'Doctorandos con la currícula completa y graduados de Exactas (UBA)',
  },
  {
    value: '20%',
    who: 'Personal de universidades y del sector público',
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
  /** TODO(contenido): confirmar la fecha límite 2027. */
  label: '15 de junio',
  body:
    'Quienes no puedan afrontar el arancel pueden solicitar una excepción por ' +
    'correo hasta esa fecha.',
} as const
