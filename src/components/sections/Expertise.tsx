import { motion } from "framer-motion"
import { Calculator, Smartphone, Database, Brain } from "lucide-react"

const groups = [
  {
    icon: Calculator,
    title: "Statistical Software",
    skills: [
      { name: "R Programming", w: 92 },
      { name: "SPSS (Advanced)", w: 95 },
      { name: "STATA", w: 85 },
      { name: "Advanced Excel", w: 80 },
    ],
  },
  {
    icon: Smartphone,
    title: "Data Collection",
    skills: [
      { name: "KoBO Toolbox", w: 90, alt: true },
      { name: "ODK Collect", w: 88, alt: true },
      { name: "SurveyCTO", w: 82, alt: true },
      { name: "Survey Design", w: 93, alt: true },
    ],
  },
  {
    icon: Database,
    title: "Data & Nvivo",
    skills: [
      { name: "Advanced Excel", w: 96 },
      { name: "Nvivo", w: 78 },
      { name: "Database Design", w: 75 },
      { name: "Data Cleaning", w: 94 },
    ],
  },
  {
    icon: Brain,
    title: "Analysis Methods",
    skills: [
      { name: "Logistic Regression", w: 92, alt: true },
      { name: "Exploratory Analysis", w: 95, alt: true },
      { name: "Policy Evaluation", w: 85, alt: true },
      { name: "Hypothesis Testing", w: 88, alt: true },
    ],
  },
]

const whys = [
  {
    num: "01",
    title: "Highly Qualified",
    desc: "BSc and MSc in Statistics with specialized expertise in research methodology, data analysis, epidemiology, statistical modeling, and financial analytics.",
  },
  {
    num: "02",
    title: "Multi-Tool Proficiency",
    desc: "Fluent across R, SPSS, STATA, Advanced Excel, Nvivo, KoBO, ODK, and SurveyCTO for any analytical challenge.",
  },
  {
    num: "03",
    title: "Evidence-Based",
    desc: "Every recommendation backed by solid data, proper statistical testing, and proven analytical methodology.",
  },
  {
    num: "04",
    title: "Client-Focused",
    desc: "Your analytical goals drive our work. Collaborative, tailored solutions with responsive communication.",
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="section relative bg-background" aria-labelledby="expertise-heading">
      <div className="section-hairline top-0" aria-hidden="true" />
      <div className="section-hairline bottom-0" aria-hidden="true" />
      <div className="section-glow" aria-hidden="true" />
      <div className="container-custom">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Tools &amp; Technologies</span>
          <h2 id="expertise-heading" className="section-heading">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <div className="sh-rule" />
          <p className="section-sub">Professional proficiency across leading statistical, analytical, and data management platforms.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-14">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="card-base p-6 sm:p-7 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-primary mb-5">
                <g.icon className="h-5 w-5" />
              </div>
              <h4 className="font-display font-bold mb-4 text-[15px]">{g.title}</h4>
              <div className="space-y-3.5">
                {g.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs sm:text-[13px] text-muted-foreground">{s.name}</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.w}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className={`h-full rounded-full ${(s as { alt?: boolean }).alt ? "bg-gradient-to-r from-teal-600 to-teal-400" : "bg-gradient-to-r from-primary to-primary"}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-border/40 pt-10 sm:pt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {whys.map((w, i) => (
            <motion.div
              key={w.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-base p-5 sm:p-6 group hover:-translate-y-1 hover:shadow-[0_10px_32px_rgba(0,0,0,0.35)] hover:border-primary/25 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-display font-bold text-3xl gradient-text leading-none transition-transform duration-300 group-hover:scale-110 origin-left">{w.num}</span>
                <span className="h-px w-8 bg-gradient-to-r from-primary/0 to-primary/40 transition-all duration-300 group-hover:w-12" aria-hidden="true" />
              </div>
              <h5 className="font-display font-bold text-[15px] mb-2">{w.title}</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
