const colors = require("tailwindcss/colors")

function withOpacity (variableName) {
  return function ({opacityValue}) {
    if (opacityValue)
      return `rgba(${variableName}, ${opacityValue})`

    return `rgb(${variableName})`
  };
}

module.exports = {
  prefix: "g-",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: withOpacity("var(--g-color-white)"),
      black: withOpacity("var(--g-color-white)"),
      clear: withOpacity("var(--g-color-clear)"),
      primary: {
        50: withOpacity("var(--g-color-primary-50)"),
        100: withOpacity("var(--g-color-primary-100)"),
        200: withOpacity("var(--g-color-primary-200)"),
        300: withOpacity("var(--g-color-primary-300)"),
        400: withOpacity("var(--g-color-primary-400)"),
        500: withOpacity("var(--g-color-primary-500)"),
        600: withOpacity("var(--g-color-primary-600)"),
        700: withOpacity("var(--g-color-primary-700)"),
        800: withOpacity("var(--g-color-primary-800)"),
        900: withOpacity("var(--g-color-primary-900)"),
      },
      attention: {
        50: withOpacity("var(--g-color-attention-50)"),
        100: withOpacity("var(--g-color-attention-100)"),
        200: withOpacity("var(--g-color-attention-200)"),
        300: withOpacity("var(--g-color-attention-300)"),
        400: withOpacity("var(--g-color-attention-400)"),
        500: withOpacity("var(--g-color-attention-500)"),
        600: withOpacity("var(--g-color-attention-600)"),
        700: withOpacity("var(--g-color-attention-700)"),
        800: withOpacity("var(--g-color-attention-800)"),
        900: withOpacity("var(--g-color-attention-900)"),
      },
      success: {
        50: withOpacity("var(--g-color-success-50)"),
        100: withOpacity("var(--g-color-success-100)"),
        200: withOpacity("var(--g-color-success-200)"),
        300: withOpacity("var(--g-color-success-300)"),
        400: withOpacity("var(--g-color-success-400)"),
        500: withOpacity("var(--g-color-success-500)"),
        600: withOpacity("var(--g-color-success-600)"),
        700: withOpacity("var(--g-color-success-700)"),
        800: withOpacity("var(--g-color-success-800)"),
        900: withOpacity("var(--g-color-success-900)"),
      },
      warning: {
        50: withOpacity("var(--g-color-warning-50)"),
        100: withOpacity("var(--g-color-warning-100)"),
        200: withOpacity("var(--g-color-warning-200)"),
        300: withOpacity("var(--g-color-warning-300)"),
        400: withOpacity("var(--g-color-warning-400)"),
        500: withOpacity("var(--g-color-warning-500)"),
        600: withOpacity("var(--g-color-warning-600)"),
        700: withOpacity("var(--g-color-warning-700)"),
        800: withOpacity("var(--g-color-warning-800)"),
        900: withOpacity("var(--g-color-warning-900)"),
      },
      danger: {
        50: withOpacity("var(--g-color-danger-50)"),
        100: withOpacity("var(--g-color-danger-100)"),
        200: withOpacity("var(--g-color-danger-200)"),
        300: withOpacity("var(--g-color-danger-300)"),
        400: withOpacity("var(--g-color-danger-400)"),
        500: withOpacity("var(--g-color-danger-500)"),
        600: withOpacity("var(--g-color-danger-600)"),
        700: withOpacity("var(--g-color-danger-700)"),
        800: withOpacity("var(--g-color-danger-800)"),
        900: withOpacity("var(--g-color-danger-900)"),
      },
      gray: colors.coolGray,
    },
    fontFamily: {
      brand: ["Rubik", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
