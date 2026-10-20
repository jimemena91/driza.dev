"use client"

import { Building2, Mail, MessageCircle, Tent, Users } from "lucide-react"
import { useState } from "react"
import { Sailboat } from "@/components/sailboat"
import { SITE } from "@/lib/site"

const field =
  "mt-1.5 w-full rounded-lg border border-white/15 bg-white/[0.06] px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-[var(--gold)]"

export function Contact() {
  const [name, setName] = useState("")
  const [business, setBusiness] = useState("")
  const [phone, setPhone] = useState("")
  const [msg, setMsg] = useState("")

  const text = [
    `Hola, soy ${name || "..."}${business ? ` (${business})` : ""}.`,
    msg,
    phone ? `Mi WhatsApp: ${phone}` : "",
  ]
    .filter(Boolean)
    .join("\n")

  return (
    <section id="contacto" className="sunset relative overflow-hidden border-t border-white/10 px-5 py-16 lg:px-8 lg:py-20">
      <Sailboat className="pointer-events-none absolute -left-4 bottom-10 hidden h-64 opacity-60 xl:block" />
      <div className="water pointer-events-none absolute inset-x-0 bottom-0 h-1/3" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div className="xl:pl-40">
          <p className="font-head text-xs font-bold uppercase tracking-[0.3em] text-[var(--gold)]">Contacto</p>
          <h2 className="mt-3 font-head text-4xl font-extrabold leading-tight tracking-tight text-balance">
            Contame tu negocio y armamos una propuesta.
          </h2>
          <p className="mt-4 text-lg text-white/75">Ideal para comercios, campings y negocios con atención al público.</p>
          <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2"><Building2 className="h-4 w-4 text-white/60" /> Comercios</li>
            <li className="flex items-center gap-2"><Tent className="h-4 w-4 text-white/60" /> Campings</li>
            <li className="flex items-center gap-2"><Users className="h-4 w-4 text-white/60" /> Atención al público</li>
          </ul>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/15 bg-[#0b0c12]/85 p-6 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-white/85">
              Nombre
              <input value={name} onChange={(e) => setName(e.target.value)} className={field} placeholder="Tu nombre" autoComplete="name" />
            </label>
            <label className="block text-sm font-medium text-white/85">
              Negocio
              <input value={business} onChange={(e) => setBusiness(e.target.value)} className={field} placeholder="Nombre de tu negocio" />
            </label>
            <label className="block text-sm font-medium text-white/85">
              WhatsApp
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className={field} placeholder="+54 9 11 1234-5678" inputMode="tel" autoComplete="tel" />
            </label>
            <label className="block text-sm font-medium text-white/85">
              Mensaje
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={3} className={field} placeholder="Contame sobre tu negocio y lo que necesitás..." />
            </label>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-b from-[#2fd36b] to-[#12a84a] px-4 py-3.5 text-sm font-bold text-white shadow-[0_0_22px_rgba(47,211,107,0.3)] transition hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5 shrink-0" /> Enviar por WhatsApp
            </a>
            <a
              href={`mailto:${SITE.email}?subject=${encodeURIComponent("Consulta desde driza.dev")}&body=${encodeURIComponent(text)}`}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-b from-[#ffd75a] to-[#f2a91a] px-4 py-3.5 text-sm font-bold text-[#14100a] shadow-[0_0_22px_rgba(255,199,44,0.3)] transition hover:brightness-110"
            >
              <Mail className="h-5 w-5 shrink-0" /> Enviar por Email
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}
