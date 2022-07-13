const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      allureWriter(on, config)
      return config;
    },
    baseUrl: "http://automationpractice.com/index.php",
    watchForFileChanges: true,
    defaultCommandTimeout: 10000,
    specPattern: "**/*.feature",
    env: {
      customer: {
        email: "ana.miric89@gmail.com",
        password: "123456"
      },
      invalidCustomer: {
        email: "ana@gmail.com",
        password: "654321"
      }
    }
  },
});
