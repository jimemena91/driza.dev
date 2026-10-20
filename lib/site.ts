// Datos editables del sitio. Cambiá acá el contacto, las redes y el detalle de cada producto.
export const SITE = {
  // TODO(Jimena): reemplazar por tus datos reales
  email: "hola@driza.dev",
  whatsapp: "5491100000000", // formato internacional, sin + ni espacios
  location: "Argentina",
  since: 2024, // año que aparece en el logo y en el pie
  // Solo se muestran las redes que tengan link.
  socials: {
    github: "https://github.com/jimemena91",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
}

export type ProductId = "link" | "tx" | "camp" | "bot" | "points"

export type Product = {
  id: ProductId
  name: string
  title: string
  short: string
  description: string
  features: string[]
  stack: string
  status: "En producción" | "En desarrollo"
  color: string // color de neón del producto
  href?: string
}

export const PRODUCTS: Product[] = [
  {
    id: "link",
    name: "DrizaLink",
    title: "Ventas online y punto de venta",
    short: "Checkout por WhatsApp y gestión comercial.",
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
    color: "#ff8a1f",
  },
  {
    id: "tx",
    name: "DrizaTx",
    title: "Turnos y colas de atención",
    short: "Ordena la atención al público sin fricción.",
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
    color: "#a64dff",
    href: "https://github.com/jimemena91/drizatx_stack",
  },
  {
    id: "camp",
    name: "DrizaCamp",
    title: "Gestión de campings y guarderías náuticas",
    short: "Clientes, movimientos, cobros y administración.",
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
    color: "#2fd67b",
  },
  {
    id: "bot",
    name: "Dribot",
    title: "Bandeja de WhatsApp con respuestas automáticas",
    short: "Automatiza consultas y acompaña ventas.",
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
    color: "#1fc8ee",
  },
  {
    id: "points",
    name: "DrizaPoints",
    title: "Programa de puntos para fidelizar clientes",
    short: "Premia compras y fortalece la recompra.",
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
    color: "#ff3d5e",
  },
]
