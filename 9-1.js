var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var day = now.getDate();
var daysUntilChristmas = 0;
var nextChristmas = "";

if(month == 11 && day > 25) {
	nextChristmas = new Date(year+1, 11, 25, 0, 0, 0, 0);
} else {
	nextChristmas = new Date(year, 11, 25, 0, 0, 0, 0);
};

function dateDiff(date1, date2) 
{
	oneDay = 24*60*60*1000;				                //one day in milliseconds
	diff = Math.ceil((date2 - date1) / oneDay);			//difference is full days
	return(diff);
}

daysUntilChristmas = dateDiff(now, nextChristmas);

alert(daysUntilChristmas);
