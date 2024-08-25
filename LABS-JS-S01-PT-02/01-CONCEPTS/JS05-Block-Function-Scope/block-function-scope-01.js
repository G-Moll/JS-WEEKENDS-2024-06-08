// Block-Function Scopes - Ambito/Alcance
var a = 10;
console.log( "1: ", a );

function x() {
	let y = [];
	if( true ) {
		const z = {};
		console.log("2: ", a, y,z );
	}
	console.log( "3: ", a, y, z );
}
x();

