// Example of AJAX request
// - makes GET request to the python server (self-hosted)

window.onload = function() {
	var inflight = [];	// Array to keep all the XMLHttpRequests
	var count = 0;		// Just keeping count of how many requests are made

	// helper function for removing the request from the inflight array
	// will be called in the XMLHttpRequest event handlers
	var removeRequest = function(req) {
		var index = inflight.indexOf(req);
		if (index > -1) inflight.splice(index, 1);
		else alert(req.toString() + " not found !");
	}

	// Function for sending the request, attached as the click event listener
	var sendRequest = function(prefix, count) {
		var label = "Request " + count;		// Just some label for readability
		var req = new XMLHttpRequest();		// Create the actual XMLHttpRequest object
		req.open("GET", prefix + '-' + count);	// Configure the connection with HTTP method and URL

		// On Load handler
		req.onload = function() {
			if (req.status === 200) {
				console.log(label + " : Received " + req.responseText);
			} else {	
				console.log(label + " : Received error code : " + req.status);
			}
			removeRequest(req);
		};		
		// On Timeout handler
		req.ontimeout = function() {
			console.log(label + " : Timed out after " + req.timeout + " ms");
			removeRequest(req);
		}
		// On Error handler
		req.onerror = function() {
			console.log(label + " : Resulted in an error !");
			removeRequest(req);
		};
		// On Abort handler
		req.onabort = function() {
			console.log(label + " : Aborted");
			removeRequest(req);
		};

		// Overriding the toString method to print the label instead
		// (used in removeRequest)
		req.toString = function() {
			return label;
		};

		// All the handlers are setup, so send the message
		req.timeout = 5000;	 // Wait at most 5000 ms for a response
		console.log("Sending request " + req);
		inflight.push(req);	 // Add it to the inflight messages Array before sending it
		req.send();
	}

	// Function for cancelling the last request, attached as the click event listener
	var cancelRequest = function() {
		if (inflight.length > 0) {
			inflight[inflight.length - 1].abort();
		} else {
			alert("No messages in flight");
		}
	};

	// Find the buttons from the DOM and attach listeners
	var ok = document.getElementById("OK");
	ok.addEventListener("click", function() {
		sendRequest("hello", count);
		count += 1;
	}, false);	// sendRequest upon button click

	var cancel = document.getElementById("Cancel");
	cancel.addEventListener("click", cancelRequest, false);	// cancel last sent request

	// Set up an interval handler for printing inflight messages
	setInterval(function() {
		if (inflight.length > 0) {
			var msg = "In flight messages : ";
			for (var i = 0; i < inflight.length; i++) {
				msg = msg + " (" + inflight[i] + ")";
			}
			console.log(msg);
		}
	}, 1000);			// Display the inflight list
}
