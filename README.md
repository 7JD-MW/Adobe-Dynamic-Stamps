# Adobe-Dynamic-Stamps
Dynamic Stamps Javascript for Adobe Reader

## ToDo: 
You can use Tools -> Organize pages -> Page Templates to set human readable #stampNames

## Notes
After creating a dynamic stamp and making it a form you can either create a hidden text field, or on your last visible text field add a custom calculation script to insert the javascript code

The magic is in the **event.source.forReal && event.source.stampName == "#CHANGEME"** line. This makes it so when you expand the stamp ribbon you don't get all your dialogs opening at once. They only appear once the stamp is applied/pre flattening.

Foxit code seems to copy/paste over fairly well, but we decided to rewrite the javascript to be a little cleaner

You may need to enable the javascript debugger in Menu -> Preferences -> JavaScript. Control+Enter will run scripts in the debugger console view. 

## Resources: 
Adobe Reference [Adobe JavaScript API](https://opensource.adobe.com/dc-acrobat-sdk-docs/library/jsapiref/JS_API_AcroJS.html) for more information
