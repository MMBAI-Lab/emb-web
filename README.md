# Escuela de Modelado de Biomoléculas — sitio 2027

Sitio de la edición 2027 (22/02 al 05/03). Reemplaza el Google Sites de las
ediciones anteriores.

**Publicado en:** https://mmbai-lab.github.io/emb-web/

## Stack

Next.js 15 (App Router, export estático) · TypeScript · Tailwind CSS v4 ·
framer-motion. Sin servidor: el build produce HTML plano en `out/`.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # export estático en out/
npm run typecheck
```

## De dónde sale el diseño

Todo el diseño se deriva del flyer 2027, en [brand/](brand/):

- `EMB2027_flyer_v1.png` — el flyer final
- `EMB2027_fondo_1a_NeonBarolo.svg` — el fondo, editable, con ids semánticos
  (`fondo`, `skyline`, `piso`, `proteina`, `arn`, `membrana`, `atmosfera`)

El fondo animado del sitio **es** ese SVG, reconstruido capa por capa:

| Capa | Componente | Cómo se obtuvo |
|---|---|---|
| Gradientes de base | `GradientField` | reimplementados en CSS |
| Secuencias de ARN | `SequenceRain` | 11 columnas, datos extraídos |
| Ciudad y grilla en fuga | `CityGrid` | 17 edificios + 23 rayos, datos extraídos |
| Bicapa lipídica | `Membrane` | 50 lípidos regenerados por código |
| Doble hélice | `Helix` | 2 curvas verbatim + 36 escalones |
| Proteína | `Protein` | 7 curvas verbatim del flyer |
| Scanlines y viñeta | `Atmosphere` | reimplementados en CSS |

Los datos regulares se regeneran con:

```bash
node scripts/extract-flyer.mjs brand/EMB2027_fondo_1a_NeonBarolo.svg src/lib/flyer-data.ts
```

`src/lib/paths.ts` y `src/lib/flyer-data.ts` son **generados**: no editarlos a
mano.

### Dos reglas que conviene no romper

1. **Ningún filtro SVG.** El flyer aplica 98 `feGaussianBlur`; a pantalla completa
   eso destruye el rendimiento. Cada capa usa un solo `filter: blur()` en CSS.
2. **Los loops de ambiente van en CSS, no en framer-motion.** Son ~150
   animaciones (50 lípidos, 60 ventanas, 36 escalones); en CSS las maneja el
   compositor. framer-motion queda solo para el parallax del fondo.

También: el contenido nunca depende del JS. Los reveals se ocultan solo si
`<html>` tiene la clase `js`, que se retira sola si el observer no arranca. Si el
bundle falla, el sitio se lee igual.

## Contenido

Todo el texto vive en [src/content/](src/content/) — no hay texto en el JSX:

| Archivo | Qué tiene |
|---|---|
| `event.ts` | fechas, título, sede, contacto, secciones |
| `programa.ts` | cronograma, módulos y docentes |
| `people.ts` | comité organizador |
| `institutions.ts` | instituciones participantes |
| `inscripcion.ts` | aranceles, exenciones, formulario |

El cronograma 2027 está confirmado (`CONFIRMED = true`). La lista de docentes no
se escribe a mano: `FACULTY` se deriva del propio cronograma, y el contador de la
home lo toma de ahí, así que no puede desincronizarse.

### Pendiente de completar

Buscar `TODO(contenido)`. Cada dato faltante tiene un flag que hace que el sitio
muestre un aviso de "provisional" en vez de mentir:

- **`FORM_URL`** en `inscripcion.ts` — URL del Google Form 2027. Vacío muestra
  "la preinscripción todavía no abrió".
- **`FEES_CONFIRMED`** en `inscripcion.ts` — los montos son los de 2025.
- **`venue.confirmed`** en `event.ts` — sede a confirmar.
- **Logos** de las instituciones: no están en `brand/`. Hoy se renderizan como
  texto; el campo `logo` de `institutions.ts` ya está listo.

## Despliegue

Cada push a `main` dispara [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
que construye y publica en GitHub Pages. Requiere que en *Settings → Pages* la
fuente esté en **GitHub Actions**.

El sitio se sirve bajo `/emb-web`, así que el build necesita
`NEXT_PUBLIC_BASE_PATH=/emb-web` (lo pone el workflow). Para pasar a un dominio
propio: vaciar esa variable en el workflow y agregar `public/CNAME` con el
dominio.

`public/.nojekyll` es obligatorio: sin él GitHub Pages ignora la carpeta
`_next/`.

## Accesibilidad y movimiento

`prefers-reduced-motion` congela todos los loops de ambiente desde un único lugar
en `globals.css`. El fondo entero es `aria-hidden` y `pointer-events-none`.
