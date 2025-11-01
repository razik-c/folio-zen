/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

const rubikStack = ["Rubik", ...fontFamily.sans];
const interStack = ["Inter", ...fontFamily.sans];

export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: rubikStack,
        secondary: interStack,
      },

      screens: {
        sm: "360px",
        md: "480px",
        lg: "720px",
        xl: "1024px",
        "2xl": "1340px",
      },

      container: {
        center: true,
        screens: {
          "2xl": "1400px",
        },
        
        padding: {
          DEFAULT: "1.5rem",
        },
      },

      colors: {
        primary: "#7859E2",
        secondary: "#F6D06B",
        ink: "#1D1D1F",
        muted: "#9E8E8A",
        surface: "#FBFAFA",
        tint: "#D6C7ED",
      },  

      typography: ({ theme }) => ({
        desktop: {
          css: {
            h1: {
              fontFamily: theme("fontFamily.primary").join(","),
              fontSize: "60px",
              lineHeight: "70px",
              letterSpacing: "-0.02em",
              fontWeight: "700",
              maxWidth: "90ch",
              margin: 0,
            },
            h2: {
              fontFamily: theme("fontFamily.primary").join(","),
              fontSize: "48px",
              lineHeight: "58px",
              letterSpacing: "-0.015em",
              fontWeight: "700",
              maxWidth: "90ch",
              margin: 0,
            },
            h3: {
              fontFamily: theme("fontFamily.primary").join(","),
              fontSize: "40px",
              lineHeight: "50px",
              letterSpacing: "-0.01em",
              fontWeight: "700",
              maxWidth: "90ch",
              margin: 0,
            },
            h4: {
              fontFamily: theme("fontFamily.primary").join(","),
              fontSize: "32px",
              lineHeight: "40px",
              letterSpacing: "-0.01em",
              fontWeight: "700",
              maxWidth: "90ch",
              margin: 0,
            },
            h5: {
              fontFamily: theme("fontFamily.primary").join(","),
              fontSize: "24px",
              lineHeight: "32px",
              letterSpacing: "-0.01em",
              fontWeight: "700",
              maxWidth: "90ch",
              margin: 0,
            },
            h6: {
              fontFamily: theme("fontFamily.primary").join(","),
              fontSize: "20px",
              lineHeight: "28px",
              letterSpacing: "-0.01em",
              fontWeight: "700",
              maxWidth: "90ch",
              margin: 0,
            },
            p: {
              fontFamily: theme("fontFamily.secondary").join(","),
              fontSize: "20px",
              lineHeight: "28px",
              fontWeight: "400",
              maxWidth: "90ch",
              margin: 0,
            },
            span: {
              fontFamily: theme("fontFamily.secondary").join(","),
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "400",
              maxWidth: "90ch",
              margin: 0,
            },
          },
        },

        tablet: {
          css: {
            h1: {
              fontFamily: theme("fontFamily.primary").join(","),
              fontSize: "48px",
              lineHeight: "56px",
              letterSpacing: "-0.015em",
              fontWeight: "700",
              maxWidth: "90ch",
              margin: 0,
            },
            h2: {
              fontFamily: theme("fontFamily.primary").join(","),
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: "700",
              maxWidth: "90ch",
              margin: 0,
            },
            h3: {
              fontFamily: theme("fontFamily.primary").join(","),
              fontSize: "32px",
              lineHeight: "40px",
              fontWeight: "700",
              maxWidth: "90ch",
              margin: 0,
            },
            h4: {
              fontFamily: theme("fontFamily.primary").join(","),
              fontSize: "28px",
              lineHeight: "36px",
              fontWeight: "700",
              maxWidth: "90ch",
              margin: 0,
            },
            p: {
              fontFamily: theme("fontFamily.secondary").join(","),
              fontSize: "17px",
              lineHeight: "26px",
              fontWeight: "400",
              maxWidth: "90ch",
              margin: 0,
            },
            span: {
              fontFamily: theme("fontFamily.secondary").join(","),
              fontSize: "15 px",
              lineHeight: "22px",
              fontWeight: "400",
              maxWidth: "90ch",
              margin: 0,
            },
          },
        },

        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme("fontFamily.primary").join(","),
              fontSize: "36px",
              lineHeight: "44px",
              letterSpacing: "-0.01em",
              fontWeight: "700",
              maxWidth: "90ch",
              margin: 0,
            },
            h2: {
              fontFamily: theme("fontFamily.primary").join(","),
              fontSize: "32px",
              lineHeight: "40px",
              fontWeight: "700",
              maxWidth: "90ch",
              margin: 0,
            },
            h3: {
              fontFamily: theme("fontFamily.primary").join(","),
              fontSize: "28px",
              lineHeight: "36px",
              fontWeight: "700",
              maxWidth: "90ch",
              margin: 0,
            },
            h4: {
              fontFamily: theme("fontFamily.primary").join(","),
              fontSize: "24px",
              lineHeight: "32px",
              fontWeight: "700",
              maxWidth: "90ch",
              margin: 0,
            },
            h5: {
              fontFamily: theme("fontFamily.primary").join(","),
              fontSize: "20px",
              lineHeight: "28px",
              fontWeight: "700",
              maxWidth: "90ch",
              margin: 0,
            },
            h6: {
              fontFamily: theme("fontFamily.primary").join(","),
              fontSize: "18px",
              lineHeight: "26px",
              fontWeight: "700",
              maxWidth: "90ch",
              margin: 0,
            },
            p: {
              fontFamily: theme("fontFamily.secondary").join(","),
              fontSize: "15px",
              lineHeight: "24px",
              fontWeight: "400",
              maxWidth: "90ch",
              margin: 0,
            },
            span: {
              fontFamily: theme("fontFamily.secondary").join(","),
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "400",
              maxWidth: "90ch",
              margin: 0,
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
