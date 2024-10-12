import { AJAXRequest } from "../models/client/AJAXRequest.js";

var holder = document.getElementById( "holder" );
var endpoint = "http://localhost:8080/v2/properties/select-all.php";
var htmlData = "";

var requestPropertiesSelectAll = new AJAXRequest(
	"GET",
	endpoint,
	loadSelectedData
);
requestPropertiesSelectAll.send();

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

var modulePropertiesSelectAll = {
	name: "Module Properties Select All"
};

export { modulePropertiesSelectAll };
