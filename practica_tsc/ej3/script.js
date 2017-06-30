/// <reference path="ajax.ts"/>
function $(idElement) { return document.getElementById(idElement); }
;
var ax = new Ajax();
// var json = {p:"hola", p1:"chau"}
ax.get("http://localhost/utn/tp_final_programacionIII/src/public/employee", exito, "p=hola");
function exito(res) {
    // console.log(res);
    console.log("hola");
}
