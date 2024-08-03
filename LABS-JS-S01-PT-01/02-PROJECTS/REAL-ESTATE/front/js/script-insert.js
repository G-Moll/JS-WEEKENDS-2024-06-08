var dataProperty = "House EAR 2024";
var dataLocation = true;
var dataPrice = 3700;

var holder = document.getElementById( "holder" );
var endpoint = "http://localhost:8080/index-insert.php";
// var htmlData = "";
var xhr = new XMLHttpRequest();
xhr.open( "POST", endpoint, true );
xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
xhr.send( "property=" + dataProperty + "&location=" + dataLocation + "&price=" + dataPrice );
xhr.addEventListener( "load", loadInsertedData );

function loadInsertedData( e ) {
	var dataJson = JSON.parse( e.target.responseText );
	// dataDOMInsert( dataJson );
	console.log( dataJson );
}

function dataDOMInsert( arrayData ) {
} 







