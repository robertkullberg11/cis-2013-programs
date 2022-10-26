//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

var do_it = function () 
{
    var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);	
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);
    
alert ("The Rectangle area is " + rectArea(floatRectWidth,floatRectHeight) + 
	" and the perimeter is " + rectPerim (floatRectWidth,floatRectHeight) + 
	"\n\n" + "The Triangle area is " + 	triangleArea(floatTriSide1,floatTriSide2,floatTriSide3) + 
	" and the perimeter is " + 
	trianglePerim(floatTriSide1,floatTriSide2,floatTriSide3) + "\n\n" +
	"The Circle area is " + circleArea(floatRadius) + 
	" and the circumference is " + circleCircum(floatRadius));
};
/*
 * the calcCircleCircum function is activated when the calc_circle_cirum button on the DOM
 * is clicked.  It reads the radius information from the DOM and then reports the circle
 * circumference in an alert box, using the circleCircum function to perform the calculation
 */

var calcRectArea = function()
{
	var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
    
	alert ("The Rectangle Area is " + rectArea(floatRectWidth, floatRectHeight));
};

function rectArea(floatRectWidth_par, floatRectHeight_par)
{
	var floatRectArea = parseFloat(floatRectWidth_par*floatRectHeight_par);
	return floatRectArea.toFixed(2);
}

var calcRectPerim = function()
{
	var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
    
	alert ("The Rectangle Perimeter is " + rectPerim(floatRectWidth, floatRectHeight));
};

function rectPerim(floatRectWidth_par, floatRectHeight_par)
{
	var floatRectPerim = parseFloat(2 * floatRectWidth_par * 2 * floatRectHeight_par);
	return floatRectPerim.toFixed(2);
}

var calcTriangleArea = function()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);

	alert ("The Triangle Area is" + triangleArea(floatTriSide1, floatTriSide2, floatTriSide3));
};

function triangleArea(floatTriSide1_par, floatTriSide2_par, floatTriSide3_par)
{
	var floatS_par = (floatTriSide1_par + floatTriSide2_par + floatTriSide3_par)/2;
    var floatTriangleArea = Math.sqrt((floatS_par*(floatS_par-floatTriSide1_par)*(floatS_par-floatTriSide2_par)*(floatS_par-floatTriSide3_par)));
	return floatTriangleArea.toFixed(2);
}


var calcTrianglePerim = function()
{
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);

	alert ("The Triangle Perimeter is " + trianglePerim(floatTriSide1, floatTriSide2, floatTriSide3));
};

function trianglePerim(floatTriSide1_par, floatTriSide2_par, floatTriSide3_par)
{
	var floatTrianglePerim = parseFloat(floatTriSide1_par + floatTriSide2_par + floatTriSide3_par);
	return floatTrianglePerim.toFixed(2);
}

var calcCircleArea = function()
{
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle Area is " + circleArea(floatRadius));
};

function circleArea(floatRadius_par)
{
	var floatCircleArea = parseFloat(Math.PI * Math.pow(floatRadius_par,2));
	return floatCircleArea.toFixed(2);
}

var calcCircleCircum = function()
{
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle circumference is " + circleCircum(floatRadius));
};



function circleCircum(floatRadius_par)
{
	var floatCircum = parseFloat (2 * Math.PI * floatRadius_par);
	return floatCircum.toFixed(2);
}



window.onload = function () 
{
    //lines 51-56 clear the DOM values..
//    $("rect_width").value = "";
//    $("rect_height").value = "";
//    $("tri_side1").value = "";
//    $("tri_side2").value = "";
//    $("tri_side3").value = "";
//    $("radius").value = "";
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_rect_area").onclick = calcRectArea; // runs the calcCircleCircum function when clicked
    $("calc_rect_perim").onclick = calcRectPerim; // runs the calcCircleCircum function when clicked
    $("calc_tri_area").onclick = calcTriangleArea; // runs the calcCircleCircum function when clicked
    $("calc_tri_perim").onclick = calcTrianglePerim; // runs the calcCircleCircum function when clicked
    $("calc_circle_area").onclick = calcCircleArea; // runs the calcCircleCircum function when clicked
    $("calc_circle_circum").onclick = calcCircleCircum; // runs the calcCircleCircum function when clicked
    $("calc_all").onclick = do_it;
    
};


