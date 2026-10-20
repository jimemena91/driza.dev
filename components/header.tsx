"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Logo } from "@/components/logo"

const links = [
  { href: "#ecosistema", label: "Ecosistema" },
  { href: "#conexion", label: "Cómo se conectan" },
  { href: "#trabajo", label: "Cómo trabajo" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2 lg:px-8">
        <a href="#top" aria-label="Driza, inicio">
          <Logo size={52} />
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition hover:opacity-85">
            Hablemos
          </a>
        </div>
        <button className="p-2 md:hidden" aria-label="Menú" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="space-y-1 px-5 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2.5 text-base font-medium">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
