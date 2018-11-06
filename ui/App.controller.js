sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'], function (
  Controller
) {
  'use strict';
  return Controller.extend('Main.App', {
    onInit: function () {
      const oModel = new sap.ui.model.json.JSONModel();

      oModel.loadData(
        '../src/08002743b1381ed8b88e1bec14b814e4.smim.abapgit_ci_result.json'
      );
        
      this.getView().setModel(oModel);
    }
  });
});
