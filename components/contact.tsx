"use client"

import { Mail, MessageCircle } from "lucide-react"
import { useState } from "react"
import { SITE } from "@/lib/site"

export function Contact() {
  const [name, setName] = useState("")
  const [msg, setMsg] = useState("")
  const text = `Hola, soy ${name || "..."}. ${msg}`.trim()

  return (
    <section id="contacto" className="bg-navy px-5 py-20 text-white lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Contacto</p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-balance sm:text-5xl">Contame qué necesita tu negocio</h2>
          <p className="mt-4 text-lg text-white/70 text-pretty">
            Escribime y vemos juntos si alguno de los productos te sirve tal cual o si conviene armar algo a medida.
          </p>
          <ul className="mt-8 space-y-4 text-white/85">
            <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-accent" /><a className="hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li className="flex items-center gap-3"><MessageCircle className="h-5 w-5 text-accent" /><a className="hover:underline" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a></li>
          </ul>
        </div>

        <form className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-7" onSubmit={(e) => e.preventDefault()}>
          <label className="block text-sm font-medium">
            Tu nombre
            <input value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-accent" placeholder="Nombre y apellido" />
          </label>
          <label className="block text-sm font-medium">
            Qué necesitás
            <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={4} className="mt-2 w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-accent" placeholder="Contame brevemente tu negocio y qué querés resolver" />
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:brightness-105">
              <MessageCircle className="h-4 w-4" /> Enviar por WhatsApp
            </a>
            <a href={`mailto:${SITE.email}?subject=${encodeURIComponent("Consulta desde driza.dev")}&body=${encodeURIComponent(text)}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold transition hover:bg-white/10">
              <Mail className="h-4 w-4" /> Enviar por mail
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}
