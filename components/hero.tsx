import { ArrowRight, Cog, Signal, ShoppingCart, CalendarDays, MessageCircle, Users, Tent } from "lucide-react"
import type { ReactNode } from "react"
import { ByDriza, DMark, Wordmark } from "@/components/brand"
import { Sailboat } from "@/components/sailboat"
import { PRODUCTS, SITE, type ProductId } from "@/lib/site"

const ICONS: Record<ProductId, ReactNode> = {
  link: <ShoppingCart className="h-[1.1em] w-[1.1em]" />,
  tx: <CalendarDays className="h-[1.1em] w-[1.1em]" />,
  camp: <Tent className="h-[1.1em] w-[1.1em]" />,
  bot: <MessageCircle className="h-[1.1em] w-[1.1em]" />,
  points: <Users className="h-[1.1em] w-[1.1em]" />,
}

// Posición de cada tarjeta dentro de un lienzo de 100 x 66 unidades.
const SLOTS: Record<ProductId, { x: number; y: number; w: number; h: number }> = {
  link: { x: 34, y: 0, w: 30, h: 21 },
  tx: { x: 1, y: 12, w: 28, h: 21 },
  camp: { x: 71, y: 8, w: 28, h: 21 },
  bot: { x: 0, y: 45, w: 29, h: 21 },
  points: { x: 71, y: 45, w: 29, h: 21 },
}

const WIRES: { id: ProductId; d: string }[] = [
  { id: "link", d: "M50 21 V25" },
  { id: "tx", d: "M36 33 H32 V22.5 H29" },
  { id: "camp", d: "M64 33 H68 V18.5 H71" },
  { id: "bot", d: "M36 47 H32 V55.5 H29" },
  { id: "points", d: "M64 47 H68 V55.5 H71" },
]

function Chip({ id }: { id: ProductId }) {
  const p = PRODUCTS.find((x) => x.id === id)!
  const s = SLOTS[id]
  return (
    <div
      className="absolute flex flex-col items-center justify-center rounded-[14px] border"
      style={{
        left: `${s.x}%`,
        top: `${(s.y / 66) * 100}%`,
        width: `${s.w}%`,
        height: `${(s.h / 66) * 100}%`,
        borderColor: p.color,
        background: `linear-gradient(160deg, ${p.color}26, #0a0b11 70%)`,
        boxShadow: `0 0 22px ${p.color}55, inset 0 0 18px ${p.color}22`,
      }}
    >
      <Wordmark id={id} size="max(15px, 6.2cqw)" />
      <ByDriza size="max(5px, 1.4cqw)" />
      <span className="mt-[0.5cqw] flex items-center justify-center" style={{ color: p.color, fontSize: "max(11px, 3cqw)" }}>
        {ICONS[id]}
      </span>
    </div>
  )
}

function HeroVisual() {
  return (
    <div className="relative w-full" style={{ containerType: "inline-size", aspectRatio: "100 / 66" }}>
      <svg viewBox="0 0 100 66" className="absolute inset-0 h-full w-full" fill="none" aria-hidden>
        <ellipse cx="50" cy="60.5" rx="37" ry="5.5" stroke="#ffc72c" strokeWidth="0.5" opacity="0.9" style={{ filter: "drop-shadow(0 0 3px #ffc72c)" }} />
        <ellipse cx="50" cy="60.5" rx="30" ry="4" fill="#ffc72c" opacity="0.07" />
        {WIRES.map((w) => {
          const c = PRODUCTS.find((x) => x.id === w.id)!.color
          return <path key={w.id} d={w.d} stroke={c} strokeWidth="0.55" strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 1.5px ${c})` }} />
        })}
      </svg>
      {(["link", "tx", "camp", "bot", "points"] as ProductId[]).map((id) => (
        <Chip key={id} id={id} />
      ))}
      {/* Tile central */}
      <div
        className="absolute flex flex-col items-center justify-center rounded-[16px] border border-white/15"
        style={{
          left: "36%",
          top: `${(25 / 66) * 100}%`,
          width: "28%",
          height: `${(32 / 66) * 100}%`,
          background: "linear-gradient(160deg,#171922,#06070b 70%)",
          boxShadow: "0 0 40px rgba(255,199,44,0.25), inset 0 0 20px rgba(255,255,255,0.04)",
        }}
      >
        <DMark size={56} className="!h-[46%] !w-auto" />
        <span className="font-head font-semibold text-white" style={{ fontSize: "max(7px, 2.1cqw)", letterSpacing: "0.3em", marginTop: "3%" }}>
          DRIZA
        </span>
        <span className="font-head text-[var(--gold)]" style={{ fontSize: "max(4px, 1.15cqw)", letterSpacing: "0.3em" }}>
          DESDE {SITE.since}
        </span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="sunset relative overflow-hidden px-5 pb-16 pt-28 lg:px-8 lg:pb-20 lg:pt-32">
      <Sailboat className="pointer-events-none absolute -right-24 bottom-14 hidden h-[460px] opacity-95 lg:block" />
      <div className="water pointer-events-none absolute inset-x-0 bottom-0 h-1/3" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <h1 className="font-head text-[2.4rem] font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl xl:text-[3.4rem]">
            Un ecosistema de productos que trabajan juntos <span className="gold-text">para tu negocio</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Software a medida, <strong className="font-semibold text-[var(--gold)]">hecho en Argentina.</strong>
            <br />
            Cada pieza resuelve un problema real y se adapta a tu negocio.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#ecosistema" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#ffd75a] to-[#f2a91a] px-7 py-3.5 font-bold text-[#14100a] shadow-[0_0_28px_rgba(255,199,44,0.35)] transition hover:brightness-110">
              Ver los productos <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contacto" className="inline-flex items-center justify-center rounded-xl border border-[var(--gold)]/60 px-7 py-3.5 font-semibold text-white transition hover:bg-[var(--gold)]/10">
              Contame tu caso
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/75">
            <li className="flex items-center gap-2"><Cog className="h-4 w-4 text-white/60" /> Soluciones reales</li>
            <li className="flex items-center gap-2"><Signal className="h-4 w-4 text-[var(--gold)]" /> Para tu negocio</li>
            <li className="flex items-center gap-2">
              <svg viewBox="0 0 24 16" className="h-3.5 w-5 overflow-hidden rounded-[2px]" aria-hidden>
                <rect width="24" height="16" fill="#74acdf" />
                <rect y="5.3" width="24" height="5.4" fill="#fff" />
                <circle cx="12" cy="8" r="1.6" fill="#f6b40e" />
              </svg>
              Hecho en Argentina
            </li>
          </ul>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}
