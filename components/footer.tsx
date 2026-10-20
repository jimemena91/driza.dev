import { Logo } from "@/components/logo"
import { PRODUCTS, SITE } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-12 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo size={44} />
          <p className="mt-3 text-sm text-muted-foreground">Software de gestión a medida · {SITE.location}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {PRODUCTS.map((p) => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-8 max-w-6xl border-t border-border pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Driza. Todos los derechos reservados.
      </p>
    </footer>
  )
}
