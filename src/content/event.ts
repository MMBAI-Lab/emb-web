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
  /** TODO(contenido): confirmar sede definitiva de la edición 2027. */
  venue: {
    name: 'Facultad de Ciencias Exactas y Naturales',
    org: 'Universidad de Buenos Aires',
    city: 'Ciudad Universitaria, Buenos Aires, Argentina',
    confirmed: false,
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
    'biomoléculas: desde los fundamentos de mecánica molecular y dinámica ' +
    'molecular hasta métodos híbridos QM/MM y el modelado de ácidos nucleicos, ' +
    'proteínas y membranas.',
  body: [
    'La Escuela de Modelado de Biomoléculas reúne a docentes de siete ' +
      'instituciones de América y Europa para dictar, en dos semanas, un ' +
      'recorrido completo por las herramientas con las que hoy se estudian los ' +
      'sistemas biológicos in silico.',
    'Las clases teóricas se combinan con prácticas en computadora sobre casos ' +
      'reales, de modo que cada participante termine el curso pudiendo plantear y ' +
      'correr sus propias simulaciones.',
  ],
  highlights: [
    { value: '2', label: 'semanas intensivas' },
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
