document.addEventListener("DOMContentLoaded", function(e) {
  console.log("DOM fully loaded and parsed");
  load();
  });
function load(){
  mostrar("hidden");
  var botonAlert =document.getElementById("alert");
  console.log(botonAlert);
  botonAlert.addEventListener("click", function(e) {
    alert("alert");
  });
}

function mostrar(id){
  let selector = document.getElementById(id);
  console.log(selector);
  selector.style.display="block";
}
