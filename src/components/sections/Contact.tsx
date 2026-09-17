import { useState } from "react"
import { motion } from "framer-motion"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const SERVICES = [
  { id: "statistical-analysis", label: "Statistical Analysis" },
  { id: "research-consultancy", label: "Research Consultancy" },
  { id: "financial-policy-analysis", label: "Financial & Policy Analysis" },
  { id: "business-applied-research", label: "Business & Applied Research" },
  { id: "academic-assistance", label: "Academic Assistance" },
  { id: "corporate-services", label: "Corporate Services" },
  { id: "other", label: "Other / Not Sure" },
]

const WA_NUMBER = "254794627947"

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please describe your project (≥10 chars)"),
  website: z.string().max(0, "Bot detected"),
})

type FormValues = z.infer<typeof schema>

export function Contact() {
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "", website: "" },
  })

  const onSubmit = handleSubmit(async (data) => {
    if (data.website) return
    const service = SERVICES.find((s) => s.id === data.service)
    const lines = [
      "Hello Rodricks Analytics! New inquiry from your website:",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : null,
      `Service: ${service ? service.label : data.service}`,
      "",
      data.message,
    ].filter((l): l is string => Boolean(l))
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer")
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  })

  return (
    <section id="contact" className="section relative bg-muted/20" aria-labelledby="contact-heading">
      <div className="section-hairline top-0" aria-hidden="true" />
      <div className="section-glow" aria-hidden="true" />
      <div className="container-custom">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2 id="contact-heading" className="section-heading">
            Start Your <span className="gradient-text">Analysis</span>
          </h2>
          <div className="sh-rule" />
          <p className="section-sub">Ready for data-driven insights? Reach out for a consultation on your analytical needs.</p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-8 lg:gap-10 items-start">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl leading-tight mb-3">
              Let&apos;s Transform
              <br />
              <span className="gradient-text">Your Data</span>
            </h3>
            <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed mb-7">We&apos;d love to hear about your project. Contact us through any channel below — we respond promptly.</p>

            <div className="space-y-3 mb-7">
              <a href="tel:+254794627947" className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-card border border-border/40 hover:border-primary/20 hover:translate-x-1 transition-all">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <strong className="block text-sm font-semibold">Call Rodricks</strong>
                  <span className="font-mono text-xs text-muted-foreground">+254 794 627 947</span>
                </span>
              </a>
              <a href="tel:+254773625138" className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-card border border-border/40 hover:border-primary/20 hover:translate-x-1 transition-all">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <strong className="block text-sm font-semibold">Call Support</strong>
                  <span className="font-mono text-xs text-muted-foreground">+254 773 625 138</span>
                </span>
              </a>
              <a href="mailto:otienorodricks8@gmail.com" className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-card border border-border/40 hover:border-primary/20 hover:translate-x-1 transition-all">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-4 w-4" />
                </span>
                <span>
                  <strong className="block text-sm font-semibold">Email</strong>
                  <span className="font-mono text-xs text-muted-foreground break-all">otienorodricks8@gmail.com</span>
                </span>
              </a>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3">Quick WhatsApp Consultation:</p>
              <div className="space-y-2.5">
                <a href="https://wa.me/254794627947?text=Hello%20Rodricks%20Otieno!%20I%27d%20like%20to%20inquire%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/25 text-accent hover:bg-accent/15 transition-colors text-sm font-medium">
                  <span
                    className="material-symbols-outlined shrink-0"
                    style={{ fontSize: 21, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                    aria-hidden="true"
                  >
                    chat
                  </span>
                  <span className="flex flex-col leading-tight">
                    <strong className="text-sm font-semibold">Rodricks Otieno</strong>
                    <span className="font-mono text-xs text-muted-foreground">0794 627 947</span>
                  </span>
                </a>
                <a href="https://wa.me/254773625138?text=Hello%20Rodricks%20Otieno!%20I%27d%20like%20to%20inquire%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/25 text-accent hover:bg-accent/15 transition-colors text-sm font-medium">
                  <span
                    className="material-symbols-outlined shrink-0"
                    style={{ fontSize: 21, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                    aria-hidden="true"
                  >
                    chat
                  </span>
                  <span className="flex flex-col leading-tight">
                    <strong className="text-sm font-semibold">Support</strong>
                    <span className="font-mono text-xs text-muted-foreground">0773 625 138</span>
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="card-base overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border/30">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="font-mono text-xs text-muted-foreground ml-2">inquiry_form.py</span>
            </div>

            <form onSubmit={onSubmit} noValidate className="p-5 sm:p-7 space-y-4">
              {/* honeypot */}
              <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" {...register("website")} />

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Name</Label>
                  <Input id="name" placeholder="Your full name" aria-invalid={!!errors.name} className="bg-muted/50 border-border/40 h-11" {...register("name")} />
                  {errors.name && <p className="text-xs text-red-400">{errors.name.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" aria-invalid={!!errors.email} className="bg-muted/50 border-border/40 h-11" {...register("email")} />
                  {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Phone</Label>
                  <Input id="phone" placeholder="+254 7XX XXX XXX" className="bg-muted/50 border-border/40 h-11" {...register("phone")} />
                </div>
                <div className="space-y-1.5">
                  <Label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Service</Label>
                  <Controller
                    control={control}
                    name="service"
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="bg-muted/50 border-border/40 h-11" aria-invalid={!!errors.service}>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICES.map((s) => (
                            <SelectItem key={s.id} value={s.id}>{s.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.service && <p className="text-xs text-red-400">{errors.service.message}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Project Details</Label>
                <Textarea id="message" placeholder="Tell us about your data analysis project, research objectives, or questions..." rows={5} aria-invalid={!!errors.message} className="bg-muted/50 border-border/40 min-h-[120px] resize-y" {...register("message")} />
                {errors.message && <p className="text-xs text-red-400">{errors.message.message}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full gap-2 font-semibold h-11" disabled={isSubmitting || sent}>
                {sent ? <>Opening WhatsApp…</> : isSubmitting ? <>Preparing…</> : <>Send via WhatsApp <span className="material-symbols-outlined" style={{ fontSize: 20 }} aria-hidden="true">send</span></>}
              </Button>
              {sent && <p role="status" className="text-center text-sm text-green-400 font-medium">WhatsApp opened — just press send there and it&apos;s on its way.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
