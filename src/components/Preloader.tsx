import { useEffect, useState } from "react"

export function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const fallback = setTimeout(() => setHidden(true), 1200)
    const onLoad = () => setTimeout(() => setHidden(true), 250)
    window.addEventListener("load", onLoad)
    return () => {
      clearTimeout(fallback)
      window.removeEventListener("load", onLoad)
    }
  }, [])

  return (
    <div id="preloader" className={hidden ? "hidden" : ""} aria-hidden={hidden}>
      <div className="loader">
        <img src="/logo-512-circle.png" alt="Rodricks Analytics" width="72" height="72" className="loader-img" />
        <div className="loader-text">Rodricks Analytics</div>
        <div className="loader-bar" />
      </div>
    </div>
  )
}