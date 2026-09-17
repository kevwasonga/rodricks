# Rodricks Analytics

Professional statistical analysis, research consultancy, and data-insights studio — a modern, single-page marketing site for [Rodricks Analytics](https://github.com/kevwasonga/rodricks), founded by Rodricks Otieno (BSc/MSc Statistics, Nairobi, Kenya).

The site introduces the consultancy, showcases services and case studies, demonstrates technical expertise, and funnels inquiries straight into WhatsApp — built with Vite + React + TypeScript + Tailwind + shadcn/ui and a premium amber-and-teal analytics aesthetic.

**Sections:** Hero (animated data-network + coefficient widget) · About · Services · Case Studies · Technical Expertise · Contact · Floating WhatsApp · Preloader · Scroll-to-top.

## ✨ Features

- **Premium type system** — Fraunces (display serif), Inter (body), JetBrains Mono (numbers/code) with fluid `clamp()` sizing.
- **Amber/teal analytics theme** — CSS-variable palette with gradient hairlines, consistent section rhythm, and a subtle film-grain overlay.
- **Lively data visuals** — canvas particle network, animated coefficient bars and skill meters, mini charts (bars / map / line / donut) with hover-reveal effects.
- **Header scroll states** — transparent at top, flips to solid dark + gold hairline on scroll; active-section nav with smooth scrolling.
- **WhatsApp-native contact** — contact form composes the inquiry and opens `wa.me` with a prefilled message; floating action button + footer dropdown across both numbers.
- **Functional extras** — instant CSS-fade preloader, scroll-to-top, FAB tooltips, `prefers-reduced-motion` support, semantic HTML and ARIA labels.

## 🧱 Tech Stack

| Concern      | Tooling                                                        |
| ------------ | -------------------------------------------------------------- |
| Build        | Vite 8 + `@vitejs/plugin-react` (Oxc)                          |
| Language     | TypeScript                                                      |
| UI           | React 19 + Tailwind CSS + `tailwindcss-animate`                 |
| Components   | shadcn/ui (Button, Card, Input, Label, Select, Textarea) on Radix |
| Animation    | `framer-motion` + `<canvas>` data network                       |
| Icons        | `lucide-react` + Material Symbols (`chat`, `call`, `mail`, …)  |
| Forms        | `react-hook-form` + `zod` + `@hookform/resolvers`               |
| Lint         | oxlint                                                          |

## 📁 Project Structure

```
.
├── index.html                 # meta, SEO, canonical/OG placeholders, font links
├── public/
│   ├── images/                # professionally named image assets
│   │   ├── brand-logo.png            # 72px mark (favicon / OG)
│   │   ├── brand-logo-256.png
│   │   ├── brand-logo-512.png
│   │   ├── brand-logo-circle-512.png # circular brand mark used site-wide
│   │   ├── brand-logo-source.jpeg    # original logo source image
│   │   ├── hero-bg.webp / .png       # hero section background
│   │   └── services-bg.webp / .png   # services section background
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── main.tsx
│   ├── App.tsx                 # composes all sections + grain overlay
│   ├── index.css               # Tailwind + CSS variables (amber/teal palette)
│   ├── lib/utils.ts            # cn() helper
│   └── components/
│       ├── Header.tsx          # sticky nav, active link, scroll states, drawer
│       ├── Footer.tsx          # link grid, WhatsApp dropdown, contact
│       ├── Preloader.tsx       # instant CSS-fade preloader
│       ├── FabGroup.tsx        # floating WhatsApp action group
│       ├── ScrollTop.tsx
│       ├── sections/
│       │   ├── Hero.tsx        # canvas network, DATA wordmark, coefficient widget
│       │   ├── About.tsx       # logo card, pillars, tool badges
│       │   ├── Services.tsx    # 6 cards, featured glow badge
│       │   ├── CaseStudies.tsx # 6 charts (bars / map / line / donut)
│       │   ├── Expertise.tsx   # 4 skill groups + 4 why-us cards
│       │   └── Contact.tsx     # info + WhatsApp-composing form
│       └── ui/                 # shadcn primitives
├── tailwind.config.js          # palette, fonts, keyframes
├── vercel.json                 # Vercel build/output/rewrite config
└── vite.config.ts              # @ → src alias
```

## 🚀 Getting Started

**Prerequisites:** Node 20+, npm 9+.

```bash
git clone https://github.com/kevwasonga/rodricks.git
cd rodricks-analytics-vite
npm install
npm run dev      # http://localhost:5173
```

## 📜 Scripts

| Command            | Description                                 |
| ------------------ | ------------------------------------------- |
| `npm run dev`      | Vite dev server with HMR                    |
| `npm run build`    | Type-check (`tsc -b`) + production build    |
| `npm run preview`  | Serve `dist/` locally                       |
| `npm run lint`     | Run oxlint                                  |

## 🎨 Theming

Palette and type tokens live in `src/index.css` (`@layer base`) and are mapped into Tailwind in `tailwind.config.js`:

```css
--primary: 38 72% 50%;     /* amber */
--accent: 179 52% 33%;      /* teal */
--background: 225 15% 5%;   /* deep navy-black */
--font-serif: 'Fraunces', Georgia, serif;      /* display */
--font-inter: 'Inter', sans-serif;             /* body */
--font-jetbrains: 'JetBrains Mono', monospace; /* numbers/code */
```

Fonts are loaded once in `index.html`. Card geometry uses `--radius-card: 1.25rem` for a relaxed, editorial feel while form controls stay at `--radius: 0.75rem`.

## 🌐 Deployment (Vercel)

The repo is Vercel-ready; `vercel.json` pins the framework and SPA rewrite:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

```bash
npm i -g vercel
vercel            # preview
vercel --prod     # production
```

**After first deploy**, replace the `https://rodricks-analytics.example.com/` placeholders in `index.html` (`canonical`, `og:url`) and update host lines in `public/sitemap.xml` + `public/robots.txt` with the real domain. Netlify or any static host works equally well (build `npm run build`, publish `dist`).

## 📄 License

Proprietary — Rodricks Analytics.

## 🙏 Credits

Design and copy by Rodricks Otieno (Nairobi, Kenya). Built on the Vite + React + shadcn/ui stack with a type-safe TypeScript codebase.