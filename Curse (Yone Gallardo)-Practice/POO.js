/*Programing Object Orient (POO) Java Script
Class Objecto {
    property(variables);
    -head
    -feet
    -tail
    method (methodos);
    -think
    -walk
    -move
};*/
// Two different way to create class and teir object

//##################################################1st#####################################################
function gato(nombre, edad, peso) {

    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;

    this.correr = function() { document.write("El gato", " ", nombre, " ", "corre muy rapido" + "<br>"); };
};

var gato1 = new gato("MediaNoche", 5, 7);
var gato2 = new gato("Manchitas", 7, 9);
//document.write(gato2.nombre, " ", "tiene", " ", gato2.edad, " ", "anos", " ");

gato2.correr();

//####################################################################################//#endregion

//###########################################2nd#########################################
class dog {
    constructor(nombre, edad, peso) {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }
    corrrer() {
        document.write("El perro", " ", this.nombre, " ", "corre" + "<br>");
    };

};
var perro1 = new dog("Firulais", 2, 20);
document.write(perro1.nombre + "<br>");
perro1.corrrer();

//###############################Heritage###################################//#endregion

class Animal {
    constructor(tipo, raza) {
        this.tipo = tipo;
        this.raza = raza;
    }
};

class Domestic extends Animal { //ojo heritage
    constructor(tipo, nombre, edad, peso) {
        super(tipo) //ojo heritage
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }
};
var animal1 = new Domestic("Hogar", "Fido", 8, 9);
document.write(animal1.tipo, "<br>");

animal1.tipo = "Caza";
document.write(animal1.tipo, "<br>");

for (prop in animal1) {
    if (animal1.hasOwnProperty(prop)) {

        document.write(prop, "<br>");
    }
}

//#######################################BOM###############################################//#endregion


//#########################################3rt######################################################

function newBiblioteca() {
    var biblio = new Biblioteca(); // class inside a variable
    biblio.id = prompt("Teclea el identificador de la biblioteca");
    biblio.nombre = prompt("Teclea el nombre de la biblioteca");
    biblio.localidad = prompt("Teclea la localidad de la biblioteca");
    biblio.responsable = prompt("Teclea el nombre del responsable de la biblioteca");
    biblio.nLibros = prompt("Teclea el número de libros de la biblioteca");
    a[cont] = biblio;
    cont++;
    alert("Datos registrados con éxito");
}
//####################################################################################################
//#####################################4th###########################################################

gato.prototype.maulla = true;

gato.prototype.toString = function() {
    return this.nombre + "pesa" + this.peso + "y tiene" + this.edad + "ademas el muy cabron maulla" + this.maulla;


};
document.write(gato2.toString());

//Examples from You Tube Channel