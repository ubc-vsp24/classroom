// Function to invoke foo n times
function invoke(foo, n, delay){
      console.log("Calling invoke...", n);
      var p = new Promise((resolve, reject)=> {
	    var callFoo = function() { 
		   foo(n); 
		   resolve(); 
		   console.log("Resolved promise " + n);
	    };
	// console.log("Setting up promise...");
        setTimeout( callFoo, delay );
     });

     // Recursive call to invoke (if n>0)
    if (n > 0)		
		return p.then( () =>  invoke( foo, n-1, delay) );
    else
		return p;
}

var fn = function(i) { 
	console.log("\tInvoked function " + i); 
}

var fp = invoke( fn, 10, 1000);

console.log("Done setting up promises");

