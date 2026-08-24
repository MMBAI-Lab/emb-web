import type { NextConfig } from 'next'

/**
 * El sitio se publica en GitHub Pages del repo (mmbai-lab.github.io/emb-web),
 * asi que necesita basePath. En `next dev` no queremos prefijo, y si algun dia
 * pasamos a dominio propio basta con dejar NEXT_PUBLIC_BASE_PATH vacio.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  reactStrictMode: true,
}

export default nextConfig
