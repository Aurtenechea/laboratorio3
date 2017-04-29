
    function $(text){
        return document.getElementById(text);
    }
    function $$(text){
        return $(text).value;
    }
    var hrequest;
    function startAjax(){
        hrequest = new XMLHttpRequest();
        hrequest.open("GET","respuesta.txt",true);
        console.log(hrequest);
        hrequest.send(null); //enviar la peticion
        hrequest.onreadystatechange = callback;
    }
        function startAjaxPHP_GET(){
        hrequest = new XMLHttpRequest();
        hrequest.open("GET","ajaxFile.php?valor=sarasa",false);
        //console.log(hrequest);
        hrequest.send(null); //enviar la peticion
        hrequest.onreadystatechange = callback;
    }
    function startAjaxPHP_POST(){
        hrequest = new XMLHttpRequest();

        hrequest.open("POST","ajaxFile.php",true);
        hrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //console.log(hrequest);
        hrequest.send("valor=wee"); //enviar la peticion
        hrequest.onreadystatechange = callback;
    }
    function callback(){
        //hacer cuando obtengamos respuesta de la peticion.
        if (hrequest.readyState == 4 && hrequest.status == 200){
            //console.log(hrequest.responseText);
            console.log(hrequest);
            $("ajax").value += hrequest.responseText;
        }
    }


/*  //pide y muestra un dato
    var nombre = prompt("ingrese nombre", "Usuario");
    alert("Su nombre es: " +  nombre);  */
