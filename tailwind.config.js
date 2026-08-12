/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF8F4",
        paper: "#FFFFFF",
        ink: "#14181A",
        graphite: "#5B6570",
        mist: "#EFEBE3",
        gold: {
          DEFAULT: "#B08D57",
          light: "#D9C9A8",
          dark: "#8C6D3F",
        },
        teal: {
          DEFAULT: "#0E5C52",
          light: "#E4EFE9",
          dark: "#093B35",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Manrope'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(1.5deg)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: 240 },
          "100%": { strokeDashoffset: 0 },
        },
        pulseDot: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.4, transform: "scale(1.4)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 9s ease-in-out infinite",
        drawLine: "drawLine 1.6s ease forwards",
        pulseDot: "pulseDot 2s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(20, 24, 26, 0.15)",
        lift: "0 20px 60px -20px rgba(176, 141, 87, 0.35)",
        card: "0 2px 20px rgba(20, 24, 26, 0.06)",
      },
      backgroundImage: {
        "gold-shimmer":
          "linear-gradient(110deg, #B08D57 30%, #E8D6B0 45%, #B08D57 60%)",
      },
    },
  },
  plugins: [],
};
