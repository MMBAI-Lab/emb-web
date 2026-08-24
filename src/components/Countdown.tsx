'use client'

import { useEffect, useState } from 'react'
import { EVENT } from '@/content/event'

type Parts = { d: number; h: number; m: number; s: number }

function remaining(target: number): Parts | null {
  const ms = target - Date.now()
  if (ms <= 0) return null
  const s = Math.floor(ms / 1000)
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
  }
}

const pad = (n: number) => String(n).padStart(2, '0')

/**
 * Cuenta regresiva al arranque del curso.
 *
 * El primer render es en build time, así que el valor se calcula recién después
 * de montar: si no, el HTML estático y el cliente no coincidirían. Mientras
 * tanto se reserva el espacio con guiones para no mover el layout.
 */
export default function Countdown() {
  const target = new Date(EVENT.startsAt).getTime()
  const [parts, setParts] = useState<Parts | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setParts(remaining(target))
    const id = setInterval(() => setParts(remaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  if (mounted && !parts) {
    return (
      <p className="label-cond text-[0.7rem] text-neon-lime glow-lime">
        La escuela ya comenzó
      </p>
    )
  }

  const cells: [string, string][] = [
    [parts ? String(parts.d) : '--', parts?.d === 1 ? 'dia' : 'días'],
    [parts ? pad(parts.h) : '--', 'hs'],
    [parts ? pad(parts.m) : '--', 'min'],
    [parts ? pad(parts.s) : '--', 'seg'],
  ]

  return (
    <div>
      <p className="label-cond mb-2 text-[0.65rem] text-paper-200/50">Faltan</p>
      <dl className="flex items-end gap-4 sm:gap-6" aria-live="off">
        {cells.map(([value, unit]) => (
          <div key={unit} className="flex items-baseline gap-1.5">
            <dd
              className="font-cond text-3xl font-semibold tabular-nums text-neon-cyan glow-cyan-solid sm:text-4xl"
              style={{ fontFamily: 'var(--font-cond)' }}
            >
              {value}
            </dd>
            <dt className="label-cond text-[0.6rem] text-paper-200/70">{unit}</dt>
          </div>
        ))}
      </dl>
    </div>
  )
}
