module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },

    parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },

    extends: ["eslint-config-prettier"],

    plugins: ["babel", "eslint-comments", "import", "prettier", "simple-import-sort"],

    rules: {
        "array-callback-return": "error",
        "babel/no-invalid-this": "error",
        "babel/valid-typeof": "error",
        "constructor-super": "error",
        "default-case": ["error", { commentPattern: "^no default$" }],
        "eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],
        "eslint-comments/no-aggregating-enable": "error",
        "eslint-comments/no-duplicate-disable": "error",
        "eslint-comments/no-unlimited-disable": "error",
        "eslint-comments/no-unused-disable": "error",
        "eslint-comments/no-unused-enable": "error",
        "for-direction": "error",
        "getter-return": "error",
        "import/export": "error",
        "import/extensions": "off",
        "import/imports-first": "error",
        "import/named": "off",
        "import/no-amd": "error",
        "import/no-commonjs": "error",
        "import/no-duplicates": "error",
        "import/no-extraneous-dependencies": "error",
        "import/no-self-import": "error",
        "new-parens": "error",
        "no-array-constructor": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": ["error", "except-parens"],
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-label": "error",
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": ["error", { allowLoop: true, allowSwitch: false }],
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-misleading-character-class": "error",
        "no-multi-str": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-undef": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-labels": "error",
        "no-unused-vars": "error",
        "no-use-before-define": ["error", { functions: false, classes: false, variables: false }],
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-with": "error",
        "require-yield": "error",
        "simple-import-sort/exports": "error",
        "unicode-bom": "error",
        "use-isnan": "error",
        eqeqeq: ["error", "smart"],
        "import/no-unresolved": ["error", { caseSensitive: false, ignore: ["vscode"] }],
        "prettier/prettier": [
            "error",
            {
                bracketSameLine: false,
                bracketSpacing: true,
                printWidth: 120,
                semi: true,
                singleQuote: false,
                tabWidth: 4,
                trailingComma: "all",
                useTabs: false,
                endOfLine: "auto",
            },
        ],
        "simple-import-sort/imports": ["error", { groups: [["^\\u0000"], ["^@?\\w"], ["^~/"], ["^../"], ["^./"]] }],
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            parser: require.resolve("@typescript-eslint/parser"),
            plugins: ["@typescript-eslint/eslint-plugin"],
            settings: {
                "import/extensions": [".js", ".ts", ".tsx"],
                "import/parsers": {
                    "@typescript-eslint/parser": [".ts", ".tsx"],
                },
                "import/resolver": {
                    node: {
                        extensions: [".js", ".ts", ".tsx"],
                    },
                },
            },
            rules: {
                "@typescript-eslint/adjacent-overload-signatures": "error",
                "@typescript-eslint/array-type": "error",
                "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "as" }],
                "@typescript-eslint/member-delimiter-style": "error",
                "@typescript-eslint/no-array-constructor": "error",
                "@typescript-eslint/no-dynamic-delete": "error",
                "@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
                "@typescript-eslint/no-extra-non-null-assertion": "error",
                "@typescript-eslint/no-extraneous-class": "error",
                "@typescript-eslint/no-misused-new": "error",
                "@typescript-eslint/no-namespace": "error",
                "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
                "@typescript-eslint/no-use-before-define": [
                    "error",
                    {
                        functions: false,
                        classes: false,
                        variables: false,
                        typedefs: false,
                    },
                ],
                "@typescript-eslint/no-useless-constructor": "error",
                "@typescript-eslint/prefer-for-of": "error",
                "@typescript-eslint/prefer-function-type": "error",
                "@typescript-eslint/prefer-namespace-keyword": "error",
                "@typescript-eslint/prefer-optional-chain": "error",
                "@typescript-eslint/triple-slash-reference": "error",
                "@typescript-eslint/unified-signatures": "error",
                "default-case": "off",
                "no-dupe-class-members": "off",
                "no-undef": "off",
                "no-unused-vars": "off",
                "no-array-constructor": "off",
                "no-use-before-define": "off",
            },
        },
        {
            plugins: ["jest"],
            files: ["*.{spec,test}.{js,ts,tsx}", "**/__tests__/**/*.{js,ts,tsx}"],
            env: {
                jest: true,
            },
            rules: {
                "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
                "jest/consistent-test-it": ["error", { fn: "test" }],
                "jest/expect-expect": ["error", { assertFunctionNames: ["expect", "element"] }],
                "jest/no-disabled-tests": "error",
                "jest/no-duplicate-hooks": "error",
                "jest/no-export": "error",
                "jest/no-focused-tests": "error",
                "jest/no-identical-title": "error",
                "jest/no-jasmine-globals": "error",
                "jest/no-test-prefixes": "error",
                "jest/no-test-return-statement": "error",
                "jest/prefer-todo": "error",
                "jest/require-to-throw-message": "error",
                "jest/valid-describe-callback": "error",
                "jest/valid-expect-in-promise": "error",
                "jest/valid-expect": "error",
                "jest/valid-title": "error",
                "jest/no-restricted-matchers": [
                    "error",
                    {
                        toBeTruthy: "Avoid `toBeTruthy`",
                        toBeFalsy: "Avoid `toBeFalsy`",
                    },
                ],
            },
        },
        {
            files: ["*.js"],
            parser: require.resolve("@babel/eslint-parser"),
            parserOptions: {
                requireConfigFile: false,
            },
            rules: {
                "import/default": "error",
                "import/namespace": "error",
                "import/no-named-as-default": "error",
                "import/no-named-as-default-member": "error",
                "import/no-cycle": "error",
                "import/no-deprecated": "error",
            },
        },
        {
            files: ["*.config.js", ".*rc.js"],
            env: {
                node: true,
            },
            rules: {
                "import/no-commonjs": "off",
                "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
            },
        },
    ],
    globals: {
        jasmine: true,
    },
};
