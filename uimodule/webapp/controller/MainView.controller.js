sap.ui.define(
    [
        "./BaseController",
        "acc/myproject/test/mockdata/mockdata",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "sap/ui/core/Fragment"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (
        Controller,
        Mockdata,
        JSONModel,
        Filter,
        FilterOperator,
        Fragment
    ) {
        "use strict";

        return Controller.extend("acc.myproject.controller.MainView", {
            onInit: function () {
                this._setModelWithFakeData();
            },

            _setModelWithFakeData: async function () {
                let aData = await Mockdata.getMockdata();
                let oModel = new JSONModel();
                oModel.setData(aData);
                this.getView().setModel(oModel, "mainModel");
            },

            onFilterProductByName: function (oEvent) {
                let sQuery = oEvent.getSource().getValue(),
                    oTable = this.byId("mainTable"),
                    oBinding = oTable.getBinding("items"),
                    oSearchFilter;

                if (sQuery) {
                    oSearchFilter = new Filter("Name", FilterOperator.Contains, sQuery);
                } else {
                    oSearchFilter = null;
                }

                oBinding.filter(oSearchFilter, "Application");
            },

            onOpenDialog: function (oEvent) {
                this._openDialog(this.byId("someDialog"), this.getView(), "acc.myproject.view.fragments.someDialog");
                //open some dialog
            },
            
            _openDialog: function (oCurrentDialog, oCurrentView, sDialogPath) {
                if (!oCurrentDialog) {
                    oCurrentDialog = Fragment.load({
                        id: oCurrentView.getId(),
                        name: sDialogPath,
                        controller: this
                    }).then(function (oDialog) {
                        oCurrentView.addDependent(oDialog);
                        oDialog.open();
                        return oDialog;
                    });
                } else {
                    oCurrentDialog.open();
                }
            },

            onClose: function (oEvent) {
                oEvent.getSource().getParent().close();
            }
        });
    }
);