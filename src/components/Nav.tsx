'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { EVENT, SECTIONS } from '@/content/event'

/**
 * Nav sticky. En la home las secciones son anclas y se marca la activa con un
 * IntersectionObserver; en /programa y /inscripción los mismos items apuntan a
 * `/#sección` y se marca la pagina.
 */
export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [active, setActive] = useState<string>('')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    )
    if (targets.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-25% 0px -60% 0px' }
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [isHome])

  const items = [
    ...SECTIONS.map((s) => ({
      href: isHome ? `#${s.id}` : `/#${s.id}`,
      label: s.label,
      on: isHome && active === s.id,
    })),
    { href: '/programa', label: 'Cronograma', on: pathname.startsWith('/programa') },
    { href: '/inscripcion', label: 'Inscripción', on: pathname.startsWith('/inscripcion') },
  ]

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-500 ${
        scrolled ? 'border-b border-neon-cyan/15 bg-ink-900/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="label-cond group flex items-baseline gap-2 text-sm text-paper-100"
          aria-label={`${EVENT.title} ${EVENT.edition} - inicio`}
        >
          <span className="text-neon-cyan glow-cyan text-lg font-semibold tracking-[0.2em]">EMB</span>
          <span className="text-neon-magenta glow-magenta font-semibold">{EVENT.edition}</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {items.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className={`label-cond relative block px-3 py-2 text-[0.7rem] transition-colors ${
                  it.on ? 'text-neon-cyan' : 'text-paper-200/78 hover:text-paper-100'
                }`}
              >
                {it.label}
                <span
                  className={`absolute inset-x-3 -bottom-px h-px transition-opacity ${
                    it.on ? 'bg-neon-cyan opacity-100' : 'opacity-0'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="nav-mobile"
          className="label-cond flex items-center gap-2 border border-neon-cyan/30 px-3 py-2 text-[0.7rem] text-paper-100 lg:hidden"
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>
      </nav>

      {/* Mobile */}
      <div
        id="nav-mobile"
        hidden={!open}
        className="border-t border-neon-cyan/15 bg-ink-900/95 backdrop-blur-md lg:hidden"
      >
        <ul className="mx-auto max-w-7xl px-5 py-2 sm:px-8">
          {items.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                onClick={() => setOpen(false)}
                className={`label-cond block border-b border-neon-cyan/10 py-3 text-xs ${
                  it.on ? 'text-neon-cyan' : 'text-paper-200/85'
                }`}
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
