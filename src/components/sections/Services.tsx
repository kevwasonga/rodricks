import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Search, LineChart, Briefcase, GraduationCap, Building2, ArrowRight } from "lucide-react"

const services = [
  {
    num: "01",
    icon: BarChart3,
    title: "Statistical Analysis",
    desc: "Comprehensive data collection, interpretation, and statistical analysis for evidence-based decision making.",
    features: ["Data Collection & Interpretation", "ANOVA, Crosstabs & Regression", "Cluster & Factor Analysis", "Descriptive & Inferential Statistics", "Hypothesis Testing", "Data Cleaning & Sorting"],
    featured: false,
  },
  {
    num: "02",
    icon: Search,
    title: "Research Consultancy",
    desc: "Expert guidance on proposal development, survey design, data collection strategy, academic analysis, and Monitoring & Evaluation frameworks.",
    features: ["Research Proposal Development", "Survey Design & Management", "Monitoring & Evaluation Framework Design", "Academic Thesis Support", "Organizational Research"],
    featured: true,
  },
  {
    num: "03",
    icon: LineChart,
    title: "Financial & Policy Analysis",
    desc: "Revenue forecasting, financial statement analysis, budget tracking, and economic trend evaluation. Policy review, impact assessment, and data-driven recommendations.",
    features: ["Revenue Forecasting", "Financial Statement Analysis", "Policy Impact Assessment", "Economic Trend Analysis"],
    featured: false,
  },
  {
    num: "04",
    icon: Briefcase,
    title: "Business & Applied Research",
    desc: "Strategic research and analysis tailored for business growth, market positioning, and organizational decision-making in dynamic environments.",
    features: ["Market Research & Analysis", "Business Strategy Development", "Feasibility Studies", "Organizational Performance Assessment", "Applied Research Design", "Strategic Planning", "Business Plans & Reports", "Grant & Funding Proposals"],
    featured: false,
  },
  {
    num: "05",
    icon: GraduationCap,
    title: "Academic Assistance",
    desc: "Comprehensive support for students and researchers at all levels, from proposal writing to final defense and publication.",
    features: ["Thesis & Dissertation Writing", "Research Proposal Writing", "Literature Review", "Data Analysis & Interpretation", "APA/MLA Formatting & Editing", "Term Papers", "Assignments"],
    featured: false,
  },
  {
    num: "06",
    icon: Building2,
    title: "Corporate Services",
    desc: "Data-driven solutions for corporate clients including performance analytics, operational research, and strategic advisory.",
    features: ["Corporate Performance Analytics", "Operational Research", "Employee & Customer Surveys", "KPI Dashboard Development", "Strategic Advisory", "Tax Analysis & Budgeting Review"],
    featured: false,
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="section relative bg-[hsl(225_15%_9%)] border-y border-primary/10"
      aria-labelledby="services-heading"
    >
      <img
        src="/images/services-bg.webp"
        alt=""
        width="1376"
        height="768"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.10] pointer-events-none select-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(212,148,43,0.05)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container-custom relative">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">What We Do</span>
          <h2 id="services-heading" className="section-heading">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="sh-rule" />
          <p className="section-sub">Comprehensive analytical solutions tailored to your research goals and strategic objectives.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            >
              <Card className={cn("relative overflow-hidden h-full flex flex-col group hover:-translate-y-1.5 transition-all duration-300", service.featured && "border-primary/30 bg-gradient-to-br from-amber-500/[0.07] via-card to-teal-500/[0.04]")}>
                {service.featured && (
                  <div className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-widest text-teal-400 px-2.5 py-1 border border-teal-500/25 rounded-full bg-teal-500/5">Most Requested</div>
                )}
                <div className="absolute top-5 left-5 font-display font-black text-5xl text-amber-500/[0.06] select-none">{service.num}</div>
                <CardContent className="flex-1 flex flex-col p-6 pt-8 sm:p-7 sm:pt-10 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center text-amber-500 mb-5 group-hover:bg-amber-500/15 transition-colors">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-[18px] leading-tight mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="mt-auto w-full justify-center gap-2 font-mono text-xs uppercase tracking-wider" asChild>
                    <a href="#contact">
                      Get a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
