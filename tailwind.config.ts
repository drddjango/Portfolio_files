import { ClassValue } from 'clsx'
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
    backgroundImage: {
        parallax_md: 'url("/Background/hero_lg.webp")',
        parallax_sm: 'url("/Background/hero_sm.webp")',
        menu_img: 'url("/Background/menu_img.webp")',
        contact_home: 'url("/Background/contact.webp")',
    }
  },
  plugins: [require("tailwindcss-animate"),
    function ({ addUtilities, theme }: {addUtilities: (args: {[key: string]: ClassValue})=>void, theme: any}) {
        const newUtilities = {
          '.section-wrapper': {
            position: 'relative',
            zIndex: '10',
            maxWidth: '1500px',
            margin: 'auto',
            padding: '12svh 4rem 4rem',
            overflow: 'hidden',
          },
          '.section-heading': {
            display: 'flex',
            justifyContent: 'center',
            fontSize: theme('fontSize.5xl'),
            fontWeight: theme('fontWeight.medium'),
            '@screen sm': {
              fontWeight: theme('fontWeight.bold'),
            },
            '@screen md': {
              fontSize: theme('fontSize.7xl'),
            },
          },
        }

        const mediaQueries = {
          [`@media (max-width: ${theme('screens.md')})`]: {
            '.section-wrapper': {
              padding: '12svh 4rem 3rem',
            },
          },
          [`@media (max-width: ${theme('screens.sm')})`]: {
            '.section-wrapper': {
              padding: '12svh 2.4rem 2rem',
            },
          },
        }

        addUtilities(newUtilities)
        addUtilities(mediaQueries)
      },
  ],
} satisfies Config

export default config
