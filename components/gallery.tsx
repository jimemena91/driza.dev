"use client"

import { Maximize2 } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import type { Shot } from "@/lib/product-details"

/** Capturas del sistema. Al tocar una se abre grande. */
export function Gallery({ shots, color }: { shots: Shot[]; color: string }) {
  const [open, setOpen] = useState<Shot | null>(null)
  const wide = shots.filter((s) => s.device !== "celular")
  const phones = shots.filter((s) => s.device === "celular")

  const Card = ({ s, phone }: { s: Shot; phone?: boolean }) => (
    <button
      type="button"
      onClick={() => setOpen(s)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-[#0b0c12] text-left transition hover:-translate-y-0.5"
      style={{ borderColor: `${color}55`, boxShadow: `0 0 22px ${color}1f` }}
      aria-label={`Ver en grande: ${s.title}`}
    >
      <div className={`relative overflow-hidden bg-black/40 ${phone ? "aspect-[9/16] sm:aspect-[9/17]" : "aspect-[4/3]"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={s.src}
          alt={s.title}
          width={s.w}
          height={s.h}
          loading="lazy"
          className={`h-full w-full ${s.w / s.h > 1.5 ? "object-contain" : "object-cover object-top"}`}
        />
        <span className="absolute right-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 className="h-4 w-4" />
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-head text-[15px] font-bold text-white">{s.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-white/65">{s.caption}</p>
      </div>
    </button>
  )

  return (
    <>
      {wide.length > 0 && (
        <div className="grid gap-5 md:grid-cols-2">
          {wide.map((s) => (
            <Card key={s.src} s={s} />
          ))}
        </div>
      )}
      {phones.length > 0 && (
        <div className={`grid gap-4 sm:gap-5 ${phones.length === 1 ? "" : "grid-cols-2 lg:grid-cols-4"} ${wide.length > 0 ? "mt-8" : ""} ${phones.length === 1 ? "max-w-[19rem] grid-cols-1" : phones.length < 3 ? "max-w-xl" : ""}`}>
          {phones.map((s) => (
            <Card key={s.src} s={s} phone />
          ))}
        </div>
      )}

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        {open && (
          <DialogContent className="max-h-[92vh] w-auto max-w-[95vw] gap-3 overflow-y-auto border-white/15 bg-[#0b0c12] p-3 text-white sm:max-w-5xl">
            <DialogTitle className="pr-8 font-head text-base font-bold">{open.title}</DialogTitle>
            <DialogDescription className="text-sm text-white/65">{open.caption}</DialogDescription>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={open.src} alt={open.title} width={open.w} height={open.h} className="mx-auto h-auto max-h-none w-full rounded-lg" style={open.device === "celular" ? { maxWidth: 380 } : undefined} />
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}
