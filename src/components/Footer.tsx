import { Mail, Phone, ChevronRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"

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
                  RODRICKS<span className="text-primary"> ANALYTICS</span>
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
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted border border-border/50 text-muted-foreground hover:bg-primary hover:border-primary hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={20} wght={500} className="text-green-500" />
              </a>
              <a
                href="mailto:otienorodricks8@gmail.com"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted border border-border/50 text-muted-foreground hover:bg-primary hover:border-primary hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="tel:+254794627947"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted border border-border/50 text-muted-foreground hover:bg-primary hover:border-primary hover:text-white transition-all"
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
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
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
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
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
              <a href="tel:+254794627947" className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                +254 794 627 947
              </a>
              <a href="tel:+254773625138" className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                +254 773 625 138
              </a>
              <a href="mailto:otienorodricks8@gmail.com" className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                otienorodricks8@gmail.com
              </a>
              <a href="https://wa.me/254794627947?text=Hello%20Rodricks%20Otieno!" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-muted-foreground hover:text-green-400 transition-colors">
                <WhatsAppIcon size={20} wght={500} className="text-green-500" />
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
