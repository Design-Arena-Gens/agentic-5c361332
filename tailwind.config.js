/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Plus Jakarta Sans", "system-ui"],
        sans: ["var(--font-sans)", "Inter", "system-ui"]
      },
      colors: {
        brand: {
          dark: "#0A1F44",
          DEFAULT: "#1A4B8C",
          light: "#4F8BD9"
        },
        accent: {
          purple: "#6A4BFF",
          teal: "#16B5A3"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: []
};
