//63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater 
//or equal to three.

var text = prompt("Enter a string of odd length which is greater than or equal to three");

function middle3(txt) {
	if(txt.length % 2 == 0 || txt.length < 3) {
		return "Invalid string!";
	} else {
		return txt.substr((txt.length - 3) / 2, 3);
	}
}

alert(middle3(text));