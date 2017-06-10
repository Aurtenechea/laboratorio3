/// <reference path="Ajax.ts"/>


module main{

    let ax :Ajax = new Ajax();
    export function $(idElement:string):any{ return  document.getElementById(idElement);};
    

    export function onclick(){
        //alert(ax.mensaje);

        //ax.get("http://localhost/LaboIII/bakcend.php", exito, "p=hola");
        ax.post("http://localhost/LaboIII/bakcend.php",exito, "p=hola&p1=chau");
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