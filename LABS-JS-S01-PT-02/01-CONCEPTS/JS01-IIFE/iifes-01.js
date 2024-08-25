// IIFES
// Inmmetiate Invoked function expressions
// No arguments
(function() {
	console.log( "Hello Joshua" );
}());

// Parameters
(function( msg, name ) {
	console.log( msg, name );
})( "Bye", "Joshua" );
