/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{astro,html,js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{astro,html,js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          gradientBG:'linear-gradient(60deg, rgba(0,174,229,1) 0%, rgba(0, 27, 148, 1) 50%, rgba(162, 53, 254, 1) 100%)',
          secondGradient: 'linear-gradient(58deg, rgba(0,170,229,0.196516106442577) 0%, rgba(162,53,254,0.2049194677871149) 100%)',
          hoverBGcolor:'linear-gradient(49deg, rgba(20,198,255,1) 1%, rgba(62,45,255,0.9752275910364145) 45%, rgba(156,39,255,1) 81%)',
      },
    
      fontSize: {
        title: "24px",
        subtitle: "40px",
      },
      fontWeight: {
        title: "600",
        subtitle: "900",
      },
      colors: {
        royalBule: "#001B94",
        title: "#ffffff",
        subtitle: "#ffffff",
        
      },
      screens: {
        legacy: "1366px",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-15px)",
          },
        },
      },
      animation: {
        bounce: "bounce 2s infinite forwards alternate",
      },
      
    },
  },
  plugins: [],
};
