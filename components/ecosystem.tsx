import { ArrowUpRight, Bot, Check, Gift, Link2, Tent, Ticket } from "lucide-react"
import { PRODUCTS, type Product } from "@/lib/site"

const ICONS = { link: Link2, tx: Ticket, camp: Tent, bot: Bot, points: Gift }

function Card({ p }: { p: Product }) {
  const Icon = ICONS[p.icon]
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-xl">
      <span className="absolute inset-x-0 top-0 h-1" style={{ background: p.accent }} />
      <div className="flex items-start justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ background: p.accent }}>
          <Icon className="h-6 w-6" />
        </span>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${p.status === "En producción" ? "bg-emerald-500/15 text-emerald-700" : "bg-amber-500/15 text-amber-700"}`}>
          {p.status}
        </span>
      </div>
      <h3 className="mt-6 font-serif text-2xl font-bold">{p.name}</h3>
      <p className="mt-1 font-medium text-foreground/80">{p.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
      <ul className="mt-5 space-y-2.5">
        {p.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: p.accent }} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between pt-7 text-xs text-muted-foreground">
        <span>{p.stack}</span>
        {p.href && (
          <a href={p.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold text-foreground hover:underline">
            Código <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  )
}

export function Ecosystem() {
  return (
    <section id="ecosistema" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary">El ecosistema</p>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          Cinco productos, una misma forma de trabajar
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
          Cada uno funciona solo, pero están pensados para convivir: un comercio puede empezar con uno y sumar el resto
          cuando lo necesite.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <Card key={p.id} p={p} />
          ))}
          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-foreground/25 p-7">
            <h3 className="font-serif text-2xl font-bold">¿Necesitás algo distinto?</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Además de estos productos desarrollo módulos a medida para otros rubros, reutilizando lo que ya está probado.
            </p>
            <a href="#contacto" className="mt-5 inline-flex items-center gap-1 font-semibold hover:underline">
              Contame qué necesitás <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
