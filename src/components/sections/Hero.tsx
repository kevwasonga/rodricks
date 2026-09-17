import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { ArrowRight } from "lucide-react"

const stats = [
  { label: "Projects", value: 50, suffix: "+" },
  { label: "Satisfaction", value: 98, suffix: "%" },
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
      ctx.fillStyle = "rgba(47,147,218,0.03)"
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
        ctx!.fillStyle = this.type === "teal" ? "rgba(48,166,142,0.7)" : "rgba(47,147,218,0.7)"
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
            ctx.strokeStyle = `rgba(47,147,218,${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
      for (let y = 0; y < H; y += 60) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(W, y)
        ctx.strokeStyle = "rgba(47,147,218,0.03)"
        ctx.lineWidth = 1
        ctx.stroke()
      }
      for (let x = 0; x < W; x += 60) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, H)
        ctx.strokeStyle = "rgba(47,147,218,0.03)"
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
      <img
        src="/images/hero-bg.webp"
        alt=""
        width="1600"
        height="899"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none select-none"
        aria-hidden="true"
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-45 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(47,147,218,0.08)_0%,transparent_60%),radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(48,166,142,0.06)_0%,transparent_60%),linear-gradient(180deg,transparent_50%,hsl(var(--background))_100%)] pointer-events-none" aria-hidden="true" />

      {floatingLabels.map((label, i) => (
        <motion.div
          key={i}
          className={cn(
            "absolute hidden lg:block font-mono text-xs tracking-wide text-teal-400/25 pointer-events-none",
            "px-2 py-1 border border-primary/20 rounded bg-primary/5"
          )}
          style={{ top: label.top, left: label.left, right: label.right, bottom: label.bottom } as React.CSSProperties}
          animate={{ y: [-8, 0, -8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: label.delay }}
        >
          {label.text}
        </motion.div>
      ))}

      <div className="relative z-10 flex-1 flex items-center pt-28 pb-16">
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
                  className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))] shrink-0"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="font-mono text-xs uppercase tracking-widest text-teal-400">Rodricks Analytics</span>
                <span className="hidden sm:block h-px bg-border/50 max-w-[80px] flex-1" />
              </motion.div>

<motion.h1
                id="hero-heading"
className="font-display font-bold tracking-tight"
                  style={{ fontSize: "var(--text-hero)", lineHeight: 1.1, maxWidth: "20ch" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <span className="block gradient-text">
                  DATA
                </span>
                <span className="block text-foreground" style={{ fontSize: "var(--text-3xl)", fontWeight: 700, letterSpacing: "-0.01em" }}>
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
                    <WhatsAppIcon size={20} wght={700} /> WhatsApp
                  </a>
                </Button>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border/40 border border-border/50 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center gap-1 px-3 py-4 bg-muted/30">
                    <div className="flex items-baseline gap-1">
                      <span className="font-mono font-bold text-primary text-xl sm:text-2xl" style={{ fontVariationSettings: "'wght' 700" }}>{stat.value}</span>
                      <span className="font-mono font-semibold text-teal-400 text-sm">{stat.suffix}</span>
                    </div>
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground text-center">{stat.label}</span>
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
                              className={cn("h-full rounded-full", bar.positive ? "bg-gradient-to-r from-primary to-primary" : "bg-gradient-to-r from-red-500 to-red-400")}
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
                    <span className="material-symbols-outlined text-[16px] text-highlight" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> Significant
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 sm:bottom-10 sm:-right-4 hidden lg:flex animate-float" style={{ animationDelay: "1s" }}>
                  <div className="bg-card border border-border/50 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                    <span className="material-symbols-outlined text-[16px] text-teal-400">trending_up</span> +47% Accuracy
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
