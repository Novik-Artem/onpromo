module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-essential"],
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  plugins: ["vue"],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-reserved-component-names": "off"
  }
}
