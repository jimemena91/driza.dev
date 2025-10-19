"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const faqs = [
  {
    question: "¿Qué incluye la prueba gratuita de 30 días?",
    answer:
      "La prueba gratuita incluye acceso completo a todas las funcionalidades del plan que elijas, sin limitaciones. No se requiere tarjeta de crédito y puedes cancelar en cualquier momento sin costo alguno.",
  },
  {
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer:
      "Sí, puedes actualizar o cambiar tu plan en cualquier momento desde tu panel de administración. Los cambios se aplican inmediatamente y solo pagas la diferencia prorrateada del período actual.",
  },
  {
    question: "¿Los datos están seguros?",
    answer:
      "Absolutamente. Utilizamos encriptación de nivel bancario (AES-256) para todos los datos en tránsito y en reposo. Cumplimos con GDPR, ISO 27001 y realizamos auditorías de seguridad periódicas. Tus datos nunca se comparten con terceros.",
  },
  {
    question: "¿Ofrecen capacitación para el equipo?",
    answer:
      "Sí, todos los planes Professional y Enterprise incluyen sesiones de capacitación en vivo. También ofrecemos documentación completa, tutoriales en video y webinars mensuales gratuitos para todos los clientes.",
  },
  {
    question: "¿Puedo integrar Driza con otros sistemas?",
    answer:
      "Sí, ofrecemos API REST completa y webhooks para integrar con tus sistemas existentes. Los planes Professional y Enterprise incluyen soporte para integraciones personalizadas con tu stack tecnológico.",
  },
  {
    question: "¿Qué tipo de soporte ofrecen?",
    answer:
      "El plan Starter incluye soporte por email con respuesta en 24 horas. Professional incluye soporte prioritario 24/7 por email y chat. Enterprise incluye un gerente de cuenta dedicado y soporte telefónico directo.",
  },
  {
    question: "¿Necesito instalar software en mis equipos?",
    answer:
      "No, Driza es 100% cloud-native. Solo necesitas un navegador web moderno y conexión a internet. Funciona en cualquier dispositivo: computadoras, tablets y smartphones.",
  },
  {
    question: "¿Qué pasa con mis datos si cancelo?",
    answer:
      "Puedes exportar todos tus datos en cualquier momento en formatos estándar (CSV, JSON, PDF). Después de la cancelación, mantenemos tus datos por 90 días para que puedas reactivar tu cuenta si cambias de opinión.",
  },
  {
    question: "¿Ofrecen descuentos por pago anual?",
    answer:
      "Sí, ofrecemos un 20% de descuento en todos los planes con facturación anual. También tenemos descuentos especiales para ONGs, instituciones educativas y startups. Contacta a nuestro equipo de ventas para más información.",
  },
  {
    question: "¿Puedo usar múltiples productos de Driza?",
    answer:
      "Sí, puedes combinar DrizaCamp, DrizaTx y DrizaModa en una sola cuenta. Ofrecemos descuentos especiales para clientes que usan múltiples productos. Contacta a ventas para un plan personalizado.",
  },
]

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="faq" className="bg-muted/30 px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            Encuentra respuestas a las preguntas más comunes sobre nuestros productos
          </p>
        </div>

        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card hover:border-accent/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-base">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-muted-foreground mb-4">¿No encuentras lo que buscas?</p>
          <a href="#contacto" className="inline-flex items-center gap-2 text-accent hover:underline font-semibold">
            Contáctanos directamente
          </a>
        </div>
      </div>
    </section>
  )
}
