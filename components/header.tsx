"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <span className="font-serif text-2xl font-bold text-accent-foreground">D</span>
          </div>
          <span className="font-serif text-2xl font-bold">Driza</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#productos"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Productos
          </a>
          <a
            href="#caracteristicas"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Características
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contacto
          </a>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" size="sm">
            Iniciar Sesión
          </Button>
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Solicitar Demo
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-lg md:hidden">
          <div className="space-y-1 px-6 py-4">
            <a href="#productos" className="block py-2 text-sm font-medium">
              Productos
            </a>
            <a href="#caracteristicas" className="block py-2 text-sm font-medium">
              Características
            </a>
            <a href="#contacto" className="block py-2 text-sm font-medium">
              Contacto
            </a>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" size="sm" className="w-full">
                Iniciar Sesión
              </Button>
              <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Solicitar Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
