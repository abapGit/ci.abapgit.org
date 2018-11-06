sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'], function (
  Controller
) {
  'use strict';
  return Controller.extend('Main.App', {
    onInit: function () {
      const oModel = new sap.ui.model.json.JSONModel();

      oModel.loadData(
        '../src/08002743b1381ed8b88e1bec14b814e4.smim.abapgit_ci_result.json', {} , false
      );
        
      this.getView().setModel(oModel);
    },

    onAfterRendering: function(){
      document.querySelectorAll('.status').forEach(function(elem){
        if (elem.innerText === "OK" || elem.innerText === "CI run successful" ){
          elem.classList.add("ci_success");
        } else {
          elem.classList.add("ci_error");
        }
      });
    },

    formatStatus: function(bCIhasErrors) {
      return (bCIhasErrors ?  "CI run failed" : "CI run successful" );
    },

    formatTimestamp: function(sTimestamp) {
      // 20181106192454.0692110
      // 2018-11-06T19:24:54
      if (!sTimestamp) {
        return "";
      }

      const sDate = String(sTimestamp).replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/,'$1-$2-$3T$4:$5:$6');
      return new Date(sDate);
    }

  });
});
