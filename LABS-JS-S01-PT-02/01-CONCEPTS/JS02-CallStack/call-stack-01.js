// Callstack
// LIFO
// Last In, Fist Out
// Estados Maquinas de Estados
function a() {
	console.log( "Calling A function" );
	b();
	console.log( "Calling A function" );
}
function b() {
	console.log( "Calling B function" );
	c();
	console.log( "Calling B function" );
}
function c() {
	console.log( "Calling C function" );
	console.log( "Calling C function" );
}
a();
