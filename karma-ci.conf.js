// module.exports = function (config) {
//     "use strict";

//     require("./karma.conf")(config);
//     config.set({
//         preprocessors: {
//             // source files, that you wanna generate coverage for
//             // do not include tests or libraries
//             // (these files will be instrumented by Istanbul)
//             "{uimodule/webapp,uimodule/webapp/!(test)}/*.js": ['coverage']
//         },

//         coverageReporter: {
//             includeAllSources: true,
//             reporters: [
//                 {
//                     type: 'html',
//                     dir: 'coverage/'
//                 },
//                 {
//                     type: "text"
//                 }
//             ]
//         },

//         check: {
//             each: {
//                 statements: 100,
//                 branches: 100,
//                 functions: 100,
//                 lines: 100
//             }
//         },

//         // test results reporter to use
//         // possible values: "dots", "progress", "coverage"
//         // available reporters: https://npmjs.org/browse/keyword/karma-reporter
//         reporters: ['progress', 'coverage'],

//         // start these browsers
//         // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
//         browsers: ["ChromeHeadless"],

//         // Continuous Integration mode
//         // if true, Karma captures browsers, runs the tests and exits
//         singleRun: true
//     });
// };

module.exports = function (config) {
    "use strict";
    require("./karma.conf")(config);
    config.set({
        reporters: ['progress', 'coverage'],
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            "{uimodule/webapp,uimodule/webapp/!(test)}/*.js": ['coverage']
        },
        coverageReporter: {
            instrumenterOptions: {
                istanbul: { noCompact: true }
            },
            // specify a common output directory
            dir: 'coverage/',
            reporters: [
                // reporters not supporting the `file` property
                { type: 'html', subdir: 'report-html' },
                { type: 'lcov', subdir: 'report-lcov' },
                // reporters supporting the `file` property, use `subdir` to directly
                // output them in the `dir` directory
                { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
                { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
                { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
                { type: 'text', subdir: '.', file: 'text.txt' },
                { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
                { type: 'text' }
            ]
        },
        browsers: ["ChromeHeadless"],
        singleRun: true
    });
};
