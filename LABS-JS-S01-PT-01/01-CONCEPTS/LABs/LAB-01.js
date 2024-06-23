/*
Crear un programa donde al evaluar un número, se muestre el mes correspondiente a ese número.
- funciones
- objetos
- arreglos

// Cuando se llame la función, mostrar el siguiente resultado
getDate( 1 );
getDate( 12 );

// Resultado
Enero 
Diciembre
*/
var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

// USING STARNDARD FUNCTIONS
function standardFn( monthsArray, monthNum ) {
	return "Standard " + monthsArray[ monthNum - 1 ];
}
console.log( standardFn( months, 1 ) );
console.log( standardFn( months, 12 ) );


// USING ARROW FUNCTIONS
var arrowFn = ( monthsArray, monthNum ) => "Arrow " + monthsArray[ monthNum - 1 ];
console.log( arrowFn( months, 1 ) );
console.log( arrowFn( months, 12 ) );


// USING "CALLBACKS" (Basic Example)
function mainCaller( fn ) {
	return fn();
}
function mainCalle() {
	return "Callback " + months[ Math.random() > 0.5 ? 0 : 11 ];
}
console.log( mainCaller( mainCalle ) );


// USING "IIFES"
var iifeFn = (function( monthsArray, monthNum ) {
	return "IIFE " + monthsArray[ monthNum - 1 ];	
});
console.log( iifeFn( months, 1 ) );
console.log( iifeFn( months, 12 ) );
