import { FACULTY } from './programa'

/** Datos centrales del evento. Todo el texto del sitio sale de src/content. */

export const EVENT = {
  edition: '2027',
  kicker: 'Edición presencial',
  title: 'Escuela de Modelado de Biomoléculas',
  /** Como se parte el título en el hero, igual que el flyer. */
  titleLines: ['Escuela de', 'Modelado de', 'Biomoléculas'],
  format: 'Teórico - Práctico (intensivo)',
  dateLabel: '22/02 al 05/03',
  /** Arranque del curso, en hora local de Buenos Aires (UTC-3). Alimenta el countdown. */
  startsAt: '2027-02-22T09:00:00-03:00',
  endsAt: '2027-03-05T18:00:00-03:00',
  email: 'embexactas@gmail.com',
  venue: {
    name: 'Facultad de Ciencias Exactas y Naturales',
    org: 'Universidad de Buenos Aires',
    city: 'Ciudad Universitaria, Buenos Aires, Argentina',
    /**
     * Foto de la sede, dentro de /public. Vacio = no se muestra la foto y
     * el texto ocupa todo el ancho.
     * TODO(contenido): confirmar el permiso de uso con CPAU.
     */
    photo: 'sede.jpg',
    photoAlt:
      'Pabellón II de la Facultad de Ciencias Exactas y Naturales, en Ciudad ' +
      'Universitaria, al atardecer',
    photoCredit: 'Foto: Moderna Buenos Aires / CPAU',
  },
} as const

/** La franja de instituciones del encabezado del flyer, en dos líneas. */
export const HEADER_ORGS = [
  ['Universidad de Buenos Aires', 'Universidad de la República'],
  ['Instituto Pasteur de Montevideo', 'Centro de Biología Estructural del Mercosur'],
] as const

export const ABOUT = {
  heading: 'Sobre la escuela',
  lead:
    'Un curso intensivo, teórico y práctico, sobre el modelado computacional de ' +
    'biomoléculas: de la estructura electrónica y los campos de fuerza a la ' +
    'dinámica molecular, los métodos QM/MM, el aprendizaje automático aplicado a ' +
    'la química y el diseño de fármacos.',
  body: [
    'La Escuela de Modelado de Biomoléculas reúne a docentes de siete ' +
      'instituciones de América y Europa para recorrer, en dos semanas, las ' +
      'herramientas con las que hoy se estudian los sistemas biológicos in ' +
      'silico.',
    'Cada jornada cierra un tema: la clase teórica de la mañana se continúa en ' +
      'un trabajo práctico en computadora sobre ese mismo contenido, de modo que ' +
      'cada participante termine el curso pudiendo plantear y correr sus propias ' +
      'simulaciones.',
  ],
  highlights: [
    { value: '2', label: 'semanas intensivas' },
    { value: String(FACULTY.length), label: 'docentes confirmados' },
    { value: '7', label: 'instituciones participantes' },
    { value: '3', label: 'créditos de posgrado' },
  ],
} as const

/** Cada sección anclada de la home, en orden. Alimenta el nav y el scroll spy. */
export const SECTIONS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'programa', label: 'Programa' },
  { id: 'organizan', label: 'Organizan' },
  { id: 'participan', label: 'Participan' },
  { id: 'sede', label: 'Sede' },
  { id: 'contacto', label: 'Contacto' },
] as const
