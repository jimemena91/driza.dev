"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfecto para pequeñas empresas",
    price: "$99",
    period: "/mes",
    features: [
      "Hasta 100 transacciones/día",
      "1 usuario administrador",
      "Soporte por email",
      "Reportes básicos",
      "Actualizaciones incluidas",
      "99% uptime garantizado",
    ],
    cta: "Comenzar Prueba",
    popular: false,
  },
  {
    name: "Professional",
    description: "Para empresas en crecimiento",
    price: "$299",
    period: "/mes",
    features: [
      "Hasta 1,000 transacciones/día",
      "5 usuarios administradores",
      "Soporte prioritario 24/7",
      "Reportes avanzados + Analytics",
      "API access completo",
      "Integraciones personalizadas",
      "99.9% uptime garantizado",
      "Capacitación incluida",
    ],
    cta: "Comenzar Ahora",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Soluciones a medida",
    price: "Personalizado",
    period: "",
    features: [
      "Transacciones ilimitadas",
      "Usuarios ilimitados",
      "Soporte dedicado 24/7",
      "Reportes personalizados",
      "Infraestructura dedicada",
      "SLA personalizado",
      "Consultoría estratégica",
      "Desarrollo a medida",
    ],
    cta: "Contactar Ventas",
    popular: false,
  },
]

export function Pricing() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="precios" className="bg-muted/30 px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            Planes para Cada Necesidad
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            Elige el plan que mejor se adapte a tu negocio. Todos incluyen 30 días de prueba gratuita.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-700 ${
                plan.popular
                  ? "border-accent shadow-lg shadow-accent/20 lg:scale-105"
                  : "border-border/50 hover:border-accent/50"
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold rounded-bl-lg flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  Más Popular
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="font-serif text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="font-serif text-5xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent>
                <Button
                  className={`w-full mb-6 ${
                    plan.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent/90 glow-accent"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-sm text-muted-foreground">
            Todos los planes incluyen 30 días de prueba gratuita. Sin tarjeta de crédito requerida.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            ¿Necesitas más información?{" "}
            <a href="#contacto" className="text-accent hover:underline font-semibold">
              Habla con nuestro equipo
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
