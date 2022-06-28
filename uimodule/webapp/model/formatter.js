sap.ui.define([], function () {
    "use strict";
    return {
		/**
		 * Defines a value state based on the price
		 *
		 * @public
		 * @param {number} iPrice the price of a post
		 * @returns {string} sValue the state for the price
		 */
        priceState: function (iPrice) {
            if (iPrice < 50) {
                return "Success";
            } else if (iPrice >= 50 && iPrice < 250) {
                return "None";
            } else if (iPrice >= 250 && iPrice < 2000) {
                return "Warning";
            } else {
                return "Error";
            }
        },

        formatDate: function (sDate) {
            let oDate = new Date(sDate);
            return `${oDate.getDate()}/${oDate.getUTCMonth() + 1}/${oDate.getUTCFullYear()}`;
        }
    };
});
