const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      docs: {
        vueDocgenOptions: {
          alias: {
            "@": path.resolve(__dirname, "../"),
          },
        },
      },
    },
    "@storybook/addon-a11y",
  ],
  core: {
    builder: "storybook-builder-vite",
  },
  typescript: {
    check: false,
    checkOptions: {},
  },
  viteFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };

    return config;
  },
};
