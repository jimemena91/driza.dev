// Datos editables del sitio. Cambiá acá el contacto y los links de cada producto.
export const SITE = {
  // TODO(Jimena): reemplazar por tus datos reales
  email: "hola@driza.dev",
  whatsapp: "5491100000000", // formato internacional, sin + ni espacios
  location: "Argentina",
  github: "https://github.com/jimemena91",
}

export type Product = {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  stack: string
  status: "En producción" | "En desarrollo"
  accent: string // color propio de cada producto
  icon: "link" | "tx" | "camp" | "bot" | "points"
  href?: string
}

export const PRODUCTS: Product[] = [
  {
    id: "link",
    name: "DrizaLink",
    tagline: "Vendé online y en el local, desde un mismo lugar",
    description:
      "Panel de gestión con punto de venta y tienda online propia para cada comercio. El cliente arma su pedido y lo cierra por WhatsApp.",
    features: [
      "Tienda pública con tu marca y temas de color",
      "Catálogo, categorías, clientes y pedidos",
      "Checkout directo a WhatsApp",
      "Varias tiendas desde un solo panel",
    ],
    stack: "Next.js · TypeScript · MySQL",
    status: "En producción",
    accent: "#FF6A00",
    icon: "link",
  },
  {
    id: "tx",
    name: "DrizaTx",
    tagline: "Turnos y filas sin caos en la atención",
    description:
      "Sistema de gestión de colas para lugares con mucha atención al público: emisión de turnos, puestos de atención y pantallas.",
    features: [
      "Terminal de autoservicio para sacar turno",
      "Panel de operador, supervisor y administrador",
      "Prioridades por servicio y cartelería digital",
      "Reportes de tiempos de espera y atención",
    ],
    stack: "NestJS · Next.js · MySQL",
    status: "En producción",
    accent: "#8B2FE0",
    icon: "tx",
    href: "https://github.com/jimemena91/drizatx_stack",
  },
  {
    id: "camp",
    name: "DrizaCamp",
    tagline: "Gestión para campings y guarderías náuticas",
    description:
      "Control de clientes, registros de ingreso y egreso, embarcaciones, vehículos, extras y cobros, con reportes para el dashboard.",
    features: [
      "Clientes, embarcaciones y vehículos",
      "Guardería, movimientos y extras",
      "Medios de pago e histórico de ventas por usuario",
      "Dashboard e informes en PDF con tu logo",
    ],
    stack: "React · Node.js · MySQL",
    status: "En producción",
    accent: "#2E8FD8",
    icon: "camp",
  },
  {
    id: "bot",
    name: "Dribot",
    tagline: "WhatsApp ordenado y con respuestas automáticas",
    description:
      "Bandeja unificada de conversaciones con contactos, respuestas rápidas y automatizaciones, pensada para negocios locales.",
    features: [
      "Todas las conversaciones en un solo lugar",
      "Respuestas por palabras clave y horarios",
      "Contactos con etiquetas e historial",
      "Integrado con el e-commerce del ecosistema",
    ],
    stack: "Next.js · TypeScript",
    status: "En desarrollo",
    accent: "#1FB5A8",
    icon: "bot",
  },
  {
    id: "points",
    name: "DrizaPoints",
    tagline: "Programa de puntos para que vuelvan a comprar",
    description:
      "Plataforma de fidelización independiente del sistema de ventas: acreditaciones, canjes, recompensas y saldos de clientes.",
    features: [
      "Carga de tickets por QR fiscal u OCR",
      "Puntos con multiplicadores por medio de pago",
      "Detección de comprobantes duplicados",
      "Se integra con el sistema de ventas del comercio",
    ],
    stack: "NestJS · Prisma · PostgreSQL",
    status: "En desarrollo",
    accent: "#D61F8C",
    icon: "points",
  },
]
