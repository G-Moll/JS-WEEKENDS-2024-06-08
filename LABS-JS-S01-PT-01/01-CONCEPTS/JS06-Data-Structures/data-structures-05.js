// JSON
// JavaScript Object Notation
var o = { name: "Joshua", age: 33 }
var a = [ "Joshua", 33 ]
// console.log( o, a );

var j = {
	data: [ "Joshua", 33, [ true, false  ], { x: 10, y: 30 } ],
	info: [ 1, true ],
	value: { a: 1, b: 2, c: true  }
};
// console.log( j );
// console.log( j.data );
// console.log( j.data[ 1 ] );
// console.log( j.data[ 2 ] );
console.log( j.data[ 2 ][ 0 ] );
console.log( j.data[ 3 ].y );
// console.log( j.value.a );
// console.log( j.value.c );


// https://jsonplaceholder.typicode.com/
