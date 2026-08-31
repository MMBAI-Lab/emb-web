import { COUNTRY_LABEL, type CountryCode } from '@/content/institutions'

/**
 * Banderitas de pais, como SVG inline.
 *
 * No se usan los emoji de bandera (🇦🇷) porque Windows no los soporta: ahi se
 * ven como dos letras sueltas, y buena parte del publico del curso navega desde
 * Windows. Tampoco vale la pena una fuente ni un sprite externo para cinco
 * banderas de 21x14.
 *
 * Los dibujos estan simplificados a proposito: a este tamano el sol de Mayo o
 * las estrellas de EEUU no se distinguen, asi que se resuelven con un circulo
 * radiado y unos puntos. Lo que tiene que leerse es el pais, no el detalle.
 */

const FLAGS: Record<CountryCode, React.ReactNode> = {
  AR: (
    <>
      <rect width="21" height="14" fill="#74acdf" />
      <rect y="4.67" width="21" height="4.66" fill="#fff" />
      <circle cx="10.5" cy="7" r="2.05" fill="none" stroke="#f6b40e" strokeWidth="0.5" strokeDasharray="0.45 0.85" />
      <circle cx="10.5" cy="7" r="1.25" fill="#f6b40e" />
    </>
  ),
  UY: (
    <>
      <rect width="21" height="14" fill="#fff" />
      <g fill="#0038a8">
        <rect y="1.56" width="21" height="1.55" />
        <rect y="4.67" width="21" height="1.55" />
        <rect y="7.78" width="21" height="1.55" />
        <rect y="10.89" width="21" height="1.55" />
      </g>
      <rect width="9" height="7.78" fill="#fff" />
      <circle cx="4.5" cy="3.9" r="1.75" fill="none" stroke="#f6b40e" strokeWidth="0.45" strokeDasharray="0.4 0.8" />
      <circle cx="4.5" cy="3.9" r="1.05" fill="#f6b40e" />
    </>
  ),
  ES: (
    <>
      <rect width="21" height="14" fill="#aa151b" />
      <rect y="3.5" width="21" height="7" fill="#f1bf00" />
    </>
  ),
  BR: (
    <>
      <rect width="21" height="14" fill="#009b3a" />
      <path d="M10.5 1.6 19.3 7l-8.8 5.4L1.7 7Z" fill="#fedf00" />
      <circle cx="10.5" cy="7" r="2.6" fill="#002776" />
      <path d="M8.1 6.3a5 5 0 0 1 4.9.9" fill="none" stroke="#fff" strokeWidth="0.55" />
    </>
  ),
  CH: (
    <>
      <rect width="21" height="14" fill="#d52b1e" />
      <rect x="9.4" y="3.4" width="2.2" height="7.2" fill="#fff" />
      <rect x="6.9" y="5.9" width="7.2" height="2.2" fill="#fff" />
    </>
  ),
  US: (
    <>
      <rect width="21" height="14" fill="#fff" />
      <g fill="#b22234">
        <rect width="21" height="1.08" />
        <rect y="2.15" width="21" height="1.08" />
        <rect y="4.31" width="21" height="1.08" />
        <rect y="6.46" width="21" height="1.08" />
        <rect y="8.62" width="21" height="1.08" />
        <rect y="10.77" width="21" height="1.08" />
        <rect y="12.92" width="21" height="1.08" />
      </g>
      <rect width="8.4" height="7.54" fill="#3c3b6e" />
      <g fill="#fff">
        <circle cx="2" cy="2" r="0.45" />
        <circle cx="4.2" cy="2" r="0.45" />
        <circle cx="6.4" cy="2" r="0.45" />
        <circle cx="3.1" cy="3.8" r="0.45" />
        <circle cx="5.3" cy="3.8" r="0.45" />
        <circle cx="2" cy="5.6" r="0.45" />
        <circle cx="4.2" cy="5.6" r="0.45" />
        <circle cx="6.4" cy="5.6" r="0.45" />
      </g>
    </>
  ),
}

export default function Flag({
  country,
  className = '',
}: {
  country: CountryCode
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 21 14"
      role="img"
      aria-label={COUNTRY_LABEL[country]}
      className={`inline-block h-3 w-[1.125rem] shrink-0 align-middle ${className}`}
    >
      {FLAGS[country]}
      {/* Borde tenue: sin esto las banderas claras se desangran sobre el fondo. */}
      <rect
        x="0.25"
        y="0.25"
        width="20.5"
        height="13.5"
        fill="none"
        stroke="rgba(238,241,255,0.35)"
        strokeWidth="0.5"
      />
    </svg>
  )
}
