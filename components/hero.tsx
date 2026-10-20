import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { PRODUCTS } from "@/lib/site"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-44">
      <div className="absolute inset-0 -z-10 hero-glow" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Software a medida, hecho en Argentina
        </p>
        <h1 className="max-w-4xl font-serif text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Un ecosistema de productos que <span className="gold-text">trabajan juntos</span> para tu negocio.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
          Ventas online, turnos, fidelización, WhatsApp y gestión de campings. Cada pieza resuelve un problema real y se
          adapta al cliente, no al revés.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#ecosistema" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition hover:brightness-105">
            Ver los productos <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contacto" className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-7 py-3.5 font-semibold transition hover:bg-foreground/5">
            Contame tu caso
          </a>
        </div>

        <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-8">
          {PRODUCTS.map((p) => (
            <li key={p.id} className="flex items-center gap-2.5 text-sm font-medium">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.accent }} />
              {p.name}
            </li>
          ))}
        </ul>
        </div>
        <div className="hidden justify-center lg:flex">
          <Image src="/driza-logo.png" alt="Logo de Driza: un velero dorado sobre el mar" width={566} height={441} className="w-full max-w-sm drop-shadow-xl" priority />
        </div>
      </div>
    </section>
  )
}
