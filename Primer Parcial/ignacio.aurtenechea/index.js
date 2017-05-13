window.onload = function(){
    var user = localStorage.getItem("usuario");
    var color = localStorage.getItem("color");
    var font = localStorage.getItem("font");

    /*  recupero los datos */
    $('#usuario').val(user);
    $('#color').val(color);
    $('#font').val(font);

    // console.log(user);
    // localStorage.clear();
}


function enviarPost(){
    // $('#postenviado').removeClass("invisible");

    // tomo las variables con jQuery..
    var posttitle = $('#posttitle').val();
    var postheader = $('#postheader').val();
    var posttext = $('#posttext').val();
    var user = localStorage.getItem("usuario");

    var ar=  {
            'title': posttitle,
            'header': postheader,
            'posttext': posttext,
            'author': user
        };

    // console.log("ar: " , ar);

    var funcionAJAX = $.ajax(
        {
            type: 'POST',
            url: 'http://localhost:1337/postearNuevaEntrada',
            data:JSON.stringify(ar)
        }
    );

    $('#cargando').removeClass("hidden");

    funcionAJAX.then( ajaxSuccess, ajaxError ); // params: donecallbak, fail callback

    function ajaxSuccess(dato){
        // console.info("ajaxSuccess: " , dato);
        $('#postenviado').html(
             $('#postenviado').html() +
            '<div id="" class=""><h1>ESTE ES MI POST!</h1>'+
            '<p><b>post title:</b> ' + dato.title + '</p>'+
            '<p><b> post header</b> ' + dato.header + '</p>'+
            '<p><b> post text</b> ' + dato.posttext + '</p>'+
            '<p><b> post author</b> ' +  dato.author + '</p>'+
            '<p><b> post date</b> ' + dato.date + '</p></br></br></div>'
        );

        $('#cargando').addClass("hidden");
        $('#postenviado').removeClass("hidden");
        // $('#miPost').removeClass("invisible");

    }
    function ajaxError(error){
        console.log("ajaxError: " , error);
    }
}

function mostrarCrearPost(){
    $('#crearpost').removeClass("invisible");
        // console.log("ajaxError: " , error);
}
