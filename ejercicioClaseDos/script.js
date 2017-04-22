window.onload = function(){
    var nUno;
    var nDos;
    var nUnoInt;
    var nDosInt;
    var resultInt;
    $("nUno").focus();

    function refresh(){
        nUno = $("nUno");
        nDos = ("nDos");
        result = $("result");
        nUnoInt = parseInt(nUno.value);
        nDosInt = parseInt(nDos.value);
        resultInt = nUnoInt+nDosInt;
    }
    function mostrar( text ){
        alert(text);
    }
    $("sumar").onclick = function Sumar (){
        refresh();
        console.log(resultInt);
        result.innerHTML = resultInt;
    }

    $("sumarYGuardar").onclick = function(){
            refresh();
            var intResult = nUnoInt +parseInt(nUno.value);
            table = $("myTable");
            //table.innerHTML += "<tr><td>" + nUnoInt + "</td><td>"+nDosInt+"</td><td>"+resultInt+"</td></tr>"
            var row = table.insertRow(table.rows.length);
            row.insertCell(0).innerHTML = nUnoInt;
            row.insertCell(1).innerHTML = nDosInt;
            row.insertCell(2).innerHTML = resultInt;
    };
    function $(text){
        return document.getElementById(text);
    }
    function $$(text){
        return $(text).value;
    }  
    $("nUno").onblur = function(){
        if($$("nUno") == "")
            $("nUno").focus();
    };
}

/*  //pide y muestra un dato
    var nombre = prompt("ingrese nombre", "Usuario");
    alert("Su nombre es: " +  nombre);  */
