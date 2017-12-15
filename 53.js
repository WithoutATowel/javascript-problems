//53. Write a JavaScript program to check if the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

var text = prompt("Enter a string");
function aBChecker(txt) {
	return Boolean(txt.search(/a...b/i)+1) || Boolean(txt.search(/b...a/i)+1);
};
alert(aBChecker(text));