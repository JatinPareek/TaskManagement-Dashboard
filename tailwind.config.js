/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f7f7f7",
        white: "#fff",
        gray: {
          "100": "#1c1d22",
          "200": "rgba(28, 29, 34, 0.04)",
          "300": "rgba(28, 29, 34, 0.12)",
          "400": "rgba(28, 29, 34, 0.06)",
          "500": "rgba(28, 29, 34, 0.5)",
          "600": "rgba(28, 29, 34, 0.08)",
        },
        lightslategray: {
          "100": "#888da7",
          "200": "rgba(136, 141, 167, 0.1)",
        },
        mediumseagreen: "#3cbe88",
        sandybrown: {
          "100": "#ffa048",
          "200": "rgba(255, 160, 72, 0.1)",
        },
        salmon: {
          "100": "#ff7979",
          "200": "rgba(255, 121, 121, 0.1)",
        },
        orange: "#fea202",
        royalblue: "#1e62d7",
        darkgray: "#adafba",
        gainsboro: {
          "100": "#d6dadf",
          "200": "#d9d9d9",
        },
        dimgray: "#686c71",
      },
      spacing: {},
      fontFamily: {
        "exo-2": "'Exo 2'",
        mulish: "Mulish",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        mid: "17px",
        "3xs": "10px",
        sm: "14px",
        "3xl": "22px",
        lg: "18px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      sm: "14px",
      "9xl": "28px",
      "3xl": "22px",
      "11xl": "30px",
      "5xl": "24px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
