module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        node: true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": "off",
        "no-useless-escape": "off"
    }
};
