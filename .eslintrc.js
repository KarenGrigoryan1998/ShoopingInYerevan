module.exports = {
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: false
    },
    parser: "babel-eslint",
  },
  plugins: ["vue", "prettier"],
  rules: {
    "no-console": "off",
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
};
