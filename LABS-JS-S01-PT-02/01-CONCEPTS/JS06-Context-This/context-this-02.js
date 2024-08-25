// prototypal inheritence 
function Person( n, a ) {
	this.name = n;
	this.age = a;
}
Person.prototype.sayHello = function sayHello() {
	return "I am " + this.name;
};


var personOne = new Person( "Joshua", 33 );
var personTwo = new Person( "Paul", 48 );
console.log( personOne.sayHello() );
console.log( personTwo.sayHello() );

