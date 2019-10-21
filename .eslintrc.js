module.exports = {
  extends: ['airbnb', '@mate-academy/eslint-config'],
  env: {
    commonjs: true,
    node: true,
    es6: true,
    browser: true
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 9,
  },
  "globals": {
    it: false,
  },
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'no-console': 'off',
    "no-param-reassign": 0,
    "no-undef": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/label-has-for": [2, {
      "components": ["Label"],
      "required": {
        "every": ["id"]
      },
      "allowChildren": false
    }]
  }
};
