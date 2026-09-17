import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onLoad = () => setTimeout(() => setVisible(false), 600)
    window.addEventListener("load", onLoad)
    const fallback = setTimeout(() => setVisible(false), 2400)
    return () => {
      window.removeEventListener("load", onLoad)
      clearTimeout(fallback)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          aria-hidden={!visible}
        >
          <div className="text-center">
            <motion.div
              className="flex items-center justify-center mb-4"
              initial={{ scale: 0.9, opacity: 0.8 }}
              animate={{ scale: [0.9, 1.02, 0.9], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="/rodrologo.png" alt="Rodricks Analytics" width="176" height="176" loading="eager" decoding="async" className="h-36 w-36 sm:h-44 sm:w-44 object-contain drop-shadow-[0_0_24px_rgba(212,148,43,0.5)]" />
            </motion.div>
            <div className="mx-auto mb-3 h-0.5 w-48 overflow-hidden rounded bg-border/30">
              <motion.div
                className="h-full w-full bg-gradient-to-r from-amber-500 to-amber-400"
                initial={{ scaleX: 0.3, opacity: 0.3 }}
                animate={{ scaleX: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "left" }}
              />
            </div>
            <p className="font-mono text-[11px] tracking-[2px] text-teal-400">
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                _
              </motion.span>{" "}
              Initializing analytics engine...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
