
//**********************************************************
 for( var i = 1; i <= 10; i++){
 	document.write (i + "<br>");
 	
 };
//***********************************************************
function uno (nombres,apellidos){
	var respuesta = document.write(nombres + apellidos);
	return respuesta;
}
uno("Alex", " " + "Simpatico <br>");
//*************************************************************
function dos(nombre, apellidos) {
  return document.write(nombre + apellidos);
}

dos("Pedro", " " + "Perez <br>"); 

///**************************************************************
function tres(nombre=""){
	// body...
	var nombreCompleto = document.write(nombre);
	return  nombreCompleto;
}
tres("Noel Gil <br>");
//*****************************************************************
function cuatro(nombre=""){
	//body...
	var nombreCompleto = nombre;
	return document.write(nombreCompleto);
}
cuatro("Isabel Gil <br>");
//******************************************************************
function cinco(name){
	//body...
	return name;
}
var result = cinco("Nadieska <br>");
document.write(result);


//*******************************************************************

function over(){
  alert("mouse click");

}

//********************************************************************
var eventone = document.querySelector(".tres");
eventone.addEventListener("click", function(){alert("hola")});



