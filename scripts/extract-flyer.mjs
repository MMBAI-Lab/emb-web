/**
 * Parsea brand/EMB2027_fondo_1a_NeonBarolo.svg y emite src/lib/flyer-data.ts
 * con los datos regulares del flyer (escalones del ADN, edificios del skyline,
 * lineas del piso, secuencias de ARN).
 */
import { readFileSync, writeFileSync } from 'node:fs'

const SVG = process.argv[2]
const OUT = process.argv[3]
const svg = readFileSync(SVG, 'utf8')
const lines = svg.split(/\r?\n/)

/** Devuelve el texto de las lineas [a,b] (1-indexado, inclusive). */
const slice = (a, b) => lines.slice(a - 1, b).join('\n')

/** Extrae los atributos de cada elemento de un bloque de SVG. */
function elements(block) {
  const out = []
  const re = /<(rect|circle|path|line|ellipse|text)\b([\s\S]*?)\/>/g
  let m
  while ((m = re.exec(block))) {
    const attrs = {}
    const ar = /([a-zA-Z][a-zA-Z0-9-]*)="([^"]*)"/g
    let a
    while ((a = ar.exec(m[2]))) attrs[a[1]] = a[2]
    out.push({ tag: m[1], attrs })
  }
  return out
}

const num = (v) => (v === undefined ? undefined : Number(v))
const r3 = (v) => (v === undefined ? undefined : Math.round(v * 100) / 100)

// ---------------------------------------------------------------------------
// 1. Escalones del ADN (pares de bases). Lineas 2914-3489.
//    Cada escalon son 2 paths con el mismo `d`: un glow y el trazo solido.
//    Nos quedamos con el solido.
// ---------------------------------------------------------------------------
const rungEls = elements(slice(2914, 3489)).filter((e) => e.tag === 'path')
if (rungEls.length !== 72) throw new Error(`escalones: esperaba 72 paths, hay ${rungEls.length}`)

const rungs = []
for (let i = 1; i < rungEls.length; i += 2) {
  const e = rungEls[i]
  const [, x1, y1, x2, y2] = e.attrs.d.match(/^M([-\d.]+) ([-\d.]+)L([-\d.]+) ([-\d.]+)$/)
  rungs.push({
    x1: num(x1), y1: num(y1), x2: num(x2), y2: num(y2),
    c: e.attrs.stroke,
    w: num(e.attrs['stroke-width']),
    o: num(e.attrs.opacity),
  })
}

// ---------------------------------------------------------------------------
// 2. Edificios del skyline. Lineas 354-1292, 17 bloques.
//    Cada edificio: rect cuerpo + path aguja + rect columna de luz +
//    rect borde superior + 0 o 6 rects de ventana.
// ---------------------------------------------------------------------------
const BUILDING_RANGES = [
  [354, 428], [429, 455], [456, 530], [531, 557], [558, 632], [633, 659],
  [660, 686], [687, 761], [762, 788], [789, 863], [864, 890], [891, 965],
  [966, 1040], [1041, 1067], [1068, 1142], [1143, 1217], [1218, 1292],
]

const buildings = BUILDING_RANGES.map(([a, b], idx) => {
  const els = elements(slice(a, b))
  const rects = els.filter((e) => e.tag === 'rect')
  const spirePath = els.find((e) => e.tag === 'path')

  // El cuerpo es el rect mas ancho con fill #07041a.
  const body = rects
    .filter((e) => e.attrs.fill === '#07041a')
    .sort((p, q) => num(q.attrs.width) - num(p.attrs.width))[0]
  if (!body) throw new Error(`edificio ${idx}: sin cuerpo`)

  // La columna de luz: width 2.5 y alto grande. El borde superior: height 2.5.
  const column = rects.find((e) => num(e.attrs.width) === 2.5 && num(e.attrs.height) > 10)
  const topEdge = rects.find((e) => num(e.attrs.height) === 2.5)
  const windows = rects.filter((e) => num(e.attrs.width) === 7 && num(e.attrs.height) === 13)

  return {
    x: num(body.attrs.x),
    y: num(body.attrs.y),
    w: num(body.attrs.width),
    h: num(body.attrs.height),
    spire: spirePath ? spirePath.attrs.d : null,
    col: column
      ? { x: num(column.attrs.x), y: num(column.attrs.y), h: num(column.attrs.height), c: column.attrs.fill }
      : null,
    edge: topEdge
      ? { x: num(topEdge.attrs.x), y: num(topEdge.attrs.y), w: num(topEdge.attrs.width), c: topEdge.attrs.fill }
      : null,
    win: windows.map((e) => ({
      x: num(e.attrs.x),
      y: num(e.attrs.y),
      o: r3(num(e.attrs.opacity)),
      c: e.attrs.fill,
    })),
  }
})

