//###########################DOMMMMMMMMMMMM########################################

document.getElementById("reload").onclick = function(_event) {
    document.getElementById("sampDiv1").style.color = "#0645ad";
};

var pElements = document.getElementsByTagName("h1");
pElements[2].style.backgroundColor = "blue";

var a = document.getElementsByTagName("p")[4];
a.style.color = "red";

var aa = document.getElementsByTagName("p")[0];

aa.innerHTML += "<font color = 'red'>This is the new context</font>";

var titulo = document.getElementsByClassName("tit");
titulo[1].style.color = "red";

var chan = document.getElementsByClassName("tit")[2];

chan.className = chan.className.replace("tit", "tit2");

var sss = document.querySelector(".tit2");
sss.style.color = "#D45678";

//Single Elemen

var ok = document.querySelectorAll("p")[1];
ok.style.color = "#D99856";

var par = document.querySelector(".ulti p");
par.style.color = "red";

var lis = document.querySelector("p[class ='yes']"); // Eye with the white space
lis.style.color = "yellow";

//var myElement = document.querySelector("#superman");
//myElement.style.backgroundColor = "#D93600";

//Multiple elements

var myElements = document.querySelectorAll(".tit");
for (var i = 0; i < myElements.length; i++) {
    myElements[i].style.color = "yellow";
}


// Adding a class Value from an external CSS file. ex. css.css
var bod = document.querySelector("#superman");
bod.classList.add("addbod");

//Removing a class value

/*var bod = document.querySelector('#superman');
bod.classList.remmove('addbod');*/

// Position for insertion ,must be after the whole DOM it's ready...

//Using the conditional switch intead if elseif
//

//document.getElementById("#onee").onclick =
function colorin(colores) {
    var getEveryDiv = document.getElementById("alldiv");
    // colores = document.getElementsByName(name);

    switch (colores) {
        case "red":
            getEveryDiv.style.backgroundColor = "red";
            break;
        case "blue":
            getEveryDiv.style.backgroundColor = "blue";
            break;
        case "green":
            getEveryDiv.style.backgroundColor = "green";
            break;
        default:
            getEveryDiv.style.backgroundColor = "black";
    }
}
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

//setInterval (param,mls)
//setTimeout  (param,mls)
function coming() {
    var timeline = setInterval(function() {
        document.write("Jesus is Coming");
    }, 4000);
}
/*
var msj = prompt("Do you need help");
var yes = "yes";

if (msj == yes) {
    window.location = "html.html"
} else

{
    window.location = "DOMani.html"
}*/

var week = ["monday", "tuesday", "wensday"];
for (let one of week) {
    document.write(one + "<br>");
}

//addind a  handlers event to elements...

// working
var txt = document.getElementById("text");
txt.onchange = function() {
    txt.value = txt.value.toUpperCase();
    alert("Usted ha salido del formulario");
}


// example from sololearn image slide
window.onload = function() {
    var images = ["http://www.sololearn.com/uploads/slider/1.jpg",
        "http://www.sololearn.com/uploads/slider/2.jpg",
        "http://www.sololearn.com/uploads/slider/3.jpg",

    ];

    var num = 0;

    var sslider = document.getElementById("next");
    sslider.addEventListener("click", next);

    function next() {
        var slider = document.getElementById("slider");
        num++;
        if (num >= images.length) {
            num = 0;
        }
        slider.src = images[num];
    }
};



//original 
function prev() {
    var slider = document.getElementById("slider");
    num--;

    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
};

// element with inside event handler not working
var slider = document.getElementById("slider");

slider.onclick = function() {
    num--;

    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
};

// get it even number

for (j = 0; j <= 20; j++) {
    if ((j % 2) === 0) {
        document.write(j + "<br>");
    }
}

// get in odds numbers
for (j = 0; j <= 20; j++) {
    if ((j % 2) === 0) {
        continue; // break the loop and return to the increment os the loop

    }
    document.write(j + "<br>");

}