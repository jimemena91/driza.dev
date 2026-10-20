import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Driza — Ecosistema de software de gestión",
  description: "DrizaLink, DrizaTx, DrizaCamp, Dribot y DrizaPoints: productos de gestión que trabajan juntos y se adaptan a cada negocio.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${playfair.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
