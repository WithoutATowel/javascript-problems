//9. Write a JavaScript program to calculate days left until next Christmas.

var nonLeapYear = [31,28,31,30,31,30,31,31,30,31,30,31];
var leapYear = [31,29,31,30,31,30,31,31,30,31,30,31];
var monthLengths = [];
var d = new Date();

var year = d.getFullYear();
if (year % 4 == 0){
	monthLengths = leapYear;
} else {
	monthLengths = nonLeapYear
};
 
var month = d.getMonth();
var day = d.getDate();
var daysToChristmas = 0;

if(month == 11) {
	if(day <= 25) {
    	daysToChristmas = 25 - day;
    } else {
    	daysToChristmas = 365 - (day - 25);
    };
} else {
	var daysLeftThisMonth = monthLengths[month] - day;
    var daysFromFullMonths = 0
    for(var i = month + 1; i < 11; i++){
        daysFromFullMonths += monthLengths[i];
    };
    daysToChristmas = daysLeftThisMonth + daysFromFullMonths + 25;
};
document.write("<p> There are " + daysToChristmas + " days to Christmas.</p>");