// Hoisting - Elevacion
// Pone al principio del archivo las declaraciones

console.log( a(), b );

var b = 20;
function a() {
	return "A function";
}
