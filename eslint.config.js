import globals from "globals"
import tseslint from "typescript-eslint"
import tsParser from "@typescript-eslint/parser"
import unusedImports from "eslint-plugin-unused-imports"
import airbnbBase from "eslint-config-airbnb-base"
import airbnbBaseTypescript from "eslint-config-airbnb-typescript"
import js from "@eslint/js"

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.node,
        ...globals.browser,
      }
    },
    plugina: {
      "@typescript-eslint": tseslint,
      "unused-imports": unusedImports,
    },
    rules: {
      ...airbnbBase,
      ...airbnbBaseTypescript,
      "no-unused-vars": "off",
       "react/react-in-jsx-scope": "off",
      "unused-imports/no-unused-imports": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
          caghtErrorsIgnorePattern: "^_",
        }
      ],
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
        }
      }
    }
  },
];