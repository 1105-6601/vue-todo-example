// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('[name="task"]')
      .assert.containsText('h1', 'Tasks:')
      .assert.elementCount('[type="radio"]', 3)
      .setValue('[name="task"]', 'task 1')
      .click('button.add')
      .setValue('[name="task"]', 'task 2')
      .click('button.add')
      .setValue('[name="task"]', 'task 3')
      .click('button.add')
      .setValue('[name="task"]', 'task 4')
      .click('button.add')
      .setValue('[name="task"]', 'task 5')
      .click('button.add')
      .click('[index="0"] button.done')
      .click('[index="1"] button.done')
      .click('[index="2"] button.done')
      .click('[type="radio"][id="1"]')
      .assert.elementCount('li', 3)
      .click('[type="radio"][id="2"]')
      .assert.elementCount('li', 2)
      .click('[index="0"] button.done')
      .click('[index="0"] button.done')
      .assert.elementCount('li', 0)
      .click('[type="radio"][id="1"]')
      .assert.elementCount('li', 5)
      .end();
  },
};

