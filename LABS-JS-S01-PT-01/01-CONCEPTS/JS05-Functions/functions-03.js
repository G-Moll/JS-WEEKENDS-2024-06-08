// IIFE
var a = (function() {
	console.log( "IIFE" );
})();
var b = (function( x ) {
	console.log( x );
})( "Hello IIFE" );
