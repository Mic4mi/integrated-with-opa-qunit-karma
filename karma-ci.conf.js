module.exports = function (config) {
    "use strict";

    require("./karma.conf")(config);
    config.set({
        // test results reporter to use
        // possible values: "dots", "progress", "coverage"
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ["ChromeHeadless"],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            "{uimodule/webapp,uimodule/webapp/!(test)}/*.js": ['coverage']
        },

        coverageReporter: [
            {
                type: 'html',
                dir: 'coverage/'
            },
            {
                type: "text"
            }
        ],
        check: {
            each: {
                statements: 100,
                branches: 100,
                functions: 100,
                lines: 100
            }
        }
    });
};
