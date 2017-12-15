//52. Write a JavaScript program to convert the letters of a given string in alphabetical order.

var text = prompt("Enter a string and it shall be sorted");

function stringSort(txt) {
	return txt.split("").sort().join("");
};

alert(stringSort(text));