module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'no-console': 0,
    'global-require': 0,
    'no-param-reassign': 0,
    'no-use-before-define': 0,
  },
};
