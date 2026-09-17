/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom Rodricks Analytics palette
        amber: {
          // reserved highlight gold — at most 1-2 uses per page
          50: "#fef9e7",
          100: "#fdecc7",
          200: "#fad58b",
          300: "#f8bd4f",
          400: "#f6a513",
          500: "#d4942b",
          600: "#a8701a",
          700: "#825314",
          800: "#664012",
          900: "#533610",
          950: "#2e1d09",
        },
        teal: {
          50: "#e8faf4",
          100: "#c8f4e8",
          200: "#94e6d2",
          300: "#5bd2b7",
          400: "#33b89a",
          500: "#30a98d",
          600: "#1f8c73",
          700: "#1a6f5c",
          800: "#175a4b",
          900: "#14493e",
          950: "#082a23",
        },
        dark: {
          50: "#1f2430",
          100: "#181c25",
          200: "#12141a",
          300: "#0c0d12",
          400: "#08090d",
          500: "#050507",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        display: ["var(--font-serif)", "Fraunces", "Georgia", "serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "scan": {
          "0%, 100%": { transform: "scaleX(0.3)", opacity: "0.3" },
          "50%": { transform: "scaleX(1)", opacity: "1" },
        },
        "draw-line": {
          to: { strokeDashoffset: "0" },
        },
        "arc-grow": {
          to: { strokeDashoffset: "0" },
        },
        "count-up": {
          from: { "--count": "0" },
          to: { "--count": "var(--target)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "scan": "scan 3s ease-in-out infinite",
        "draw-line": "draw-line 1.5s ease-out forwards",
        "arc-grow": "arc-grow 1.5s ease-out forwards",
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary)) 50%, hsl(var(--accent)))",
        "gradient-accent-v": "linear-gradient(180deg, hsl(var(--primary)), hsl(var(--primary)) 50%, hsl(var(--accent)))",
        "gradient-dark": "linear-gradient(180deg, hsl(var(--background)), hsl(var(--muted)))",
        "gradient-glow": "radial-gradient(ellipse at center, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
        "gradient-teal": "linear-gradient(135deg, hsl(var(--teal)), hsl(var(--teal-light)))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}