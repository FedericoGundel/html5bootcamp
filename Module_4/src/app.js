
let miStorage = window.localStorage;

let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

window.onload = () =>{
    let db = null;
    StartDB();
    document.getElementById("save").addEventListener("click",save);
    document.getElementById("errase").addEventListener("click",errase);
}
function StartDB(){
    db = indexedDB.open("MyTestDatabase", 4);
    db.onupgradeneeded= (e) => {
        console.log("upgrade is called");
        let active = db.result
        store = active.createObjectStore("documents", {
             keyPath : "id",autoIncremet:true
        });
        store.createIndex('by_id', 'id', {
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

    let text=  document.getElementById("document").value;
    miStorage.setItem("text",text);
    console.log("texto almacenado:"+miStorage.getItem("text"));

    //almacen de datos con IndexedDB

    let active = db.result;
    let data = active.transaction(["documents"], "readwrite");
    let store = data.objectStore("documents");

    let request = store.put({
        id:1,
        text: document.getElementById("document").value
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
    let request = store.delete(1);

    data.oncomplete = (event) => {
        console.log('Transaction not opened due to error: ' + data.error);
    }
    request.onerror = (e) => {
        console.log(request.error.name +" "+request.error.message);
    }

}
