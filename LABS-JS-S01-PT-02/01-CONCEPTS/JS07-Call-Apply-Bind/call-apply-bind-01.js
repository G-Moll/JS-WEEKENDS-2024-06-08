// Call, Apply
function sayMessage( message ) {
	console.log( message, this.name );
}
var personOne = {
	name: "Joshua",
	age: 33,
	sayHello: function() {
		console.log( "Hello", this.name );
	}
}
var personTwo = {
	name: "Peter",
	age: 40,
	sayBye: function() {
		console.log( "Bye", this.name );
	}
}
var personThree = {
	name: "John",
	age: 23,
	sayMessage: function( maybe ) {
		console.log( maybe, this.name );		
	}
};

var sayHello = personOne.sayHello;
var sayBye = personTwo.sayBye;

sayMessage.call( personOne, "Hello from JS" );
sayMessage.apply( personOne, [ "Hello from ST" ] );
sayMessage.apply( personThree, [ "Hello from Pilares" ] );
sayHello.call( personThree );
sayBye.apply( personThree );
sayBye.apply( { name: "Diego" } );

personThree.sayMessage.call( personOne, "Some maybe message" );
