sap.ui.define(
    [
        "sap/ui/test/opaQunit",
        // "./pages/Main",
        "./pages/Main",
    ],
    /**
     * @param {typeof sap.ui.test.opaQunit} opaTest
     */
    function (opaTest) {
        "use strict";

        opaTest("Should see the page", function (Given, When, Then) {
            // Arrangements
            Given.iStartMyApp();

            // Actions
            // When.onTheMainPage.iPressTheButton();

            // Assertions
            Then.onTheMainPage.iShouldSeeTheTitle();

            // Cleanup
            Then.iTeardownMyApp();
        });

        opaTest("Should see the table", function (Given, When, Then) {
            // Arrangements
            Given.iStartMyApp();

            // Actions
            // When.onTheMainPage.iPressTheButton();

            // Assertions
            Then.onTheMainPage.iShouldSeeTheTable();

            // Cleanup
            Then.iTeardownMyApp();
        });

        opaTest("I filter the table", function (Given, When, Then) {
            // Arrangements
            Given.iStartMyApp();

            // Actions
            When.onTheMainPage.iSearchSomething();

            // Assertions
            Then.onTheMainPage.IShouldSeeTheFilteredTable();

            // Cleanup
            Then.iTeardownMyApp();
        });

        opaTest("I open the Dialog", function (Given, When, Then) {
            // Arrangements
            Given.iStartMyApp();

            // Actions
            When.onTheMainPage.iPressTheButton();

            // Assertions
            Then.onTheMainPage.ICanSeeTheDialog();

            // Cleanup
            Then.iTeardownMyApp();
        });

    }
);
