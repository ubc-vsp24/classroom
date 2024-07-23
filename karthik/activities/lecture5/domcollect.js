
// Get the elements of a certain tag rooted at the node 'id'
var getElementsRootedAt = function(tagName, id) {
	var el = document.getElementById(id);
	if (el==null) return null;
	var t = el.getElementsByTagName(tagName);
	return t;
};

// Search for a text in the DOM-subtree rooted at node 
// Only textnodes are searched here. Return true if found
var search = function(node, text) {
	var found = false;
	if (node.nodeType == 3) {
		// console.log( "'" + node.nodeValue + "'" );
		if (node.nodeValue == text) found = true;
	} else {
		var cn = node.childNodes;
		if (cn) {
			for (var i=0; i<cn.length; i++) {
				found = found || search(cn[i], text);
			}
		}	
	};
	return found;	
};

// Concatenate all the text in the subtree of a node
var concatenateSubtree = function(node) {
	var result = "";
	if (! node) return result;
	if (node.nodeType == 3) {
		result = result + node.nodeValue;
	} else {
		var cn = node.childNodes;
		if (cn) {
			for (var i=0; i<cn.length; i++) {
				result = result + concatenateSubtree(cn[i]);
			}
		}
	};
	return result;
};

// Solution to class activity on Slide 30
// Concatenate all the textnodes in the siblings of text node with the ID= id
var concatenateSiblings = function(id, includeSubtrees) {
	// Write your code here
	var result = "";
	return result;
};


window.onload = function() {
	// Find all div elements rooted at the DOM with id=one	
	var s = getElementsRootedAt("div", "one");
	console.log(s);

	// Find the text "is" starting from node one
	var found = search(document.getElementById("one"), " is "); 	
	console.log(found);	

	// Concatenate the siblings of text nodes rooted at node one
	var str = concatenateSiblings("one", false);
	console.log(str);
};
