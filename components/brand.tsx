import Image from "next/image"
import type { CSSProperties } from "react"
import type { ProductId } from "@/lib/site"

/** La D dorada del logo. */
export function DMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/driza-d-dorada.png"
      alt=""
      aria-hidden
      width={Math.round(size * 1.087)}
      height={size}
      style={{ width: size * 1.087, height: size }}
      className={className}
      priority
    />
  )
}

/** Logo completo: D + DRIZA + DESDE año. */
export function Brand({ size = 44, since }: { size?: number; since: number }) {
  return (
    <span className="inline-flex items-center gap-3">
      <DMark size={size} />
      <span className="flex flex-col leading-none">
        <span className="font-head font-medium text-foreground" style={{ fontSize: size * 0.5, letterSpacing: "0.32em" }}>
          DRIZA
        </span>
        <span className="mt-1.5 flex items-center gap-1.5 font-head font-semibold text-[var(--gold)]" style={{ fontSize: Math.max(8, size * 0.19), letterSpacing: "0.3em" }}>
          DESDE {since}
          <span className="h-px w-4 bg-[var(--gold)]/70" />
        </span>
      </span>
    </span>
  )
}

const STYLES: Record<ProductId, { text: string; css: CSSProperties }> = {
  link: {
    text: "Link",
    css: { fontFamily: "var(--font-round)", fontWeight: 700, backgroundImage: "linear-gradient(180deg,#ffb23d,#ff6a00)" },
  },
  tx: {
    text: "TX",
    css: { fontFamily: "var(--font-tech)", fontWeight: 900, backgroundImage: "linear-gradient(90deg,#7a3dff,#e03bff)", transform: "skewX(-8deg)", letterSpacing: "0.02em" },
  },
  camp: {
    text: "CAMP",
    css: { fontFamily: "var(--font-tech)", fontWeight: 700, backgroundImage: "linear-gradient(180deg,#5cf0a6,#1fb36a)", letterSpacing: "0.04em" },
  },
  bot: {
    text: "DriBot",
    css: { fontFamily: "var(--font-round)", fontWeight: 600, backgroundImage: "linear-gradient(180deg,#40e0ff,#2d7bff)" },
  },
  points: {
    text: "Points",
    css: { fontFamily: "var(--font-round)", fontWeight: 700, backgroundImage: "linear-gradient(180deg,#ff6b86,#e0193f)" },
  },
}

/** Logo de texto de cada producto, con su color de neón. */
export function Wordmark({ id, size = 40, className = "" }: { id: ProductId; size?: number | string; className?: string }) {
  const st = STYLES[id]
  return (
    <span
      className={`inline-block leading-none ${className}`}
      style={{
        ...st.css,
        fontSize: size,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        filter: "drop-shadow(0 0 6px rgba(255,255,255,0.06))",
      }}
    >
      {st.text}
    </span>
  )
}

/** "BY [D] DRIZA" chiquito debajo del logo del producto. */
export function ByDriza({ size = 9 }: { size?: number | string }) {
  return (
    <span className="mt-1 flex items-center gap-1 font-head font-semibold uppercase text-white/70" style={{ fontSize: size, letterSpacing: "0.22em" }}>
      <span className="h-px w-2 bg-white/30" />
      by
      <span className="inline-flex" style={{ width: "1.25em", height: "1.25em" }}>
        <Image src="/driza-d-dorada.png" alt="" width={20} height={18} className="h-full w-full object-contain" />
      </span>
      driza
      <span className="h-px w-2 bg-white/30" />
    </span>
  )
}
