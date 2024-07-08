/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-typescript",
        "@vue/eslint-config-prettier",
    ],
    env: {
        "vue/setup-compiler-macros": true,
    },
    rules: {
        "vue/html-indent": ["error", 2],
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-var": "error", // var 사용금지
        "prefer-const": "error", // 상수는 const 사용
        "no-new-object": "error", // 객체는 리터럴 구문으로 선언
        "object-shorthand": "error", // 객체내 단축 구문 사용
        "quote-props": ["error", "as-needed"], // 유효하지 않은 식별자는 따옴표사용
        "no-prototype-builtins": "error", // Object.prototype 메소드를 직접 호출 금지
        "prefer-object-spread": "error", // Object.assign 대신 Object spread 연산자(...)사용
        "no-array-constructor": "error", // 배열선언시 리터럴 구문으로 선언
        "no-unused-vars": "warn", // 사용하지않은 변수는 경고표시
        "no-tabs": "off", // 들여쓰기시 탭문자 허용
        semi: ["error", "always"], // 세미콜론을 항상 사용하지 않으면 오류로 처리
        "comma-dangle": ["error", "only-multiline"], // 배열 또는 객체 리터럴이 여러 줄로 작성될 때만 쉼표를 허용
        "no-undef": "off", // 정의되지 않은 변수 허용
        "arrow-parens": ["error", "as-needed"], // 괄호가 필요한 경우에만 화살표 함수의 매개변수 주위에 괄호를 사용
        "space-before-function-paren": [
            "error",
            {anonymous: "always", named: "never", asyncArrow: "always"},
        ], // 함수 선언에서 괄호 앞에 공백을 사용하지 않도록 강제
        "prettier/prettier": [
            "error",
            {
                singleQuote: true,
                semi: true,
                useTabs: false,
                tabWidth: 2,
                trailingComma: "all",
                printWidth: 80,
                bracketSpacing: true,
                arrowParens: "avoid",
                endOfLine: "auto", // 한줄 추가
            },
        ],
    },
    overrides: [
        {
            files: [
                "./layouts/**/*",
                "./pages/**/*",
                "./error.vue",
            ],
            rules: {"vue/multi-word-component-names": "off"}, // nuxt 환경 디렉토리에서는 컴포넌트 이름이 다중단어 구성이 아니여도 되게 설정
        },
        {
            files: [".eslintrc.cjs"],
            rules: {quotes: ["error", "double"], "prettier/prettier": "off"},
        },
        // 'quotes': ['error', 'double'],
    ],
};
