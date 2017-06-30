/// <reference path="Ajax.ts"/>
/// <reference path="lib.ts"/>

module main{
    let ax :Ajax = new Ajax();
    export function $(idElement:string):any{ return  document.getElementById(idElement);};
    export function onclick(){
        let url :string = "http://localhost/utn/tp_final_programacionIII/src/public/price"
        // var cars = ["Saab", "Volvo", "BMW"];
        var json = {"hour": "uno","day":2,"half_day":3};
        // var json = JSON.stringify(cars);
        var kayValue = serialize(json);
        //  kayValue = JSON.stringify(json);
        // kayValue = encodeURIComponent(kayValue);
        console.log(kayValue);
        // var kayValue = "hour=1&day=2&half_day=3";
        // ax.post(url, exito, kayValue);
    }
    function exito(res){
        console.log(res);
    }
    export class Test{
        public constructor(algo : string){
            alert(algo);
        }
        public static Click(){
            alert("desde clase...");
        }
    }
    // let t : Test = new Test("algo");
    onclick();
}
