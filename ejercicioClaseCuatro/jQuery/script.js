
    function $(text){
        return document.getElementById(text);
    }
    function $$(text){
        return $(text).value;
    }

    var hrequest;
    function send(){
        // tomo las variables
        var user = $('usuario').value;
        var pass = $('pass').value;
        var params="?"+"usuario="+user+"&"+"pass="+pass;

        //console.log(params);
        //request de AJAX
        hrequest = new XMLHttpRequest();
        hrequest.open("GET","login.php"+params, true);
        hrequest.onreadystatechange = callback;
        hrequest.send(null); //enviar la peticion
    }
    function callback(){
        //hacer cuando obtengamos respuesta de la peticion.
        if (hrequest.readyState == 4 && hrequest.status == 200){
            console.log(hrequest);
            $("result").value = hrequest.responseText;
            //no anda esta parte.
            $("result").css({"display": "block"});
        }
    }









/*  //pide y muestra un dato
    var nombre = prompt("ingrese nombre", "Usuario");
    alert("Su nombre es: " +  nombre);  */
