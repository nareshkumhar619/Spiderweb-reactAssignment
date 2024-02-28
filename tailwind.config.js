/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          "100": "rgba(255, 255, 255, 0.56)",
          "200": "rgba(0, 0, 0, 0.1)",
          "300": "rgba(0, 0, 0, 0.4)",
          "400": "rgba(0, 0, 0, 0.5)",
          "500": "rgba(0, 0, 0, 0.01)",
          "600": "rgba(255, 255, 255, 0.4)",
          "700": "rgba(0, 0, 0, 0.3)",
        },
        pink: "#d175b6",
        white: "#fff",
        aquamarine: "#00eec5",
        mediumorchid: "#d85ad8",
      },
      spacing: {
        "space-300": "12px",
        "space-200": "8px",
      },
      fontFamily: {
        kanit: "Kanit",
        inter: "Inter",
      },
      borderRadius: {
        "8xs": "5px",
        "9xl": "28px",
        "10xs": "3px",
        "border-border-radius-card": "12px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      base: "1rem",
      "21xl": "2.5rem",
      sm: "0.875rem",
      smi: "0.813rem",
      "5xl": "1.5rem",
      xs: "0.75rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
