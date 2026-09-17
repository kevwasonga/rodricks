import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Preloader } from "@/components/Preloader"
import { FabGroup } from "@/components/FabGroup"
import { ScrollTop } from "@/components/ScrollTop"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { CaseStudies } from "@/components/sections/CaseStudies"
import { Expertise } from "@/components/sections/Expertise"
import { Contact } from "@/components/sections/Contact"

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only">Skip to content</a>
      <div className="grain" aria-hidden="true" />
      <Preloader />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Expertise />
        <Contact />
      </main>
      <Footer />
      <FabGroup />
      <ScrollTop />
    </>
  )
}
