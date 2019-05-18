document.addEventListener("DOMContentLoaded", (e)=> {
  console.log("DOM fully loaded and parsed");
  load();
});
function load(){
  mostrar();
  var botonInsert = document.getElementById("insert");
  botonInsert.addEventListener("click", ()=>{
    var miInit = { "method": 'GET',
                   "headers": {
              			'Content-Type': 'application/json'
              		 },
                   "mode": 'cors',
                   "cache": 'default'};
    let url = "http://api.icndb.com/jokes/random";
    insertarData(url,miInit);
  });
  console.log("bien");
  }


function insertarData(url,miInit) {
  fetch(url,{ "method": miInit.method,
              "headers": miInit.headers[0],
              "mode": miInit.mode,
              "cache": miInit.cache
  }).then((response)=>{
    response.json().then((json)=>{
      msj = json.value.joke;
      let selector = document.getElementById("hidden");
      selector.innerHTML = "<p>"+msj+"</p>";
      console.log("html reemplazado");
    }).catch((error)=>{
      console.log("error");
      let selector = document.getElementById("hidden");
      selector.classList.add("colorRed");
      })
  });




}


function mostrar(){
  let selector = document.getElementById("hidden");
  selector.classList.remove("hide");
}
