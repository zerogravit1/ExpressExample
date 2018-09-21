'use strict';

exports.config = {
  capabilities: {
    browserName:   'chrome',
    chromeOptions: {
      args: [
        '--headless', '--disable-gpu', 'window-size=1920x1200'
      ]
    }
  },

  suites: {
    all: [ '../e2e/specs/**/*.spec.js' ]
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
    showColors:             true
  },

  SELENIUM_PROMISE_MANAGER: 0,

  beforeLaunch: '../libraries/routines/beforeLaunch.js',

  onPrepare: '../libraries/routines/onPrepare.js',

  onComplete: () => {
    require( '../libraries/routines/onComplete' );
  },

  allScriptsTimeout: 60000
}
