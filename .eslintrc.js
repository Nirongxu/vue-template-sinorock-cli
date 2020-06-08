module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-multi-spaces": 1,//不能用多余的空格
    "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
  },
};
