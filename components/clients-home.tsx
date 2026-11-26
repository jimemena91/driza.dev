import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { CLIENTS } from "@/lib/clients"
import { PRODUCTS } from "@/lib/site"

/** Clientes de Driza en la pantalla de inicio. No se muestra si no hay ninguno. */
export function ClientsHome() {
  if (CLIENTS.length === 0) return null
  return (
    <section id="clientes" className="border-t border-white/10 px-5 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="font-head text-xs font-bold uppercase tracking-[0.3em] text-[var(--gold)]">Nuestros clientes</p>
        <h2 className="mt-3 font-head text-3xl font-extrabold tracking-tight sm:text-4xl">Negocios que ya trabajan con Driza</h2>
        <p className="mt-3 max-w-2xl text-white/70">Tocá un logo para conocer su tienda o su negocio.</p>
        <ul className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {CLIENTS.map((c) => {
            const systems = PRODUCTS.filter((p) => c.systems.includes(p.id))
            const logo = (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.logo} alt={`Logo de ${c.name}`} width={160} height={160} loading="lazy" className="h-28 w-28 rounded-full border-2 border-white/25 object-cover shadow-[0_0_24px_rgba(255,199,44,0.15)] transition group-hover:border-[var(--gold)] sm:h-32 sm:w-32" />
                <span className="mt-3 inline-flex items-center gap-1 font-head text-sm font-semibold text-white/90">
                  {c.name}
                  {c.href && <ArrowUpRight className="h-4 w-4 text-[var(--gold)]" />}
                </span>
              </>
            )
            return (
              <li key={c.name} className="flex flex-col items-center text-center">
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${c.name}`} className="group flex flex-col items-center transition hover:-translate-y-1">
                    {logo}
                  </a>
                ) : (
                  <div className="group flex flex-col items-center">{logo}</div>
                )}
                <div className="mt-2 flex flex-wrap justify-center gap-1.5">
                  {systems.map((p) => (
                    <Link key={p.id} href={`/productos/${p.id}`} className="rounded-full border px-2 py-0.5 text-[11px] font-semibold transition hover:bg-white/10" style={{ color: p.color, borderColor: `${p.color}66` }}>
                      {p.name}
                    </Link>
                  ))}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
