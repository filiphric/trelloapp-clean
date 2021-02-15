/**
 * @type {Cypress.PluginConfig}
 */

const { resetDatabase } = require('./resetDatabase.js');
const { seedDatabase } = require('./seedDatabase.js');

module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    // `args` is an array of all the arguments that will
    // be passed to browsers when it launches
    console.log(launchOptions.args) // print all current args

    if (browser.family === 'chromium') {
      // auto open devtools
      launchOptions.args.push('--auto-open-devtools-for-tabs')
    }

    return launchOptions
  })

  on('task', {
    'resetDatabase': resetDatabase,
    'seedDatabase': seedDatabase
  })
}



