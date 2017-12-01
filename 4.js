//4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

function threeSides(a,b,c) {
    var p = (a+b+c)/2;
	var area = Math.sqrt(p*(p-a)*(p-b)*(p-c));
	return area;
};
document.write(threeSides(5,6,7));