import { ArrowUpRight } from "lucide-react"
import type { ProductId } from "@/lib/site"
import { CLIENTS, CLIENTS_TITLE } from "@/lib/clients"

/** Logos de los clientes que usan este sistema. No se muestra si no hay ninguno. */
export function ClientsStrip({ id, color }: { id: ProductId; color: string }) {
  const list = CLIENTS.filter((c) => c.systems.includes(id))
  if (list.length === 0) return null
  const title = CLIENTS_TITLE[id] ?? "Ya lo usan"
  return (
    <section className="border-t border-white/10 px-5 py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <p className="font-head text-xs font-bold uppercase tracking-[0.3em]" style={{ color }}>
          Nuestros clientes
        </p>
        <h2 className="mt-3 font-head text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
        <ul className="mt-8 flex flex-wrap gap-6">
          {list.map((c) => {
            const body = (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.logo} alt={`Logo de ${c.name}`} width={160} height={160} loading="lazy" className="h-28 w-28 rounded-full border-2 object-cover sm:h-32 sm:w-32" style={{ borderColor: `${color}88`, boxShadow: `0 0 24px ${color}33` }} />
                <span className="mt-3 inline-flex items-center gap-1 font-head text-sm font-semibold text-white/90">
                  {c.name}
                  {c.href && <ArrowUpRight className="h-4 w-4" style={{ color }} />}
                </span>
              </>
            )
            return (
              <li key={c.name}>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${c.name}`} className="group flex flex-col items-center text-center transition hover:-translate-y-1">
                    {body}
                  </a>
                ) : (
                  <div className="flex flex-col items-center text-center">{body}</div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
