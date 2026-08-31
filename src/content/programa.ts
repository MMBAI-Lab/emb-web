import type { TopicIconName } from '@/components/TopicIcon'
import type { CountryCode } from '@/content/institutions'

/**
 * Cronograma de la edición 2027, según el programa confirmado por el comité.
 *
 * El programa de origen no fija horarios, solo el orden teórica / TP dentro de
 * cada día, así que acá tampoco se inventan: cada día lista sus bloques en ese
 * orden.
 */

export const CONFIRMED = true

export type Block = {
  /** 'teorica' | 'practica' cambia el color del bloque. */
  kind: 'teorica' | 'practica'
  title: string
  /** Docentes confirmados. Vacío cuando el programa todavía no los asigna. */
  teachers?: string[]
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

/** Los ejes temáticos que atraviesan las dos semanas. Alimentan la home. */
export const MODULES: readonly { title: string; summary: string; icon: TopicIconName }[] = [
  {
    title: 'Estructura electrónica',
    icon: 'electronica',
    summary:
      'Hartree-Fock, teoría del funcional de la densidad, métodos semiempíricos ' +
      'y post Hartree-Fock. Cálculo de propiedades moleculares y optimización de ' +
      'geometría.',
  },
  {
    title: 'Campos de fuerza',
    icon: 'campos',
    summary:
      'Campos de fuerza clásicos y generación de parámetros para sistemas que ' +
      'todavía no están parametrizados.',
  },
  {
    title: 'Dinámica molecular',
    icon: 'dinamica',
    summary:
      'Fundamentos y termodinámica estadística. Preparación del sistema, ' +
      'termalización, equilibración, producción y análisis de trayectorias.',
  },
  {
    title: 'QM/MM y HPC',
    icon: 'qmmm',
    summary:
      'Métodos multiescala cuántico-clásicos aplicados a sitios activos, y ' +
      'arquitecturas de cómputo de alta performance.',
  },
  {
    title: 'Membranas y glicoproteínas',
    icon: 'membranas',
    summary:
      'Simulación de carbohidratos, glicoproteínas y membranas biológicas, ' +
      'incluidas las proteínas insertas en membrana.',
  },
  {
    title: 'Aprendizaje automático',
    icon: 'ml',
    summary:
      'Fundamentos de machine learning, cálculos ML y ML/MM en química ' +
      'computacional, y predicción de estructura de proteínas con AlphaFold.',
  },
  {
    title: 'Energías libres',
    icon: 'energias',
    summary:
      'Técnicas básicas y avanzadas de determinación de energías libres: ' +
      'metadinámica, strings y afines.',
  },
  {
    title: 'Diseño de fármacos',
    icon: 'farmacos',
    summary:
      'Docking molecular, predicción de complejos droga-proteína y ' +
      'proteína-proteína, cribado virtual e IA aplicada al diseño.',
  },
  {
    title: 'Grano grueso',
    icon: 'granogrueso',
    summary:
      'Métodos mesoscópicos y física de polímeros, con simulaciones de grano ' +
      'grueso aplicadas al ADN.',
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
          {
            kind: 'teorica',
            title:
              'Introducción a los métodos de simulación computacional en química. ' +
              'Métodos de estructura electrónica HF. Cálculos de propiedades ' +
              'moleculares. Teoría del funcional de la densidad.',
            teachers: ['D. Estrin', 'D. Scherlis'],
          },
          {
            kind: 'practica',
            title: 'Optimización de geometría. Cálculos de estructura electrónica.',
          },
        ],
      },
      {
        date: '23/02',
        weekday: 'Martes',
        blocks: [
          {
            kind: 'teorica',
            title:
              'Métodos de estructura electrónica. Métodos semiempíricos, post ' +
              'Hartree-Fock. Campos de fuerzas clásicos. Cálculos de estructura ' +
              'electrónica y parametrización.',
            teachers: ['D. Estrin', 'D. Scherlis'],
          },
          {
            kind: 'practica',
            title:
              'Problemas de estructura electrónica. Generación de parámetros para ' +
              'campos de fuerza.',
          },
        ],
      },
      {
        date: '24/02',
        weekday: 'Miércoles',
        blocks: [
          {
            kind: 'teorica',
            title:
              'Fundamentos de dinámica molecular clásica. Termodinámica ' +
              'estadística. Dinámica molecular.',
            teachers: ['L. Martinez'],
          },
          {
            kind: 'practica',
            title: 'Dinámica molecular clásica: primeros principios.',
            teachers: ['L. Martinez'],
          },
        ],
      },
      {
        date: '25/02',
        weekday: 'Jueves',
        blocks: [
          {
            kind: 'teorica',
            title:
              'Dinámica molecular clásica, aplicaciones variadas: solutos en ' +
              'solvente, complejos, ejemplos químicos, hidratos de carbono y ' +
              'proteínas. El ABC de la dinámica molecular de proteínas.',
            teachers: ['L. Capece', 'P. Dans'],
          },
          {
            kind: 'practica',
            title: 'Preparación del sistema, termalización y equilibración.',
          },
        ],
      },
      {
        date: '26/02',
        weekday: 'Viernes',
        blocks: [
          {
            kind: 'teorica',
            title: 'Métodos multiescala QM/MM: fundamentos y aplicaciones.',
            teachers: ['A. Zeida'],
          },
          {
            kind: 'teorica',
            title: 'Arquitectura de cómputo de alta performance (HPC).',
            teachers: ['M. C. González Lebrero'],
          },
          {
            kind: 'practica',
            title: 'Dinámica molecular clásica de producción y análisis preliminar.',
          },
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
          {
            kind: 'teorica',
            title:
              'Simulación de carbohidratos y glicoproteínas. Simulación de ' +
              'membranas biológicas. Simulación de proteínas insertas en membranas.',
            teachers: ['S. Di Lella'],
          },
          {
            kind: 'practica',
            title: 'Simulaciones con membranas: análisis básicos.',
            teachers: ['G. Zerbetto de Palma'],
          },
        ],
      },
      {
        date: '02/03',
        weekday: 'Martes',
        blocks: [
          {
            kind: 'teorica',
            title: 'Aprendizaje automático: aspectos básicos.',
            teachers: ['L. Lombardi'],
          },
          {
            kind: 'teorica',
            title: 'Aplicaciones en química computacional. Cálculos de ML y ML/MM.',
            teachers: ['A. Roitberg'],
          },
          {
            kind: 'teorica',
            title: 'Predicción de estructura de proteínas basada en IA: AlphaFold.',
            teachers: ['L. Abriata'],
          },
        ],
      },
      {
        date: '03/03',
        weekday: 'Miércoles',
        blocks: [
          {
            kind: 'teorica',
            title:
              'Técnicas de determinación de energías libres, aspectos básicos. ' +
              'Técnicas avanzadas: metadinámica, strings y afines.',
            teachers: ['M. Arrar', 'C. Estarellas'],
          },
          {
            kind: 'practica',
            title: 'Cálculos de energía libre en sistemas simples.',
          },
        ],
      },
      {
        date: '04/03',
        weekday: 'Jueves',
        blocks: [
          {
            kind: 'teorica',
            title:
              'Diseño de fármacos. Métodos de docking. Métodos de predicción de ' +
              'complejos droga-proteína y proteína-proteína. Métodos de cribado ' +
              'virtual. IA aplicada al diseño de fármacos.',
            teachers: ['A. Talevi'],
          },
          {
            kind: 'practica',
            title: 'Cálculos de docking molecular.',
            teachers: ['Lautaro Alvarez'],
          },
        ],
      },
      {
        date: '05/03',
        weekday: 'Viernes',
        blocks: [
          {
            kind: 'teorica',
            title: 'Métodos de grano grueso, mesoscópicos y física de polímeros.',
            teachers: ['P. Dans'],
          },
          {
            kind: 'teorica',
            title: 'Teoría de simulación molecular.',
            teachers: ['E. Gonzalez Solveira'],
          },
          {
            kind: 'practica',
            title: 'Simulaciones de grano grueso con ADN.',
            teachers: ['P. Dans'],
          },
        ],
      },
    ],
  },
]


