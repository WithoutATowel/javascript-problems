//48. Write a JavaScript program to reverse a given string.

var text = prompt("Enter a string");

function reverser(txt) {
	var myArray = txt.split("");
	myArray.reverse();
	return myArray.join("");
};

alert(reverser(text));