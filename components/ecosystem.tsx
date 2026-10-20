"use client"

import { ArrowUpRight, Check, ChevronRight, Cog, MessageCircle, ShoppingCart, CalendarDays, Tent, Users } from "lucide-react"
import { useState, type ReactNode } from "react"
import { ByDriza, Wordmark } from "@/components/brand"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { PRODUCTS, type Product, type ProductId } from "@/lib/site"

const ICONS: Record<ProductId, ReactNode> = {
  link: <ShoppingCart className="h-5 w-5" />,
  tx: <CalendarDays className="h-5 w-5" />,
  camp: <Tent className="h-5 w-5" />,
  bot: <MessageCircle className="h-5 w-5" />,
  points: <Users className="h-5 w-5" />,
}

function ProductCard({ p, onOpen }: { p: Product; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Ver detalle de ${p.name}`}
      className="group relative flex h-full flex-col rounded-2xl border p-5 text-left transition hover:-translate-y-1"
      style={{
        borderColor: `${p.color}aa`,
        background: `linear-gradient(150deg, ${p.color}1f, #0b0c12 65%)`,
        boxShadow: `0 0 24px ${p.color}26, inset 0 0 22px ${p.color}14`,
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <Wordmark id={p.id} size={44} />
          <ByDriza size={9} />
        </div>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border" style={{ color: p.color, borderColor: `${p.color}66`, background: `${p.color}1a` }}>
          {ICONS[p.id]}
        </span>
      </div>
      <h3 className="mt-5 pr-10 font-head text-[15px] font-bold leading-snug text-white">{p.title}</h3>
      <p className="mt-1.5 pr-10 text-sm leading-relaxed text-white/65">{p.short}</p>
      <span className="absolute bottom-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition group-hover:bg-white/15">
        <ChevronRight className="h-4 w-4" />
      </span>
    </button>
  )
}

export function Ecosystem() {
  const [open, setOpen] = useState<Product | null>(null)
  return (
    <section id="ecosistema" className="border-t border-white/10 bg-[#090a0f] px-5 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-head text-xs font-bold uppercase tracking-[0.3em] text-[var(--gold)]">Nuestros productos</p>
            <h2 className="mt-3 font-head text-4xl font-extrabold tracking-tight">El ecosistema</h2>
            <p className="mt-3 max-w-2xl text-lg text-white/70 text-pretty">
              Driza ofrece productos modulares que podés usar por separado o en conjunto, según las necesidades de tu negocio.
            </p>
          </div>
          <p className="flex items-center gap-3 text-sm text-white/65">
            <span className="h-0.5 w-6 bg-[var(--gold)]" />
            <span>
              Un mismo ecosistema.
              <br />
              Más posibilidades para hacer crecer tu negocio.
            </span>
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} p={p} onOpen={() => setOpen(p)} />
          ))}
          <a
            href="#contacto"
            className="group relative flex h-full flex-col rounded-2xl border border-white/15 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-white/30"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white/85">
                <Cog className="h-5 w-5" />
              </span>
              <span className="font-head text-lg font-bold">Desarrollos a medida</span>
            </div>
            <h3 className="mt-5 font-head text-[15px] font-bold text-white">Otros rubros</h3>
            <p className="mt-1.5 pr-10 text-sm leading-relaxed text-white/65">Creamos soluciones modulares para necesidades específicas.</p>
            <span className="absolute bottom-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition group-hover:bg-white/15">
              <ChevronRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        {open && (
          <DialogContent className="max-w-lg border-white/15 bg-[#0b0c12] text-white" style={{ boxShadow: `0 0 50px ${open.color}33` }}>
            <div className="flex items-start justify-between gap-4 pr-8">
              <div>
                <Wordmark id={open.id} size={48} />
                <ByDriza size={9} />
              </div>
              <span className={`mt-1 rounded-full px-3 py-1 text-xs font-semibold ${open.status === "En producción" ? "bg-emerald-400/15 text-emerald-300" : "bg-amber-400/15 text-amber-300"}`}>
                {open.status}
              </span>
            </div>
            <DialogTitle className="font-head text-xl font-bold">{open.title}</DialogTitle>
            <DialogDescription className="text-sm leading-relaxed text-white/70">{open.description}</DialogDescription>
            <ul className="space-y-2.5">
              {open.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-white/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: open.color }} />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-white/55">
              <span>{open.stack}</span>
              <div className="flex items-center gap-4">
                {open.href && (
                  <a href={open.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold text-white hover:underline">
                    Ver código <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                <a href="#contacto" onClick={() => setOpen(null)} className="rounded-lg bg-[var(--gold)] px-3.5 py-2 text-sm font-bold text-[#14100a]">
                  Quiero saber más
                </a>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}