// ---------------------------------------------------------------------------
// 3. Piso: rayos radiales y horizontales. Lineas 1302-1583.
// ---------------------------------------------------------------------------
const floorEls = elements(slice(1302, 1583)).filter((e) => e.tag === 'line')
const rays = floorEls
  .filter((e) => num(e.attrs.y1) === 1200)
  .map((e) => ({ x2: num(e.attrs.x2) }))
const scanY = floorEls
  .filter((e) => num(e.attrs.y1) !== 1200)
  .map((e) => ({ y: num(e.attrs.y1), o: num(e.attrs.opacity) }))

// ---------------------------------------------------------------------------
// 4. Secuencias de ARN. Lineas 243-333.
// ---------------------------------------------------------------------------
const seqBlock = slice(243, 333)
const sequences = [...seqBlock.matchAll(/>([ACGU]{20,})<\/text>/g)].map((m) => m[1])
const seqX = [...seqBlock.matchAll(/translate\((\d+) 120\)/g)].map((m) => Number(m[1]))
const seqFill = [...seqBlock.matchAll(/fill="(#[0-9a-f]{6})"/g)].map((m) => m[1])

// ---------------------------------------------------------------------------
const j = (v) => JSON.stringify(v)

const ts = `// GENERADO desde brand/EMB2027_fondo_1a_NeonBarolo.svg -- no editar a mano.
// Regenerar con: node scripts/extract-flyer.mjs
//
// Datos regulares del flyer. Se dibujan proceduralmente en los componentes de
// src/components/backdrop en vez de embeber el SVG, para poder animar cada
// primitiva sin cargar 190 KB de markup.
// Coordenadas en el viewBox original: 0 0 1240 1754.

/** Un par de bases del ADN: un segmento recto entre los dos backbones. */
export type Rung = { x1: number; y1: number; x2: number; y2: number; c: string; w: number; o: number }

/** Los ${rungs.length} escalones, de abajo hacia arriba. El color cicla violeta/lima/cyan/magenta. */
export const RUNGS: Rung[] = ${j(rungs)}

export type Building = {
  x: number; y: number; w: number; h: number
  /** Triangulo de la antena, o null si el edificio no tiene. */
  spire: string | null
  /** Columna de luz vertical del borde derecho. */
  col: { x: number; y: number; h: number; c: string } | null
  /** Filo iluminado del techo. */
  edge: { x: number; y: number; w: number; c: string } | null
  /** Ventanas encendidas (0 o 6 por edificio). */
  win: { x: number; y: number; o: number; c: string }[]
}

/** Los ${buildings.length} edificios, con paso de 76 px. */
export const BUILDINGS: Building[] = ${j(buildings)}

/** Punto de fuga del piso en perspectiva. */
export const VANISHING = { x: 620, y: 1200 } as const

/** Rayos del piso: todos salen del punto de fuga hasta y = 1754. */
export const FLOOR_RAYS: number[] = ${j(rays.map((r) => r.x2))}

/**
 * Horizontales del piso. Las y siguen 1200 + 554*(i/8)^2, la ley de
 * perspectiva que reproduce el keyframe grid-tunnel.
 */
export const FLOOR_SCANS: { y: number; o: number }[] = ${j(scanY)}

/** Las ${sequences.length} columnas de secuencia de ARN del fondo, con su x y su color. */
export const SEQUENCES: { seq: string; x: number; c: string }[] = ${j(
  sequences.map((seq, i) => ({ seq, x: seqX[i], c: seqFill[i] }))
)}
`

writeFileSync(OUT, ts)
console.log(`escalones: ${rungs.length}`)
console.log(`edificios: ${buildings.length} (ventanas: ${buildings.reduce((n, b) => n + b.win.length, 0)})`)
console.log(`piso: ${rays.length} rayos, ${scanY.length} horizontales`)
console.log(`secuencias: ${sequences.length}`)
console.log(`${OUT}: ${(ts.length / 1024).toFixed(1)} KB`)
