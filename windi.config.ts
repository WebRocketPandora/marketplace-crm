import {defineConfig} from "windicss/helpers"
import formsPlugin from "windicss/plugin/forms"
import lineClampPlugin from "windicss/plugin/line-clamp"
import colors from "windicss/colors"

export default defineConfig({
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    boxShadow: {
      small: "6px 12px 20px 0px #76767640",
      tiny: "4px 8px 10px 0px #B6B6B640",
      dark: "6px 12px 54px 0px #00000033",
    },
    colors: {
      transparent: colors.transparent,
      white: colors.white,
      sidebar: {
        DEFAULT: "#424245",
        text: "#FFFFFF80",
        hover: "#4A4A4C",
        active: "#343435",
      },
      background: {
        DEFAULT: "#FBFBFD",
        element: "#F5F5F5",
        modal: "#1D1D1F33",
      },
      black: {
        DEFAULT: "#1D1D1F",
        90: "#343435",
        80: "#4A4A4C",
        70: "#616162",
        60: "#777779",
        50: "#8E8E8F",
        40: "#A5A5A5",
        30: "#BBBBBC",
        20: "#D2D2D2",
        10: "#E8E8E9",
      },
      green: {
        click: "#399E53",
        hover: "#3DAF5A",
        DEFAULT: "#49C468",
        90: "#5BC977",
        80: "#6DCF86",
        70: "#7FD595",
        60: "#92DBA4",
        50: "#A4E1B3",
        40: "#B6E7C2",
        30: "#C8EDD2",
        20: "#DBF3E1",
        10: "#EDF9F0",
      },
      blue: {
        click: "#164FB3",
        hover: "#1B66EB",
        DEFAULT: "#1E6FFF",
        90: "#357DFF",
        80: "#4B8CFF",
        70: "#619AFF",
        60: "#78A9FF",
        50: "#8EB7FF",
        40: "#A5C5FF",
        30: "#BCD4FF",
        20: "#D2E2FF",
        10: "#E8F1FF",
      },
      purple: "#AC39FF",
      pink: "#AC39FF",
      red: "#FA1919",
    },
  },
  plugins: [formsPlugin, lineClampPlugin],
})
