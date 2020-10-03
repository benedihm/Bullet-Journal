module.exports = {
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "airbnb-typescript",
  ],
  "plugins": [
    "react",
    "@typescript-eslint",
    "simple-import-sort",
    "react-hooks"
  ],
  "env": {
    "browser": true,
    "jest": true,
    "es6": true,
    "node": true
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  rules: {
    "react/jsx-props-no-spreading": "off", 
    "react/prop-types": 0
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
  