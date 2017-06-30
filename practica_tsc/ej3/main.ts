/// <reference path="ajax.ts"/>


module main{

    let ax :Ajax = new Ajax();
    export function $(idElement:string):any{ return  document.getElementById(idElement);};


    export function onclick(){
        //alert(ax.mensaje);

        //ax.get("http://localhost/utn/laboratorio3/clasetypescript2/clase08/LaboIII/bakcend.php", exito, "p=hola");
        // ax.post("http://localhost/utn/laboratorio3/clasetypescript2/clase08/LaboIII/bakcend.php",exito, "p=hola&p1=chau");
        // var json = {p:"hola", p1:"chau"}
        ax.post("http://localhost/utn/laboratorio3/clasetypescript2/clase08/LaboIII/bakcend.php",exito);
    }

    function exito(res){

        alert(res);

    }

    export class Test{

        public constructor(algo : string){
            alert(algo);
        }
        public static Click(){
            alert("desde clase...");
        }

    }

    let t : Test = new Test("algo");
}
