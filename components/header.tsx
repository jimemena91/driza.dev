"use client"

import { ArrowRight, Menu, X } from "lucide-react"
import { useState } from "react"
import { Brand } from "@/components/brand"
import { SITE } from "@/lib/site"

const links = [
  { href: "#top", label: "Inicio" },
  { href: "#ecosistema", label: "Ecosistema" },
  { href: "#conexion", label: "Cómo se conectan" },
  { href: "#trabajo", label: "Cómo trabajo" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07080c]/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#top" aria-label="Driza, inicio">
          <Brand size={44} since={SITE.since} />
        </a>
        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative py-2 text-[13px] font-medium transition-colors hover:text-white ${i === 0 ? "text-[var(--gold)]" : "text-white/75"}`}
            >
              {l.label}
              {i === 0 && <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded bg-[var(--gold)]" />}
            </a>
          ))}
        </div>
        <a
          href="#contacto"
          className="hidden items-center gap-2 rounded-xl bg-gradient-to-b from-[#ffd75a] to-[#f2a91a] px-5 py-2.5 text-sm font-bold text-[#14100a] shadow-[0_0_24px_rgba(255,199,44,0.35)] transition hover:brightness-110 lg:inline-flex"
        >
          Hablemos <ArrowRight className="h-4 w-4" />
        </a>
        <button className="p-2 text-white lg:hidden" aria-label="Menú" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-[#07080c] lg:hidden">
          <div className="space-y-1 px-5 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2.5 text-base font-medium text-white/90">
                {l.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="mt-2 block rounded-xl bg-[var(--gold)] px-5 py-3 text-center font-bold text-[#14100a]">
              Hablemos
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
