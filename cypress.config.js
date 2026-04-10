const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.hsbc.co.in",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {},
  },
});
