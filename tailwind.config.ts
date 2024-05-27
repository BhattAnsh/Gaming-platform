import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
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
        border: "rgb(255 255 255)",
        input: "rgb(255 255 255)",
        ring: "hsl(var(--ring))",
        background: "rgb(0 0 0)",
        foreground: "rgb(255 255 255)",
        primary: {
          DEFAULT: "rgb(0 0 0)",
          foreground: "rgb(255 255 255)",
        },
        secondary: {
          DEFAULT: "rgb(0 0 0)",
          foreground: "rgb(255 255 255)",
        },
        destructive: {
          DEFAULT: "rgb(0 0 0)",
          foreground: "rgb(255 255 255)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "rgb(0 0 0)",
          foreground: "rgb(255 255 255)",
        },
        popover: {
          DEFAULT: "rgb(0 0 0)",
          foreground: "rgb(255 255 255)",
        },
        card: {
          DEFAULT: "rgb(255 255 255)",
          foreground: "rgb(0 0 0)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config