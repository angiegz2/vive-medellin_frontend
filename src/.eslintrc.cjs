module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true     // ✅ reconoce describe, test, expect
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended"
  ],
  plugins: ["jest"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "no-unused-vars": "warn",
    "jest/no-disabled-tests": "warn",
    "jest/no-identical-title": "warn",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "warn"
  }
};
