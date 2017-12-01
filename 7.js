//7. Write a JavaScript program to find 1st January is being a Sunday between 2014 
//and 2050.

var jan1Sundays = [];

for(var i = 2014; i < 2051; i++) {
	var foo = new Date(i, 0, 1, 0, 0, 0, 0)
	var day = foo.getDay();
	if(day == 0){
		jan1Sundays.push(foo.toDateString());
	};
};

document.write("<ul>");
for(var j = 0; j < jan1Sundays.length; j++){
	document.write("<li>" + jan1Sundays[j] + "</li>");
};
document.write("</ul>");