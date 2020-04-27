//###################BOM & DOM####################//#endregion

//#####################################BOM####################

/*                               Window

             frames       history       location        navigator       screen     DOCUMENT(DOM)      

Best way to learn all property of each one is using "console log":
Ex:
var navi = window.navigator;
console.log(navi);

    

*/

//var navi = window.navigator.appVersion;
//console.log(navi);

//#########################################DOM######################################

//document.querySelector()
//document.querySelectorAll()

//document.getElement

/* What we can due with both is:
 
Access and change "Context"
Access and change "Property"(value, property inself, etc)
Access and change "CSS style sheet"

*/

//var geta = document.getElementsByTagName("h1")[1];

//geta.style.color = "red";


//var text = document.getElementById("sampDiv1");

//text.style.color = "red";

document.getElementById('reload').onclick = function(event) {
    document.getElementById('sampDiv1').style.color = "#EFDECD"

};


var pElements = document.getElementsByTagName('p');
pElements[1].style.backgroundColor = "blue";


// Position for insertion ,must be after the whole DOM it's ready...

//Single Element

/*var myElement = document.querySelector("#superman");

myElement.style.backgroundColor = "#D93600";


//Multiple elements


var myElements = document.querySelectorAll(".tit");

for (var i = 0; i < myElements.length; i++) {
    myElements.[i].style.opacity = 12;




}*/