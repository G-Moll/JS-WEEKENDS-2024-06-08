// OOP ES6: Class
class Person {
	constructor( n, a ) {
		this.name = n;
		this.age = a;
	}
	sayHello() {
		return this.name;
	}
	sayAge() {
		return this.age;
	}
}

var personOne = new Person( "Joshua", 33 );
console.log( personOne );
console.log( personOne.sayHello() );
console.log( personOne.sayAge() );

var personTwo = new Person( "Peter", 40 );
console.log( personTwo );
console.log( personTwo.sayHello() );
console.log( personTwo.sayAge() );
// console.log( personOne instanceof Person );







