document.addEventListener("DOMContentLoaded", function(e) {
  console.log("DOM fully loaded and parsed");
  load();
});
function load(){
  mostrar();
  var botonInsert = document.getElementById("insert");
  botonInsert.addEventListener("click", function(){
    var miInit = { "method": 'GET',
                   "headers": {
              			'Content-Type': 'application/json'
              		 },
                   "mode": 'cors',
                   "cache": 'default'};
    url = "http://api.icndb.com/jokes/random";
    insertarData(url,miInit);
  });
  console.log("bien");
  }


function insertarData(url,miInit) {
  try {
  fetch(url,{ "method": miInit.method,
                 "headers": miInit.headers[0],
                 "mode": miInit.mode,
                 "cache": miInit.cache }).then(function(response){
    response.json().then(function(json){
      msj = json.value.joke;
      let selector = document.getElementById("hidden");
      selector.innerHTML = "<p>"+msj+"</p>";
      console.log("html reemplazado");
    })
  });
  }catch (e) {
  console.log("pepe");
  let selector = document.getElementById("hidden");
  console.log("hola");
  selector.classList.add("colorRed");
  }
}


function mostrar(){
  let selector = document.getElementById("hidden");
  selector.classList.remove("hide");
}
