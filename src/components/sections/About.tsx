import { motion } from "framer-motion"
import { Microscope, FileText, Clock, Shield } from "lucide-react"

const pillars = [
  { icon: Microscope, title: "Rigorous Analysis", desc: "Statistical significance at every step" },
  { icon: FileText, title: "Publication-Ready Reports", desc: "Clear, professional deliverables" },
  { icon: Clock, title: "Timely Delivery", desc: "Deadlines respected, quality maintained" },
  { icon: Shield, title: "Data Integrity", desc: "Ethical, transparent, accountable" },
]

const tools = ["R", "SPSS", "STATA", "Advanced Excel", "Nvivo"]

export function About() {
  return (
    <section id="about" className="section bg-muted/20" aria-labelledby="about-heading">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="card-base relative overflow-hidden min-h-[380px] sm:min-h-[420px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,148,43,0.08)_0%,transparent_70%)]" />
              <div className="relative z-10 p-6 sm:p-8 text-center w-full">
                <div className="mb-6 flex justify-center">
                  <img
                    src="/images/brand-logo-circle-512.png"
                    alt="Rodricks Analytics Logo"
                    width="144"
                    height="144"
                    loading="lazy"
                    decoding="async"
                    className="h-32 w-32 sm:h-36 sm:w-36 object-contain drop-shadow-[0_0_22px_rgba(212,148,43,0.45)] transition-all hover:opacity-100 hover:scale-[1.02]"
                  />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[3px] text-muted-foreground block mb-2">Est. 2022</span>
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl gradient-text leading-none mb-2">
                  Rodricks
                  <br />
                  Analytics
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Nairobi, Kenya</span>
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {tools.map((tool) => (
                    <span key={tool} className="font-mono text-[11px] tracking-wide px-2.5 py-1 border border-primary/25 rounded bg-primary/10 text-primary">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-primary to-primary opacity-40" />
            </div>
          </motion.div>

          <div>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag">About Us</span>
              <h2 id="about-heading" className="section-heading">
                Evidence-Based Analysis,
                <br />
                <span className="gradient-text">Professional Integrity</span>
              </h2>
              <div className="sh-rule !mx-0 mt-4" />
            </motion.div>

            <motion.div
              className="space-y-4 text-[15px] leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p>
                <strong className="text-foreground font-semibold">Rodricks Analytics</strong> is a dedicated statistical analysis and research consultancy firm founded by{" "}
                <strong className="text-foreground font-semibold">Rodricks Otieno</strong>, BSc and MSc in Statistics with specialized expertise in research methodology, data
                analysis, epidemiology, statistical modeling, and financial analytics. We bring rigorous academic expertise combined with hands-on professional experience across
                data-intensive environments.
              </p>
              <p>
                From logistic regression models to financial forecasting, survey instrument design to monitoring &amp; evaluation frameworks — we partner with institutions,
                researchers, businesses, and policy stakeholders to turn raw data into decisions that matter.
              </p>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {pillars.map((pillar) => (
                <div key={pillar.title} className="card-base p-4 flex items-start gap-3 hover:border-primary/20 transition-colors">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary border border-primary flex items-center justify-center text-primary">
                    <pillar.icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="text-foreground text-sm block">{pillar.title}</strong>
                    <span className="text-xs text-muted-foreground">{pillar.desc}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
