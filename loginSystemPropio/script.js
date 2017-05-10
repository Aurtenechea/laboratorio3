
function log(){
    // tomo las variables con jQuery..
    var user = $('#usuario').val();
    var pass = $('#pass').val();

    // console.log(user + ": " + pass);

    //si se ejecuta el archivo index.html haciendo doble click desde el archivo
    //en el escritorio.
    //El json puede tener las propiedades con o sin comillas: {"usuario": user, "pass": pass}
    //una forma de usar el $.post
    var params = { usuario: user, pass: pass };
    var url = "validate.php";
    var callback = function( data ){
        objData = JSON.parse(data);
        console.log(objData);
        if(objData.loged_in){
            window.location.replace("sitio_para_usuarios.php");
        }
    };
    $.post(url, params, callback);




    //otra forma de usar el $.post
    // var retorno = $.post("validate.php", { usuario: user, pass: pass });
    // retorno.done(
    //     function(data){
    //     $( "#result" ).css( {"display":"block"} );
    //     $( "#result" ).val( data );
    //     console.log(window.location);
    //
    //     localStorage.setItem("usuario", user);
    //     window.location.replace("ingreso.html");
    // });


    /*
    el $.get y el $.post permite pasar los parametros como un json en lugar de pasarlo
    como tipo clave valor (como url) ya sea que se envie por post o por get.
    el objeto ajax no permite eso.
    El objeto ajax no permite pasar parametros por json.
    */


}
