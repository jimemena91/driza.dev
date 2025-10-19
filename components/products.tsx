"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tent, Users, ShoppingBag, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const products = [
  {
    name: "DrizaCamp",
    description: "Sistema integral de gestión para campings",
    icon: Tent,
    color: "from-emerald-500 to-teal-600",
    features: [
      "Gestión de reservas en tiempo real",
      "Control de ocupación y disponibilidad",
      "Facturación automatizada",
      "Portal para clientes",
    ],
  },
  {
    name: "DrizaTx",
    description: "Sistema inteligente de gestión de filas",
    icon: Users,
    color: "from-blue-500 to-cyan-600",
    features: [
      "Turnos digitales sin contacto",
      "Análisis de tiempos de espera",
      "Notificaciones en tiempo real",
      "Dashboard de métricas",
    ],
  },
  {
    name: "DrizaModa",
    description: "Gestión completa para retail de indumentaria",
    icon: ShoppingBag,
    color: "from-pink-500 to-rose-600",
    features: [
      "Control de inventario por tallas",
      "Punto de venta integrado",
      "Gestión de colecciones",
      "Reportes de ventas avanzados",
    ],
  },
]

export function Products() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="productos" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl text-balance">Nuestras Soluciones</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            Software especializado diseñado para las necesidades específicas de tu industria
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <div
                key={product.name}
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <Card className="group relative h-full overflow-hidden border-border/50 bg-card transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 transition-opacity group-hover:opacity-5`}
                  />

                  <CardHeader>
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${product.color}`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="font-serif text-2xl">{product.name}</CardTitle>
                    <CardDescription className="text-base">{product.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button variant="ghost" className="mt-6 w-full group-hover:bg-accent/10">
                      Conocer más
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
