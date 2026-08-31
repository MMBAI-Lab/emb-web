/**
 * Las instituciones participantes: las siete del flyer 2027, en su orden,
 * mas la EPFL, que se sumo despues con L. Abriata.
 * No hay logos en brand/, así que se renderizan como texto con estilo
 * (igual que el flyer). El campo `logo` queda listo para cuando lleguen.
 */

/** Los paises que aparecen en el sitio. Lo usa tambien <Flag>. */
export type CountryCode = 'AR' | 'ES' | 'BR' | 'CH' | 'US' | 'UY'

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
  // Fuera del flyer: se suma con la teorica de AlphaFold de L. Abriata.
  { unit: 'École Polytechnique Fédérale de Lausanne', org: '', country: 'CH' },
]

export const COUNTRY_LABEL: Record<CountryCode, string> = {
  AR: 'Argentina',
  ES: 'España',
  CH: 'Suiza',
  BR: 'Brasil',
  US: 'Estados Unidos',
  UY: 'Uruguay',
}
