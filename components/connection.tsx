import { Lightbulb, Store } from "lucide-react"
import { ByDriza, Wordmark } from "@/components/brand"
import { PRODUCTS, type ProductId } from "@/lib/site"

const TEXT: Record<ProductId, [string, string]> = {
  link: ["Ventas online y mostrador", "Checkout y gestión."],
  bot: ["Responde consultas en WhatsApp", "Automatiza y acompaña."],
  points: ["Fideliza clientes", "Premia y hace crecer tu negocio."],
  tx: ["Gestiona turnos de atención", "Ordena la atención."],
  camp: ["", ""],
}

function Node({ id }: { id: ProductId }) {
  const p = PRODUCTS.find((x) => x.id === id)!
  return (
    <div className="rounded-xl p-3.5" style={{ background: "linear-gradient(160deg,#fbf6ee,#f1e8da)", boxShadow: `0 0 26px ${p.color}40`, border: `1px solid ${p.color}66` }}>
      <Wordmark id={id} size={30} />
      <div className="[&>span]:text-black/55 [&_span.bg-white\/30]:bg-black/25">
        <ByDriza size={8} />
      </div>
      <p className="mt-2 text-[13px] font-semibold leading-snug text-[#14100a]">{TEXT[id][0]}</p>
      <p className="text-xs text-black/55">{TEXT[id][1]}</p>
    </div>
  )
}

function StoreIllustration() {
  return (
    <svg viewBox="0 0 160 200" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0a1020" />
          <stop offset="0.6" stopColor="#1d1620" />
          <stop offset="1" stopColor="#3a2216" />
        </linearGradient>
        <linearGradient id="win" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe3a0" />
          <stop offset="1" stopColor="#ff9a3c" />
        </linearGradient>
      </defs>
      <rect width="160" height="200" fill="url(#sky)" />
      {[[22, 18], [60, 30], [118, 14], [138, 40], [90, 12]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="0.9" fill="#fff" opacity=".7" />
      ))}
      <circle cx="132" cy="30" r="9" fill="#ffe7b0" opacity=".9" />
      <rect x="14" y="68" width="132" height="102" fill="#1b1612" />
      <rect x="8" y="58" width="144" height="16" rx="3" fill="#2a2018" />
      <path d="M14 74 h132 l-7 16 h-118 z" fill="#c4542a" />
      <path d="M14 74 h22 l-3 16 h-22 z M58 74 h22 l-3 16 h-22 z M102 74 h22 l-3 16 h-22 z" fill="#f2e6d2" opacity=".9" />
      <rect x="24" y="100" width="44" height="52" rx="3" fill="url(#win)" />
      <rect x="92" y="100" width="44" height="52" rx="3" fill="url(#win)" />
      <rect x="70" y="112" width="20" height="58" rx="2" fill="#0d0b09" />
      <rect x="0" y="170" width="160" height="30" fill="#0a0a0d" />
      <ellipse cx="80" cy="172" rx="70" ry="5" fill="#ff9a3c" opacity=".25" />
    </svg>
  )
}

export function Connection() {
  return (
    <section id="conexion" className="border-t border-white/10 px-5 py-16 lg:px-8 lg:py-20" style={{ background: "linear-gradient(180deg,#07080c,#0a0b11)" }}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-head text-xs font-bold uppercase tracking-[0.3em] text-[var(--gold)]">Un ejemplo</p>
          <h2 className="mt-3 font-head text-4xl font-extrabold tracking-tight">Cómo se conectan</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70 text-pretty">
            Una forma simple de ver cómo varios productos del ecosistema Driza trabajan juntos en un mismo negocio, potenciando su operación y mejorando la experiencia de sus clientes.
          </p>
          <div className="mt-7 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/70">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
            Los productos comparten información y trabajan juntos para ofrecer una mejor experiencia a tus clientes.
          </div>
        </div>

        <div className="relative">
          <div className="grid items-center gap-4 lg:grid-cols-[1fr_minmax(150px,1.05fr)_1fr] lg:gap-8">
            <div className="order-2 grid grid-cols-2 gap-4 lg:order-none lg:grid-cols-1">
              <Node id="link" />
              <Node id="bot" />
            </div>
            <div className="order-1 lg:order-none">
              <div className="relative mx-auto h-56 w-full max-w-sm overflow-hidden rounded-2xl border border-white/20 shadow-[0_0_40px_rgba(255,199,44,0.15)] sm:h-64 lg:h-[19rem]">
                <StoreIllustration />
                <span className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white px-3 py-2.5 font-head text-sm font-bold text-[#14100a] shadow-lg">
                  <Store className="h-4 w-4" /> Caso negocio
                </span>
              </div>
            </div>
            <div className="order-3 grid grid-cols-2 gap-4 lg:order-none lg:grid-cols-1">
              <Node id="points" />
              <Node id="tx" />
            </div>
          </div>
          {/* Flechas de conexión, solo en escritorio */}
          <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" fill="none" aria-hidden>
            <path d="M31 14 C37 14 36 24 40 26" stroke="#ff8a1f" strokeWidth="0.35" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 1.6 }} />
            <path d="M31 46 C37 46 36 36 40 34" stroke="#1fc8ee" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 1.6 }} />
            <path d="M69 14 C63 14 64 24 60 26" stroke="#ff3d5e" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 1.6 }} />
            <path d="M69 46 C63 46 64 36 60 34" stroke="#a64dff" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 1.6 }} />
          </svg>
        </div>
      </div>
    </section>
  )
}
