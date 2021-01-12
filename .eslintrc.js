module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
  },
};
