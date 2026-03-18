const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "8tob9n",


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
