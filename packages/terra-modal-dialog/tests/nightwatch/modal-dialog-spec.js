/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-modal-dialog', done);
  },

  'isOpen prop': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-dialog-tests/dialog`)
      .waitForElementPresent('.button-open-modal', 1000)
      .waitForElementNotPresent('.terra-Modal', 1000);
  },
};
