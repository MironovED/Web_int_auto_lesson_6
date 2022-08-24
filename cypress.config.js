const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern:
      "cypress/{e2e,integration}/{**,*}/*{.cy.{js,jsx,ts,tsx},.spec.js}",
    baseUrl: "http://localhost:3000",
  },
  viewportWidth: 768,
  viewportHeight: 1024,
});
