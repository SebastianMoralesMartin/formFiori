sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONmodel) => {
    "use strict";

    return Controller.extend("test.formfiori.controller.main", {
        onInit() {
            let model = new JSONmodel({
                form:{
                    SupplierName: "John Doe", 
                    Street: null,
                    HouseNumber: null,
                    City: null, 
                    Country: null,
                },
                
            });
            this.getView().setModel(model);

            this.getView().bindElement("/form");

        },
        onSubmit: function(){
            const model = this.getView().getModel();
            const form = model.getProperty("/form");
            console.log(form);
            alert(form.SupplierName)

            //TODO: Agregar submit a un servicio OData.

        }

    });
});