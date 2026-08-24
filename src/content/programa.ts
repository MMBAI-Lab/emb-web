/**
 * Cronograma del curso.
 *
 * TODO(contenido): el programa 2027 no esta publicado todavia. Lo que sigue es
 * la estructura de dos semanas de las ediciones anteriores, marcada como
 * provisional: `CONFIRMED = false` hace que /programa muestre un aviso.
 * Para cerrarlo: completar `topics` y `teacher` de cada bloque y poner
 * CONFIRMED = true.
 */

export const CONFIRMED = false

export type Block = {
  /** 'teorica' | 'practica' cambia el color del bloque. */
  kind: 'teorica' | 'practica'
  time: string
  title: string
  teacher?: string
}

export type Day = {
  date: string
  weekday: string
  blocks: Block[]
}

export type Week = {
  label: string
  range: string
  days: Day[]
}

export const MODULES = [
  {
    title: 'Fundamentos',
    summary:
      'Superficies de energía potencial, campos de fuerza clásicos, minimización ' +
      'y el planteo de un sistema biomolecular.',
  },
  {
    title: 'Dinámica molecular',
    summary:
      'Integración de las ecuaciones de movimiento, ensambles, control de ' +
      'temperatura y presión, solvente explícito, análisis de trayectorias.',
  },
  {
    title: 'Energía libre',
    summary:
      'Muestreo mejorado, umbrella sampling, metadinámica y calculo de energías ' +
      'libres de union.',
  },
  {
    title: 'Estructura electrónica y QM/MM',
    summary:
      'DFT aplicada a biomoléculas, métodos híbridos cuantico-clásicos y ' +
      'reactividad en sitios activos.',
  },
  {
    title: 'Ácidos nucleicos',
    summary:
      'Modelado de ADN y ARN, parámetros helicoidales, flexibilidad de secuencia ' +
      'y complejos con proteínas.',
  },
  {
    title: 'Membranas y sistemas grandes',
    summary:
      'Bicapas lipídicas, proteínas de membrana, modelos de grano gruesado y ' +
      'estrategias multiescala.',
  },
] as const

export const WEEKS: Week[] = [
  {
    label: 'Semana 1',
    range: '22/02 al 26/02',
    days: [
      {
        date: '22/02',
        weekday: 'Lunes',
        blocks: [
          { kind: 'teorica', time: '09:00 - 12:00', title: 'Apertura y fundamentos del modelado molecular' },
          { kind: 'practica', time: '14:00 - 18:00', title: 'Entorno de trabajo, visualización y preparación de sistemas' },
        ],
      },
      {
        date: '23/02',
        weekday: 'Martes',
        blocks: [
          { kind: 'teorica', time: '09:00 - 12:00', title: 'Campos de fuerza y mecánica molecular' },
          { kind: 'practica', time: '14:00 - 18:00', title: 'Minimización y equilibrado' },
        ],
      },
      {
        date: '24/02',
        weekday: 'Miércoles',
        blocks: [
          { kind: 'teorica', time: '09:00 - 12:00', title: 'Dinámica molecular clasica' },
          { kind: 'practica', time: '14:00 - 18:00', title: 'Primera simulación en solvente explícito' },
        ],
      },
      {
        date: '25/02',
        weekday: 'Jueves',
        blocks: [
          { kind: 'teorica', time: '09:00 - 12:00', title: 'Análisis de trayectorias' },
          { kind: 'practica', time: '14:00 - 18:00', title: 'Metricas estructurales y series temporales' },
        ],
      },
      {
        date: '26/02',
        weekday: 'Viernes',
        blocks: [
          { kind: 'teorica', time: '09:00 - 12:00', title: 'Muestreo mejorado y energía libre' },
          { kind: 'practica', time: '14:00 - 18:00', title: 'Umbrella sampling y metadinámica' },
        ],
      },
    ],
  },
  {
    label: 'Semana 2',
    range: '01/03 al 05/03',
    days: [
      {
        date: '01/03',
        weekday: 'Lunes',
        blocks: [
          { kind: 'teorica', time: '09:00 - 12:00', title: 'Estructura electrónica aplicada a biomoléculas' },
          { kind: 'practica', time: '14:00 - 18:00', title: 'Calculos DFT sobre modelos reducidos' },
        ],
      },
      {
        date: '02/03',
        weekday: 'Martes',
        blocks: [
          { kind: 'teorica', time: '09:00 - 12:00', title: 'Métodos híbridos QM/MM' },
          { kind: 'practica', time: '14:00 - 18:00', title: 'Reactividad en un sitio activo' },
        ],
      },
      {
        date: '03/03',
        weekday: 'Miércoles',
        blocks: [
          { kind: 'teorica', time: '09:00 - 12:00', title: 'Modelado de ácidos nucleicos' },
          { kind: 'practica', time: '14:00 - 18:00', title: 'ADN y ARN: parámetros helicoidales y flexibilidad' },
        ],
      },
      {
        date: '04/03',
        weekday: 'Jueves',
        blocks: [
          { kind: 'teorica', time: '09:00 - 12:00', title: 'Membranas, proteínas de membrana y grano gruesado' },
          { kind: 'practica', time: '14:00 - 18:00', title: 'Armado y simulación de una bicapa lipídica' },
        ],
      },
      {
        date: '05/03',
        weekday: 'Viernes',
        blocks: [
          { kind: 'practica', time: '09:00 - 13:00', title: 'Proyecto integrador' },
          { kind: 'teorica', time: '14:00 - 17:00', title: 'Presentaciones y cierre' },
        ],
      },
    ],
  },
]
