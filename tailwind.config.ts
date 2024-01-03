import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      "2xl": { max: "1440px" },
      xl: { max: "1068px" },

      lg: { max: "960px" },
      clg: { max: "850px" },
      smd: {max: '720px'},
      md: { max: "700px" },
      scmd: {max: '645px'},
      cmd: { max: "600px" },
      cgsm: { max: "560px" },
      gsm: { max: "500px" },
      csm: { max: "425px" },
      ssm: {max: '370px'},
      sssm: {max: '342px'},
      sm: { max: "320px" },
    },
  },
  plugins: [],
};
export default config;
