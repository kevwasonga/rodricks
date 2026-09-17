import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeId, setActiveId] = useState("home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      let current = "home"
      document.querySelectorAll("section[id]").forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 120) current = s.id
      })
      setActiveId(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [mobileOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offset = 72
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
    setMobileOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[rgba(8,12,18,0.92)] backdrop-blur-[24px] shadow-[0_1px_0_rgba(212,148,43,0.1),0_8px_40px_rgba(0,0,0,0.4)] py-2.5"
          : "py-4 bg-transparent"
      )}
    >
      <nav className="container-custom flex items-center justify-between gap-6" aria-label="Main navigation">
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-3 shrink-0">
          <img
            src="/rodrologo.png"
            alt="Rodricks Analytics Logo"
            width="60"
            height="60"
            loading="eager"
            decoding="async"
            className="h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] object-contain drop-shadow-[0_0_12px_rgba(212,148,43,0.4)] transition-transform hover:scale-105 shrink-0"
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-bold text-[0.95rem] sm:text-[1.05rem] tracking-[1.8px] text-foreground">
              RODRICKS<span className="text-teal-400"> ANALYTICS</span>
            </span>
            <span className="font-mono text-[0.55rem] tracking-[2px] text-muted-foreground uppercase mt-0.5">
              Statistics · Research · Data Analysis
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "px-3 py-2 text-[0.82rem] font-medium tracking-wide rounded-md transition-colors",
                  activeId === item.href.slice(1) ? "text-amber-400" : "text-muted-foreground hover:text-amber-400"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/254794627947?text=Hello%20Rodricks%20Otieno!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-green-500/25 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400 hover:bg-green-500/20 transition-colors"
          >
            <MessageCircleIcon /> WhatsApp
          </a>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center rounded-lg border border-border/50 bg-muted/50 p-2.5 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-[rgba(8,12,18,0.97)] backdrop-blur-xl border-t border-border/20 animate-in fade-in slide-in-from-top-2">
          <div className="container-custom py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                  activeId === item.href.slice(1)
                    ? "bg-amber-500/10 text-amber-400"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-amber-400"
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/254794627947?text=Hello%20Rodricks%20Otieno!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white hover:bg-green-500 transition-colors"
            >
              <MessageCircleIcon /> WhatsApp Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function MessageCircleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.05 4.91A9.91 9.91 0 0 0 12.02 2C6.45 2 2 6.05 2 11.1c0 1.91.55 3.76 1.6 5.36L2 22l5.7-1.46a10 10 0 0 0 4.32 1.03h.01c5.57 0 10.02-4.05 10.02-9.1 0-2.43-1.03-4.72-2.92-6.36l-.18-.2Zm-7.03 14.6h-.01a8.3 8.3 0 0 1-4.24-1.12l-.3-.18-3.38.87.9-3.2-.2-.32a7.5 7.5 0 0 1-1.14-3.96c0-4.13 3.65-7.5 8.14-7.5 2.18 0 4.22.82 5.75 2.3a7.7 7.7 0 0 1 2.4 5.56c0 4.13-3.65 7.5-8.12 7.5Zm6.54-5.6c-.36-.18-2.13-.99-2.46-1.11-.33-.11-.57-.17-.81.17-.24.35-.93 1.11-1.14 1.34-.21.23-.42.26-.78.08-.36-.17-1.52-.53-2.9-1.69a10.8 10.8 0 0 1-2-2.36c-.21-.35-.02-.54.16-.71.16-.16.36-.4.54-.6.18-.2.24-.34.36-.57.12-.23.06-.43-.03-.6-.09-.17-.81-1.85-1.11-2.53-.29-.67-.59-.58-.81-.59h-.69c-.24 0-.63.09-.96.43-.33.34-1.26 1.17-1.26 2.85s1.29 3.31 1.47 3.54c.18.23 2.54 3.67 6.16 5.15.86.35 1.53.56 2.06.72.86.26 1.65.22 2.27.14.69-.1 2.13-.82 2.43-1.62.3-.8.3-1.48.21-1.62-.09-.14-.33-.23-.69-.41Z" />
    </svg>
  )
}
