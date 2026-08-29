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
 * El plantel docente no se lista acá: se deriva del cronograma
 * (`FACULTY` en programa.ts), para que no haya dos fuentes de verdad.
 */
