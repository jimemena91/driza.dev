import { ArrowLeft, ArrowRight, Check, ChevronDown, Mail, MessageCircle } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ByDriza, Wordmark } from "@/components/brand"
import { Footer } from "@/components/footer"
import { Gallery } from "@/components/gallery"
import { Header } from "@/components/header"
import { DETAILS } from "@/lib/product-details"
import { PRODUCTS, SITE, whatsappLink, type ProductId } from "@/lib/site"

type Params = { id: string }

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }))
}

export const dynamicParams = false

function find(id: string) {
  return PRODUCTS.find((p) => p.id === id)
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params
  const p = find(id)
  if (!p) return {}
  const title = `${p.name}: ${p.title}`
  const description = DETAILS[p.id].tagline
  return {
    title,
    description,
    alternates: { canonical: `/productos/${p.id}` },
    openGraph: { type: "website", url: `${SITE.url}/productos/${p.id}`, siteName: "Driza", title: `${title} | Driza`, description, locale: "es_AR" },
    twitter: { card: "summary_large_image", title: `${title} | Driza`, description },
  }
}

function SectionTitle({ kicker, title, color }: { kicker: string; title: string; color: string }) {
  return (
    <div className="mb-8">
      <p className="font-head text-xs font-bold uppercase tracking-[0.3em]" style={{ color }}>
        {kicker}
      </p>
      <h2 className="mt-3 font-head text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  )
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { id } = await params
  const p = find(id)
  if (!p) notFound()
  const d = DETAILS[p.id]
  const color = p.color
  const waText = `Hola, vi ${p.name} en driza.dev y quiero más información.`
  const wa = whatsappLink(waText)
  const mail = `mailto:${SITE.email}?subject=${encodeURIComponent(`Consulta por ${p.name}`)}&body=${encodeURIComponent(waText)}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: p.name,
    description: d.tagline,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${SITE.url}/productos/${p.id}`,
    inLanguage: "es-AR",
    publisher: { "@type": "Organization", name: "Driza", url: SITE.url },
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      {/* Portada */}
      <section className="relative overflow-hidden px-5 pb-14 pt-28 lg:px-8 lg:pb-20 lg:pt-32" style={{ background: `radial-gradient(900px 420px at 80% 0%, ${color}22, transparent 70%), #07080c` }}>
        <div className="relative mx-auto max-w-7xl">
          <Link href="/#ecosistema" className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Todo el ecosistema
          </Link>
          <div className={`mt-8 grid items-center gap-10 ${d.art ? "lg:grid-cols-[1.25fr_0.75fr]" : ""}`}>
            <div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-col">
                  <Wordmark id={p.id} size={72} />
                  <ByDriza size={12} />
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${p.status === "En producción" ? "bg-emerald-400/15 text-emerald-300" : "bg-amber-400/15 text-amber-300"}`}>{p.status}</span>
              </div>
              <h1 className="mt-7 font-head text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-[2.6rem]">{p.title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80 text-pretty">{d.tagline}</p>
              {d.audience && (
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
                  <strong className="font-semibold text-white/85">Para quién: </strong>
                  {d.audience}
                </p>
              )}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#2fd36b] to-[#12a84a] px-6 py-3.5 font-bold text-white shadow-[0_0_24px_rgba(47,211,107,0.3)] transition hover:brightness-110">
                  <MessageCircle className="h-5 w-5" /> Consultar por WhatsApp
                </a>
                <a href={mail} className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--gold)]/60 px-6 py-3.5 font-semibold text-white transition hover:bg-[var(--gold)]/10">
                  <Mail className="h-5 w-5" /> Escribir por email
                </a>
              </div>
              {d.stats && (
                <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                  {d.stats.map((s) => (
                    <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <dt className="font-head text-2xl font-extrabold" style={{ color }}>
                        {s.value}
                      </dt>
                      <dd className="mt-1 text-xs leading-snug text-white/60">{s.label}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
            {d.art && (
              <div className="flex justify-center lg:justify-end">
                <Image
                  src={d.art.src}
                  alt={d.art.alt}
                  width={d.art.w}
                  height={d.art.h}
                  unoptimized
                  priority
                  className="h-auto w-56 rounded-3xl object-contain sm:w-64"
                  style={{ boxShadow: `0 0 60px ${color}44` }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Qué resuelve */}
      <section className="border-t border-white/10 bg-[#090a0f] px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle kicker="Para qué sirve" title="Lo que cambia en tu día a día" color={color} />
          <div className="grid gap-5 md:grid-cols-3">
            {d.problems.map((x, i) => (
              <div key={x.title} className="rounded-2xl border p-6" style={{ borderColor: `${color}55`, background: `linear-gradient(150deg, ${color}18, #0b0c12 70%)` }}>
                <span className="font-head text-sm font-bold" style={{ color }}>
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-head text-lg font-bold">{x.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{x.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capturas */}
      {d.shots && d.shots.length > 0 && (
        <section className="border-t border-white/10 px-5 py-14 lg:px-8 lg:py-20" id="capturas">
          <div className="mx-auto max-w-7xl">
            <SectionTitle kicker="Capturas" title={d.shotsTitle ?? "Así se ve"} color={color} />
            <Gallery shots={d.shots} color={color} />
            <p className="mt-6 text-xs text-white/45">Capturas del sistema funcionando, con datos de ejemplo.</p>
          </div>
        </section>
      )}

      {/* Alcance */}
      <section className="border-t border-white/10 bg-[#090a0f] px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle kicker="Alcance" title="Qué incluye" color={color} />
          <div className="grid gap-5 md:grid-cols-2">
            {d.groups.map((g) => (
              <div key={g.title} className="rounded-2xl border border-white/12 bg-white/[0.03] p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-head text-lg font-bold">{g.title}</h3>
                  {g.note && (
                    <span className="rounded-full border px-2.5 py-0.5 text-[11px] font-semibold" style={{ color, borderColor: `${color}66`, background: `${color}14` }}>
                      {g.note}
                    </span>
                  )}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes */}
      {d.plans && (
        <section className="border-t border-white/10 px-5 py-14 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionTitle kicker="Planes" title="Tres planes, cada uno suma al anterior" color={color} />
            <div className="grid gap-5 md:grid-cols-3">
              {d.plans.map((pl) => (
                <div key={pl.name} className="flex flex-col rounded-2xl border p-6" style={{ borderColor: `${color}66`, background: `linear-gradient(160deg, ${color}1c, #0b0c12 70%)` }}>
                  <h3 className="font-head text-2xl font-extrabold">{pl.name}</h3>
                  <p className="mt-1 text-sm text-white/65">{pl.tagline}</p>
                  <ul className="mt-5 space-y-2.5">
                    {pl.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-sm text-white/90">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <a href={whatsappLink(`Hola, me interesa el plan ${pl.name} de ${p.name}. ¿Me pasás los valores?`)} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
                    Consultar valores <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
            {d.plansNote && <p className="mt-5 text-sm text-white/60">{d.plansNote}</p>}
          </div>
        </section>
      )}

      {/* Extras, necesidades y pasos */}
      {(d.extras || d.needs || d.steps) && (
        <section className="border-t border-white/10 bg-[#090a0f] px-5 py-14 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl space-y-14">
            {d.extras && (
              <div>
                <SectionTitle kicker="Se suman cuando los necesites" title={d.extras.title} color={color} />
                <div className="grid gap-5 md:grid-cols-3">
                  {d.extras.items.map((x) => (
                    <div key={x.title} className="rounded-2xl border border-white/12 bg-white/[0.03] p-6">
                      <h3 className="font-head text-base font-bold">{x.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{x.text}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-white/55">Se cotizan según lo que elijas.</p>
              </div>
            )}
            {d.steps && (
              <div>
                <SectionTitle kicker="Puesta en marcha" title="Cómo empezamos" color={color} />
                <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                  {d.steps.map((s, i) => (
                    <li key={s.title} className="rounded-2xl border border-white/12 bg-white/[0.03] p-6">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border font-head text-sm font-bold" style={{ color, borderColor: `${color}77`, background: `${color}1a` }}>
                        {i + 1}
                      </span>
                      <h3 className="mt-4 font-head text-base font-bold">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            {d.needs && (
              <div>
                <SectionTitle kicker="Para tener en cuenta" title={d.needs.title} color={color} />
                <ul className="grid gap-3 md:grid-cols-2">
                  {d.needs.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-white/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Preguntas frecuentes */}
      {d.faq && (
        <section className="border-t border-white/10 px-5 py-14 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <SectionTitle kicker="Dudas comunes" title="Preguntas frecuentes" color={color} />
            <div className="space-y-3">
              {d.faq.map((f) => (
                <details key={f.q} className="group rounded-xl border border-white/12 bg-white/[0.03] p-4 open:bg-white/[0.05]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-head text-[15px] font-semibold">
                    {f.q}
                    <ChevronDown className="h-4 w-4 shrink-0 text-white/60 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Se conecta con */}
      {d.connects && (
        <section className="border-t border-white/10 bg-[#090a0f] px-5 py-14 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionTitle kicker="Ecosistema" title="Se conecta con" color={color} />
            <div className="grid gap-5 md:grid-cols-2">
              {d.connects.map((c) => {
                const o = find(c.id)!
                return (
                  <Link key={c.id} href={`/productos/${c.id}`} className="group flex items-center justify-between gap-4 rounded-2xl border p-5 transition hover:-translate-y-0.5" style={{ borderColor: `${o.color}77`, background: `linear-gradient(150deg, ${o.color}1c, #0b0c12 65%)` }}>
                    <div>
                      <Wordmark id={c.id as ProductId} size={34} />
                      <p className="mt-3 text-sm leading-relaxed text-white/75">{c.text}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-white/70 transition group-hover:translate-x-1" />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Cierre */}
      <section className="sunset relative overflow-hidden border-t border-white/10 px-5 py-16 lg:px-8 lg:py-20">
        <div className="water pointer-events-none absolute inset-x-0 bottom-0 h-1/3" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-head text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">¿Lo vemos en tu negocio?</h2>
          <p className="mt-4 text-lg text-white/75">Contame cómo trabajás hoy y te armo una propuesta con los valores vigentes. Podemos coordinar una demostración.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#2fd36b] to-[#12a84a] px-6 py-3.5 font-bold text-white shadow-[0_0_24px_rgba(47,211,107,0.3)] transition hover:brightness-110">
              <MessageCircle className="h-5 w-5" /> Escribime por WhatsApp
            </a>
            <Link href="/#contacto" className="inline-flex items-center justify-center rounded-xl border border-[var(--gold)]/60 px-6 py-3.5 font-semibold text-white transition hover:bg-[var(--gold)]/10">
              Otras formas de contacto
            </Link>
          </div>
          {p.href && (
            <p className="mt-6 text-sm text-white/55">
              <a href={p.href} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                Ver el código en GitHub
              </a>
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
