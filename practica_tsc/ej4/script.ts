declare var $ :any;

class oso{
    edad :number = 10;

    public static f(){
            var url = "http://localhost/utn/tp_final_programacionIII/src/public/employee"
            var parkCarAjax = $.ajax(
                {
                    type: 'GET',
                    url: url,
                }
            );
            var callbackSucces = function( data :string ){
                    console.log(data);
            };
            function callbackError(error){
                console.log("error: " + error);
            }
            parkCarAjax.then(callbackSucces, callbackError);
    }
}

console.log('loaded');

oso.f();
