/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A9411D",
        secondary: "#FFF8EF",
        tertiary: "#",
        yellowCustom: "#F6BE3F",
        centerElement: "justify-center items-center",
      },
    },
  },
  plugins: [],
};

export default config;
