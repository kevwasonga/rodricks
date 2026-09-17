import { useEffect, useState } from "react"
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-[rgba(10,10,10,0.96)] backdrop-blur-[16px] shadow-[0_1px_0_hsl(var(--primary)/0.18)] border-primary/25 py-3"
          : "py-4 bg-[rgba(10,10,10,0.5)] backdrop-blur-[10px] border-primary/10"
      )}
    >
      <nav className="container-custom flex items-center justify-between gap-6" aria-label="Main navigation">
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-3 shrink-0 group" aria-label="Rodricks Analytics — Home">
          <img
            src="/logo-512-circle.png"
            alt="Rodricks Analytics Logo"
            width="44"
            height="44"
            loading="eager"
            decoding="async"
            className="h-11 w-11 object-cover rounded-full shadow-[0_0_0_2px_hsl(var(--primary)/0.28),0_0_14px_hsl(var(--primary)/0.22)] shrink-0 transition-transform duration-300 group-hover:scale-[1.5]"
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-bold text-[0.95rem] tracking-[0.03em] text-white">RODRICKS ANALYTICS</span>
            <span className="font-mono text-[0.62rem] tracking-[0.12em] text-primary uppercase">Statistics · Research · Data Analysis</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "px-3.5 py-2 text-[0.875rem] font-medium tracking-wide rounded-md transition-colors",
                  activeId === item.href.slice(1) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-primary/10"
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
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-[hsl(40_55%_71%)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_hsl(var(--primary)/0.28)] transition-all"
          >
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span> WhatsApp
          </a>
        </div>

        <button
          className={cn(
            "lg:hidden inline-flex items-center justify-center rounded-lg p-2.5 transition-colors",
            "border border-primary/10 bg-muted/20 text-primary hover:bg-primary/10"
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className="material-symbols-outlined text-[22px]">{mobileOpen ? "close" : "menu"}</span>
        </button>
      </nav>

      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" onClick={() => setMobileOpen(false)} aria-hidden="true" />
          <div className="lg:hidden fixed top-0 right-0 h-screen w-[min(300px,85vw)] bg-[hsl(0_0%_7%)] border-l border-primary/15 shadow-[0_12px_48px_rgba(0,0,0,0.6)] z-50 flex flex-col gap-1 pt-[88px] px-7 pb-12 overflow-y-auto">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "px-4 py-3 rounded-lg text-[0.95rem] font-medium transition-colors",
                  activeId === item.href.slice(1) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/254794627947?text=Hello%20Rodricks%20Otieno!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white hover:bg-green-500 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span> WhatsApp Consultation
            </a>
          </div>
        </>
      )}
    </header>
  )
}
