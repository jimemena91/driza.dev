import { Github, Instagram, Linkedin, Youtube } from "lucide-react"
import { Brand } from "@/components/brand"
import { SITE } from "@/lib/site"

const NETWORKS = [
  { key: "instagram", label: "Instagram", Icon: Instagram },
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin },
  { key: "youtube", label: "YouTube", Icon: Youtube },
  { key: "github", label: "GitHub", Icon: Github },
] as const

export function Footer() {
  const links = NETWORKS.filter((n) => SITE.socials[n.key])
  return (
    <footer className="border-t border-white/10 bg-[#06070b] px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <Brand size={40} since={SITE.since} />
          <div className="hidden h-10 w-px bg-white/15 md:block" />
          <p className="text-sm leading-relaxed text-white/65">
            <span className="text-white/85">Software a medida, hecho en Argentina.</span>
            <br />
            Soluciones que impulsan negocios en el presente y el futuro.
          </p>
        </div>
        <div className="flex items-center gap-6">
          {links.length > 0 && (
            <ul className="flex items-center gap-4">
              {links.map(({ key, label, Icon }) => (
                <li key={key}>
                  <a href={SITE.socials[key]} target="_blank" rel="noreferrer" aria-label={label} className="text-white/80 transition hover:text-[var(--gold)]">
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          )}
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Driza. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
