import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card to-accent/5 p-12 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.accent/10),transparent)]" />

          <div className="relative">
            <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground text-pretty">
              Únete a cientos de empresas que ya confían en Driza para optimizar sus operaciones
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Solicitar Demo Gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Hablar con Ventas
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Sin tarjeta de crédito • Configuración en minutos • Soporte incluido
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
