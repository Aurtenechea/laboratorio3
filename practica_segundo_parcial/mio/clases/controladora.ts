/// reference path="car.ts"/>
/// reference path="lib.ts"/>

namespace parcial{
    export class Controladora{
        public static addCar():void{
            /* tomo los valores. */
            let brand :string = $("brand").value;
            let color :string = $("color").value;
            let price :number = parseInt($("price").value);
            let index :string = $("hdnCar_id").value;
            /*  defino mi lista de autos y la cargo con los datos guardados. */
            let list :Array<Car>;
            let read = localStorage.getItem("cars");
            list = (read == null) ? [] : JSON.parse(read);
            /*  para modificar antes eliminar el auto especifico
                para luego crearlo.*/
            if(index !== ""){
                let i:number = Number(index);
                list.splice(i,1);
                localStorage.clear();
            }
            /*  agrego el auto a la lista. */
            let car :Car = new Car(brand, color, price);
            list.push(car);
            /*  guardo el array en localStorage. */
            localStorage.setItem('cars', JSON.stringify(list));
            Controladora.cleanForm();
            Controladora.showCars();
        }
        public static cleanForm():void{
            $("brand").value = "";
            $("color").value = "Rojo";
            $("price").value = "";
            $("hdnCar_id").value = "";
        }
        public static showCars():void{
            let tbody = $("cars_tbody");
            tbody.innerHTML = "";
            /*  defino mi lista de autos y la cargo con los datos guardados. */
            let list :Array<Car>;
            let read = localStorage.getItem("cars");
            list = (read == null) ? [] : JSON.parse(read);
            /*  le paso cada auto a la funcion create rows.
                map devuelve un array de todos los resultados. */
            let rows = list.map(Controladora.createRowsWithBtns);
            for (let i = 0; i < rows.length; i++) {
                tbody.innerHTML += rows[i];
            }
        }
        public static filterCarFromColor():void{
            let tbody = $("cars_tbody");
            tbody.innerHTML = "";
            /*  defino mi lista de autos y la cargo con los datos guardados. */
            let list :Array<Car>;
            let read = localStorage.getItem("cars");
            list = (read == null) ? [] : JSON.parse(read);

            let color = $("color").value
            let filteredList = list.filter( function(car){
                return car.color == color;
            });

            let rows = filteredList.map(Controladora.createRowsWithoutBtns);
            for (let i = 0; i < rows.length; i++) {
                tbody.innerHTML += rows[i];
            }
        }
        public static modifyCar(car_id :number){
            /*  defino mi lista de autos y la cargo con los datos guardados. */
            let list :Array<Car>;
            let read = localStorage.getItem("cars");
            list = (read == null) ? [] : JSON.parse(read);
            Controladora.cleanForm();
            /*  seteo los valores del para ser modificados. (y cargo el indice).*/
            $("brand").value = list[car_id].brand;
            $("color").value = list[car_id].color;
            $("price").value = String(list[car_id].price);
            $("hdnCar_id").value = String(car_id);
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
            /*  guardo el array en localStorage. */
            localStorage.setItem('cars', JSON.stringify(list));
            Controladora.showCars();
        }
        private static createRowsWithBtns(car :Car, index:number): string{
            // let carJsonStr :string = car.toJson();
            let carJsonStr :string = JSON.stringify(car);
            let newCar = JSON.parse(carJsonStr);
            let row :string;
            row = "<tr>";
                row += "<td>" + newCar.brand + "<td>";
                row += "<td>" + newCar.price + "<td>";
                row += "<td>" + newCar.color + "<td>";
                row += "<td>";
                    row += "<button onclick='parcial.Controladora.removeCar(" + index + ")'>Delete</button>";
                    row += "<button onclick='parcial.Controladora.modifyCar(" + index + ")'>Modify</button>";
                row += "<td>";
            row += "</tr>";
            return row;
        }
        private static createRowsWithoutBtns(car :Car, index:number): string{
            // let carJsonStr :string = car.toJson();
            let carJsonStr :string = JSON.stringify(car);
            let newCar = JSON.parse(carJsonStr);
            let row :string;
            row = "<tr>";
                row += "<td>" + newCar.brand + "</td>";
                row += "<td>" + newCar.price + "</td>";
                row += "<td>" + newCar.color + "</td>";
                row += "<td>";
                row += "<td/>";
            row += "</tr>";
            return row;
        }
    }
}
