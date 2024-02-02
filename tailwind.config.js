const config = require("@sanservices/brands-ui/dist/base.config.cjs");
const cdnPath = 'https://cdn.sandals.com/obe/v12/images/';

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  ...config.tailwind,
  content: [
    ...config.tailwind.content,
    "../../node_modules/@sanservices/brands-ui/dist/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...config.tailwind.theme,
    extend: {
      colors: {
        ...config.tailwind.theme.colors,
        "sandals-gray": "#797979",
        "sandals-light-gray": "#f8f8f8",
        black: "#000000",
        white: "#ffffff",
        blue: "#00b8f4",
        "dark-blue": "#447daa",
        "header-black": "#1a1a1a",
        "light-blue": "#d8ecf3",
        "anti-flash-white": "#ededed",
        "gray-f2": "#f2f2f2",
        platinum: "#dddddd",
        aero: "#84bbE5",
        "shadow-blue": "#7289a1",
        "davys-gray": "#5a5a5a",
        cultured: "#f7f7f7",
        "bright-gray": "#eaeaea",
        gainsboro: "#e3e3e3",
        onyx: "#373737",
        gray9: "#aaa",
        gray11: "#2a2a2a",
        blue10: "#2a7eae",
        red10: "#ed1c24",
        customGray: "#d3d3d3",
        lightGray: "#666",
        silverGray: "#c4c4c4",
        silverlightGray: "#f6f6f6",
        "silver-chalice": "#ababab",
        "light-siver": "#d8d8d8",
        "spiro-disco": "#28caff",
        "outer-space": "#484848",
        "winter-wizard": "#97e5ff",
        "chinese-silver": "#cacccd",
        "outer-space-light": "#464646",
        "gainsboro-soft": "#dbdbdb",
        "platinum-soft": "#e4e7e7",
        "light-gray": "#acacac",
        "counter":"#acacac",
        "modal-hr":"#DEDEDE",
      },
      boxShadow: {
        center: "0 0 5rem -1rem rgba(0,0,0, 0.4)",
        "blur-input": "0 0 0.2rem 0.1rem rgba(0,0,0, 0.35)",
        'guest-shadow': '0 0 2.8rem 0 rgba(0,0,0,.75)',
        'roomcard': '0 3px 9px rgba(0,0,0,.06)',
       
      },
      
      backgroundImage: {
        'mobile-app-banner': `url('${cdnPath}confirmation/beaches-bg.jpg')`,
      }
    },
  },
};

export default tailwindConfig;
