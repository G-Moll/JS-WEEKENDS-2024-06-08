// Closures
function outerFn() {
	var messages = [ "Hello","Hola", "Hallo" ];
	var count = 0;
	function innerFn() {
		return messages[ count ++ ];
	}
	return innerFn;
}

var helloClosure = outerFn();
console.log( helloClosure() );
console.log( helloClosure() );
console.log( helloClosure() );
console.log( helloClosure() );
console.log( helloClosure() );
