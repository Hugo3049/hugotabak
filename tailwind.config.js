/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
          primary: '#1E3A8A',      // Hoofdkleur
          secondary: '#60A5FA',    // Secundaire kleur
          background: '#F3F4F6',   // Achtergrondkleur
          accent: '#F97316',       // Accentkleur
          dark: '#4B5563',         // Donkere kleur
          white: '#FFFFFF',        // Wit
      },
    },
  },
  plugins: [],
}

