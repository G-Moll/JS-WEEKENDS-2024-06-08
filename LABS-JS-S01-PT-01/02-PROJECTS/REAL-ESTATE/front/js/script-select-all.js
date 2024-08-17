var holder = document.getElementById( "holder" );
var endpoint = "http://localhost:8080/index-select-all.php";
var htmlData = "";
var xhr = new XMLHttpRequest();
xhr.open( "GET", endpoint, true );
xhr.send();
xhr.addEventListener( "load", loadSelectedData );

function loadSelectedData( e ) {
	var dataJson = JSON.parse( e.target.responseText ).data;
	dataDOMInsert( dataJson );
}

function dataDOMInsert( arrayData ) {
	for( var i = 0, l = arrayData.length; i < l; i ++ ) {
		htmlData += "<div>" +
			"<h2>" + arrayData[ i ].id + " - " + arrayData[ i ].property + "</h2>" +
			"<p>Location: " + arrayData[ i ].location + "  </p>" +
			"<p>Price: " + arrayData[ i ].price + "</p>" +
		"</div>";
	}
	holder.innerHTML = htmlData;
} 







