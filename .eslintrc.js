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
    "prettier",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": ["error", { ignoreRestArgs: false }],
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
  },
};
