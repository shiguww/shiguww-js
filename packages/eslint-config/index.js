// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    files: ["**/*.ts"],
    rules: {
      "no-return-await": "off", // Disabled so that '@typescript-eslint/return-await' works correctly.
      "@typescript-eslint/return-await": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/member-ordering": ["warn", {
        default: {
          order: "natural-case-insensitive",
          optionalityOrder: "required-first",
          memberTypes: [
            "signature",

            "public-abstract-field",
            "protected-abstract-field",
            "abstract-field",

            "public-static-field",
            "protected-static-field",
            "private-static-field",
            "#private-static-field",
            "static-field",

            "public-abstract-set",
            "protected-abstract-set",
            "abstract-set",

            "public-static-get",
            "protected-static-get",
            "private-static-get",
            "#private-static-get",
            "static-get",

            "public-abstract-set",
            "protected-abstract-set",
            "abstract-set",

            "public-static-set",
            "protected-static-set",
            "private-static-set",
            "#private-static-set",
            "static-set",

            "public-abstract-method",
            "protected-abstract-method",
            "abstract-method",

            "public-static-method",
            "protected-static-method",
            "private-static-method",
            "#private-static-method",
            "static-method",

            "static-initialization",

            "public-constructor",
            "protected-constructor",
            "private-constructor",

            "public-field",
            "protected-field",
            "private-field",
            "#private-field",
            "field",

            "public-instance-get",
            "protected-instance-get",
            "private-instance-get",
            "#private-instance-get",
            "instance-get",

            "public-get",
            "protected-get",
            "private-get",
            "#private-get",
            "get",

            "public-instance-set",
            "protected-instance-set",
            "private-instance-set",
            "#private-instance-set",
            "instance-set",

            "public-set",
            "protected-set",
            "private-set",
            "#private-set",
            "set",

            "public-instance-method",
            "protected-instance-method",
            "private-instance-method",
            "#private-instance-method",
            "instance-method",

            "public-method",
            "protected-method",
            "private-method",
            "#private-method",
            "method"
          ]
        }
      }],
      "@typescript-eslint/method-signature-style": "error",
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/explicit-function-return-type": ["warn", {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true
      }],
      "@typescript-eslint/array-type": ["warn", { default: "generic" }],
      "@typescript-eslint/no-invalid-void-type": ["error", {
        allowAsThisParameter: true,
        allowInGenericTypeArguments: true
      }],
      "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
      "@typescript-eslint/consistent-indexed-object-style": ["warn", "record"]
    }
  });
