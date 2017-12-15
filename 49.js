//49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

var text = prompt("String please!");

function simpleCypher(txt) {
	var foo = txt.split("");
	for (var i = 0; i < foo.length; i++) {
		if (foo[i] == "Z") {
			foo[i] = "A";
		} else if (foo[i] == "z") {
			foo[i] = "a";
		} else if (!foo[i].match(/\w/) || foo[i] == "_") {
        	continue;
        } else {
			foo[i] = String.fromCharCode(foo[i].charCodeAt()+1);
		}
	}
    return foo.join("");
}

alert(simpleEncrypt(text));