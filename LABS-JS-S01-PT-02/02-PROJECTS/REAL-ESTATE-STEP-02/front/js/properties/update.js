import { AJAXRequest } from "../models/client/AJAXRequest.js";

var formUI = document.getElementsByTagName( "form" )[ 0 ];
var inputsUI = formUI.getElementsByTagName( "input" );
var inputId 	   = inputsUI[ 0 ]; 
var inputAvailable = inputsUI[ 1 ]; 
var inputProperty  = inputsUI[ 2 ]; 
var inputLocation  = inputsUI[ 3 ]; 
var inputPrice 	   = inputsUI[ 4 ]; 
// var inputSubmit	   = inputsUI[ 5 ];
var recordInsert = document.getElementById( "recordInsert" );
var recordUpdate = document.getElementById( "recordUpdate" );
var recordDelete = document.getElementById( "recordDelete" );
var recordSelect = document.getElementById( "recordSelect" );

recordUpdate.addEventListener( "click", function( e ) {
	e.preventDefault();

	var endpoint = "http://localhost:8080/v2/properties/update.php";

	var requestPropertiesUpdate = new AJAXRequest(
		"POST",
		endpoint,
		loadUpdatedData
	);
	requestPropertiesUpdate.setHeader();
	requestPropertiesUpdate.send( "id=" + inputId.value + "&property=" + inputProperty.value + "&location=" + inputLocation.value + "&price=" + inputPrice.value );

});

function loadUpdatedData( e ) {
	var dataJson = JSON.parse( e.target.responseText );;
	console.log( dataJson );
	// inputProperty.value = "";
	formUI.reset();
}


var modulePropertiesUpdate = {
	name: "Module Properties Update"
};

export { modulePropertiesUpdate};
