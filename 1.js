//1. Write a JavaScript program to display the current day and time in the following format.
//Sample Output : Today is : Friday. 
//Current time is : 4 PM : 50 : 22

var d = new Date()
var day = " "
switch(d.getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4: 
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
};
var hour = " "
if(d.getHours() < 12) {
  hour = d.getHours() + " AM";
} else {
	hour = (d.getHours() - 12) + " PM";
};
var minutes = d.getMinutes();
var seconds = d.getSeconds();
console.log("Today is : " + day);
console.log("Current time is : " + hour + " : " + minutes + " : " + seconds);