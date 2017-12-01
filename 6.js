//6. Write a JavaScript program to determine whether a given year is a leap year in 
//the Gregorian calendar.

function leapYearChecker(year) {
	if(year % 4 == 0) {
    	alert(year + " is a leap year!");
    } else {
    	alert(year + " is not a leap year.");
    };
};

leapYearChecker(2020)