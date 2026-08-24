/** Comité organizador, tal como figura en el flyer 2027. */

export type Person = {
  name: string
  affiliation: string
  country: 'AR' | 'UY'
}

export const ORGANIZERS: Person[] = [
  { name: 'Dario Estrin', affiliation: 'UBA', country: 'AR' },
  { name: 'Luciana Capece', affiliation: 'UBA', country: 'AR' },
  { name: 'Mariano González Lebrero', affiliation: 'UBA', country: 'AR' },
  { name: 'Uriel Morzan', affiliation: 'UBA', country: 'AR' },
  { name: 'Ari Zeida', affiliation: 'UDELAR', country: 'UY' },
  { name: 'Pablo D. Dans', affiliation: 'UDELAR', country: 'UY' },
]

/**
 * TODO(contenido): cargar el plantel docente 2027 cuando este confirmado.
 * Mientras la lista este vacia, la home no renderiza la sección de docentes.
 */
export const FACULTY: Person[] = []
