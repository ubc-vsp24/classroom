// Attempts to solve the problem in counter1 with an extra variable - Doesn't work!!

function makeCounters(n) {
	var counts = [];
	var counters = [];
	for (var i=0; i<n; i++) {
		counts[i] = 0;
		counters[i] = function() {
			var x  = i;
			counts[x]++;
			return counts[x];
		}
	};
	return counters;
}

var cs = makeCounters(10);
console.log( cs[0]() );
console.log( cs[4]() );

