module.exports = {
  env: {
    browser: true, es2021: true, node: true,
  }, extends: ['eslint:recommended', 'plugin:vue/vue3-essential'], parserOptions: {
    ecmaVersion: 12, sourceType: 'module',
  }, plugins: ['vue'], rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],

    'vue/order-in-components': ['error'],
    'vue/require-default-prop': ['off'],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 2,
      }, multiline: {
        max: 2,
      },
    }],
  }, globals: { require: true, defineProps: true },
};
