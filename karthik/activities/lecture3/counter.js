// Simple makeCounter functions to illustrate closures
function makeCounter(initial, increment) {
	var count = initial;
	return function() {
		count += increment;
		return count;
	}
};

var f1 = makeCounter(3, 1);
console.log( f1() );
console.log( f1() );

var f2 = makeCounter(5, 5);
console.log( f2() );
console.log( f2() );

console.log( f1() );

