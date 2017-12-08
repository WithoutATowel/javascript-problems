//35. Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character. 

var text = "This is $ a what is $ asdf $ hew ewh asdf $ $ yaaa $"

function matchNumber(txt,regex) {
	var length = txt.match(regex);
	length = length.length;
    return length;
};
    
console.log(matchNumber(text, /\$/g));
console.log(matchNumber("YEAA yes yea AWYEA", /yea/g));