import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"
import "@fontsource/montserrat/800.css"
import "@fontsource/fredoka/600.css"
import "@fontsource/fredoka/700.css"
import "@fontsource/orbitron/700.css"
import "@fontsource/orbitron/900.css"
import "./globals.css"


const TITLE = "Driza — Software de gestión a medida para tu negocio"
const DESCRIPTION =
  "Ecosistema de productos de gestión: DrizaLink (ventas online y punto de venta), DrizaTx (turnos y colas), DrizaCamp (campings), Dribot (WhatsApp) y DrizaPoints (fidelización). Hecho en Argentina."

export const metadata: Metadata = {
  metadataBase: new URL("https://driza.dev"),
  title: { default: TITLE, template: "%s | Driza" },
  description: DESCRIPTION,
  applicationName: "Driza",
  keywords: ["software de gestión", "e-commerce", "punto de venta", "gestión de turnos", "sistema de colas", "software para campings", "programa de puntos", "chatbot WhatsApp", "Argentina"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "https://driza.dev", siteName: "Driza", title: TITLE, description: DESCRIPTION, locale: "es_AR" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: "Driza", url: "https://driza.dev", logo: "https://driza.dev/driza-d-dorada.png", areaServed: "AR" },
    { "@type": "WebSite", name: "Driza", url: "https://driza.dev", inLanguage: "es-AR" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
