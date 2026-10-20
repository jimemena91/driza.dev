import { Boxes, Handshake, Server, ShieldCheck } from "lucide-react"

const items = [
  { icon: Boxes, title: "Modular", text: "Cada solución es una pieza. Se combinan según lo que el negocio necesita, sin pagar de más." },
  { icon: Server, title: "Una instalación por cliente", text: "Cada cliente tiene su propia instancia, su base de datos y su carpeta. Lo tuyo no se mezcla con lo de nadie." },
  { icon: Handshake, title: "Trato directo", text: "Hablás con la misma persona que diseña y programa. Sin intermediarios ni tickets que se pierden." },
  { icon: ShieldCheck, title: "Cambios sin riesgo", text: "Se prueba primero en un entorno de desarrollo y recién después pasa a producción." },
]

export function Approach() {
  return (
    <section id="trabajo" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Cómo trabajo</p>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          Software que se adapta al cliente
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className="flex gap-5 rounded-2xl border border-border bg-card p-7">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-secondary">
                <it.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-serif text-xl font-bold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
