/**
 * Prefijo de las rutas a /public.
 *
 * El sitio se publica en mmbai-lab.github.io/emb-web, o sea bajo un basePath.
 * Next lo aplica solo a las rutas que maneja el (links, chunks, metadata), pero
 * NO al `src` de <Image> cuando `images.unoptimized` esta activo: ahi la ruta
 * sale tal cual se escribe. Por eso /sede.jpg terminaba pegandole a la raiz del
 * dominio y la imagen aparecia rota en produccion, aunque en `next dev` (sin
 * basePath) se viera bien.
 *
 * La variable es la misma que alimenta `basePath` en next.config.ts.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/** Ruta a un archivo de /public, valida tanto en dev como en Pages. */
export function asset(path: string): string {
  return `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`
}
