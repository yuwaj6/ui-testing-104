const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://www.104.com.tw/jobs/main/',
    env: {
      username: "",
      password: "",
      displayName: ""
    },
  },
});
