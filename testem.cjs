'use strict';

function ciBrowsers() {
  if (process.env.TEST_BROWSER) {
    return process.env.TEST_BROWSER.split(',');
  } else {
    return ['Chrome', 'Edge'];
  }
}

if (typeof module !== 'undefined') {
  module.exports = {
    test_page: 'tests/index.html?hidepassed',
    disable_watching: true,
    launch_in_ci: ciBrowsers(),
    launch_in_dev: ['Chrome'],
    browser_start_timeout: 120,
    browser_args: {
      Chrome: {
        ci: [
          // --no-sandbox is needed when running Chrome inside a container
          process.env.CI ? '--no-sandbox' : null,
          '--disable-gpu',
          '--headless',
          '--disable-dev-shm-usage',
          '--disable-software-rasterizer',
          '--mute-audio',
          '--remote-debugging-port=0',
          '--window-size=1440,900',
        ].filter(Boolean),
      },
    },
    launchers: {
      SafariApplescript: {
        protocol: 'browser',
        exe: 'osascript',
        args: [
          '-e',
          `tell application "Safari"
            activate
            open location "<url>"
           end tell
           delay 3000`,
        ],
      },
    },
  };
}
