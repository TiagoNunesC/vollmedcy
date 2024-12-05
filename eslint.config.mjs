import cypress from "eslint-plugin-cypress";

export default [
  {
    ignores: [
      "node_modules/",
      "build/",
      "dist/",
      "*.min.js",
      "coverage/",
    ],
    files: ["cypress/**/*.cy.js"], // Aplica apenas nos arquivos de teste
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        cy: "readonly",
        Cypress: "readonly",
        describe: "readonly",
        it: "readonly",
        context: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
    },
    plugins: {
      cypress,
    },
    rules: {
      // Suas regras personalizadas aqui
    },
  },
];
