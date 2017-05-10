console.log("loaded");

function log(){
    // tomo las variables con jQuery..
    var user = $('#usuario').val();
    var pass = $('#pass').val();

    // console.log( user + ": " + pass);

    //si se ejecuta el archivo index.html haciendo doble click desde el archivo
    //en el escritorio.
    //El json puede tener las propiedades con o sin comillas: {"usuario": user, "pass": pass}
    //una forma de usar el $.post
    var params = { usuario: user, pass: pass };
    var url = "/utn/laboratorio3/loginSystemPropio/php_mvc_framework_propio/public/home/verify/";

    var callback = function( data ){
        // console.log(data);
        // console.log("listo");

        // $('#usuario').val( data );
        // console.log(data);

        var objData = JSON.parse(data);
        console.log(objData);
        if( objData.loged_in ){
            window.location.replace("/utn/laboratorio3/loginSystemPropio/php_mvc_framework_propio/public/home/confidency/");
        }
    };
    $.post(url, params, callback);
}
