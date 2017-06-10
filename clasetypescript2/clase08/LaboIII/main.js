/// <reference path="Ajax.ts"/>
var main;
(function (main) {
    var ax = new Ajax();
    function $(idElement) { return document.getElementById(idElement); }
    main.$ = $;
    ;
    function onclick() {
        //alert(ax.mensaje);
        //ax.get("http://localhost/LaboIII/bakcend.php", exito, "p=hola");
        ax.post("http://localhost/LaboIII/bakcend.php", exito, "p=hola&p1=chau");
    }
    main.onclick = onclick;
    function exito(res) {
        alert(res);
    }
    var Test = (function () {
        function Test(algo) {
            alert(algo);
        }
        Test.Click = function () {
            alert("desde clase...");
        };
        return Test;
    }());
    main.Test = Test;
    var t = new Test("algo");
})(main || (main = {}));
