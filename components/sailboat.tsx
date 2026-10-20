/** Silueta de velero para los fondos de atardecer. */
export function Sailboat({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 250" className={className} aria-hidden fill="#05060a">
      <polygon points="104,8 104,186 172,186" />
      <polygon points="97,48 97,186 38,186" />
      <rect x="99.5" y="4" width="2.5" height="196" />
      <path d="M14 192 H190 Q176 222 140 226 H62 Q30 222 14 192 Z" />
    </svg>
  )
}
