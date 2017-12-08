//15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

function widget(number) {
	var difference = 0;
	if(number <= 13) {
		difference = 13 - number;
	} else {
		difference = (number - 13) * 2;
	};
	return difference;
};

var numbr = prompt("Enter a number:");
alert(widget(numbr))