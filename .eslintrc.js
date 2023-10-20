module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx', '!*.eslintrc.js', '!next.config.js'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Packages `mui` related packages come first.
              ['^@mui', '^@?\\w'],
              // Packages `ui` related packages come first.
              ['^ui', '^@?\\w'],
              // helpers
              [
                '^(@contexts|@hooks|@i18n|@layouts|@app-types|@assets|@utils|@pages|@features|@providers|@routes|@services|@components|@atoms)(/.*|$)',
              ],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'simple-import-sort', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    eqeqeq: 'off',
    strict: 'off',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/prop-types': 'off',
    'no-empty-pattern': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'react/jsx-no-target-blank': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'no-plusplus': 'off',
    'react/function-component-definition': 'off',
    'no-restricted-exports': 'off',
    'react/require-default-props': 'off',
    'prefer-destructuring': 'off',
    'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
  },
  ignorePatterns: ['dist/**', '.turbo/**', '.storybook/**', 'public/**'],
};
