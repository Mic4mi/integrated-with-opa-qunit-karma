// module.exports = function (config) {
//     "use strict";

//     config.set({
//         frameworks: ["ui5"],
//         ui5: {
//             type: "application",
//             configPath: "uimodule/ui5.yaml",
//             paths: {
//                 webapp: "uimodule/webapp"
//             }
//         },
//         browsers: ["Chrome"],
//         browserConsoleLogOptions: {
//             level: "error"
//         }
//     });
// };

module.exports = function (config) {
    config.set({

        frameworks: ["ui5"],

        ui5: {
            type: "application",
            configPath: "uimodule/ui5.yaml",
            paths: {
                webapp: "uimodule/webapp"
            }
        },

        reporters: ['progress', 'junit', 'coverage'],

        preprocessors: {
            // Files that should be included or excluded from coverage analysis
            'webapp/*.js': ['coverage'],
            'webapp/!(test|localService)/**/*.js': ['coverage']
        },

        coverageReporter: {
            type: 'cobertura',
            dir: 'coverage/',
            file: 'cobertura.xml'
        },

        browsers: ["ChromeHeadless"],

        singleRun: true,

        failOnEmptyTestSuite: false
    });
};
