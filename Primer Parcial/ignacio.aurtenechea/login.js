
function log(){
    var user = $('#usuario').val();
    var pass = $('#pass').val();

    var ar=  {'email': user, 'password': pass};
    // console.log("ar: " , ar);

    var funcionAJAX = $.ajax(
        {
            type: 'POST',
            url: 'http://localhost:1337/login',
            data:JSON.stringify(ar)
        }
    );
    funcionAJAX.then( ajaxSuccess, ajaxError ); // params: donecallbak, fail callback

    function ajaxSuccess(dato){
        // console.info("ajaxSuccess: " , dato);
        // console.info("color: ",dato.preferencias.color);

        if( dato.autenticado == "si" ){
            /*  Aca se podria guardar un identificador recibido por el servidor
                para asociar esta maquina a una sesion iniciada en el servidor.
                Asi podria permitirse o no el acceso a index.html si se quisiera
                acceder directamente desde la url. */
            localStorage.setItem("usuario", user);
            localStorage.setItem("color", dato.preferencias.color);
            localStorage.setItem("font", dato.preferencias.font);
            window.location.replace("index.html")
        }

    };
    function ajaxError(error){
        console.log("ajaxError: " , error);
    };
}
