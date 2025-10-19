"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Hero() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 -z-10 tech-grid" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.accent/20),transparent)]" />

      <div
        ref={ref}
        className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-card px-4 py-2 text-sm glow-accent">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span className="text-muted-foreground">Soluciones empresariales de nueva generación</span>
        </div>

        <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Gestiona tu negocio con{" "}
          <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
            excelencia
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Software de gestión especializado para campings, sistemas de filas y retail de moda. Optimiza tus operaciones
          con tecnología de vanguardia.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 glow-accent">
            Explorar Productos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Ver Demo
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: "500+", label: "Clientes" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Soporte" },
            { value: "3", label: "Productos" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="font-serif text-3xl font-bold text-accent">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
