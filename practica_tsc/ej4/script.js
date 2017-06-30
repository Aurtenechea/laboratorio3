var oso = (function () {
    function oso() {
        this.edad = 10;
    }
    oso.f = function () {
        var url = "http://localhost/utn/tp_final_programacionIII/src/public/employee";
        var parkCarAjax = $.ajax({
            type: 'GET',
            url: url
        });
        var callbackSucces = function (data) {
            console.log(data);
        };
        function callbackError(error) {
            console.log("error: " + error);
        }
        parkCarAjax.then(callbackSucces, callbackError);
    };
    return oso;
}());
console.log('loaded');
oso.f();
