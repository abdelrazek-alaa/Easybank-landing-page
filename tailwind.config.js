module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "public-sans": ["Public Sans", "sans-serif"],
      },
      colors: {
        "dark-blue": "hsl(233, 26%, 24%)",
        "lime-green": "hsl(136, 65%, 51%)",
        "bright-cyan": "hsl(192, 70%, 51%)",
        "grayish-blue": "hsl(233, 8%, 62%)",
        "light-grayish-blue": "hsl(220, 16%, 96%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        desktop: "url('/public/images/bg-intro-desktop.svg')",
        mobile: "url('/public/images/bg-intro-mobile.svg')",
      },
    },
  },
  plugins: [],
};
