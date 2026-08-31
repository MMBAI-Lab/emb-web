/**
 * Las siete instituciones participantes, en el orden del flyer 2027.
 * No hay logos en brand/, así que se renderizan como texto con estilo
 * (igual que el flyer). El campo `logo` queda listo para cuando lleguen.
 */

/** Los paises que aparecen en el sitio. Lo usa tambien <Flag>. */
export type CountryCode = 'AR' | 'ES' | 'BR' | 'US' | 'UY'

export type Institution = {
  unit: string
  org: string
  country: CountryCode
  /** TODO(contenido): ruta en /public cuando existan los logos. */
  logo?: string
}

export const INSTITUTIONS: Institution[] = [
  {
    unit: 'Facultad de Ciencias Exactas y Naturales',
    org: 'Universidad de Buenos Aires',
    country: 'AR',
  },
  { unit: 'Facultad de Farmacia', org: 'Universidad de Barcelona', country: 'ES' },
  { unit: 'Instituto de Química', org: 'Universidad de Campinas', country: 'BR' },
  { unit: 'Department of Chemistry', org: 'University of Florida', country: 'US' },
  { unit: 'CENUR Litoral Norte', org: 'Universidad de la República', country: 'UY' },
  { unit: 'Institut Pasteur de Montevideo', org: '', country: 'UY' },
  { unit: 'Facultad de Medicina', org: 'Universidad de la República', country: 'UY' },
]

export const COUNTRY_LABEL: Record<CountryCode, string> = {
  AR: 'Argentina',
  ES: 'España',
  BR: 'Brasil',
  US: 'Estados Unidos',
  UY: 'Uruguay',
}
