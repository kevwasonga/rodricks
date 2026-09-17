import { Mail, Phone, ChevronRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-background border-t border-border/50 pt-14 pb-8 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,148,43,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(212,148,43,0.5)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <div className="relative container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.7fr_0.9fr_1.1fr_1.3fr] gap-10 lg:gap-8 mb-10">
          <div>
            <a href="#home" className="flex items-center gap-3 mb-4">
              <img src="/rodrologo.png" alt="Rodricks Analytics Logo" width="48" height="48" loading="lazy" decoding="async" className="h-12 w-12 object-contain shrink-0" />
              <span className="flex flex-col">
                <span className="font-display font-bold tracking-wider text-foreground">
                  RODRICKS<span className="text-teal-400"> ANALYTICS</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Statistics · Research · Data Analysis
                </span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm mb-5">
              Professional statistical analysis and research consultancy transforming raw data into actionable insights for organizations, institutions, researchers, and policy stakeholders across Africa.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://wa.me/254794627947"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted border border-border/50 text-muted-foreground hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="mailto:otienorodricks8@gmail.com"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted border border-border/50 text-muted-foreground hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="tel:+254794627947"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted border border-border/50 text-muted-foreground hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all"
                aria-label="Phone"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-amber-400 transition-colors inline-flex items-center gap-1 group">
                    {link.label}
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4 text-sm">Services</h4>
            <ul className="space-y-2.5">
              {["Statistical Analysis", "Research Consultancy", "Financial Analysis", "Survey Analysis", "Monitoring & Evaluation Support"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-amber-400 transition-colors inline-flex items-center gap-1 group">
                    {s}
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4 text-sm">Contact</h4>
            <address className="not-italic space-y-3 text-sm">
              <a href="tel:+254794627947" className="flex items-center gap-2.5 text-muted-foreground hover:text-amber-400 transition-colors">
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                +254 794 627 947
              </a>
              <a href="tel:+254773625138" className="flex items-center gap-2.5 text-muted-foreground hover:text-amber-400 transition-colors">
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                +254 773 625 138
              </a>
              <a href="mailto:otienorodricks8@gmail.com" className="flex items-center gap-2.5 text-muted-foreground hover:text-amber-400 transition-colors">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                otienorodricks8@gmail.com
              </a>
              <a href="https://wa.me/254794627947?text=Hello%20Rodricks%20Otieno!" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-muted-foreground hover:text-green-400 transition-colors">
                <WhatsAppIcon className="text-green-500" />
                WhatsApp Consultation
              </a>
            </address>
          </div>
        </div>

        <Separator className="mb-6 bg-border/50" />

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

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.05 4.91A9.91 9.91 0 0 0 12.02 2C6.45 2 2 6.05 2 11.1c0 1.91.55 3.76 1.6 5.36L2 22l5.7-1.46a10 10 0 0 0 4.32 1.03h.01c5.57 0 10.02-4.05 10.02-9.1 0-2.43-1.03-4.72-2.92-6.36l-.18-.2Zm-7.03 14.6h-.01a8.3 8.3 0 0 1-4.24-1.12l-.3-.18-3.38.87.9-3.2-.2-.32a7.5 7.5 0 0 1-1.14-3.96c0-4.13 3.65-7.5 8.14-7.5 2.18 0 4.22.82 5.75 2.3a7.7 7.7 0 0 1 2.4 5.56c0 4.13-3.65 7.5-8.12 7.5Zm6.54-5.6c-.36-.18-2.13-.99-2.46-1.11-.33-.11-.57-.17-.81.17-.24.35-.93 1.11-1.14 1.34-.21.23-.42.26-.78.08-.36-.17-1.52-.53-2.9-1.69a10.8 10.8 0 0 1-2-2.36c-.21-.35-.02-.54.16-.71.16-.16.36-.4.54-.6.18-.2.24-.34.36-.57.12-.23.06-.43-.03-.6-.09-.17-.81-1.85-1.11-2.53-.29-.67-.59-.58-.81-.59h-.69c-.24 0-.63.09-.96.43-.33.34-1.26 1.17-1.26 2.85s1.29 3.31 1.47 3.54c.18.23 2.54 3.67 6.16 5.15.86.35 1.53.56 2.06.72.86.26 1.65.22 2.27.14.69-.1 2.13-.82 2.43-1.62.3-.8.3-1.48.21-1.62-.09-.14-.33-.23-.69-.41Z" />
    </svg>
  )
}
