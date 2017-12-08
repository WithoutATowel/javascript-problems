//23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be 
//greater than or equal to 1.

var text = "This is my starting string"

function swapper(str) {
	if(str <= 1) {
		return str;
	} else {
		var first = str.slice(0,1);
    	var last = str.slice(str.length-1,str.length);
    	var middle = str.slice(1,str.length-1);
    	return last + middle + first;
	};
};

alert(swapper(text));