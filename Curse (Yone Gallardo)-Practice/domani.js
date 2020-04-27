document.getElementById('reload').onclick = function(event) {
    document.getElementById('sampDiv1').style.color = "#0645ad"



};

var pElements = document.getElementsByTagName('h1');
pElements[1].style.backgroundColor = "blue";

var a = document.getElementsByTagName('p');

a[3].style.color = "red";

var titulo = document.getElementsByClassName('tit');
titulo[2].style.color = "green";

// Position for insertion ,must be after the whole DOM it's ready...

var getEveryDiv = document.getElementById("alldiv");


function colorin(colores) {
    if (colores == "red") {
        getEveryDiv.style.backgroundColor = 'red';
    } else
    if (colores == "blue") {
        getEveryDiv.style.backgroundColor = 'blue';

    } else
    if (colores == "green") {
        getEveryDiv.style.backgroundColor = 'green';

    } else
        getEveryDiv.style.backgroundColor = 'white';

}

// Position for insertion ,must be after the whole DOM it's ready...

//Single Element

//var myElement = document.querySelector("#superman");

//myElement.style.backgroundColor = "#D93600";


//Multiple elements


var myElements = document.querySelectorAll(".tit");

for (var i = 0; i < myElements.length; i++) {
    myElements[i].style.color = "yellow";




}
// Adding a class Value
var bod = document.querySelector('#superman');
bod.classList.add('addbod');

//Removing a class value

/*var bod = document.querySelector('#superman');
bod.classList.remmove('addbod');*/