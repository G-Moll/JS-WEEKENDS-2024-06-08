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

var dataProperty = "House EAR 2024";
var dataLocation = true;
var dataPrice = 3700;

recordInsert.addEventListener( "click", function( e ) {
	e.preventDefault();

	var endpoint = "http://localhost:8080/v2/properties/insert.php";

	var requestPropertiesInsert = new AJAXRequest(
		"POST",
		endpoint,
		loadInsertedData
	);
	requestPropertiesInsert.setHeader();
	requestPropertiesInsert.send( "property=" + inputProperty.value + "&location=" + inputLocation.value + "&price=" + inputPrice.value );
});

function loadInsertedData( e ) {
	var dataJson = JSON.parse( e.target.responseText );;
	console.log( dataJson );
}

var modulePropertiesInsert = {
	name: "Module Properties Insert"
};

export { modulePropertiesInsert };
