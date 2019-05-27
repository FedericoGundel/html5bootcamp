//almacen de datos con LocalStorage
let miStorage = window.localStorage;

document.getElementById("save").addEventListener("click",saveDocument);

function saveDocument(){
    let text=  document.getElementById("document").value;
    miStorage.setItem("text",text);
    console.log("texto almacenado:"+miStorage.getItem("text"));
}

//almacen de datos con IndexedDB
let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;


window.onload = () =>{
    let db = null;
    StartDB();
    document.getElementById("save").addEventListener("click",save);
} 
function StartDB(){
    db = indexedDB.open("MyTestDatabase", 4);
    db.onupgradeneeded= (e) => {
        console.log("upgrade is called");
        let active = db.result
        store = active.createObjectStore("documents", {
             keyPath : "id",autoIncremet:true
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
    let active = db.result;
    let data = active.transaction(["documents"], "readwrite");
    let store = data.objectStore("documents");

    let request = store.put({
        id:0,
        title: document.getElementById("document").value
    });

    request.onerror = (e) => {
        console.log(request.error.name +" "+request.error.message);
    }

    data.oncomplete = (e) => {
        console.log("object succesfully saved");
    }
   
}

