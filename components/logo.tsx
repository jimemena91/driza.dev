import Image from "next/image"

// El logo es vertical (519x600)
export function Logo({ size = 44 }: { size?: number }) {
  return (
    <Image
      src="/driza-logo.png"
      alt="Driza"
      width={Math.round(size * 0.865)}
      height={size}
      style={{ width: size * 0.865, height: size }}
      priority
    />
  )
}
