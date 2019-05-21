document.addEventListener("DOMContentLoaded", (e)=> {
  console.log("DOM fully loaded and parsed");
  load();
});
function load(){
  mostrar();
  let botonSearch = document.getElementById("search");
  botonSearch.addEventListener("click",()=>{
    let name = document.getElementById("name").value;
    fetchRepos(name);
  });
  let botonInsert = document.getElementById("insert");
  botonInsert.addEventListener("click", ()=>{
    let miInit = { "method": 'GET',
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
function fetchRepos(name){
  fetch("https://api.github.com/search/repositories?q='"+name+"'",{
          "method": 'GET',
          "headers": {
            'Content-Type': 'application/json'
          },
          "mode": 'cors',
          "cache": 'default'
  })
  .then((response)=>{
    response.json()
  })
  .then((repoJson)=>{
    let selec = document.getElementById("RepoList");
    let list;
    list="<h2>Repositorios que coinciden con ese nombre:</h2><ul>";
    for(repo of repoJson.items){
      list+="<li>"+repo.full_name+"</li>";
    }
    list+="</ul>";
    selec.innerHTML = list;
  })
          
}

function mostrar(){
  let selector = document.getElementById("hidden");
  selector.classList.remove("hide");
}
