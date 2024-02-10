/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#AB6B2E",
        backgroundColor: "#FDE9CC",
        'custom-bg': '#FFF7F1',
        'custom-foot': "#944E63",
        'custom-nav': "#944E63"
      },
    },
  },
  plugins: [],
};