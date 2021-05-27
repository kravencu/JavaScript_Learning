/*Create By
                      ########################
                      #  krypto007           #
                      #  USA.Florida.2020    #
                      #  All right reserved  #
                      ########################
                      Curse from Youtuber channell Yonuel Gallardo
*/

var a = "15.44";
var b = Number.parseFloat(a);
document.write(typeof b + "<br>");
/*##########################Count and seaarch###################################### */
var saludo = "Hello World,how are you,yesss you?";
/*length count many of character
  search // find the location of one character or complete word
  indexOf // the same that above return indx
  lastindexOf// finding the last chracter or the last word return indx  
     */
var contar = saludo.length;
var bb = saludo.match(/you/gi); //making array of two word (you,you)
var bbc = bb.length; // use for count word inside array
var vvc = bb.lastIndexOf("you"); // lastindexOf from bb array create through match property
document.write(vvc, " Iam here", "<br>");

var c = saludo.substr(2, 9); // #2 start count from the begining (work with direct link) #9 count from #2 starting w/#1
var d = saludo.substring(0, 9); //Both # start count at the begining
var e = saludo.charAt(6); // returning a char count from begining starting indx 0
var f = saludo.startsWith("Hello"); // return boolean
var g = saludo.endsWith("World"); // return boolean
var h = saludo.includes("World", 4); // return boolean

document.write(bb + "<br>");
document.write(c + "<br>");
document.write(d + "<br>");
document.write(e + "<br>");
document.write(f + "<br>");
document.write(g + "<br>");
document.write(h + "<br>");
document.write(contar + " " + "is the number of characters using length" + "<br>");
document.write(bbc + "<br>");
/*##################################################################################### */
var repetir = "Hello Everyone <br>"; // the tag <br> has to be set here because
document.write(repetir.repeat(5)); // i try but the code dosent work with the tag <br> here.

var rempla = repetir.replace("Hello", "Hi");

document.write(rempla + "Hello has been replace \'Hi\'" + "<br>");

var lectura = repetir.slice(2, 8); // reading or finding similar returnig strin g (work with index)

document.write(lectura, " ", "estoy aki", "<br>")


var ara = " noel,lunes,martes,miercoles,jueves,viernes ";

console.log(ara.split(",")); // must open web developet of your browser
// Important split transform a string to an array "very usefull"...
//document.write(ara.split ("," )+ "<br>");

var spacios = ara.trim(); // to eliminate white space
document.write(spacios + "<br>");

var v = saludo.toUpperCase();
document.write(v + "<br>");

var vv = v.toLocaleLowerCase();
document.write(vv + "<br>");

var anadir = vv.concat(" Here you add some new text");
document.write(anadir + "<br>");
//###########################################################################################
//####################################Arrays Methods#######################################################


//var arrass = NewArray(); another way to set up array

var arra = [
    [1, 2, 3, 4, [20, 30, 40], ], //array multidimension 
    [5, 6, 7, 8],
    [9, 10, 11],

];

document.write(arra[0][4][2] + "<br>");

//length

var ll = arra.length;
document.write(ll + "<br>");
//push
arra.push("martes");
arra.push("miercoles"); // adding values to an array (at the end)
arra.push("jueves");
arra.push("Viernes")
document.write(arra + "<br>");
//pop
var pp = arra.pop();
document.write(pp.toUpperCase() + "<br>");

//join // transform array into string
var j = arra.join();
document.write(typeof j + "<br>");
//split //transform string to array
//j.split();
//document.write(typeof j, +" " + j.length + "<br>");

var weekk = Array.from(document.querySelectorAll(".week p")); //map

var cracion = weekk.map(dias => dias.textContent);
console.log(cracion);


var semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "lunes"]; //UpperCase has priority at the first
var semana1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//sort alfhbethic order
document.write(semana.sort() + "<br>");
//sort number
var numbers = [5, 9, 1, 7, 6, 3, 10, 8, 4, 2];

numbers.sort(function(x, y) {
    return x - y
        //return y-x decending order

});
document.write("Num Array :", numbers.toString(), "<br>");
//reverse
document.write(semana.reverse() + "<br>");

for (var i in semana) {
    document.write(semana[i], "<br>");

};
//MUST BE VERY CAREFULL WITH THE ORDER OF ALL VARIABLES...

semana.forEach(
    (dos, i) => document.write(i + "-" + dos + "<br>")

);
var buscar = semana.find(dos => dos == "martes"); //return the first value that match
document.write(buscar + "<br>");


var busscar = semana.findIndex(tres => tres == "lunes");
document.write(busscar + "<br>");

var filtrar = semana.filter(tress => tress == "lunes"); //return all the value found within the array.
document.write(filtrar + "<br>");

var prueba = 200;

var agunos = semana1.some(cuatro => cuatro > 53); // return a boolean true or false
document.write(agunos + "<br>");

/*var xxx = ['a', 'b', 'c'];
var res = "";
for (var y in xxx) {
    res += y;

}
alert(res);*/