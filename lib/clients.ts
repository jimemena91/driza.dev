// Clientes que se muestran en cada sistema. Para sumar uno: subí su logo a
// public/clientes/ y agregá una línea acá. Sin `href`, el logo se muestra sin enlace.
import type { ProductId } from "@/lib/site"

export type Client = {
  name: string
  logo: string
  /** Tienda, web o Instagram del cliente. */
  href?: string
  /** En qué sistemas se muestra. */
  systems: ProductId[]
}

export const CLIENTS: Client[] = [
  { name: "Casa Martínez", logo: "/clientes/casa-martinez.webp", systems: ["link", "tx"] },
  { name: "El Biguá", logo: "/clientes/el-bigua.webp", systems: ["camp"] },
]

/** Título de la sección, por sistema. */
export const CLIENTS_TITLE: Partial<Record<ProductId, string>> = {
  link: "Visitá las tiendas de nuestros clientes",
}
