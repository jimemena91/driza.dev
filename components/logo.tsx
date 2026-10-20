import Image from "next/image"

export function Logo({ size = 44 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-3">
      <Image src="/driza-logo.png" alt="Driza" width={size * 1.28} height={size} className="h-auto" style={{ width: size * 1.28 }} priority />
    </span>
  )
}
