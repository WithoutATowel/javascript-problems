//70. Write a JavaScript program to rotate the elements left of a given array of integers of length 3.

var myArray = [1,2,3];

function arrayRotate(anArray) {
	anArray.push(anArray.shift());
	return anArray;
};

alert(arrayRotate(myArray));