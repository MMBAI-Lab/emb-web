import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, Jost, Oswald } from 'next/font/google'
import Backdrop from '@/components/backdrop/Backdrop'
import RevealWatcher from '@/components/RevealWatcher'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { EVENT } from '@/content/event'
import './globals.css'

/* Las tres familias del flyer. next/font las auto-hospeda en el build, así que
   funcionan con export estático y sin pedir nada a Google en runtime. */
const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-oswald',
  display: 'swap',
})

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-barlow',
  display: 'swap',
})

const SITE = 'https://mmbai-lab.github.io/emb-web'
const DESCRIPTION =
  'Curso intensivo teórico-práctico de modelado computacional de biomoléculas. ' +
  'Edición presencial 2027, del 22 de febrero al 5 de marzo. UBA, UDELAR, ' +
  'Institut Pasteur de Montevideo y Centro de Biología Estructural del Mercosur.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: `${EVENT.title} ${EVENT.edition}`,
    template: `%s · EMB ${EVENT.edition}`,
  },
  description: DESCRIPTION,
  applicationName: `EMB ${EVENT.edition}`,
  keywords: [
    'modelado molecular',
    'dinámica molecular',
    'biomoléculas',
    'QM/MM',
    'simulación',
    'UBA',
    'UDELAR',
    'curso de posgrado',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: `EMB ${EVENT.edition}`,
    title: `${EVENT.title} ${EVENT.edition}`,
    description: DESCRIPTION,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${EVENT.title} ${EVENT.edition}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${EVENT.title} ${EVENT.edition}`,
    description: DESCRIPTION,
  },
}

export const viewport: Viewport = {
  themeColor: '#05030e',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${jost.variable} ${oswald.variable} ${barlow.variable}`}>
      <head>
        {/*
          Habilita el estado oculto de los reveals. Va inline y antes del body
          para que no haya un salto visible. El timeout es la red de seguridad:
          si RevealWatcher no monta (JS lento, bundle caido, error de
          hidratacion), la clase se retira y todo el contenido aparece.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');" +
              "setTimeout(function(){if(!window.__revealReady)" +
              "document.documentElement.classList.remove('js')},2500);",
          }}
        />
      </head>
      <body className="antialiased">
        <Backdrop />
        <RevealWatcher />

        <a
          href="#contenido"
          className="label-cond sr-only text-xs focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-neon-cyan"
        >
          Saltar al contenido
        </a>

        <Nav />
        <main id="contenido" className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
