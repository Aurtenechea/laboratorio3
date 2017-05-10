<html>
    <head>
        <!-- jQuery -->
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"
            integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
            crossorigin="anonymous">
        </script>
        <!-- bootstrap -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        <!-- js -->
        <script src="http://localhost/utn/laboratorio3/loginSystemPropio/php_mvc_framework_propio/app/views/js/login.js"></script>

    </head>
    <body>
        <label for="user">User..</label><br>
        <input type="text" id="usuario">
        <br><br>
        <label for="pass">Numero dos:</label><br>
        <input type="password" id="pass">
        <br><br>
        <button onclick="log()">Log</button>
        <label id="result"></label><br>

    </body>
<footer>

<!-- <script>
console.log("loaded");
console.log(window.location);

function log(){
    // tomo las variables con jQuery..
    var user = $('#usuario').val();
    var pass = $('#pass').val();

    console.log(user + ": " + pass);

    //si se ejecuta el archivo index.html haciendo doble click desde el archivo
    //en el escritorio.
    //El json puede tener las propiedades con o sin comillas: {"usuario": user, "pass": pass}
    //una forma de usar el $.post
    var params = { usuario: user, pass: pass };
    var url = "/utn/laboratorio3/loginSystemPropio/php_mvc_framework_propio/public/home/verify";
    var callback = function( data ){
        console.log(Data);
        objData = JSON.parse(data);
        console.log(objData);
        if(objData.loged_in){
            window.location.replace("/utn/laboratorio3/loginSystemPropio/php_mvc_framework_propio/public/home/confidency/");
        }
    };
    $.post(url, params, callback);
}
</script> -->
</footer>

</html>
