"use client"

import { Shield, Zap, HeadphonesIcon, Cloud, BarChart3, Lock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    name: "Seguridad Empresarial",
    description: "Encriptación de datos y cumplimiento de normativas internacionales",
    icon: Shield,
  },
  {
    name: "Alto Rendimiento",
    description: "Infraestructura optimizada para operaciones en tiempo real",
    icon: Zap,
  },
  {
    name: "Soporte 24/7",
    description: "Equipo de expertos disponible en todo momento",
    icon: HeadphonesIcon,
  },
  {
    name: "Cloud Native",
    description: "Accede desde cualquier lugar con sincronización automática",
    icon: Cloud,
  },
  {
    name: "Analytics Avanzado",
    description: "Reportes detallados y visualización de datos en tiempo real",
    icon: BarChart3,
  },
  {
    name: "Privacidad Garantizada",
    description: "Tus datos están protegidos con los más altos estándares",
    icon: Lock,
  },
]

export function Features() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="caracteristicas" className="bg-muted/30 px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            Tecnología de Clase Mundial
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            Características que hacen de Driza la elección preferida de empresas líderes
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.name}
                className={`group relative rounded-lg border border-border/50 bg-card p-6 transition-all duration-700 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
