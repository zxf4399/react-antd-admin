const isDev = process.env.NODE_ENV === "development";

module.exports = function (api) {
  api.cache.using(() => isDev);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current",
          },
        },
      ],
      [
        "@babel/preset-react",
        {
          importSource: "@emotion/react",
          runtime: "automatic",
        },
      ],
      "@babel/preset-typescript",
    ],
    plugins: [
      isDev && "react-refresh/babel",
      [
        "import",
        {
          libraryName: "antd",
          style: "css",
        },
      ],
      "@emotion/babel-plugin",
    ].filter(Boolean),
  };
};
