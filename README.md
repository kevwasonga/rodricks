# Rodricks Analytics — Vite + shadcn

Professional statistical analysis, research consultancy, and data-driven insights — rebuilt from the original Flask application as a modern, performant Vite + React + shadcn/ui single-page site. Exact visual parity with the Flask original, with industry-standard tooling, first-class responsiveness, and premium typography.

Live sections: Hero (animated data network) · About · Services · Case Studies · Technical Expertise · Contact · Floating WhatsApp · Preloader · Scroll-to-top.

## ✨ Features

- **Exact Flask parity** — every section, copy, and interaction from `templates/index.html` + `static/css/style.css` + `static/js/main.js` recreated with React + Tailwind + shadcn.
- **Premium typography** — `Syne` (display), `Space Grotesk` (body), `Space Mono` (mono) via Google Fonts, fluid `clamp()` sizing.
- **Fully responsive** — mobile-first, fluid grids (`320px → 1920px+`), no horizontal scroll, 44px+ tap targets, hamburger navigation on `<1024px`.
- **Polished interactions** — Framer Motion reveals, canvas data-network (nodes + links), animated skill/coefficients bars, count-ups, scan lines, floating badges, smooth anchor scroll with active nav.
- **Accessibility** — semantic HTML, ARIA labels, keyboard focus rings, `prefers-reduced-motion` friendly, 16px minimum input sizing to prevent iOS zoom.
- **Industry-standard stack** — Vite 8, React 19, TypeScript 6, Tailwind 3, shadcn/ui (Radix), oxlint, prettier.

## 🧱 Tech Stack

- **Build** — Vite + `@vitejs/plugin-react` (Oxc)
- **UI** — Tailwind CSS, `tailwindcss-animate`, `class-variance-authority`, `clsx` + `tailwind-merge`
- **Components** — shadcn/ui (Button, Card, Input, Label, Select, Textarea, Separator, Tooltip, Avatar, etc.) on Radix
- **Animation** — `framer-motion`
- **Icons** — `lucide-react` + custom WhatsApp SVG (no unused Font Awesome)
- **Forms** — `react-hook-form` + `zod` + `@hookform/resolvers` (ready for validation)
- **Lint/Format** — `oxlint`, `prettier` + `prettier-plugin-tailwindcss`

## 📁 Project Structure

```
.
├── index.html                 # meta, fonts, title (Syne/Space Grotesk/Space Mono)
├── public/
│   ├── images/                # all site images (Hero/Services backgrounds + logo variants)
│   │   ├── brand-logo.png           # 72px mark (favicon / OG)
│   │   ├── brand-logo-512.png
│   │   ├── brand-logo-circle-512.png
│   │   ├── hero-bg.webp
│   │   └── services-bg.webp
│   └── favicon.svg
├── src/
│   ├── main.tsx
│   ├── App.tsx                # composes all sections
│   ├── index.css              # Tailwind base + CSS variables (ember & teal palette)
│   ├── lib/utils.ts           # cn() helper
│   └── components/
│       ├── Header.tsx         # sticky nav, active link, hamburger, blur on scroll
│       ├── Footer.tsx
│       ├── Preloader.tsx      # 2.4s fallback, logo pulse + scan
│       ├── FabGroup.tsx       # floating WhatsApp (2 numbers) + tooltip
│       ├── ScrollTop.tsx
│       ├── sections/
│       │   ├── Hero.tsx       # canvas network, floating stats labels, coefficient widget
│       │   ├── About.tsx      # logo card + pillars
│       │   ├── Services.tsx   # 6 cards, featured badge
│       │   ├── CaseStudies.tsx# 6 cards (bars / map / line / donut)
│       │   ├── Expertise.tsx  # 4 skill groups + 4 why-us cards
│       │   └── Contact.tsx    # info + shadcn form (Select, Input, Textarea)
│       └── ui/                # shadcn primitives (button, card, input, select, …)
├── tailwind.config.js         # amber/teal/dark palette, font vars, animations
├── vite.config.ts             # @ → src alias
└── tsconfig.app.json
```

No Flask artifacts were migrated — `venv/`, `__pycache__/`, `*.pyc`, `flask.log`, `rodricks_analytics.zip`, and server-only files are ignored (see `.gitignore`).

## 🚀 Getting Started

**Prerequisites:** Node 18+ (20 recommended), npm 9+.

```bash
git clone <repo>
cd rodricks-analytics-vite
npm install
npm run dev      # http://localhost:5173
```

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) + production build to `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run lint` | Run oxlint |

## 🎨 Fonts & Theming

Paired serif + sans-serif type system. Loaded in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fraunces:opsz,wght@9..144,300..700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

CSS variables in `src/index.css`:

```css
--font-serif: 'Fraunces', Georgia, 'Times New Roman', serif;  /* display/headings */
--font-inter: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; /* body */
--font-jetbrains: 'JetBrains Mono', ui-monospace, monospace;         /* numbers/code */
--primary: 38 72% 50%;   /* amber */
--accent: 179 52% 33%;    /* teal */
--background: 225 15% 5%;
```

Tailwind maps them via `fontFamily.display` (serif) | `body` (sans) | `mono`.

## 📱 Responsiveness

- **Mobile-first** base at `320px`; breakpoints `640/768/1024/1280`.
- Grids collapse: `grid-cols-1` → `sm:grid-cols-2` → `lg:grid-cols-3/4`.
- Hero switches from `lg:grid-cols-2` to stacked, center-aligned on mobile; floating labels hidden below `lg`.
- Navbar: full links on `lg`, hamburger + slide-down panel below.
- Inputs/selects: `h-11`, `text-sm`, `width:100%`.
- Verified no `overflow-x`, all images `max-w-full`.

## 🔄 Flask → Vite Mapping

| Flask | Vite |
|---|---|
| `templates/base.html` + `templates/index.html` | `src/App.tsx` + `src/components/*` |
| `static/css/style.css` | `src/index.css` + `tailwind.config.js` |
| `static/js/main.js` (canvas, reveal, counters, smooth scroll) | `framer-motion` + hooks in `Hero.tsx`, `Header.tsx`, etc. |
| `static/rodrologo.png` | `public/images/brand-logo.png` (only needed asset) |
| `app.py` `/send_message` | Client-side form with success toast (ready to wire to API) |

## 🌐 Deployment (Vercel)

The project is Vercel-ready. `vercel.json` pins the build:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Deploy:**

```bash
# 1. Push to GitHub, then import the repo at https://vercel.new
#    (Vite framework preset is auto-detected; vercel.json overrides if present)

# 2. Or CLI
npm i -g vercel
vercel            # preview deploy
vercel --prod     # production deploy
```

**After first deploy,** set the real domain in `index.html` (`canonical`, `og:url`) — replace the `https://rodricks-analytics.example.com/` placeholders — and update the `public/sitemap.xml` + `public/robots.txt` host lines.

**Also deployable to** Netlify (`npx netlify deploy --prod`, build `npm run build`, publish `dist`) or any static host.

## 📄 License

Proprietary — Rodricks Analytics.

## 🙏 Credits

Original design and copy by Rodricks Otieno (Nairobi, Kenya). Vite re-implementation keeps exact messaging, palette, and data visuals while upgrading to a maintainable, type-safe React codebase.
