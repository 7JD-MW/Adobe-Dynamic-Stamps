//Create a new stamp with a text field. Go to Tools -> Organize pages -> Page Templates. Rename the newly created stamp to #FireTest
//Switch to prepare a form mode. Right click the text field, go to properties, calculate. In custom calculation script add the below code.
//This will show the script firing when opening the ribbon "Prefire". As well as the actual fire when stamping. 
if( event.source.forReal && event.source.stampName == "#FireTest"){
    event.value = event.source.stampName;
    console.println("Event Stamp forReal: " + event.source.stampName);
    //uncomment to get a list of all stampNames in the file
    //var cMsg = this.templates;
    //console.println("Stamp List: " + cMsg);
} else{
    console.println("Event Stamp Prefire: " + event.source.stampName);
}
