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

recordDelete.addEventListener( "click", function( e ) {
	e.preventDefault();

	var endpoint = "http://localhost:8080/v2/properties/delete.php";

	var requestPropertiesDelete = new AJAXRequest(
		"POST",
		endpoint,
		loadDeletedData
	);
	requestPropertiesDelete.setHeader();
	requestPropertiesDelete.send( "id=" + inputId.value );

	// var xhr = new XMLHttpRequest();
	// xhr.open( "POST", endpoint, true );
	// xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
	// xhr.send( "id=" + inputId.value );
	// xhr.addEventListener( "load", loadDeletedData );
});

function loadDeletedData( e ) {
	var dataJson = JSON.parse( e.target.responseText );;
	console.log( dataJson );
	formUI.reset();
}

var modulePropertiesDelete = {
	name: "Module Properties Delete"
};

export { modulePropertiesDelete };
