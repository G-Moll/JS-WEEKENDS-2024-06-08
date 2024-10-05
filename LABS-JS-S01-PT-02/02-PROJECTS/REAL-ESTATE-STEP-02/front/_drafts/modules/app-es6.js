// ES6 Modules
import { messageFunction as message } from "./es6/message.js";
import { Person } from "./es6/Person.js";

var personOne = new Person( "Joshua", 33 )
console.log( personOne );
console.log( message( personOne.name ) );



