/// reference path="Car.ts"/>
var parcial;
(function (parcial) {
    var Controladora = (function () {
        function Controladora() {
        }
        Controladora.addCar = function () {
            var brand = document.getElementById("brand").value;
            // let e = document.getElementById("color");
            var color = document.getElementById("color").value;
            var price = parseInt(document.getElementById("price").value);
            /*  defino mi lista de autos y la cargo con los datos guardados. */
            var list = [];
            var loc = localStorage.getItem("cars");
            if (loc != null) {
                list = JSON.parse(loc);
            }
            /*  agrego el auto a la lista. */
            var car = new parcial.Car(brand, color, price);
            list.push(car);
            // console.log(list);
            /*  guardo el array en localStorage. */
            localStorage.setItem('cars', JSON.stringify(list));
        };
        Controladora.cleanForm = function () { };
        Controladora.showCars = function () {
            var tbody = document.getElementById("cars_tbody");
            console.log(tbody);
            var list = [];
            var loc = localStorage.getItem("cars");
            if (loc != null) {
                list = JSON.parse(loc);
            }
            var arrButtons = list.map(Controladora.createRows);
            for (var i = 0; i < arrButtons.length; i++) {
                tbody.innerHTML += arrButtons[i];
            }
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
            console.log(list);
            /*  guardo el array en localStorage. */
            localStorage.setItem('cars', JSON.stringify(list));
        };
        Controladora.filterCarFromColor = function () { };
        Controladora.modifyCar = function () {
        };
        Controladora.createRows = function (car, index) {
            var carJsonStr = car.toJson();
            var newCar = JSON.parse(carJsonStr);
            var buttons = "<button onclick='removeCar(" + index + ")'>Delete</button>";
            buttons += "<button onclick='modifyCar(" + index + ")'>Modify</button>";
            var row = "<td>" + newCar.brand + "<td>";
            row += "<td>" + newCar.price + "<td>";
            row += "<td>" + newCar.color + "<td>";
            row += "<td>" + buttons + "<td>";
            return buttons;
        };
        return Controladora;
    }());
    parcial.Controladora = Controladora;
})(parcial || (parcial = {}));
