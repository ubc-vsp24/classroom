// Function to invoke foo n times
function invoke(foo, n, delay){
      var p = new Promise((resolve, reject)=> {
	    var callFoo = function() { 
		   foo(n); 
		   resolve(); 
		   console.log("Resolved promise " + n);
	    }; 
        setTimeout( callFoo, delay * n);
     });

     // Recursive call to invoke (if n>0)
    if (n > 0)		
		return p.then( invoke( foo, n-1, delay) );
    else
		return p;
}

var fn = function(i) { 
	console.log("\tInvoked function " + i); 
}

var fp = invoke( fn, 10, 1000);

fp.then("All promises resolved");
console.log("Done setting up promises");

