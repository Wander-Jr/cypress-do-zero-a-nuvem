const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportHeight : 410,
  viewportWidth : 860,
  watchForFileChanges: false,
  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
