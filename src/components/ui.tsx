import Link from 'next/link'

/**
 * Primitivas del sistema de diseño.
 *
 * Todas son server components: los reveals van por CSS (clases `reveal` y
 * `reveal-in-view`, ver globals.css) y no por framer-motion. La razón es que el
 * sitio es un export estático y el contenido no puede quedar invisible si el JS
 * no carga o tarda. framer-motion queda para el parallax del fondo, que es
 * decorativo y puede fallar sin consecuencias.
 */

/** Sección anclada, con reveal al entrar en viewport. */
export function Section({
  id,
  children,
  className = '',
}: {
  id?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={`content-scrim mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}
    >
      {children}
    </section>
  )
}

/** Bloque que sube al entrar en viewport. */
export function Rise({
  children,
  className = '',
  as: As = 'div',
}: {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'li' | 'p'
}) {
  return <As className={`reveal-in-view ${className}`}>{children}</As>
}

/** Encabezado de sección: número, título y regla de neon. */
export function SectionHeading({
  index,
  children,
  kicker,
}: {
  index?: string
  children: React.ReactNode
  kicker?: string
}) {
  return (
    <div className="reveal-in-view mb-10 sm:mb-14">
      <div className="flex items-center gap-4">
        {index && (
          <span className="label-cond text-[0.7rem] text-neon-magenta glow-magenta">{index}</span>
        )}
        {kicker && <span className="label-cond text-[0.7rem] text-paper-200/50">{kicker}</span>}
      </div>
      <h2 className="mt-3 text-4xl text-neon-cyan glow-cyan sm:text-5xl lg:text-6xl">{children}</h2>
      <hr className="rule-neon mt-6 w-full max-w-md border-0" />
    </div>
  )
}

/** Panel con esquina recortada: el motivo estructural del sitio. */
export function NeonPanel({
  children,
  className = '',
  tone = 'cyan',
}: {
  children: React.ReactNode
  className?: string
  tone?: 'cyan' | 'magenta'
}) {
  return (
    <div className={`panel-neon ${tone === 'magenta' ? 'panel-magenta' : ''} p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  )
}

/** Boton principal: relleno de neon con la esquina recortada. */
export function NeonButton({
  href,
  children,
  tone = 'cyan',
  external = false,
}: {
  href: string
  children: React.ReactNode
  tone?: 'cyan' | 'magenta' | 'ghost'
  external?: boolean
}) {
  const base =
    'label-cond inline-flex items-center gap-3 px-7 py-4 text-xs transition-all duration-300 ' +
    '[clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,14px_100%,0_calc(100%-14px))]'

  const tones = {
    cyan: 'bg-neon-cyan text-ink-900 hover:brightness-125 hover:shadow-[0_0_34px_-4px_#2ae4ff]',
    magenta: 'bg-neon-magenta text-ink-900 hover:brightness-125 hover:shadow-[0_0_34px_-4px_#ff2fd1]',
    ghost:
      'border border-neon-cyan/40 text-paper-100 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_28px_-8px_#2ae4ff]',
  }

  const cls = `${base} ${tones[tone]}`

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <span aria-hidden="true">&#8599;</span>
      </a>
    )
  }

  return (
    <Link href={href} className={cls}>
      {children}
      <span aria-hidden="true">&#8594;</span>
    </Link>
  )
}

/** Aviso de contenido provisional. */
export function Notice({ children }: { children: React.ReactNode }) {
  return (
    <p className="label-cond mb-8 border-l-2 border-neon-lime bg-neon-lime/5 px-4 py-3 text-[0.7rem] leading-relaxed text-neon-lime">
      {children}
    </p>
  )
}
