sap.ui.define(
    // Cargar los test unitarios en este file! :)
    [
        "sap/ui/test/Opa5",
        "./arrangements/Startup",
        "./MainJourney",
        // "./NavigationJourney",
        "acc/myproject/test/unit/model/formatter",
        "acc/myproject/test/unit/model/FlaggedType"
    ],
    /**
     * @param {typeof sap.ui.test.Opa5} Opa5
     */
    function (Opa5, Startup) {
        "use strict";

        Opa5.extendConfig({
            arrangements: new Startup(),
            autoWait: true,
        });
    }
);
