import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeOut: "fadeOut 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: {
            // opacity: '0',
            transform: 'scale(0%)',
          },
          to: {
            // opacity: '1',
            transform: 'scale(100%)',
          },
        },
        fadeOut: {
          from: {
            // opacity: '1',
            transform: 'scale(100%)',
          },
          to: {
            // opacity: '0',
            transform: 'scale(0%)',
          }
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
