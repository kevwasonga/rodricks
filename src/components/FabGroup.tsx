import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"

const contacts = [
  {
    icon: "call" as const,
    label: "+254 794 627 947",
    hint: "Rodricks Otieno · Phone / WhatsApp",
    href: "https://wa.me/254794627947?text=Hello%20Rodricks%20Otieno!",
  },
  {
    icon: "chat" as const,
    label: "+254 773 625 138",
    hint: "Support · WhatsApp",
    href: "https://wa.me/254773625138?text=Hello%20Rodricks%20Otieno!",
  },
]

export function FabGroup() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="fixed bottom-4 right-4 sm:bottom-[28px] sm:right-[28px] z-50 flex flex-col items-end gap-2.5"
    >
      <span className="hidden sm:block font-mono text-[10px] tracking-[2px] uppercase text-muted-foreground/60 -mb-0.5">
        Contact Us
      </span>

      {open && (
        <div
          className="flex flex-col gap-1.5 min-w-[236px] max-w-[calc(100vw-32px)] bg-card border border-primary/20 rounded-[20px] shadow-[0_6px_28px_rgba(0,0,0,0.55)] p-2 animate-[waMenuIn_0.2s_ease-out]"
          role="menu"
          aria-label="WhatsApp contact options"
        >
          {contacts.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-transparent text-foreground transition-colors hover:bg-primary/10 hover:border-primary/20"
            >
              <span
                className="material-symbols-outlined text-primary shrink-0"
                style={{ fontSize: 20, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}
                aria-hidden="true"
              >
                {c.icon}
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold">{c.label}</span>
                <small className="text-muted-foreground text-[0.72rem] font-normal tracking-wide">{c.hint}</small>
              </span>
            </a>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close WhatsApp options" : "Contact us on WhatsApp"}
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          "group relative flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25d366] text-white",
          "shadow-[0_6px_28px_rgba(0,0,0,0.55)] transition-all duration-200 hover:scale-[1.08] hover:bg-[#1aa851] active:scale-95"
        )}
      >
        <WhatsAppIcon size={24} wght={500} className="text-white" />
        <span
          className={cn(
            "pointer-events-none absolute right-[62px] top-1/2 -translate-y-1/2 hidden sm:block whitespace-nowrap",
            "rounded-md border border-primary/20 bg-card px-3 py-1.5 text-xs text-foreground shadow-sm transition-opacity",
            open ? "opacity-0" : "opacity-0 group-hover:opacity-100"
          )}
        >
          Chat with us
        </span>
      </button>
    </div>
  )
}