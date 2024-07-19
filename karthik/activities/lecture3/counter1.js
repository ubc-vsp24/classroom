function makeCounters(n) {
	var counts = [];
	var counters = [];
	for (var i=0; i<n; i++) {
		counts[i] = 0;
		counters[i] = function {
			counts[i]++;
			return counts[i];
		}
	};
}

var cs = makeCounters(10);
console.log( cs[0] );
console.log( cs[4] );

