import { useEffect, useRef, useState } from "react"
import { ChevronRight } from "lucide-react"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { cn } from "@/lib/utils"

const waContactOptions = [
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

function MaterialIcon({ icon, fill = false }: { icon: string; fill?: boolean }) {
  return (
    <span
      className="material-symbols-outlined"
      style={{
        fontSize: 18,
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 20`,
      }}
      aria-hidden="true"
    >
      {icon}
    </span>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  const [waOpen, setWaOpen] = useState(false)
  const waRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      if (waRef.current && !waRef.current.contains(e.target as Node)) setWaOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setWaOpen(false)
    }
    document.addEventListener("pointerdown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("pointerdown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [])

  return (
    <footer className="relative bg-background border-t border-primary/10 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,148,43,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(212,148,43,0.5)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr] gap-10 lg:gap-8 border-b border-primary/15 pb-12 mb-10">
          <div>
            <a href="#home" className="flex items-center gap-3 mb-5 group" aria-label="Rodricks Analytics — back to top">
              <img
                src="/images/brand-logo-circle-512.png"
                alt="Rodricks Analytics Logo"
                width="48"
                height="48"
                loading="lazy"
                decoding="async"
                className="h-12 w-12 object-cover rounded-full shrink-0 shadow-[0_0_0_2px_hsl(var(--primary)/0.24),0_0_12px_hsl(var(--primary)/0.18)] transition-all duration-300 group-hover:scale-[1.5] group-hover:shadow-[0_0_0_3px_hsl(var(--primary)/0.45),0_0_22px_hsl(var(--primary)/0.4)]"
              />
              <span className="flex items-baseline gap-2 leading-none">
                <span className="font-display font-bold tracking-[0.03em] text-white text-[0.98rem]">
                  RODRICKS
                </span>
                <span className="font-display font-medium tracking-[0.1em] text-[0.78rem] text-muted-foreground">
                  ANALYTICS
                </span>
              </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-primary mt-1">
                  Statistics · Research · Data Analysis
                </span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm mb-6">
              Professional statistical analysis and research consultancy transforming raw data into actionable insights for organizations, institutions, researchers, and policy stakeholders across Africa.
            </p>

            <div className="flex items-center gap-2.5">
              <div ref={waRef} className="relative inline-flex">
                <button
                  type="button"
                  onClick={() => setWaOpen((o) => !o)}
                  aria-label="WhatsApp contact options"
                  aria-expanded={waOpen}
                  aria-haspopup="menu"
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 text-muted-foreground transition-all",
                    "hover:border-primary hover:text-primary hover:bg-primary/10",
                    waOpen && "border-primary text-primary bg-primary/10"
                  )}
                >
                  <WhatsAppIcon size={20} wght={500} />
                </button>
                {waOpen && (
                  <div
                    className="absolute bottom-[calc(100%+10px)] right-0 z-10 flex flex-col gap-1 min-w-[236px] bg-card border border-primary/20 rounded-[16px] shadow-[0_6px_28px_rgba(0,0,0,0.55)] p-2 animate-[waMenuIn_0.2s_ease-out]"
                    role="menu"
                    aria-label="WhatsApp contact options"
                  >
                    {waContactOptions.map((c) => (
                      <a
                        key={c.href}
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        onClick={() => setWaOpen(false)}
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
              </div>

              <a
                href="mailto:otienorodricks8@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="Email"
              >
                <MaterialIcon icon="mail" />
              </a>
              <a
                href="tel:+254794627947"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="Phone"
              >
                <MaterialIcon icon="call" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-5 text-sm">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                    {link.label}
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-5 text-sm">Services</h4>
            <ul className="space-y-2.5">
              {["Statistical Analysis", "Research Consultancy", "Financial Analysis", "Survey Analysis", "Monitoring & Evaluation Support"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                    {s}
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-5 text-sm">Contact</h4>
            <address className="not-italic space-y-3 text-sm">
              <a href="tel:+254794627947" className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 18 }} aria-hidden="true">
                  call
                </span>
                <span className="font-mono text-[0.82rem] tracking-wide">+254 794 627 947</span>
              </a>
              <a href="tel:+254773625138" className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 18 }} aria-hidden="true">
                  call
                </span>
                <span className="font-mono text-[0.82rem] tracking-wide">+254 773 625 138</span>
              </a>
              <a href="mailto:otienorodricks8@gmail.com" className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors break-all">
                <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 18 }} aria-hidden="true">
                  mail
                </span>
                otienorodricks8@gmail.com
              </a>
              <a href="https://wa.me/254794627947?text=Hello%20Rodricks%20Otieno!" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-muted-foreground hover:text-green-400 transition-colors">
                <WhatsAppIcon size={20} wght={500} className="text-green-500" />
                <span className="font-mono text-[0.82rem] tracking-wide">WhatsApp Consultation</span>
              </a>
            </address>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground text-center md:text-left">&copy; {year} Rodricks Analytics. All rights reserved.</p>
          <p className="font-mono text-[11px] uppercase tracking-[2px] text-muted-foreground text-center">
            Statistical Analysis · Research Consultancy · Data Insights
          </p>
        </div>
      </div>
    </footer>
  )
}