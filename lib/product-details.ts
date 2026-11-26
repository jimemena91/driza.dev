// Contenido de la página de cada sistema (/productos/[id]).
// Sale de las propuestas comerciales. No lleva precios: se consultan por WhatsApp.
import type { ProductId } from "@/lib/site"

export type Shot = {
  src: string
  title: string
  caption: string
  w: number
  h: number
  device?: "pantalla" | "celular"
}

export type Detail = {
  /** Frase corta que va bajo el nombre. */
  tagline: string
  /** Para quién es. */
  audience?: string
  /** Imagen decorativa del personaje o logo (opcional). */
  art?: { src: string; alt: string; w: number; h: number }
  stats?: { value: string; label: string }[]
  problems: { title: string; text: string }[]
  groups: { title: string; note?: string; items: string[] }[]
  shotsTitle?: string
  shots?: Shot[]
  plans?: { name: string; tagline: string; items: string[] }[]
  plansNote?: string
  extras?: { title: string; items: { title: string; text: string }[] }
  needs?: { title: string; items: string[] }
  steps?: { title: string; text: string }[]
  faq?: { q: string; a: string }[]
  connects?: { id: ProductId; text: string }[]
}

export const DETAILS: Record<ProductId, Detail> = {
  link: {
    tagline: "Tu tienda online, tu mostrador y tu asistente de IA. Un solo sistema, hecho a medida de tu comercio y con soporte directo de quien lo desarrolla.",
    audience: "Comercios que quieren vender online y en el mostrador con el mismo catálogo, el mismo stock y los mismos precios.",
    problems: [
      { title: "Vender online con tu marca", text: "Una tienda propia, con tu logo y tus colores. El cliente arma el pedido y lo cierra por WhatsApp en un solo paso." },
      { title: "Mostrador y tienda, el mismo catálogo", text: "El punto de venta usa los mismos productos, precios y stock que la tienda. Nada se carga dos veces." },
      { title: "Saber cuánto ganás", text: "Cada producto guarda costo, margen e IVA. La ganancia de cada venta la ve solo el administrador." },
    ],
    groups: [
      {
        title: "Tienda online",
        items: [
          "Tienda propia, con tu logo y tus colores, de diseño profesional",
          "Catálogo con categorías de hasta 3 niveles",
          "Ficha de producto con fotos, ficha técnica, marca y productos relacionados",
          "Variantes (sabor, color, talle) con foto, precio y nombre propios, y combinados para armar conjuntos",
          "Colecciones para destacar productos y marcas con su logo",
          "Ofertas y precios promocionales visibles en cada producto",
          "Pedido directo por WhatsApp, en un solo paso",
          "Retiro en el local o envío a domicilio",
          "Panel de pedidos con estados, y pedidos listos para imprimir",
          "Panel de clientes y listas de precios especiales, que se ven solo con su link de invitación",
          "Productos con precio en dólares, mostrados en pesos",
          "Carga y actualización masiva de productos desde una planilla, y lista de precios en Excel para tus clientes",
          "Posicionamiento en Google: mapa del sitio y datos de producto, en tu dominio propio",
          "Tablero con lo que hay que atender hoy y una sola campanita de avisos",
        ],
      },
      {
        title: "Mostrador (punto de venta)",
        note: "Planes Comercio y Plus",
        items: [
          "Hasta 5 cajas en funcionamiento, con traspasos de efectivo entre ellas",
          "Apertura y cierre de caja con horario y monto, e ingresos y gastos registrados",
          "Usuarios vendedores con su caja asignada",
          "Cuenta corriente de clientes con cobros y límite de crédito protegido con PIN",
          "Precio de venta calculado desde el costo, el margen y el IVA",
          "Ajuste masivo de costos, con opción de deshacer",
          "Cambios grupales de categoría, marca, proveedor y stock, con vista previa",
          "Anulación de ventas con reintegro del stock",
          "Presupuestos, descuentos con el porcentaje exacto, recibos de pago y remitos para descargar",
          "Cheques como medio de pago: si rebota, la deuda vuelve a la cuenta del cliente",
          "Rol Repositor para el depósito: carga y controla stock sin ver costos",
          "Historial de stock: cada movimiento queda anotado con fecha, motivo y quién lo hizo",
        ],
      },
      {
        title: "Asistente de IA (DriBot)",
        note: "Plan Plus",
        items: [
          "Le preguntás en lenguaje cotidiano por ventas, productos más vendidos, stock y ganancia",
          "Incluye hasta 500 consultas por mes; para un uso mayor se acuerda un paquete adicional",
          "Procesa las consultas con un proveedor externo de inteligencia artificial, sin exponer los datos de tu negocio",
          "Los vendedores lo usan sin acceso a costos ni ganancia",
          "DriBot sugiere y vos decidís: nada se envía, se cambia o se compra sin tu autorización",
          "Próxima integración incluida: DriBot en WhatsApp",
        ],
      },
      {
        title: "Códigos QR en todo el sistema",
        items: [
          "Etiquetas con QR por producto, listas para imprimir y pegar en el local",
          "Escáner con la cámara del celular para ver nombre, marca, categoría y stock",
          "Escaneo en la venta del mostrador y carga de stock con el celular",
          "Retiro con QR: el pedido pasa solo a “Retirado”, con fecha, hora y operador",
          "QR en el reparto: el repartidor lo escanea para tomar la carga",
        ],
      },
      {
        title: "Link Go y reparto",
        note: "Nuevo · incluidos en todos los planes",
        items: [
          "Link Go: app instalable en el celular con acciones rápidas, sin entrar al panel",
          "Cargar un producto con foto, actualizar precios y controlar stock tipo arqueo, a ciegas",
          "Cargar una compra sacando foto a la factura, para sumar stock y actualizar costos",
          "Vender desde el celular (planes Comercio y Plus)",
          "Reparto a domicilio: pedidos por zona, recorrido sugerido y estados del pedido",
          "App para cada repartidor y hoja de reparto lista para imprimir",
          "Módulos a medida, como Alquiler, que se activan solo en los comercios que los necesitan",
        ],
      },
    ],
    shotsTitle: "Así se ve",
    shots: [
      { src: "/capturas/link/tienda.webp", title: "Tienda online", caption: "Inicio de la tienda con productos destacados, precio y botón para agregar al pedido. Tienda de ejemplo.", w: 1400, h: 1069 },
      { src: "/capturas/link/tablero.webp", title: "Tablero del panel", caption: "Ventas del día, de la semana y del mes, ticket promedio, ganancia y los últimos pedidos, de un vistazo.", w: 1400, h: 1069 },
      { src: "/capturas/link/nueva-venta.webp", title: "Nueva venta en el mostrador", caption: "Se busca o se escanea el producto, se elige la cantidad con Enter y se cobra con F2. Atajos para todo.", w: 1400, h: 1069 },
      { src: "/capturas/link/pedidos.webp", title: "Panel de pedidos", caption: "Todos los pedidos con su estado, modalidad (retiro o envío) y fecha; filtros y hoja de reparto lista para imprimir.", w: 1400, h: 1069 },
      { src: "/capturas/link/link-go.webp", title: "Link Go en el celular", caption: "Acciones rápidas sin entrar al panel: vender, controlar stock, sumar o restar, cargar un producto y actualizar precios.", w: 600, h: 1169, device: "celular" },
    ],
    plans: [
      {
        name: "Online",
        tagline: "Tu tienda online con tu marca.",
        items: ["Tienda online propia, con tu logo y tus colores", "Pedido por WhatsApp en un solo paso", "Panel de pedidos y de clientes", "Reparto a domicilio"],
      },
      {
        name: "Comercio",
        tagline: "La tienda y el mostrador, sobre un mismo catálogo.",
        items: ["Todo lo del plan Online", "Punto de venta integrado a la tienda", "Hasta 5 cajas, con usuarios vendedores", "Costo, margen e IVA de cada producto"],
      },
      {
        name: "Plus",
        tagline: "Todo el sistema, con un asistente de IA.",
        items: ["Todo lo del plan Comercio", "DriBot dentro de tu panel", "Consultas de ventas, stock y ganancia (hasta 500 por mes)", "Próxima integración: DriBot en WhatsApp"],
      },
    ],
    plansNote: "También hay un combo Online + DriBot, sin punto de venta. Los valores se pasan por consulta.",
    extras: {
      title: "Desarrollos a medida",
      items: [
        { title: "Conexión con tu sistema de gestión", text: "Si ya usás uno, tu tienda puede quedar al día con él todos los días: precios, stock y productos nuevos, sin cargar nada a mano." },
        { title: "Con frenos de seguridad", text: "Si un envío trae cambios sospechosos, se detiene y te avisa. Primero se prueba sin cambiar nada y recién después se activa." },
        { title: "Módulos para tu rubro", text: "Como Alquiler de equipos: se activan solo en los comercios que los necesitan y se acuerdan antes de empezar." },
      ],
    },
    needs: {
      title: "Qué incluye la puesta en marcha y la mensualidad",
      items: [
        "Diseño de la tienda con tu identidad, instalación propia con base de datos y dirección web exclusivas",
        "Carga inicial de productos con sus imágenes, y capacitación para administrarla",
        "Servidor y copias de seguridad, actualizaciones y mejoras continuas, soporte técnico directo",
        "Cada mes, hasta 2 banners y 20 imágenes nuevas de productos o categorías, además de los ajustes de estilo",
        "El equipamiento (computadoras, impresoras de tickets y lectores de código de barras) no está incluido",
      ],
    },
    connects: [
      { id: "bot", text: "DriBot responde consultas de ventas, stock y ganancia dentro de tu panel." },
      { id: "points", text: "DrizaPoints suma puntos con el ticket que ya imprime tu sistema." },
    ],
  },

  tx: {
    tagline: "Un sistema de turnos y colas para ordenar la atención presencial, con pantalla de llamado en sala, puestos de atención y reportes en tiempo real.",
    audience: "Locales con mucha atención al público: farmacias, comercios, oficinas y cualquier lugar donde hoy se arma fila.",
    stats: [
      { value: "2", label: "comercios reales lo usan hoy" },
      { value: "~300", label: "atenciones por día" },
      { value: "~15", label: "operadores" },
    ],
    problems: [
      { title: "Filas sin orden", text: "Cada persona tiene un número y se atiende en el orden correcto, con prioridades cuando corresponde." },
      { title: "Operadores sin información", text: "Ven quién sigue, cuánto lleva esperando y qué tienen que hacer, sin papeles." },
      { title: "Gestión a ciegas", text: "El dueño o supervisor sabe cuántos se atendieron, cuánto se esperó y quién tuvo ausentes, con datos y no con intuición." },
    ],
    groups: [
      { title: "Para el cliente", items: ["Terminal de autoservicio: elige el servicio y retira su número, con ticket impreso", "Pantalla de sala: muestra el turno llamado y la cola, con aviso de voz y espacio para mensajes o publicidad del local"] },
      { title: "Para el operador", items: ["Llamar, iniciar, finalizar y marcar ausente, con atajos de teclado", "Cuatro teclas y sin mouse: Enter llama, 2 inicia, 3 finaliza y 4 marca ausente", "No hay nada que instalar: se abre desde el navegador"] },
      { title: "Para el supervisor", items: ["Panel de control: cuántos esperan, tiempo promedio, atendidos del día y qué hace cada operador", "Alertas de atención: avisan cuando una atención supera el tiempo máximo del servicio", "Ruta del ticket: la historia completa de un turno, para resolver reclamos con datos"] },
      { title: "Para la gerencia", items: ["Reportes de atenciones, tiempos y desempeño por operador, descargables en Excel o CSV", "Ausentes y esperas largas, con quién los marcó y quién los retomó"] },
      { title: "Administración", items: ["Servicios, operadores, permisos y configuración", "Cada instalación es independiente y se adapta a cada cliente: logo, textos, tema visual de la sala y ticket impreso"] },
    ],
    shotsTitle: "Así se ve",
    shots: [
      { src: "/capturas/tx/recorrido.webp", title: "Recorrido de un turno", caption: "Se emite en el terminal, aparece en la sala, se llama, se atiende y se cierra. Si el cliente no está, vuelve a la fila.", w: 1344, h: 562 },
      { src: "/capturas/tx/terminal.webp", title: "Terminal de autoservicio", caption: "El cliente toca el servicio que necesita y recibe su número en pantalla y en un ticket impreso.", w: 1400, h: 875 },
      { src: "/capturas/tx/sala.webp", title: "Pantalla de sala", caption: "Muestra el turno que se está llamando y los últimos atendidos. Cada llamado suena con aviso de voz.", w: 1400, h: 788 },
      { src: "/capturas/tx/puesto.webp", title: "Puesto del operador", caption: "El turno actual, el servicio y los atajos disponibles. Llamar, iniciar y finalizar son un solo toque o tecla.", w: 1400, h: 972 },
      { src: "/capturas/tx/panel-control.webp", title: "Panel de control", caption: "Cuántos esperan, tiempo promedio, nivel de servicio y qué hace cada operador. Un puesto que se pasa del tiempo máximo se marca en rojo.", w: 1400, h: 1069 },
      { src: "/capturas/tx/reportes-operador.webp", title: "Desempeño por operador", caption: "Turnos atendidos, tiempos de espera y de atención, ocupación y tickets por hora.", w: 1400, h: 972 },
      { src: "/capturas/tx/reportes-ausentes.webp", title: "Ausentes y esperas largas", caption: "Quién marcó cada ausente, cuánto duró y quién lo retomó, y los turnos que esperaron más de lo definido por el negocio.", w: 1400, h: 2001 },
      { src: "/capturas/tx/ruta-ticket.webp", title: "Ruta del ticket", caption: "Con el número de un turno se ve cuándo se sacó, quién lo llamó, cuánto esperó y qué pasó en cada paso.", w: 1400, h: 1069 },
      { src: "/capturas/tx/alertas.webp", title: "Alertas de atención", caption: "Avisan en el momento cuando una atención supera el tiempo máximo, y guardan el historial por día.", w: 1400, h: 972 },
    ],
    needs: {
      title: "Qué hace falta de tu lado",
      items: ["Una pantalla para la sala", "Un equipo con pantalla táctil e impresora térmica para el terminal", "Una computadora por puesto, con navegador", "Conexión a internet. El hardware exacto se define según el local"],
    },
    steps: [
      { title: "Relevamiento", text: "Servicios que se atienden, cantidad de puestos, prioridades y tiempos máximos por servicio." },
      { title: "Configuración y personalización", text: "Carga de servicios y operadores, logo, textos y tema de la pantalla de sala." },
      { title: "Instalación y prueba", text: "Terminal, pantalla de sala y puestos, con una prueba completa de un turno de punta a punta." },
      { title: "Capacitación y acompañamiento", text: "El personal aprende los cuatro atajos y se acompaña los primeros días de uso real." },
    ],
    connects: [{ id: "locus", text: "Locus usa el turnero para el check-in: el jugador muestra su código al llegar." }],
  },

  camp: {
    tagline: "Gestión de campings y guarderías náuticas: clientes, movimientos, cobros y administración en un solo sistema.",
    audience: "Campings y guarderías náuticas que hoy llevan ingresos, egresos y cobros en planillas o cuadernos.",
    problems: [
      { title: "Todo sobre cada cliente", text: "Clientes con sus embarcaciones y vehículos, y el historial de cada uno." },
      { title: "Movimientos al día", text: "Registros de ingreso y egreso, guardería y extras, siempre al día." },
      { title: "Cobros y reportes", text: "Medios de pago, histórico de ventas por usuario y reportes en el dashboard." },
    ],
    groups: [
      { title: "Qué incluye", items: ["Clientes, embarcaciones y vehículos", "Guardería, movimientos y extras", "Medios de pago e histórico de ventas por usuario", "Dashboard e informes en PDF con tu logo"] },
    ],
  },

  bot: {
    tagline: "Una bandeja de WhatsApp con respuestas automáticas y un asistente de IA que responde con los datos de tu negocio.",
    audience: "Negocios locales que reciben muchas consultas por WhatsApp y quieren contestarlas más rápido y sin perder ninguna.",
    problems: [
      { title: "Todas las conversaciones en un solo lugar", text: "Una bandeja unificada, con contactos, etiquetas e historial." },
      { title: "Respuestas automáticas", text: "Respuestas rápidas, por palabras clave y por horarios, para no dejar a nadie esperando." },
      { title: "Un asistente que conoce tu negocio", text: "Dentro de DrizaLink, le preguntás por ventas, stock y ganancia en lenguaje cotidiano." },
    ],
    groups: [
      { title: "Bandeja de WhatsApp", items: ["Todas las conversaciones en un solo lugar", "Respuestas por palabras clave y horarios", "Contactos con etiquetas e historial", "Integrado con el e-commerce del ecosistema"] },
      { title: "Asistente de IA en DrizaLink", note: "Plan Plus de DrizaLink", items: ["Consulta de ventas, productos más vendidos, stock y ganancia", "Cada persona ve solo lo que su rol permite", "Sugiere y vos decidís: nada se envía, se cambia o se compra sin tu autorización"] },
    ],
    connects: [
      { id: "link", text: "Funciona dentro del panel de DrizaLink, sobre los datos de tu negocio." },
      { id: "locus", text: "Recordatorios y reservas por WhatsApp para los jugadores de Locus, sin intervención de nadie." },
    ],
  },

  points: {
    tagline: "Fidelizá a tus clientes sin cambiar tu sistema de ventas. Tus clientes suman puntos en cada compra y vuelven por sus premios.",
    audience: "Comercios que atienden mucha gente en el mostrador y quieren un programa de puntos sin tocar su sistema de facturación.",
    art: { src: "/capturas/points/mascota.webp", alt: "Mascota de DrizaPoints", w: 500, h: 637 },
    problems: [
      { title: "Clientes que vuelven", text: "Cada compra suma puntos y los puntos se canjean por premios. Un motivo más para elegirte." },
      { title: "Rápido en el mostrador", text: "Se carga pasando un lector por el ticket. No hace falta escribir nada ni frenar la fila." },
      { title: "Puntos protegidos", text: "Un ticket solo suma una vez. No se pueden cargar tickets de otro negocio ni tickets viejos." },
    ],
    groups: [
      { title: "Así se usa en el mostrador", note: "Una sola pantalla y tres pasos", items: ["Escanea el ticket: pasan el lector por el QR de la factura, o buscan al cliente por DNI o nombre", "El sistema controla todo solo: que la factura sea del comercio, reciente y que no se haya cargado antes", "Listo, siguiente cliente: los puntos quedan acreditados y la pantalla queda lista para el que sigue"] },
      { title: "Tres maneras de cargar una compra", items: ["Con el QR de la factura: la más rápida, con el lector USB", "Con una foto del ticket: para tickets y remitos sin QR", "Con el DNI del cliente: se busca y se carga la compra a mano, en pocos segundos"] },
      { title: "Los puntos son plata, así que están cuidados", items: ["Un ticket, una vez: si alguien intenta cargarlo de nuevo, el sistema lo rechaza", "Solo de tu comercio: se compara el CUIT de la factura con el del comercio", "Solo tickets recientes: una factura vieja no se acepta"] },
      { title: "Tu marca en el celular de tus clientes", items: ["Cada cliente tiene su aplicación, con el nombre, el logo y los colores de tu comercio", "Se instala como una app, sin pasar por la tienda de aplicaciones", "El cliente ve sus puntos y sus premios sin pedirle nada al mostrador"] },
    ],
    shotsTitle: "Así se ve",
    shots: [
      { src: "/capturas/points/mostrador.webp", title: "En el mostrador", caption: "Un solo campo para todo: el lector escribe ahí directamente. Pantalla de ejemplo, con datos inventados.", w: 1200, h: 510 },
      { src: "/capturas/points/app-cliente.webp", title: "La app del cliente", caption: "Con el nombre y los colores de tu comercio. Ejemplo de la app del cliente.", w: 450, h: 620, device: "celular" },
    ],
    needs: {
      title: "Qué necesitás para empezar",
      items: ["Una computadora con internet y Chrome o Edge, en el mostrador", "Un lector de QR por USB (opcional: sin lector se carga con foto o DNI)", "Tu sistema de siempre: el que ya usás para facturar, que no se toca ni se modifica"],
    },
    faq: [
      { q: "¿Tengo que cambiar mi sistema de facturación?", a: "No. DrizaPoints funciona aparte y lee el ticket que tu sistema ya imprime." },
      { q: "¿Y si el ticket no tiene código QR?", a: "Se saca una foto del ticket, o se busca al cliente por DNI o por nombre y se carga la compra. El control de tickets repetidos funciona igual." },
      { q: "¿Mi equipo necesita capacitación?", a: "Es una sola pantalla y tres pasos. La mayoría lo aprende viéndolo una vez." },
      { q: "¿Puede alguien cargar puntos con un ticket viejo o repetido?", a: "No. El sistema rechaza los tickets repetidos, los de otro comercio y los que superan el plazo permitido." },
      { q: "¿El cliente puede ver sus puntos?", a: "Sí, desde su propia aplicación con la marca de tu comercio." },
    ],
    connects: [{ id: "link", text: "Se integra con DrizaLink y lee el ticket que tu sistema de ventas ya imprime." }],
  },

  locus: {
    tagline: "Tu lugar. Tu momento. El sistema que ordena las reservas, la caja y la cantina de tu complejo deportivo en un solo lugar.",
    audience: "Complejos de pádel, fútbol, tenis y hockey, y cualquier espacio que se reserve por turno: salones, quinchos y más.",
    art: { src: "/capturas/locus/robot.webp", alt: "Personaje de Locus, un robot turquesa con gorra y una tablet", w: 187, h: 305 },
    problems: [
      { title: "Un calendario único", text: "Ves todas las canchas y todos los horarios de un vistazo, y nadie puede reservar un turno que ya está tomado." },
      { title: "Tus jugadores reservan solos", text: "Desde el celular, a cualquier hora, sin llamar y sin esperar que alguien conteste." },
      { title: "La plata, clara", text: "Lo cobrado, las señas y el saldo pendiente de cada turno, y el cierre de caja sin planillas." },
    ],
    groups: [
      { title: "Reservas y calendario", items: ["Calendario por horas y canchas; reservas desde el mostrador o desde la app", "Retención del turno mientras se confirma", "Bloqueos por mantenimiento o torneo", "Cancelaciones con límite de horas y devolución de seña según tu regla"] },
      { title: "Canchas y espacios", items: ["Pádel, fútbol, tenis, hockey y otros espacios (salón, quincho)", "Horarios por día, duración del turno y receso entre turnos", "Tarifas por franja con hora pico, servicios y fotos"] },
      { title: "Jugadores y clientes", items: ["Ficha de cada cliente con su historial y buscador", "Cada jugador puede tener su cuenta y ver sus reservas desde el celular"] },
      { title: "Cobros y caja", items: ["Seña por porcentaje o monto fijo", "Cobro del saldo en efectivo, transferencia o tarjeta", "Pagos y cobranzas con cada movimiento, y cierre de caja"] },
      { title: "Cantina", items: ["Venta rápida con lector de código de barras", "Control de stock, compras y cuentas corrientes de clientes", "Caja y reporte de ventas"] },
      { title: "Torneos", items: ["Torneos por eliminación o liga, con inscripción por equipo", "Partidos programados sobre tus canchas"] },
      { title: "Reportes, equipo y respaldo", items: ["Ocupación por deporte, ingresos de los últimos días y clientes que más juegan", "Usuarios con roles: administrador, recepción y cantina", "Los datos de tu club están separados de los de cualquier otro, con copia de seguridad diaria"] },
    ],
    shotsTitle: "Así se ve",
    shots: [
      { src: "/capturas/locus/panel-inicio.webp", title: "Inicio: cómo viene el día", caption: "Reservas de hoy, lo facturado, la ocupación por deporte, los ingresos de los últimos 7 días y accesos rápidos.", w: 1400, h: 1069 },
      { src: "/capturas/locus/panel-calendario.webp", title: "Calendario", caption: "Horas por canchas, como una grilla. Tocás un horario libre y creás la reserva en segundos.", w: 1400, h: 1069 },
      { src: "/capturas/locus/panel-reservas.webp", title: "Reservas", caption: "Buscar, cobrar el saldo y mandar un recordatorio por WhatsApp con el mensaje ya escrito.", w: 1400, h: 1069 },
      { src: "/capturas/locus/panel-cantina.webp", title: "Cantina", caption: "Venta rápida con tus productos, cuentas corrientes y cierre de caja por turno.", w: 1400, h: 1069 },
      { src: "/capturas/locus/panel-pagos.webp", title: "Pagos y reportes", caption: "Lo cobrado, las señas y el saldo por cobrar, con cada movimiento a la vista.", w: 1400, h: 1069 },
      { src: "/capturas/locus/app-canchas.webp", title: "App del jugador: canchas", caption: "Las canchas con foto, el precio por turno y los horarios libres de cada día.", w: 600, h: 1298, device: "celular" },
      { src: "/capturas/locus/app-horarios.webp", title: "App del jugador: día y horario", caption: "Si un horario ya está tomado, simplemente no aparece.", w: 600, h: 1298, device: "celular" },
      { src: "/capturas/locus/app-pedido.webp", title: "App del jugador: pedir el turno", caption: "El turno queda apartado 2 horas y el pedido te llega por WhatsApp.", w: 600, h: 1298, device: "celular" },
      { src: "/capturas/locus/app-mis-reservas.webp", title: "App del jugador: mis reservas", caption: "Próximas reservas e historial. Puede cancelar dentro del plazo que fijás vos.", w: 600, h: 1298, device: "celular" },
    ],
    extras: {
      title: "Módulos opcionales",
      items: [
        { title: "Cobro online de la seña", text: "Con Mercado Pago: el jugador paga al reservar y el turno se confirma solo." },
        { title: "WhatsApp automático", text: "Con DriBot: recordatorios y reservas por WhatsApp sin intervención de nadie." },
        { title: "Check-in con QR", text: "Con DrizaTx: el jugador muestra su código al llegar." },
      ],
    },
    steps: [
      { title: "Alta de tu club", text: "Te creamos tu dirección propia (por ejemplo, tuclub.locus.driza.dev) y tu usuario de administrador." },
      { title: "Primeros pasos guiados", text: "El sistema te lleva paso a paso para cargar el WhatsApp del club, las canchas, los horarios, los precios, la seña y tu equipo." },
      { title: "Prueba tranquila", text: "Lo usás unos días como si fuera real y ajustamos lo que haga falta." },
      { title: "Lanzamiento", text: "Les pasás el enlace a tus jugadores para que empiecen a pedir turnos desde el celular." },
    ],
    connects: [
      { id: "tx", text: "Check-in con el turnero: el jugador muestra su código al llegar." },
      { id: "bot", text: "Recordatorios y reservas por WhatsApp, sin intervención de nadie." },
    ],
  },
}
