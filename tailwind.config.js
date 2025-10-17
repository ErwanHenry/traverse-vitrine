import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs Interreg & TRAVERSE
        primary: '#1E40AF',      // Bleu Interreg
        secondary: '#7C3AED',    // Violet patrimoine
        accent: '#F59E0B',       // Ambre verre

        // Couleurs 5 circuits
        circuit: {
          '1': '#E74C3C',  // Rouge-orangé
          '2': '#3498DB',  // Bleu ciel
          '3': '#2ECC71',  // Vert
          '4': '#9B59B6',  // Violet
          '5': '#F39C12',  // Orange
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