/**
 * Pais de la sede de cada docente, para la banderita del cronograma.
 *
 * Las claves son exactamente los nombres que usan los bloques de WEEKS. Un
 * docente que no este en este mapa simplemente va sin bandera, asi que sumar
 * a alguien al cronograma nunca rompe la pagina.
 *
 * TODO(contenido): confirmar con el comite. Los que salen de las siete
 * instituciones participantes o del comite organizador estan seguros; el
 * resto se dedujo del contexto del curso.
 */
export const TEACHER_COUNTRY: Record<string, CountryCode> = {
  // Comite organizador e instituciones del flyer: confirmados.
  'D. Estrin': 'AR',
  'L. Capece': 'AR',
  'M. C. González Lebrero': 'AR',
  'A. Zeida': 'UY',
  'P. Dans': 'UY',
  'L. Martinez': 'BR', // Instituto de Química, Universidad de Campinas
  'A. Roitberg': 'US', // Department of Chemistry, University of Florida
  'C. Estarellas': 'ES', // Facultad de Farmacia, Universidad de Barcelona
  'D. Scherlis': 'AR',
  'L. Abriata': 'CH', // École Polytechnique Fédérale de Lausanne

  // Deducidos del contexto del curso, a confirmar.
  'S. Di Lella': 'AR',
  'G. Zerbetto de Palma': 'AR',
  'L. Lombardi': 'AR',
  'M. Arrar': 'AR',
  'A. Talevi': 'AR',
  'Lautaro Alvarez': 'AR',
  'E. Gonzalez Solveira': 'AR',
}
/** Docentes confirmados, derivados del propio cronograma y sin repetir. */
export const FACULTY: string[] = [
  ...new Set(
    WEEKS.flatMap((w) => w.days.flatMap((d) => d.blocks.flatMap((b) => b.teachers ?? [])))
  ),
].sort((a, b) => a.localeCompare(b, 'es'))
