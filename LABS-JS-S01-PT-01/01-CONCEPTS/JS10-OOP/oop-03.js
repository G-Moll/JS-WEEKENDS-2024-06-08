// OOP ES5: Prototypal Inheritance
function Person( n, a ) {
	this.name = n;
	this.age = a;
	this.hello = function() {
		return "Hello";
	}
}
Person.prototype.sayHello = function sayHello() {
	return this.name;
}
Person.prototype.sayAge = function sayAge() {
	return this.age;
}


var personOne = new Person( "Joshua", 33 );
console.log( personOne );
console.log( personOne.sayHello() );
console.log( personOne.sayAge() );
console.log( personOne.hello() );

// var personTwo = new Person( "Peter", 40 );
// console.log( personTwo );
// console.log( personTwo.sayHello() );
// console.log( personTwo.sayAge() );

// console.log( personOne instanceof Person );




