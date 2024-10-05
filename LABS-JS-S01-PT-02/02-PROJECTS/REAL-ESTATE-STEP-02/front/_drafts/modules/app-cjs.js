// CommonJS Modules
const message = require( "./cjs/message" );
const Person = require( "./cjs/Person" );

var personOne = new Person( "Peter", 40  );

console.log( message( personOne.name ) );
console.log( Person, personOne );
