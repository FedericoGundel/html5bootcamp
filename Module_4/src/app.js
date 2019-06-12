
let miStorage = window.localStorage;

let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

//Probando websocket

let connect = new WebSocket("ws://echo.websocket.org");

    connect.onopen = () => {
        connect.send("success");
	};

	connect.onerror =  (error) => {
	  console.log("WebSocket Error" + error);
	};

	connect.onmessage = (e) => {
	  console.log("Server: " + e.data);
	};






window.onload = () =>{
    let db = null;
    StartDB();

    document.getElementById("save").addEventListener("click",save);
    document.getElementById("errase").addEventListener("click",errase);

    let text_area = document.getElementById("text");
    let items = document.getElementsByClassName("item");
    let items_container = document.getElementById("items-container");

    text_area.addEventListener("dragover", dragSobreContainer);
    text_area.addEventListener("dragleave", dragSalioContainer);
    text_area.addEventListener("drop", drop);


    for(item of items){
        item.addEventListener("dragstart",dragIniciado); 
    }
}

function StartDB(){
    db = indexedDB.open("MyTestDatabase", 4);
    db.onupgradeneeded= (e) => {
        console.log("upgrade is called");
        let active = db.result
        store = active.createObjectStore("documents", {
             keyPath : "title",autoIncremet:true
        });
        store.createIndex('by_title', 'title', {
            unique: false
        });

    };

    db.onerror = (e) => {
    console.log("error loading database: ")
    };

    db.onsuccess = (e) => {
    console.log("data base opened");
    }

}

function save(){

    //almacen de datos con LocalStorage
    let obj = {
        title: document.getElementById("title").value,
        text: document.getElementById("text").value
        
    }
    miStorage.setItem("text",JSON.stringify(obj));
    console.log("texto almacenado:"+JSON.parse(miStorage.getItem("text")));

    //almacen de datos con IndexedDB

    let active = db.result;
    let data = active.transaction(["documents"], "readwrite");
    let store = data.objectStore("documents");

    let request = store.put({
        title: document.getElementById("title").value,
        text: document.getElementById("text").value
    });

    request.onerror = (e) => {
        console.log(request.error.name +" "+request.error.message);
    }

    data.oncomplete = (e) => {
        console.log("object succesfully saved");
    }

}
function errase(){

    //borrando dato usando LocalStorage

    localStorage.removeItem("text");

    //borrando dato usando IndexedDB

    let active = db.result;
    let data = active.transaction(["documents"], "readwrite");
    let store = data.objectStore("documents");
    let title = document.getElementById("title").value;
    let request = store.delete(title);

    data.oncomplete = (e) => {
        console.log('Transaction not opened due to error: ' + data.error);
    }
    request.onerror = (e) => {
        console.log(request.error.name +" "+request.error.message);
    }

}

function dragIniciado(e){
    let clon = this.cloneNode(true);
    e.dataTransfer.setData("text", clon.innerHTML)
}

function drop(e){
    e.preventDefault();
    let dato = e.dataTransfer.getData("text");
    this.innerHTML=dato
}

function dragSobreContainer(e){
    e.preventDefault();
    this.classList.add("over");
    return false;
}

function dragSalioContainer(e){
    e.preventDefault();
    this.classList.remove("over");
}

let object = {
    data:[
        {
            fav:true,
            text:"afsd"
        },
        {
            fav:true,
            text:"ashd"
        },
        {
            fav:true,
            text:"askd"
        }
    ],
    arr:[1,2,3]
}
const data2 = function(id) {return object.data.map((o)=>{
    if(o===object.data[id]){
        return {...o,fav:!object.data[id].fav}
    }
    else return o
})}

let obj = {...object,
        arr:object.arr,
        data:data2(1)
}


    /*object.data.map((item) =>{
    if (item.id ===1){
        return {...object.item, fav: !item.fav}
    }})*/
        
        
    console.log(object)
    console.log(obj)
    console.log(data2(1))
    