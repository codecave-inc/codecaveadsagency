import type { Config } from "tailwindcss";

// Single source of truth for the CodeCave Ads Agency design system.
// Extracted + unified from the Stitch export (all 13 screens used the
// same token set, confirming this palette was consistent already).
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#03224d",
        "primary-container": "#1f3864",
        "on-primary": "#ffffff",
        "on-primary-container": "#8ba2d5",
        "surface-tint": "#475e8c",

        secondary: "#835500",
        "secondary-container": "#feae2c",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#6b4500",

        tertiary: "#361e00",
        "tertiary-container": "#543100",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#cc995f",

        background: "#fcf9f8",
        "on-background": "#1b1c1c",
        surface: "#fcf9f8",
        "surface-canvas": "#F7F8FA",
        "surface-card": "#FFFFFF",
        "on-surface": "#1b1c1c",
        "on-surface-variant": "#44474f",
        "surface-variant": "#e4e2e1",
        "surface-container": "#f0eded",
        "surface-container-low": "#f6f3f2",
        "surface-container-high": "#eae7e7",
        "surface-container-highest": "#e4e2e1",
        "surface-container-lowest": "#ffffff",
        "surface-dim": "#dcd9d9",
        "surface-bright": "#fcf9f8",

        outline: "#747780",
        "outline-variant": "#c4c6d0",
        "border-subtle": "#E3E5E8",

        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",

        "status-success": "#2E7D32",
        "status-warning": "#ED6C02",
        "status-error": "#C62828",

        "inverse-surface": "#303030",
        "inverse-on-surface": "#f3f0f0",
        "inverse-primary": "#afc6fb",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        "unit-2xs": "0.25rem",
        "unit-xs": "0.5rem",
        "unit-sm": "0.75rem",
        "unit-md": "1rem",
        "unit-lg": "1.5rem",
        "unit-xl": "2rem",
        "unit-2xl": "3rem",
        "unit-3xl": "4rem",
        "gutter-mobile": "1rem",
        "gutter-desktop": "1.5rem",
        "container-max": "80rem",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
