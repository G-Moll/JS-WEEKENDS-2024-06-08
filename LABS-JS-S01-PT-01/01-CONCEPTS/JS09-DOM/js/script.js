var title = document.getElementById( 'title' );
title.innerHTML = "Hello DOM";
// title.className = "highlight";

// Events - Acciones que suceden en algun momento del tiempo
title.addEventListener( "click", clickPerformed  );

function clickPerformed( e ) {
	title.className = "highlight";
	console.log( e, e.type );
}
// console.log( title );


// For DOM
var dataDOM = [ "Yellow", "Red", "Green", "Blue" ];
var holder = document.getElementsByTagName( "div" )[ 0 ];
var domContent = "";
for( var i = 0; i < dataDOM.length; i++  ) {
	// console.log( dataDOM[ i ] );
	domContent += "<p class='paragraph'>" + dataDOM[ i ] + "</p>";
}
holder.innerHTML = domContent;
// console.log( domContent );



// console.log( holder );







