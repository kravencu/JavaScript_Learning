function calc() {
	var calc_ = document.write (4 + 5 + "<br>");
	return calc_
	// body...
}

calc();
//#############################################################

function calc1() {
		return document.write (4 + 5 + "<br>");
	// body...
}

calc();

// #################################################################

//Two way to obtain the same result take the must simple or both ;)
function sum(a,b){
	return a*b;
}

var x = sum (5,6);
document.write(x + "<br>");
//#####################################################################
function sum1(a,b){
	return c = a*b;
}

 sum1 (5,6);
document.write(c + "<br>");

//################################################################################
function summ(a,b=1){ // Pre iniation variable b with valor = 1
	var xx = a*b
	return xx;
}

document.write(summ(5,9));

//###############################################################################