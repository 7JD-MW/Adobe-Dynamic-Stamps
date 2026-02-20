console.println("Multi Input Stamp Name: " + event.source.stampName);
if( event.source.forReal && event.source.stampName == "#CHANGEME"){
    // Define the dialog description
    var myDialog = {
        initialize: function (dialog) {
            var menu_list = {
                "First": 1,
                "Second": -1,
                "Third": -2,          
            };

            dialog.load({cbo1:menu_list});
        },
        
        commit: function (dialog) {
            function getListSelect(passed_list){for(user_selection in passed_list){console.println("For Loop " + user_selection); if(passed_list[user_selection]>0)return user_selection;};return "";}
            var results = dialog.store();
            // Save the inputs to variables
            this.data1 = results["txt1"];
            this.data2 = results["cbo1"];

            // Handle the dropdown selection
            var list_holder = this.data2;
            var selection_holder = getListSelect(list_holder);
            console.println("List holder " + list_holder);
            console.println("Selection Holder " + selection_holder);
            this.data2 = selection_holder;
        },
        description: {
            name: "Stamp Details",
            elements: [
                { type: "view", elements: [
                    { name: "Field 1:", type: "static_text" },
                    { item_id: "txt1", type: "edit_text", width: 200 },
                    { name: "Selection:", type: "static_text" },
                    { item_id: "cbo1", type: "popup", width: 200 },
                    { type: "ok_cancel" }
                ]}
            ]
        }
    };
    // Run the dialog
    if ("ok" == app.execDialog(myDialog)) {
        console.println("Inputs found: " + myDialog.data1 + "," + myDialog.data2 + "." );
        // Write the results to the form fields on the stamp
        this.getField("text_1").value = myDialog.data1;
        this.getField("text_2").value = myDialog.data2;
    }
}
