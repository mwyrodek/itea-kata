const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.wyrodek.pl/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
