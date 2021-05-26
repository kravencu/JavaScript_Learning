document.getElementById('reload').onclick = function(event) {
    document.getElementById('sampDiv1').style.color = "#0645ad"



};

var pElements = document.getElementsByTagName('h1');
pElements[1].style.backgroundColor = "blue";

var a = document.getElementsByTagName('p');

a[3].style.color = "red";

var titulo = document.getElementsByClassName('tit');
titulo[1].style.color = "red";

// Position for insertion ,must be after the whole DOM it's ready...

//Using the conditional switch intead if elseif
//

/*document.getElementById("#onee").onclick =
    function colorin(colores) {

        var getEveryDiv = document.getElementById("alldiv");

        switch (colores) {
            case "red":
                getEveryDiv.style.backgroundColor = 'red';
                break;
            case "blue":
                getEveryDiv.style.backgroundColor = 'blue';
                break;
            case "green":
                getEveryDiv.style.backgroundColor = 'green';
                break;
            default:
                getEveryDiv.style.backgroundColor = 'black';

        }
    };
/*Using conditional if elseif
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

}*/


// Position for insertion ,must be after the whole DOM it's ready...

//Single Element

//var myElement = document.querySelector("#superman");

//myElement.style.backgroundColor = "#D93600";


//Multiple elements


var myElements = document.querySelectorAll(".tit");

for (var i = 0; i < myElements.length; i++) {
    myElements[i].style.color = "yellow";




}
// Adding a class Value from an external CSS file. ex. css.css
var bod = document.querySelector('#superman');
bod.classList.add('addbod');

//Removing a class value

/*var bod = document.querySelector('#superman');
bod.classList.remmove('addbod');*/

//setInterval (param,mls)
//setTimeout  (param,mls)
function coming() {
    var timeline = setInterval(function() {
            document.write("Jesus is Coming");
        },
        4000)
};