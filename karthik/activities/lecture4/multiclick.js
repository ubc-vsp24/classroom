function handler(id, phase) {
	return function() {
		console.log(id + " : " + phase);	
	}
}

function addListeners(elements) {
	for (var i=0; i<elements.length; ++i) {
		var element = elements[i];
		// console.log("Adding handlers for " + element.id);
		element.addEventListener("click", handler(element.id, "capture"), true);	// Add capture handler
		element.addEventListener("click", handler(element.id, "bubble"), false);	// Add bubble handler
	}

}

window.onload = function() {
	var btns = document.getElementsByTagName("button");
	addListeners(btns);

	var divs = document.getElementsByTagName("div");
	addListeners(divs);
}
