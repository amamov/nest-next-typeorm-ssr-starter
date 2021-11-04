module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  ignorePatterns: [".eslintrc.js", "node_modules", ".next", "*.d.ts"],
  rules: {
    "no-console": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": ["error", { args: "none" }],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // "@typescript-eslint/explicit-function-return-type": [
    //   "warn",
    //   {
    //     allowExpressions: true,
    //     allowTypedFunctionExpressions: true,
    //     allowHigherOrderFunctions: true,
    //   },
    // ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-floating-promises": 1,
  },
};
