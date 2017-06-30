/// reference path="car.ts"/>
namespace parcial{
    export class Controladora{

        public static addCar():void{
            let brand :string = (<HTMLInputElement>document.getElementById("brand")).value;
            // let e = document.getElementById("color");
            let color :string = document.getElementById("color").value;
            let price :number = parseInt(document.getElementById("price").value);
            /*  defino mi lista de autos y la cargo con los datos guardados. */
            let list :Array<Car> = [];
            let loc = localStorage.getItem("cars");
            if(loc != null){
                list = JSON.parse( loc );
            }
            /*  agrego el auto a la lista. */
            let car :Car = new Car(brand, color, price);
            list.push(car);
            // console.log(list);
            /*  guardo el array en localStorage. */
            localStorage.setItem('cars', JSON.stringify(list));
        }
        public static cleanForm():void{}
        public static showCars():void{
            let tbody = document.getElementById("cars_tbody");
            console.log(tbody);
            let list :Array<Car> = [];
            let loc = localStorage.getItem("cars");
            if(loc != null){
                list = JSON.parse( loc );
            }
            let arrButtons = list.map(Controladora.createRows);
            for (let i = 0; i < arrButtons.length; i++) {
                tbody.innerHTML += arrButtons[i];
            }
        }

        public static removeCar(index :number):void{
            /*  defino mi lista de autos y la cargo con los datos guardados. */
            let list :Array<Car> = [];
            let loc = localStorage.getItem("cars");
            if(loc != null){
                list = JSON.parse( loc );
            }
            /*  elimino el auto en el index de la lista. */
            list.splice(index, 1);
            console.log(list);
            /*  guardo el array en localStorage. */
            localStorage.setItem('cars', JSON.stringify(list));
        }
        public static filterCarFromColor():void{}
        public static modifyCar():void{

        }
        private static createRows(car :Car, index:number ): string{
            let carJsonStr = car.toJson();
            let newCar = JSON.parse(carJsonStr);
            let buttons = "<button onclick='removeCar(" + index + ")'>Delete</button>";
            buttons += "<button onclick='modifyCar(" + index + ")'>Modify</button>";
            let row = "<td>" + newCar.brand + "<td>";
            row += "<td>" + newCar.price + "<td>";
            row += "<td>" + newCar.color + "<td>";
            row += "<td>" + buttons + "<td>";

            return buttons;
        }
    }
}
