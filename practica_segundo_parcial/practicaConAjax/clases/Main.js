/// <reference path="Ajax.ts"/>
/// <reference path="lib.ts"/>
var main;
(function (main) {
    var ax = new Ajax();
    function $(idElement) { return document.getElementById(idElement); }
    main.$ = $;
    ;
    function onclick() {
        var url = "http://localhost/utn/tp_final_programacionIII/src/public/price";
        // var cars = ["Saab", "Volvo", "BMW"];
        var json = { "hour": "uno", "day": 2, "half_day": 3 };
        // var json = JSON.stringify(cars);
        var kayValue = serialize(json);
        //  kayValue = JSON.stringify(json);
        // kayValue = encodeURIComponent(kayValue);
        console.log(kayValue);
        // var kayValue = "hour=1&day=2&half_day=3";
        // ax.post(url, exito, kayValue);
    }
    main.onclick = onclick;
    function exito(res) {
        console.log(res);
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
    // let t : Test = new Test("algo");
    onclick();
})(main || (main = {}));
