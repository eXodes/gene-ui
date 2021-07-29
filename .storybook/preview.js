import "../src/main.css";

export const parameters = {
  options: {
    storySort: {
      order: [
        "Introduction",
        [
          "Getting Started",
        ],
        "Components",
        [
          "Atoms",
          "Compound",
        ],
      ],
    },
  },
  layout: "centered",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
