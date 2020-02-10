module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb', "eslint:recommended",
    "plugin:prettier/recommended",
    // "plugin:@typescript-eslint/eslint-recommended",
    // "plugin:@typescript-eslint/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "prettier",
    // "@typescript-eslint/eslint-plugin",
  ],
  rules: { 
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "strict": 0,
    "prettier/prettier": ["error"],
  }
};
