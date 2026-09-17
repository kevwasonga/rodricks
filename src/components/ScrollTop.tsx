import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-40 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg border border-border/40 bg-card text-amber-500 shadow-lg transition-all hover:bg-amber-500 hover:text-white hover:-translate-y-0.5",
        visible ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  )
}
