/// reference path="car.ts"/>
/// reference path="lib.ts"/>
var parcial;
(function (parcial) {
    var Controladora = (function () {
        function Controladora() {
        }
        Controladora.addCar = function () {
            /* tomo los valores. */
            var brand = $("brand").value;
            var color = $("color").value;
            var price = parseInt($("price").value);
            var index = $("hdnCar_id").value;
            /*  defino mi lista de autos y la cargo con los datos guardados. */
            var list;
            var read = localStorage.getItem("cars");
            list = (read == null) ? [] : JSON.parse(read);
            /*  para modificar antes eliminar el auto especifico
                para luego crearlo.*/
            if (index !== "") {
                var i = Number(index);
                list.splice(i, 1);
                localStorage.clear();
            }
            /*  agrego el auto a la lista. */
            var car = new parcial.Car(brand, color, price);
            list.push(car);
            /*  guardo el array en localStorage. */
            localStorage.setItem('cars', JSON.stringify(list));
            Controladora.cleanForm();
            Controladora.showCars();
        };
        Controladora.cleanForm = function () {
            $("brand").value = "";
            $("color").value = "Rojo";
            $("price").value = "";
            $("hdnCar_id").value = "";
        };
        Controladora.showCars = function () {
            var tbody = $("cars_tbody");
            tbody.innerHTML = "";
            /*  defino mi lista de autos y la cargo con los datos guardados. */
            var list;
            var read = localStorage.getItem("cars");
            list = (read == null) ? [] : JSON.parse(read);
            /*  le paso cada auto a la funcion create rows.
                map devuelve un array de todos los resultados. */
            var rows = list.map(Controladora.createRowsWithBtns);
            for (var i = 0; i < rows.length; i++) {
                tbody.innerHTML += rows[i];
            }
        };
        Controladora.filterCarFromColor = function () {
            var tbody = $("cars_tbody");
            tbody.innerHTML = "";
            /*  defino mi lista de autos y la cargo con los datos guardados. */
            var list;
            var read = localStorage.getItem("cars");
            list = (read == null) ? [] : JSON.parse(read);
            var color = $("color").value;
            var filteredList = list.filter(function (car) {
                return car.color == color;
            });
            var rows = filteredList.map(Controladora.createRowsWithoutBtns);
            for (var i = 0; i < rows.length; i++) {
                tbody.innerHTML += rows[i];
            }
        };
        Controladora.modifyCar = function (car_id) {
            /*  defino mi lista de autos y la cargo con los datos guardados. */
            var list;
            var read = localStorage.getItem("cars");
            list = (read == null) ? [] : JSON.parse(read);
            Controladora.cleanForm();
            /*  seteo los valores del para ser modificados. (y cargo el indice).*/
            $("brand").value = list[car_id].brand;
            $("color").value = list[car_id].color;
            $("price").value = String(list[car_id].price);
            $("hdnCar_id").value = String(car_id);
        };
        Controladora.removeCar = function (index) {
            /*  defino mi lista de autos y la cargo con los datos guardados. */
            var list = [];
            var loc = localStorage.getItem("cars");
            if (loc != null) {
                list = JSON.parse(loc);
            }
            /*  elimino el auto en el index de la lista. */
            list.splice(index, 1);
            /*  guardo el array en localStorage. */
            localStorage.setItem('cars', JSON.stringify(list));
            Controladora.showCars();
        };
        Controladora.createRowsWithBtns = function (car, index) {
            // let carJsonStr :string = car.toJson();
            var carJsonStr = JSON.stringify(car);
            var newCar = JSON.parse(carJsonStr);
            var row;
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
        };
        Controladora.createRowsWithoutBtns = function (car, index) {
            // let carJsonStr :string = car.toJson();
            var carJsonStr = JSON.stringify(car);
            var newCar = JSON.parse(carJsonStr);
            var row;
            row = "<tr>";
            row += "<td>" + newCar.brand + "</td>";
            row += "<td>" + newCar.price + "</td>";
            row += "<td>" + newCar.color + "</td>";
            row += "<td>";
            row += "<td/>";
            row += "</tr>";
            return row;
        };
        return Controladora;
    }());
    parcial.Controladora = Controladora;
})(parcial || (parcial = {}));
