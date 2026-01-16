console.println("Multi Input Stamp Name: " + event.source.stampName);

if( event.source.forReal && event.source.stampName == "#CHANGEME"){
    // Define the dialog description
    var myDialog = {
        initialize: function (dialog) {
            // Optional: Set default values here
        },
        commit: function (dialog) {
            var results = dialog.store();
            // Save the inputs to variables
            this.data1 = results["txt1"];
            this.data2 = results["txt2"];
            this.data3 = results["txt3"];
            this.data4 = results["cbx1"];
        },
        description: {
            // id's must be exactly 4 characters? Or they returned undefined
            name: "Stamp Details",
            elements: [
                { type: "view", elements: [
                    { name: "Enter Field 1:", type: "static_text" },
                    { item_id: "txt1", type: "edit_text", width: 200 },
                    { name: "Enter Field 2:", type: "static_text" },
                    { item_id: "txt2", type: "edit_text", width: 200 },
                    { name: "Enter Field 3:", type: "static_text" },
                    { item_id: "txt3", type: "edit_text", width: 200 },
                    { name: "Enter Field 4:", type: "static_text" },
                    { item_id: "cbx1", type: "check_box", width: 200 },
                    { type: "ok_cancel" }
                ]}
            ]
        }
    };
    // Run the dialog
    if ("ok" == app.execDialog(myDialog)) {
        console.println("Inputs: " + myDialog.data1 + "," + myDialog.data2 + "," + myDialog.data3 + "," + myDialog.data4 + "." );
        // Write the results to the form fields on the stamp        
        this.getField("textfield_1").value = myDialog.data1;
        this.getField("textfield_2").value = myDialog.data2;
        this.getField("textfield_3").value = myDialog.data3;
        
        this.getField("checkbox_1").checkThisBox(0, myDialog.data4);

        if(this.getField("textfield_1").value.length == 0){
            this.getField("textfield_1").value = "N/A";
        }
    }
}

