// Function to invoke foo n times
function invoke(foo, n, delay){
	// To implement

}

var fn = function(i) { 
	console.log("\tInvoked function " + i); 
}

var fp = invoke( fn, 10, 1000);

fp.then("All promises resolved");
console.log("Done setting up promises");

