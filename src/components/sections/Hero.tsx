import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, TrendingUp } from "lucide-react"

const stats = [
  { label: "Projects", value: 50, suffix: "+" },
  { label: "Satisfaction", value: 98, suffix: "%" },
  { label: "Yrs Experience", value: 15, suffix: "+" },
  { label: "Evidence-Based", value: 100, suffix: "%" },
]

const bars = [
  { name: "Education", value: 82, label: "0.82***", positive: true },
  { name: "Income", value: 71, label: "0.71***", positive: true },
  { name: "Location", value: 59, label: "0.59**", positive: true },
  { name: "Age", value: 34, label: "-0.34*", positive: false },
  { name: "Gender", value: 46, label: "0.46**", positive: true },
]

const metrics = [
  { value: "0.847", label: "Nagelkerke R²" },
  { value: "94.3%", label: "Classification" },
  { value: "p<.001", label: "Model Fit" },
]

const floatingLabels = [
  { text: "p < 0.001", top: "15%", left: "5%", delay: 0 },
  { text: "R² = 0.94", top: "25%", right: "8%", delay: 1.2 },
  { text: "n = 2,847", top: "55%", left: "3%", delay: 2.4 },
  { text: "β = 0.73***", top: "70%", right: "5%", delay: 0.8 },
  { text: "χ² = 24.6", top: "40%", left: "8%", delay: 3.2 },
  { text: "CI [0.68, 0.79]", bottom: "20%", right: "10%", delay: 1.6 },
  { text: "σ = 1.42", bottom: "35%", left: "6%", delay: 2 },
  { text: "μ = 3.87", top: "82%", right: "15%", delay: 4 },
]

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ctx.fillStyle = "rgba(212,148,43,0.03)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      return
    }

    let W = 0,
      H = 0,
      nodes: Node[] = [],
      animId = 0,
      paused = false

    const resize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    class Node {
      x = 0
      y = 0
      vx = 0
      vy = 0
      r = 0
      pulse = 0
      type = "amber"
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.vx = (Math.random() - 0.5) * 0.35
        this.vy = (Math.random() - 0.5) * 0.35
        this.r = 1.5 + Math.random() * 2
        this.pulse = Math.random() * Math.PI * 2
        this.type = Math.random() > 0.7 ? "teal" : "amber"
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        this.pulse += 0.02
        if (this.x < -20) this.x = W + 20
        if (this.x > W + 20) this.x = -20
        if (this.y < -20) this.y = H + 20
        if (this.y > H + 20) this.y = -20
      }
      draw() {
        const pr = this.r + Math.sin(this.pulse) * 0.6
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, pr, 0, Math.PI * 2)
        ctx!.fillStyle = this.type === "teal" ? "rgba(13,155,155,0.7)" : "rgba(212,148,43,0.7)"
        ctx!.fill()
      }
    }

    const buildNodes = () => {
      const isMobile = window.innerWidth < 768
      const cap = isMobile ? 32 : 80
      const count = Math.floor((W * H) / 14000)
      nodes = Array.from({ length: Math.min(count, cap) }, () => new Node())
    }

    const draw = () => {
      if (paused) {
        animId = requestAnimationFrame(draw)
        return
      }
      ctx.clearRect(0, 0, W, H)
      const LINK_DIST = 120
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.2
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(212,148,43,${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
      for (let y = 0; y < H; y += 60) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(W, y)
        ctx.strokeStyle = "rgba(212,148,43,0.03)"
        ctx.lineWidth = 1
        ctx.stroke()
      }
      for (let x = 0; x < W; x += 60) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, H)
        ctx.strokeStyle = "rgba(212,148,43,0.03)"
        ctx.lineWidth = 1
        ctx.stroke()
      }
      nodes.forEach((n) => {
        n.update()
        n.draw()
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    buildNodes()
    draw()

    const onResize = () => {
      resize()
      buildNodes()
    }
    window.addEventListener("resize", onResize)

    const hero = document.getElementById("home")
    const obs = hero
      ? new IntersectionObserver(
          (entries) => {
            paused = !entries[0].isIntersecting
          },
          { threshold: 0 }
        )
      : null
    if (hero && obs) obs.observe(hero)

    const onVis = () => {
      paused = document.hidden
    }
    document.addEventListener("visibilitychange", onVis)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", onResize)
      document.removeEventListener("visibilitychange", onVis)
      if (hero && obs) obs.unobserve(hero)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen bg-background overflow-hidden flex flex-col" aria-labelledby="hero-heading">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-45 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(212,148,43,0.07)_0%,transparent_60%),radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(13,155,155,0.05)_0%,transparent_60%),linear-gradient(180deg,transparent_50%,hsl(var(--background))_100%)] pointer-events-none" aria-hidden="true" />

      {floatingLabels.map((label, i) => (
        <motion.div
          key={i}
          className={cn(
            "absolute hidden lg:block font-mono text-xs tracking-wide text-teal-400/25 pointer-events-none",
            "px-2 py-1 border border-teal-500/20 rounded bg-teal-500/5"
          )}
          style={{ top: label.top, left: label.left, right: label.right, bottom: label.bottom } as React.CSSProperties}
          animate={{ y: [-8, 0, -8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: label.delay }}
        >
          {label.text}
        </motion.div>
      ))}

      <div className="relative z-10 flex-1 flex items-center pt-20 pb-16">
        <div className="container-custom w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <motion.div
                className="flex items-center gap-3 mb-8 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgb(13,155,155)] shrink-0"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="font-mono text-xs uppercase tracking-widest text-teal-400">Rodricks Analytics</span>
                <span className="hidden sm:block h-px bg-border/50 max-w-[80px] flex-1" />
              </motion.div>

              <motion.h1
                id="hero-heading"
                className="font-display font-extrabold tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.0 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <span className="block text-foreground">Transform</span>
                <span className="block" style={{ fontSize: "clamp(3.2rem, 7vw, 6rem)" }}>
                  <span className="inline-flex items-baseline">
                    <span className="font-display font-black gradient-text" style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", lineHeight: 0.9 }}>
                      D
                    </span>
                    <span className="font-display font-light text-muted-foreground tracking-[0.15em]" style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)" }}>
                      ATA
                    </span>
                  </span>
                </span>
                <span className="block text-foreground">
                  Into <span className="gradient-text">Intelligence</span>
                </span>
              </motion.h1>

              <motion.p
                className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-muted-foreground mt-5 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Statistical Analysis · Research Consultancy · Data Insights
              </motion.p>

              <motion.p
                className="text-[15px] sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Evidence-based analytical solutions for organizations, institutions, researchers, businesses, and policy stakeholders. We decode complexity — one dataset at a time.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button size="xl" className="gap-2 font-semibold w-full sm:w-auto" asChild>
                  <a href="#contact">
                    Start Your Analysis
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button size="xl" variant="whatsapp" className="gap-2 w-full sm:w-auto" asChild>
                  <a href="https://wa.me/254794627947?text=Hello%20Rodricks%20Otieno!" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon /> WhatsApp
                  </a>
                </Button>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 sm:flex border border-border/50 rounded-xl overflow-hidden bg-muted/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {stats.map((stat, i) => (
                  <div key={stat.label} className="flex flex-1 flex-col items-center gap-1 px-3 py-4 border-r border-border/40 last:border-r-0 sm:border-b-0 border-b even:border-r-0 sm:even:border-r sm:border-r">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display font-extrabold gradient-text text-xl sm:text-2xl">{stat.value}</span>
                      <span className="font-semibold text-teal-400 text-sm">{stat.suffix}</span>
                    </div>
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground text-center">{stat.label}</span>
                    {i < stats.length - 1 && <span className="hidden" />}
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="relative lg:pl-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="card-base relative overflow-hidden max-w-[460px] mx-auto shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
                <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border/30">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="font-mono text-xs text-muted-foreground ml-2">regression_analysis.r</span>
                </div>
                <div className="p-5 sm:p-6 space-y-5 bg-card">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3">Coefficient Plot</p>
                    <div className="space-y-3">
                      {bars.map((bar, i) => (
                        <motion.div
                          key={bar.name}
                          className="grid grid-cols-[60px_1fr_52px] items-center gap-2 sm:gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                        >
                          <span className="font-mono text-[11px] text-muted-foreground">{bar.name}</span>
                          <div className="h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className={cn("h-full rounded-full", bar.positive ? "bg-gradient-to-r from-amber-500 to-amber-400" : "bg-gradient-to-r from-red-500 to-red-400")}
                              initial={{ width: 0 }}
                              animate={{ width: `${bar.value}%` }}
                              transition={{ duration: 1.4, delay: 0.5 + i * 0.1 }}
                            />
                          </div>
                          <span className={cn("font-mono text-xs text-right", bar.positive ? "text-teal-400" : "text-red-400")}>{bar.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 border border-border/50 rounded-lg overflow-hidden">
                    {metrics.map((metric) => (
                      <div key={metric.label} className="p-3 sm:p-4 text-center border-r border-border/50 last:border-r-0">
                        <div className="font-mono text-sm sm:text-lg font-bold text-teal-400">{metric.value}</div>
                        <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-muted border border-border/50 rounded-lg p-3 sm:p-4 font-mono text-[11px] sm:text-xs leading-relaxed text-muted-foreground overflow-x-auto">
                    <span className="text-zinc-500"># Logistic Regression — R</span>
                    <br />
                    <span className="text-teal-400">glm</span>(<span className="text-emerald-400">attendance</span> ~ <span className="text-emerald-400">education</span> +<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">income</span> + <span className="text-emerald-400">location</span>,<br />
                    &nbsp;&nbsp;&nbsp;data = <span className="text-amber-400">student_data</span>,<br />
                    &nbsp;&nbsp;&nbsp;family = <span className="text-amber-400">binomial</span>)<br />
                    <span className="text-teal-400 animate-pulse">█</span>
                  </div>
                </div>

                <div className="absolute -top-2 -left-2 sm:top-8 sm:-left-4 hidden lg:flex animate-float" style={{ animationDelay: "0s" }}>
                  <div className="bg-card border border-border/50 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                    <CheckCircle className="h-3.5 w-3.5 text-green-500" /> Significant
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 sm:bottom-10 sm:-right-4 hidden lg:flex animate-float" style={{ animationDelay: "1s" }}>
                  <div className="bg-card border border-border/50 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                    <TrendingUp className="h-3.5 w-3.5 text-teal-400" /> +47% Accuracy
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-mono text-[10px] tracking-[2px] uppercase text-muted-foreground/60">Scroll to explore</span>
        <div className="w-6 h-9 rounded-full border border-border/40 flex items-start justify-center p-1">
          <motion.div className="w-1 h-2 bg-amber-500 rounded-full" animate={{ y: [0, 12, 0] }} transition={{ duration: 1.6, repeat: Infinity }} />
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.05 4.91A9.91 9.91 0 0 0 12.02 2C6.45 2 2 6.05 2 11.1c0 1.91.55 3.76 1.6 5.36L2 22l5.7-1.46a10 10 0 0 0 4.32 1.03h.01c5.57 0 10.02-4.05 10.02-9.1 0-2.43-1.03-4.72-2.92-6.36l-.18-.2Zm-7.03 14.6h-.01a8.3 8.3 0 0 1-4.24-1.12l-.3-.18-3.38.87.9-3.2-.2-.32a7.5 7.5 0 0 1-1.14-3.96c0-4.13 3.65-7.5 8.14-7.5 2.18 0 4.22.82 5.75 2.3a7.7 7.7 0 0 1 2.4 5.56c0 4.13-3.65 7.5-8.12 7.5Zm6.54-5.6c-.36-.18-2.13-.99-2.46-1.11-.33-.11-.57-.17-.81.17-.24.35-.93 1.11-1.14 1.34-.21.23-.42.26-.78.08-.36-.17-1.52-.53-2.9-1.69a10.8 10.8 0 0 1-2-2.36c-.21-.35-.02-.54.16-.71.16-.16.36-.4.54-.6.18-.2.24-.34.36-.57.12-.23.06-.43-.03-.6-.09-.17-.81-1.85-1.11-2.53-.29-.67-.59-.58-.81-.59h-.69c-.24 0-.63.09-.96.43-.33.34-1.26 1.17-1.26 2.85s1.29 3.31 1.47 3.54c.18.23 2.54 3.67 6.16 5.15.86.35 1.53.56 2.06.72.86.26 1.65.22 2.27.14.69-.1 2.13-.82 2.43-1.62.3-.8.3-1.48.21-1.62-.09-.14-.33-.23-.69-.41Z" />
    </svg>
  )
}
