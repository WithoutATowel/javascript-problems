//50. Write a JavaScript program to capitalize the first letter of each word of a given string.

var text = prompt("Please enter a string.");

function capitalizer(txt) {
	var myArray = txt.split(" ");
	for (var i = 0; i < myArray.length; i++) {
		myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].substr(1);
	}
	return myArray.join(" ");
};

alert(capitalizer(text));