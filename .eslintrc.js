module.exports = {
  "parser": "@typescript-eslint/parser",
  "rules": {
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/no-explicit-any": 0
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended"],
  "plugins": ["@typescript-eslint"],
  "env": {
    "browser": true,
    "jasmine": true,
    "jest": true,
    "node": true,
    "es6": true,
  },
  "settings": {
    "react": {
      "version": "detect", // Tells eslint-plugin-react to automatically detect the version of React to use,
    }
  }
}
