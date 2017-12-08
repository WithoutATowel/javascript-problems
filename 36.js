//36. Write a JavaScript program to check if the last digit of the three given positive integers is same.

function same3(num1, num2, num3) {
	var last1 = String(num1).slice(-1);
	var last2 = String(num2).slice(-1);
	var last3 = String(num3).slice(-1);

	if(last1 == last2 && last1 == last3) {
		return true;
	} else {
		return false;
	};
};

console.log(same3(13859,9282,42132));
console.log(same3(13859,9289,42139));