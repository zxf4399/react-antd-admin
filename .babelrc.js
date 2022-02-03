const isDev = process.env.NODE_ENV !== "production";

module.exports = function (api) {
  api.cache.using(() => isDev);

  return {
    presets: [
      "@babel/preset-env",
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
      "@babel/preset-typescript",
    ],
    plugins: [isDev && "react-refresh/babel"].filter(Boolean),
  };
};
