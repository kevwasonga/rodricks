import { cn } from "@/lib/utils"

interface WhatsAppIconProps {
  className?: string
  size?: number
  wght?: number
  opsz?: number
  filled?: boolean
}

export function WhatsAppIcon({
  className,
  size = 24,
  wght = 500,
  opsz = 24,
  filled = true,
}: WhatsAppIconProps) {
  return (
    <span
      className={cn("material-symbols-outlined", className)}
      aria-hidden="true"
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${wght}, 'GRAD' 0, 'opsz' ${opsz}`,
      }}
    >
      chat
    </span>
  )
}