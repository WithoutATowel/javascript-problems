//3. Write a JavaScript program to get the current date. 
//Expected Output : 
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 

var d = new Date();
var month = d.getMonths();
var day = d.getDate();
var year = d.getFullYear();

console.log(month + "-" + day + "-" + year);