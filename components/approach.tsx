import { Box, Server, MessagesSquare, ShieldCheck } from "lucide-react"

const items = [
  { icon: Box, color: "#ffc72c", title: "Modular", text: "Elegís solo las piezas que necesitás." },
  { icon: Server, color: "#a64dff", title: "Instalación propia", text: "Cada cliente tiene su propia instalación." },
  { icon: MessagesSquare, color: "#2fd67b", title: "Trato directo", text: "Hablás con quien programa y entiende tu caso." },
  { icon: ShieldCheck, color: "#ff8a1f", title: "Pruebas antes de producir", text: "Los cambios se validan antes de pasar a producción." },
]

export function Approach() {
  return (
    <section id="trabajo" className="border-t border-white/10 bg-[#090a0f] px-5 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:gap-8">
          <div>
            <p className="font-head text-xs font-bold uppercase tracking-[0.3em] text-[var(--gold)]">Mi método</p>
            <h2 className="mt-3 font-head text-4xl font-extrabold tracking-tight">Cómo trabajo</h2>
          </div>
          <p className="text-white/65 lg:pb-1.5">Una forma de trabajar pensada para que el sistema se adapte al cliente.</p>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="flex items-center gap-4 rounded-2xl border p-5"
              style={{ borderColor: `${it.color}66`, background: `linear-gradient(150deg, ${it.color}18, #0b0c12 70%)` }}
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border" style={{ color: it.color, borderColor: `${it.color}77`, background: `${it.color}1f` }}>
                <it.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-head text-[15px] font-bold">{it.title}</h3>
                <p className="mt-0.5 text-sm leading-snug text-white/65">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
