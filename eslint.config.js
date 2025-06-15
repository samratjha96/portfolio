import reactPlugin from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import babelParser from "@babel/eslint-parser";

// This file consolidates ESLint and Prettier configuration
// Browser and Node environments are enabled by default
export default [
  {
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        // Node globals
        process: "readonly",
        // ES2021 globals
        Promise: "readonly",
        Map: "readonly",
        Set: "readonly",
      },
      parser: babelParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ...prettierConfig,
    // Prettier settings inlined from .prettierrc
    rules: {
      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: false,
          tabWidth: 2,
          trailingComma: "es5",
          printWidth: 100,
          bracketSpacing: true,
        },
      ],
    },
  },
  {
    ignores: ["dist/**/*", "node_modules/**/*"],
  },
];
