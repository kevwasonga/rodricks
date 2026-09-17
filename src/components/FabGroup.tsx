export function FabGroup() {
  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5">
      <span className="hidden sm:block font-mono text-[10px] tracking-[2px] uppercase text-muted-foreground/60 mb-1">Contact Us</span>

      <a
        href="https://wa.me/254794627947?text=Hello%20Rodricks%20Otieno!"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#1a3a1a] border-2 border-green-500/40 text-green-400 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:scale-105 hover:border-green-400 hover:bg-green-500/20 transition-all"
        aria-label="WhatsApp Rodricks Otieno"
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span className="pointer-events-none absolute right-[58px] top-1/2 -translate-y-1/2 hidden sm:block whitespace-nowrap rounded-md border border-border/40 bg-card px-3 py-1.5 font-mono text-[11px] tracking-wide text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">
          Rodricks O. · 0794 627947
        </span>
      </a>

      <a
        href="https://wa.me/254773625138?text=Hello%20Rodricks%20Otieno!"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#1a3a1a]/90 border-2 border-green-500/30 text-green-400 shadow-[0_4px_20px_rgba(0,0,0,0.4)] opacity-90 hover:scale-105 hover:opacity-100 hover:border-green-400 transition-all"
        aria-label="WhatsApp Support"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="pointer-events-none absolute right-[52px] top-1/2 -translate-y-1/2 hidden sm:block whitespace-nowrap rounded-md border border-border/40 bg-card px-3 py-1.5 font-mono text-[11px] tracking-wide text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">
          Support · 0773 625138
        </span>
      </a>
    </div>
  )
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.05 4.91A9.91 9.91 0 0 0 12.02 2C6.45 2 2 6.05 2 11.1c0 1.91.55 3.76 1.6 5.36L2 22l5.7-1.46a10 10 0 0 0 4.32 1.03h.01c5.57 0 10.02-4.05 10.02-9.1 0-2.43-1.03-4.72-2.92-6.36l-.18-.2Zm-7.03 14.6h-.01a8.3 8.3 0 0 1-4.24-1.12l-.3-.18-3.38.87.9-3.2-.2-.32a7.5 7.5 0 0 1-1.14-3.96c0-4.13 3.65-7.5 8.14-7.5 2.18 0 4.22.82 5.75 2.3a7.7 7.7 0 0 1 2.4 5.56c0 4.13-3.65 7.5-8.12 7.5Zm6.54-5.6c-.36-.18-2.13-.99-2.46-1.11-.33-.11-.57-.17-.81.17-.24.35-.93 1.11-1.14 1.34-.21.23-.42.26-.78.08-.36-.17-1.52-.53-2.9-1.69a10.8 10.8 0 0 1-2-2.36c-.21-.35-.02-.54.16-.71.16-.16.36-.4.54-.6.18-.2.24-.34.36-.57.12-.23.06-.43-.03-.6-.09-.17-.81-1.85-1.11-2.53-.29-.67-.59-.58-.81-.59h-.69c-.24 0-.63.09-.96.43-.33.34-1.26 1.17-1.26 2.85s1.29 3.31 1.47 3.54c.18.23 2.54 3.67 6.16 5.15.86.35 1.53.56 2.06.72.86.26 1.65.22 2.27.14.69-.1 2.13-.82 2.43-1.62.3-.8.3-1.48.21-1.62-.09-.14-.33-.23-.69-.41Z" />
    </svg>
  )
}
