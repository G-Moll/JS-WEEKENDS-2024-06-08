// Bind
function sayMessage( message ) {
	return message + " " + this.name;
}

var personOne = { name: "Joshua" }
var personTwo = { name: "Peter" }
var personThree = { name: "Paul" }

var messageJoshua = sayMessage.bind( personOne );
var messagePeter = sayMessage.bind( personTwo );
var messagePaul = sayMessage.bind( personThree );

// ... diferentes tareas.. x tiempo

console.log(
	messageJoshua( "Hello" ),
	messagePeter( "Bye" ),
	messagePaul( "Maybe" )
);
