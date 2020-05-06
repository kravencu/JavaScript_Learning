var time = setInterval(
function bar () {
  var elem = document.getElementById("box");   
  var width = 1;
  var id = setInterval(frame,100);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
  
}
,1000);


/*var a = confirm ("Necesitas Ayuda ?");
if (a) {
  window.location="html5.html"
}*/