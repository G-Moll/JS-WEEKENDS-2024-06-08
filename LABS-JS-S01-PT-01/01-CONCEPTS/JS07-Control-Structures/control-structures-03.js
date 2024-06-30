// while

var x = Math.random();
while( x < 0.5 ) {
	console.log( x );
	x = Math.random();
	break;
}

y = true;
do {
	console.log( y );
	y = !y;
}
while( y != true )
