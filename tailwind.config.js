/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primarybase: "#800080",
        greybase: "#F5F3F6",
        "grey-100": "#D9D9D9",
        purple: "#800080",
        lilac: "#D5AAD5",
        white: "#FFFFFF",
        "white-80": "#A3A2A4",
        "white-100": "#FDFDFD",
        "white-200": "#CCCACD",
        boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
        "black-100": "#313131",
        whitebg: "#F5F3F6",
        buttonbg: "#F9DBBD",
        blackbase: "#151415",
        secondary: "#CFB69D",
        primary: "#2B002B",
        black050: "#8A898A",
        footerUp: "#FBE7D3",
        white100: "#CCCACD",
        customBg: "rgba(230, 204, 230, 0.10)",
        icons: "#09121F",
      },
      fontSize: {
        '100': '100%',
      },
      fontFamily: {
        source: ["Source Sans 3", "sans-serif"],
        "source-sans-pro": ["Source Sans Pro", "sans-serif"],
      },
      screens: {
        xs: "480px",
        mds: "600px",
        md: "800px",
        lgss: "976px",
        lg: "1200px",
        xxl: "1300px",
        xxxl: "1450px",
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/images/hero-rectangle.svg')",
        "login-bg": "url('/src/assets/images/loginVector.svg')",
        "login-bg1": "url('/src/assets/loginVector.png')",
        "settings-bg": "url('/src/assets/images/settingsbg.svg')",
      },
      boxShadow: {
        custom: "16px 16px 0 0 #800080",
        "shadow-100": "-4px 8px 4px 0px #CCCACD",
      },
    },
  },
  variants: {},
  plugins: [],
};
