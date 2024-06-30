// try catch
// validations
// if / try-catch
function findplace() { console.log( "findplace function performed" ); }
// google maps
try {
	findplace();
}
catch( e ) {
	// console.log( e.message );
	if( e.message == "findplace is not defined" ) {
		console.log( "La funcion findplace no se puede utilizar" );
	}
}
finally {
	console.log( "Finally Block performed..!" )
}


