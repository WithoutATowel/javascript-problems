//56. Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.

var num1 = prompt("Enter a number!");
var num2 = prompt("Enter another number!");

function divider(n1, n2) {
	var foo = "";
    if(n1 <= 0 || isNaN(n1) || n2 <= 0 || isNaN(n2)) {
		return "Invalid inputs";
	} else {
		return (n1 / n2).toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
}

alert(divider(num1, num2));