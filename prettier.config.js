module.exports = {
  semi: true, // Add semicolons at the end of statements
  tabWidth: 2, // Set tab width to 2 spaces
  printWidth: 200, // Set the maximum line width to 200 characters
  singleQuote: true, // Use single quotes instead of double quotes
  arrowParens: 'avoid', // Omit parentheses when they are not required by a single parameter
  jsxSingleQuote: true, // Use single quotes in JSX
  bracketSameLine: true, // Put the closing `>` of JSX elements on the same line as the last prop
  trailingComma: 'none', // No trailing commas in TypeScript
  overrides: [
    {
      files: '*.ts',
      options: {
        parser: 'typescript' // Use the TypeScript parser for `.ts` files
      }
    },
    {
      files: '*.tsx',
      options: {
        parser: 'typescript' // Use the TypeScript parser for `.tsx` files
      }
    }
  ]
};
