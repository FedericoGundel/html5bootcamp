var myArr = new Array();
myArr[0] = new Array("", "lunes","martes","miercoles");
myArr[1] = new Array("math", 3,4,2);
myArr[2] = new Array("geography",3,5,1);

createTable(myArr)


function createTable(myArr){
    let table = document.createElement("table");
document.body.appendChild(table);
let tr = document.createElement("tr");
table.appendChild(tr)
for (a of myArr[0]){
    let th = document.createElement("th");
    tr.appendChild(th);
    th.innerHTML=a;
}

for(let i = 1;i<myArr.length;i++){
    tr = document.createElement("tr");
    table.appendChild(tr)
    for(a of myArr[i]){
        let td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML=a;
    }
}
}