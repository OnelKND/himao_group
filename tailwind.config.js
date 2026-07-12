/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        himao: {
          navy: "#1F3A5F",
          gold: "#C9A24B",
          dark: "#0F1E33",
          light: "#F5F1E8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        himaotheme: {
          primary: "#1F3A5F",
          "primary-content": "#ffffff",
          secondary: "#C9A24B",
          "secondary-content": "#0F1E33",
          accent: "#C9A24B",
          neutral: "#0F1E33",
          "base-100": "#ffffff",
          "base-200": "#F5F1E8",
          "base-300": "#e8e2d4",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
    darkTheme: "himaotheme",
  },
};
