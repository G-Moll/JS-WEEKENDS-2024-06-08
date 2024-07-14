var endpoint = "http://localhost:8080/";
var xhr = new XMLHttpRequest();
xhr.open( "GET", endpoint, true );
xhr.send();

xhr.addEventListener( "load", loadSelectedData );

function loadSelectedData( e ) {
	console.log( e.target.responseText );
}







