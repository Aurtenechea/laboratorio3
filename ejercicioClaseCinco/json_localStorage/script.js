
function send(){
    // tomo las variables con jQuery..
    var user = $('#usuario').val();
    var pass = $('#pass').val();

    console.log(user + ": " + pass);

    //si se ejecuta el archivo index.html haciendo doble click desde el archivo
    //en el escritorio.
    //El json puede tener las propiedades con o sin comillas: {"usuario": user, "pass": pass}
    //una forma de usar el $.post
    // $.post("login.php", { usuario: user, pass: pass }, function(data){
    //     // $( "result" ).html( data );
    //     $( "#result" ).css( {"display":"block"} );
    //     $( "#result" ).val( data );
    // });



    //otra forma de usar el $.post
    var retorno = $.post("login.php", { usuario: user, pass: pass });
    retorno.done(
        function(data){
        // $( "result" ).html( data );
        $( "#result" ).css( {"display":"block"} );
        $( "#result" ).val( data );
        console.log(window.location);

        // setTimeout(function(){
        //     if(data == "OK"){
        //         window.location.replace("ingreso.html");
        //     }
        // }, 3000);

        localStorage.setItem("usuario", user);
        window.location.replace("ingreso.html");
    });


    /*
    el $.get y el $.post permite pasar los parametros como un json en lugar de pasarlo
    como tipo clave valor (como url) ya sea que se envie por post o por get.
    el objeto ajax no permite eso.
    El objeto ajax no permite pasar parametros por json.
    */


}
