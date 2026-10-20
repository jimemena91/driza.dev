import { Calculator, Gift, Link2, Ticket } from "lucide-react"

const nodes = [
  { icon: Link2, name: "DrizaLink", text: "Vende online y en el local", color: "#FF6A00" },
  { icon: Ticket, name: "DrizaTx", text: "Ordena la atención con turnos", color: "#8B2FE0" },
  { icon: Gift, name: "DrizaPoints", text: "Premia cada compra con puntos", color: "#D61F8C" },
]

export function Connection() {
  return (
    <section id="conexion" className="bg-navy px-5 py-20 text-white lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Cómo se conectan</p>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          Un caso real: una farmacia con todo el recorrido del cliente
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-white/70 text-pretty">
          Una farmacia de Argentina usa varios productos a la vez. El cliente saca su turno, compra en el local o desde la
          tienda online y suma puntos con su ticket, que se vuelcan al sistema de gestión del comercio.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {nodes.map((n, i) => (
            <div key={n.name} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ background: n.color }}>
                <n.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-serif text-xl font-bold">{n.name}</h3>
              <p className="mt-1 text-sm text-white/70">{n.text}</p>
              {i < nodes.length - 1 && (
                <span aria-hidden className="absolute -right-3 top-1/2 hidden h-px w-6 bg-accent sm:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-4 rounded-2xl border border-accent/40 bg-accent/10 p-6">
          <Calculator className="h-6 w-6 shrink-0 text-accent" />
          <p className="text-sm leading-relaxed text-white/85">
            <strong className="text-white">Sistema de gestión del comercio.</strong> DrizaPoints se integra con el
            software de ventas que el comercio ya usa mediante exportación por lotes, sin obligarlo a cambiarlo.
          </p>
        </div>
      </div>
    </section>
  )
}
