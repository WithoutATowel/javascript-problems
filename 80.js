//80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

var numbers = [7,9,23,41,1,21,43];

function arraySwap(arry) {
	var first = arry.shift();
	var last = arry.pop();
	arry.unshift(last);
    arry.push(first);
    return arry;
};

alert(arraySwap(numbers));

//Preferred solution is pretty neat. You can use matrices for assignment! [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];