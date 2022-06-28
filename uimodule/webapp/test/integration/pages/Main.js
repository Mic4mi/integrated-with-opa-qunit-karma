sap.ui.require(["sap/ui/test/Opa5", "sap/ui/test/actions/Press", "sap/ui/test/actions/EnterText"], function (Opa5, Press, EnterText) {
    "use strict";

    const sViewName = "acc.myproject.view.MainView";

    Opa5.createPageObjects({
        onTheMainPage: {
            viewName: sViewName,

            actions: {
                // add action functions here
                iSearchSomething: function () {
                    return this.waitFor({
                        // controlType: "sap.m.Searchfield",
                        id: "filterProducts",
                        actions: new EnterText({
                            text: "Flo",
                            clearTextFirst: true
                        }),
                        errorMessage: "Could not filter the table.",
                    });
                },

                iPressTheButton: function () {
                    return this.waitFor({
                        controlType: "sap.m.Button",
                        id: "dialogButton",
                        actions: new Press(),
                        errorMessage: "App does not have a button",
                    });
                },
            },

            assertions: {
                // add assertion functions here
                iShouldSeeTheTitle: function () {
                    return this.waitFor({
                        controlType: "sap.m.Title",
                        properties: {
                            text: "Testing my app!",
                        },
                        success: function () {
                            Opa5.assert.ok(true, "The page shows the correct title");
                        },
                        errorMessage: "App does not show the expected title acc.myproject",
                    });
                },

                iShouldSeeTheTable: function () {
                    return this.waitFor({
                        controlType: "sap.m.Table",
                        id: "mainTable",
                        success: function () {
                            Opa5.assert.ok(true, "The page shows the product's table");
                        },
                        errorMessage: "Could not find the product's table",
                    });
                },

                IShouldSeeTheFilteredTable: function () {
                    return this.waitFor({
                        controlType: "sap.m.Table",
                        id: "mainTable",
                        success: function (oTable) {

                            let aItems = oTable.getItems(),
                                bCorrectSearch = true;
                            for (let i = 0; i < aItems.length; i++) {
                                const currentValue = aItems[i].getCells()[0].getProperty("text");
                                if (!currentValue.startsWith('Flo')) {
                                    bCorrectSearch = false;
                                }
                            }

                            if (bCorrectSearch) {
                                return Opa5.assert.ok(true, "I managed to filter the table");
                            } else {
                                return false;
                            }
                        },
                        errorMessage: "Could not filter the table",
                    });
                },

                ICanSeeTheDialog: function () {
                    return this.waitFor({
                        // controlType: "sap.m.Table",
                        id: "someDialog",
                        success: function (oDialog) {
                            setTimeout(() => {
                                oDialog.close()
                            }, 2000);
                            Opa5.assert.ok(true, "The page shows the Dialog");
                        },
                        errorMessage: "Could not find the Dialog",
                    });
                }

            },
        },
    });
});
