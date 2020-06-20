module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended"
  ],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    // 强烈推荐相关规则
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],

    // 未分类相关规则
    "vue/array-bracket-spacing": "error",
    "vue/arrow-spacing": "error",
    "vue/block-spacing": "error",
    "vue/brace-style": "error",
    "vue/camelcase": "error",
    "vue/comma-dangle": "error",
    "vue/component-definition-name-casing": "error",
    "vue/component-name-in-template-casing": "error",
    "vue/component-tags-order": ["error", {
      "order": ["template", "script", "style"]
    }],
    "vue/dot-location": "error",
    "no-console":"off",
    "vue/eqeqeq": "error",
    "vue/key-spacing": "error",
    "vue/keyword-spacing": "error",
    "vue/match-component-file-name": "error",
    "vue/max-len": [
      "error",
      {
        "code": 100,
        "template": 100,
        "tabWidth": 2,
        "comments": 100,
        "ignorePattern": "",
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true,
        "ignoreHTMLAttributeValues": true,
        "ignoreHTMLTextContents": true
      }
    ],
    "vue/no-boolean-default": ["error", "default-false"],
    "vue/no-deprecated-scope-attribute": "error",
    "vue/no-deprecated-slot-attribute": "error",
    "vue/no-deprecated-slot-scope-attribute": "error",
    "vue/no-empty-pattern": "error",
    "vue/no-irregular-whitespace": "error",
    "vue/no-reserved-component-names": "error",
    "vue/no-restricted-syntax": "error",
    // 禁用静态内联样式，允许绑定时使用
    "vue/no-static-inline-styles": ["error", {
      "allowBinding": true
    }],
    "vue/no-unsupported-features": "error",
    "vue/object-curly-spacing": "error",
    "vue/require-direct-export": "error",
    // 该项目非组件库项目，不要求组件必须包含 name 属性
    // "vue/require-name-property": "error",
    "vue/script-indent": "error",
    "vue/space-infix-ops": "error",
    "vue/space-unary-ops": "error",
    "vue/static-class-names-order": "error",
    "vue/v-on-function-call": "error",
    "vue/v-slot-style": "error",
    "vue/valid-v-bind-sync": "error",
    "vue/valid-v-slot": "error",

    //非vue相关
    "semi": ["error", "always"]
  },
  settings : {
    'import/resolver': {
      'webpack': {
        'config': './config/webpack.common.js'
      }
    },
  },
};
