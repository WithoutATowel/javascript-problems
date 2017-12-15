//54. Write a JavaScript program to count the number of vowels in a given string.

var text = prompt("Enter a string!");
function vowelCounter(txt) {
	return txt.match(/[aeiou]/gi).length;
};
alert(vowelCounter(text));