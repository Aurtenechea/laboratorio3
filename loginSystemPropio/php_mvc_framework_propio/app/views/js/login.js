console.log("loaded");


/*  esta funcion toma los valores del login, los envia via con ajax por post a
    direccion que verificara si los datos de login son correctos. El sitio de
    verificacion retornara un objeto json en formato string. Este contiene
    el nombre del usuario y si esta logueado o no.  */
function log(){
    var user = $('#user').val();
    var pass = $('#pass').val();

    var params = { usuario: user, pass: pass };
    var url = "/utn/laboratorio3/loginSystemPropio/php_mvc_framework_propio/public/user/verify/";

    var callback = function( data ){
        var objData = JSON.parse(data);
        console.log(objData);
        if( objData.loged_in ){
            window.location.replace("/utn/laboratorio3/loginSystemPropio/php_mvc_framework_propio/public/home/confidency/");
        }
    };
    $.post(url, params, callback);
}
