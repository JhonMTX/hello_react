 // .storybook/webpack.config.js

const path = require("path");

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "../"),
  };

  return config;
};
