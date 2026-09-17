import { motion } from "framer-motion"
import { Users, Target, Building, PieChart, MapPin, Database, BarChart3, Layers, Calendar, TrendingUp, GraduationCap, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

const cases = [
  {
    tag: "Academic Research",
    tool: "R · Logistic Regression",
    title: "University Attendance Analysis",
    desc: "Logistic regression identifying 8 significant predictors of physical class attendance across Kenyan universities. 500+ student records, actionable institutional policy recommendations.",
    bars: [
      { label: "Ed.", h: 65 },
      { label: "Inc.", h: 82 },
      { label: "Loc.", h: 45 },
      { label: "Age", h: 58 },
      { label: "Gen.", h: 73 },
    ],
    meta: [
      { icon: Users, label: "500+ Records" },
      { icon: Target, label: "p < 0.001" },
    ],
    variant: "amber" as const,
  },
  {
    tag: "Financial Monitoring",
    tool: "Excel · SPSS",
    title: "County Revenue Systems",
    desc: "Financial statement analysis and cash book balancing for Kiambu County. Revenue tracking, transparency monitoring, and economic trend evaluation supporting sub-county planning.",
    bars: [
      { label: "Q1", h: 55 },
      { label: "Q2", h: 70 },
      { label: "Q3", h: 62 },
      { label: "Q4", h: 88 },
      { label: "Q5", h: 76 },
    ],
    meta: [
      { icon: Building, label: "Kiambu County" },
      { icon: PieChart, label: "Multi-Quarter" },
    ],
    variant: "teal" as const,
  },
  {
    tag: "Qualitative Analysis",
    tool: "Nvivo",
    title: "Nvivo & Qualitative Analysis",
    desc: "Design and development of data management systems for sectorial information. Database architecture supporting planning and administration decisions.",
    meta: [
      { icon: MapPin, label: "Spatial Data" },
      { icon: Database, label: "DB Architecture" },
    ],
    isMap: true,
  },
  {
    tag: "Survey Research",
    tool: "KoBO · ODK · SurveyCTO",
    title: "Multi-Wave Survey Analysis",
    desc: "KOBO Toolbox / ODK data processing for large-scale institutional surveys. Statistical interpretation and evidence-based findings supporting organizational decision-making.",
    bars: [
      { label: "Ag.", h: 77 },
      { label: "Hlth", h: 91 },
      { label: "Ed.", h: 64 },
      { label: "Gov.", h: 83 },
      { label: "Env.", h: 52 },
    ],
    meta: [
      { icon: BarChart3, label: "Multi-Wave" },
      { icon: Layers, label: "Large Scale" },
    ],
    variant: "amber" as const,
  },
  {
    tag: "Economic Planning",
    tool: "STATA · Excel",
    title: "Financial Forecasting",
    desc: "Time-series analysis and financial modeling for multi-year revenue projections. Economic indicator analysis supporting budgeting, strategic planning, and policy recommendations.",
    meta: [
      { icon: Calendar, label: "Time-Series" },
      { icon: TrendingUp, label: "Multi-Year" },
    ],
    isLine: true,
  },
  {
    tag: "Academic Support",
    tool: "R · SPSS · Mentoring",
    title: "Academic Research Support",
    desc: "Research methodology guidance, statistical analysis support, and thesis consultancy for university students. Publication-ready reporting through volunteer tutoring in statistics.",
    meta: [
      { icon: GraduationCap, label: "University Level" },
      { icon: Trophy, label: "90% Pass Rate" },
    ],
    isDonut: true,
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="section bg-muted/20" aria-labelledby="cases-heading">
      <div className="container-custom">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Proven Track Record</span>
          <h2 id="cases-heading" className="section-heading">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <div className="sh-rule" />
          <p className="section-sub">Analytical projects demonstrating rigorous research, strategic insights, and measurable impact.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card-base p-5 sm:p-6 flex flex-col gap-4 hover:border-primary/20 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-teal-400 px-2.5 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 whitespace-nowrap">{c.tag}</span>
                <span className="font-mono text-[10px] text-muted-foreground whitespace-nowrap">{c.tool}</span>
              </div>

              {/* Chart */}
              <div className="h-[84px] flex items-end gap-1.5 sm:gap-2 border-b border-border/40 pb-2 shrink-0">
                {c.isMap && <MapMini />}
                {c.isLine && <LineMini />}
                {c.isDonut && <DonutMini />}
                {c.bars &&
                  c.bars.map((b) => (
                    <div
                      key={b.label}
                      className="flex-1 flex flex-col items-center gap-1 justify-end"
                      style={{ height: "100%" }}
                    >
                      <motion.div
                        initial={{ height: 4 }}
                        whileInView={{ height: `${b.h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`w-full rounded-t-sm flex items-end justify-center pb-1 ${c.variant === "teal" ? "bg-gradient-to-t from-teal-600/20 to-teal-400/45" : "bg-gradient-to-t from-amber-600/20 to-amber-400/45"}`}
                      />
                      <span className="font-mono text-[10px] text-muted-foreground">{b.label}</span>
                    </div>
                  ))}
              </div>

              <h4 className="font-display font-bold text-[15px] leading-tight">{c.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>

              <div className="flex flex-wrap gap-3 pt-3 border-t border-border/30">
                {c.meta.map((m) => (
                  <span key={m.label} className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-muted-foreground">
                    <m.icon className="h-3 w-3 text-amber-500" /> {m.label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button size="lg" asChild className="gap-2 font-semibold">
            <a href="https://wa.me/254794627947?text=Hello%20Rodricks%20Otieno!%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">
              Discuss Your Project <WhatsAppIcon />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function MapMini() {
  return (
    <div className="relative w-full h-full bg-amber-500/[0.03] rounded overflow-hidden">
      <span className="absolute left-[30%] top-[40%] w-2 h-2 rounded-full bg-teal-400 border-2 border-card shadow-[0_0_8px_rgba(13,155,155,0.6)]" />
      <span className="absolute left-[55%] top-[25%] w-2 h-2 rounded-full bg-teal-400 border-2 border-card shadow-[0_0_8px_rgba(13,155,155,0.6)]" />
      <span className="absolute left-[70%] top-[60%] w-2 h-2 rounded-full bg-teal-400 border-2 border-card" />
      <span className="absolute left-[20%] top-[65%] w-2 h-2 rounded-full bg-teal-400 border-2 border-card" />
      <span className="absolute left-[80%] top-[35%] w-2 h-2 rounded-full bg-teal-400 border-2 border-card" />
      <svg viewBox="0 0 200 80" className="absolute inset-0 w-full h-full opacity-30">
        <path d="M20 60 Q50 15 80 45 Q110 25 140 40 Q170 30 190 45" fill="none" stroke="rgb(13 155 155)" strokeWidth="1.5" />
      </svg>
    </div>
  )
}

function LineMini() {
  return (
    <svg viewBox="0 0 200 80" className="w-full h-full">
      <polyline points="10,65 40,55 70,48 100,38 130,30 160,22 190,15" fill="none" stroke="rgb(13 155 155)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="190" cy="15" r="4" fill="rgb(13 155 155)" />
      <defs>
        <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(13 155 155)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points="10,65 40,55 70,48 100,38 130,30 160,22 190,15 190,80 10,80" fill="url(#lineFill)" />
    </svg>
  )
}

function DonutMini() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-3">
      <svg viewBox="0 0 100 100" className="w-[68px] h-[68px] -rotate-90">
        <circle cx="50" cy="50" r="35" fill="none" stroke="hsl(var(--border))" strokeWidth="12" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="hsl(var(--primary))" strokeWidth="12" strokeDasharray="198 22" strokeLinecap="round" className="drop-shadow-sm" />
        <text x="50" y="56" textAnchor="middle" className="fill-teal-400 font-mono text-[14px] font-bold" transform="rotate(90 50 50)">
          90%
        </text>
      </svg>
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Pass Rate</span>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.05 4.91A9.91 9.91 0 0 0 12.02 2C6.45 2 2 6.05 2 11.1c0 1.91.55 3.76 1.6 5.36L2 22l5.7-1.46a10 10 0 0 0 4.32 1.03h.01c5.57 0 10.02-4.05 10.02-9.1 0-2.43-1.03-4.72-2.92-6.36l-.18-.2Zm-7.03 14.6h-.01a8.3 8.3 0 0 1-4.24-1.12l-.3-.18-3.38.87.9-3.2-.2-.32a7.5 7.5 0 0 1-1.14-3.96c0-4.13 3.65-7.5 8.14-7.5 2.18 0 4.22.82 5.75 2.3a7.7 7.7 0 0 1 2.4 5.56c0 4.13-3.65 7.5-8.12 7.5Zm6.54-5.6c-.36-.18-2.13-.99-2.46-1.11-.33-.11-.57-.17-.81.17-.24.35-.93 1.11-1.14 1.34-.21.23-.42.26-.78.08-.36-.17-1.52-.53-2.9-1.69a10.8 10.8 0 0 1-2-2.36c-.21-.35-.02-.54.16-.71.16-.16.36-.4.54-.6.18-.2.24-.34.36-.57.12-.23.06-.43-.03-.6-.09-.17-.81-1.85-1.11-2.53-.29-.67-.59-.58-.81-.59h-.69c-.24 0-.63.09-.96.43-.33.34-1.26 1.17-1.26 2.85s1.29 3.31 1.47 3.54c.18.23 2.54 3.67 6.16 5.15.86.35 1.53.56 2.06.72.86.26 1.65.22 2.27.14.69-.1 2.13-.82 2.43-1.62.3-.8.3-1.48.21-1.62-.09-.14-.33-.23-.69-.41Z" />
    </svg>
  )
}
