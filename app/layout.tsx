import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"] })

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
    { "@type": "Organization", name: "Driza", url: "https://driza.dev", logo: "https://driza.dev/driza-logo.png", areaServed: "AR" },
    { "@type": "WebSite", name: "Driza", url: "https://driza.dev", inLanguage: "es-AR" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${playfair.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
