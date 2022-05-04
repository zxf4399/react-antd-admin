module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
  },
  plugins: ["@typescript-eslint", "@emotion", "simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": [2, { ignoreRestArgs: false }],
    "simple-import-sort/exports": 2,
    "simple-import-sort/imports": 2,
    "react/jsx-sort-props": 2,
  },
};
