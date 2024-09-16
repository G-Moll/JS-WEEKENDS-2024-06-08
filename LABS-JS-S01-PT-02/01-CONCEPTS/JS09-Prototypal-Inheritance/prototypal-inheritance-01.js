function Person( name ) {
	this.name = name;
}
Person.prototype.hello = function hello() {
	return "My name is " + this.name;
};
Person.prototype.hola = function hola() {
	return "Hola " + this.name;
};


var personOne = new Person( "Joshua" );
var personTwo = new Person( "Peter" );
var personThrre = new Person( "Luke" );
console.log( personOne.hello === personTwo.hello )
console.log( personOne.hola === personTwo.hola )

// console.log( "a" === "a",  10 === 10,  true === !false  );
// console.log( {} === {},  [ 10 ] === [ 10 ],  function(){} === function(){}  );
