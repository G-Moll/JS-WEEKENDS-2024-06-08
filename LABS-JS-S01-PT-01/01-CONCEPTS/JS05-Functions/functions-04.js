// Callbacks
function sum() { return "Sum"; }
function multiply() { return "Multiply"; }

function makeMath( fn ) {
	return fn() + " has been performed..!";
}

console.log(makeMath( sum ));
console.log(makeMath( multiply ));
