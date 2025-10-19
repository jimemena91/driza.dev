"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    name: "María González",
    role: "Directora de Operaciones",
    company: "Camping Las Sierras",
    image: "/professional-woman-smiling.png",
    content:
      "DrizaCamp transformó completamente nuestra gestión. Redujimos el tiempo de check-in en un 60% y nuestros clientes están más satisfechos que nunca.",
    rating: 5,
    metric: "60% más rápido",
  },
  {
    name: "Carlos Ruiz",
    role: "Gerente General",
    company: "Banco Regional",
    image: "/professional-man-suit.png",
    content:
      "Con DrizaTx eliminamos las filas físicas y mejoramos la experiencia del cliente. Los tiempos de espera se redujeron en un 45%.",
    rating: 5,
    metric: "45% menos espera",
  },
  {
    name: "Ana Martínez",
    role: "Propietaria",
    company: "Boutique Elegance",
    image: "/fashion-store-owner.jpg",
    content:
      "DrizaModa nos dio el control total de nuestro inventario. Las ventas aumentaron un 35% gracias a la mejor gestión de stock.",
    rating: 5,
    metric: "+35% en ventas",
  },
]

const stats = [
  {
    value: "10,000+",
    label: "Transacciones Diarias",
    description: "Procesadas en tiempo real",
  },
  {
    value: "99.9%",
    label: "Disponibilidad",
    description: "Garantizada 24/7",
  },
  {
    value: "40%",
    label: "Ahorro Promedio",
    description: "En costos operativos",
  },
  {
    value: "<2min",
    label: "Tiempo de Respuesta",
    description: "Soporte técnico",
  },
]

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Stats Section */}
        <div
          ref={ref}
          className={`mb-20 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              Resultados que Hablan
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
              Métricas reales de empresas que confían en Driza
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative rounded-lg border border-accent/20 bg-card p-6 text-center transition-all duration-700 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-lg" />
                <div className="relative">
                  <div className="font-serif text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            Historias de éxito de empresas que transformaron su gestión con Driza
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`relative overflow-hidden border-border/50 transition-all duration-700 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 3) * 150}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent/30 mb-4" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground mb-6">{testimonial.content}</p>

                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {testimonial.metric}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
