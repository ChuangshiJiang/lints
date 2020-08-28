module.exports = {
  "env": {
    "browser": true,
    "es2020": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "globals": {
    "module": true
  },
  "rules": {
    "semi": "warn", //要求或禁止使用分号代替 ASI
    "quotes": [
      "warn",
      "single"
    ],
    "jsx-quotes": [
      "warn",
      "prefer-double"
    ], //强制在 JSX 属性中一致地使用双引号
    "no-unused-vars": "warn",//禁止出现未使用过的变量
    "space-before-function-paren": [
      "warn",
      "never"
    ], //禁止在 function的左括号之前使用空格
    "space-before-blocks": ["warn","always"],//强制在块之前使用一致的空格
    "indent": [
      "warn",
      2
    ], //强制使用两空格缩进
    "key-spacing": [
      "warn",
      {
        "beforeColon": false, //禁止在对象字面量的键和冒号之间存在空格
        "afterColon": true //要求在对象字面量的冒号和值之间存在至少有一个空格
      }
    ],
    "max-len": [
      "warn",
      {
        "code": 120 //强制行的最大长度
      }
    ],
    "max-statements":[
      "warn",
      30,//函数最大语句数30
      {
        "ignoreTopLevelFunctions":true//忽略顶级函数
      }
    ],
    "max-lines": [
      "warn",
      {
        "max": 300 //强制文件最大行数
      }
    ],
    "no-multiple-empty-lines": "warn" //禁止出现多行空行
  }
};