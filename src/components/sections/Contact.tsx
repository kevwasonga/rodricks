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
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "", website: "" },
  })

  const onSubmit = handleSubmit(async (data) => {
    if (data.website) return
    // TODO: replace with fetch('/api/contact', { method:'POST', body: JSON.stringify(data) })
    await new Promise((r) => setTimeout(r, 600))
    setSent(true)
    reset()
    setTimeout(() => setSent(false), 3500)
  })

  return (
    <section id="contact" className="section bg-muted/20" aria-labelledby="contact-heading">
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
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary border border-primary flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <strong className="block text-sm font-semibold">Call Rodricks</strong>
                  <span className="font-mono text-xs text-muted-foreground">+254 794 627 947</span>
                </span>
              </a>
              <a href="tel:+254773625138" className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-card border border-border/40 hover:border-primary/20 hover:translate-x-1 transition-all">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary border border-primary flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <strong className="block text-sm font-semibold">Call Support</strong>
                  <span className="font-mono text-xs text-muted-foreground">+254 773 625 138</span>
                </span>
              </a>
              <a href="mailto:otienorodricks8@gmail.com" className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-card border border-border/40 hover:border-primary/20 hover:translate-x-1 transition-all">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary border border-primary flex items-center justify-center text-primary shrink-0">
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
                <a href="https://wa.me/254794627947?text=Hello%20Rodricks%20Otieno!%20I%27d%20like%20to%20inquire%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/15 transition-colors text-sm font-medium">
                  <WhatsAppIcon /> Rodricks Otieno — 0794 627 947
                </a>
                <a href="https://wa.me/254773625138?text=Hello%20Rodricks%20Otieno!%20I%27d%20like%20to%20inquire%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/15 transition-colors text-sm font-medium">
                  <WhatsAppIcon /> Support — 0773 625 138
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
                          <SelectItem value="statistical-analysis">Statistical Analysis</SelectItem>
                          <SelectItem value="research-consultancy">Research Consultancy</SelectItem>
                          <SelectItem value="financial-policy-analysis">Financial & Policy Analysis</SelectItem>
                          <SelectItem value="business-applied-research">Business & Applied Research</SelectItem>
                          <SelectItem value="academic-assistance">Academic Assistance</SelectItem>
                          <SelectItem value="corporate-services">Corporate Services</SelectItem>
                          <SelectItem value="other">Other / Not Sure</SelectItem>
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
                {sent ? <>✓ Message Sent!</> : isSubmitting ? <>Sending…</> : <>Send Message <SendIcon /></>}
              </Button>
              {sent && <p role="status" className="text-center text-sm text-green-400 font-medium">Thanks — we&apos;ll respond promptly.</p>}
            </form>
          </motion.div>
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

function SendIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22 11 13 2 9l20-7Z" />
    </svg>
  )
}
