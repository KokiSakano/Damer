module.exports = {
  "stories": [
    "../components/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    });

    return config;
  },
  "core": {
    "builder": "webpack5"
  },
  "framework": "@storybook/react"
}
