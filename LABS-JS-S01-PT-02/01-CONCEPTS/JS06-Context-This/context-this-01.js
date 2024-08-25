// Context - this /self/me


// Especificacion ECMA 262
// Implementacion: NodeJS, Web Browsers
// ActionsScript 1/2, JavaScript

// console.log( global );
// console.log( this );

function a() {
	console.log( this );
}
// a();

var x = {
	name: "Joshua",
	age: 33,
	sayHello: function() {
		console.log( "Hello", this.name );
	}
}
// x.sayHello();
name = "JS";
console.log( this );
var sayHello = x.sayHello;
// function() {
// 	console.log( "Hello", this.name );
// }
sayHello();
// console.log( sayHello() );


