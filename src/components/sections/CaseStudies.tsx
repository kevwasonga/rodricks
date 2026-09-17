import { motion } from "framer-motion"
import { Users, Target, Building, PieChart, MapPin, Database, BarChart3, Layers, Calendar, TrendingUp, GraduationCap, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"

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
          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[2px] text-center flex flex-wrap items-center justify-center gap-x-2 text-muted-foreground mx-auto max-w-2xl">
            <span>Rigorous Research</span>
            <span className="text-primary" aria-hidden="true">·</span>
            <span>Strategic Insights</span>
            <span className="text-primary" aria-hidden="true">·</span>
            <span>Measurable Impact</span>
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card-base p-5 sm:p-6 flex flex-col gap-4 group hover:border-primary/20 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-teal-400 px-2.5 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 whitespace-nowrap">{c.tag}</span>
                <span className="font-mono text-[10px] text-muted-foreground whitespace-nowrap">{c.tool}</span>
              </div>

              {/* Chart */}
              <div className="h-[84px] relative overflow-hidden flex items-end gap-1.5 sm:gap-2 border-b border-border/40 pb-2 shrink-0">
                <div className="pointer-events-none absolute inset-0 rounded-lg" aria-hidden="true">
                  <span className="absolute inset-y-0 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.14] to-transparent -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-[400%]" />
                </div>
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
                        className={`w-full rounded-t-sm flex items-end justify-center pb-1 transition-all duration-300 group-hover:brightness-125 group-hover:-translate-y-0.5 ${c.variant === "teal" ? "bg-gradient-to-t from-teal-600/20 to-teal-400/45" : "bg-gradient-to-t from-amber-600/20 to-amber-400/45"}`}
                      />
                      <span className="font-mono text-[10px] text-muted-foreground transition-colors group-hover:text-primary">{b.label}</span>
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
              Discuss Your Project <WhatsAppIcon size={20} wght={600} />
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
      <span className="absolute left-[30%] top-[40%] w-2 h-2 rounded-full bg-teal-400 border-2 border-card shadow-[0_0_8px_rgba(13,155,155,0.6)] transition-transform duration-300 group-hover:scale-150" />
      <span className="absolute left-[55%] top-[25%] w-2 h-2 rounded-full bg-teal-400 border-2 border-card shadow-[0_0_8px_rgba(13,155,155,0.6)] transition-transform duration-300 delay-75 group-hover:scale-150" />
      <span className="absolute left-[70%] top-[60%] w-2 h-2 rounded-full bg-teal-400 border-2 border-card transition-transform duration-300 delay-150 group-hover:scale-150" />
      <span className="absolute left-[20%] top-[65%] w-2 h-2 rounded-full bg-teal-400 border-2 border-card transition-transform duration-300 delay-200 group-hover:scale-150" />
      <span className="absolute left-[80%] top-[35%] w-2 h-2 rounded-full bg-teal-400 border-2 border-card transition-transform duration-300 delay-300 group-hover:scale-150" />
      <svg viewBox="0 0 200 80" className="absolute inset-0 w-full h-full opacity-30 transition-opacity duration-300 group-hover:opacity-60">
        <path d="M20 60 Q50 15 80 45 Q110 25 140 40 Q170 30 190 45" fill="none" stroke="rgb(13 155 155)" strokeWidth="1.5" strokeDasharray="6 4" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function LineMini() {
  return (
    <svg viewBox="0 0 200 80" className="w-full h-full transition-transform duration-300 group-hover:scale-[1.03]">
      <polyline points="10,65 40,55 70,48 100,38 130,30 160,22 190,15" fill="none" stroke="rgb(13 155 155)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="7 5" />
      <circle cx="190" cy="15" r="4" fill="rgb(13 155 155)" />
      <circle cx="190" cy="15" r="8" fill="none" stroke="rgb(13 155 155)" strokeOpacity="0.4" className="transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-125" />
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
      <svg viewBox="0 0 100 100" className="w-[68px] h-[68px] -rotate-90 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-[70deg]">
        <circle cx="50" cy="50" r="35" fill="none" stroke="hsl(var(--border))" strokeWidth="12" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="hsl(var(--primary))" strokeWidth="12" strokeDasharray="198 22" strokeLinecap="round" className="drop-shadow-sm transition-shadow duration-300 group-hover:drop-shadow-[0_0_6px_hsl(var(--primary)/0.5)]" />
        <text x="50" y="56" textAnchor="middle" className="fill-teal-400 font-mono text-[14px] font-bold" transform="rotate(90 50 50)">
          90%
        </text>
      </svg>
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">Pass Rate</span>
    </div>
  )
}
