var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*  types. */
var myStr = "Clark";
var myBool = false;
var myNum = 5;
var myAny = 5;
var myVoid = undefined;
/*  this...*/
var numArr;
var strArr;
var boolArr;
/*  it the same of this... */
// let numArr :number[];
// let strArr :string[];
// let boolArr :boolean[];
numArr = [1, 2, 3];
strArr = ["1", "2", "3"];
boolArr = [true, false];
var tuple;
tuple = ['hola', 0];
/*  functions. */
/*  if not return anything, return type is void.*/
function myFunc(param1, param2) {
    return param1 + param2;
}
console.log(myFunc(3123, 2314));
/*  with ? make a parameter as optional. */
function optionalParameter(param1, param2, param3) {
    var sum = param1 + param2;
    if (typeof param3 !== 'undefined')
        sum += param3;
    return sum;
}
console.log(optionalParameter(3123, 2314));
/*  typing object parameter. */
function objectParameter(obj) {
    return obj.prop1 + ' ' + obj.prop2;
}
console.log(objectParameter({ prop1: 'nacho', prop2: 'aurtenechea' }));
function objectParameterInterface(param) {
    return param.prop1 + ' ' + param.prop2;
}
console.log(objectParameter({ prop1: 'ricardo', prop2: 'aurtenechea' }));
/*  rest parameters. */
function restParameters() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
/*  you can call this with 0, 1, 2, n... parameters*/
console.log("rest parameters. total: " + restParameters(3123, 2314, 2000, 2000));
var Employee = (function () {
    function Employee(name, last_name, age) {
        this.name = name;
        this.last_name = last_name;
        this.age = age;
    }
    Employee.prototype.register = function () {
        console.log(this.name + ' is registered');
    };
    Employee.prototype.work = function () {
        console.log('Im an Employee and Im working.');
    };
    return Employee;
}());
var Boss = (function (_super) {
    __extends(Boss, _super);
    function Boss(id, name, last_name, age) {
        var _this = _super.call(this, name, last_name, age) || this;
        _this.id = id;
        return _this;
    }
    Boss.prototype.work = function () {
        console.log("The Boss's work method was executed.");
        _super.prototype.work.call(this);
    };
    return Boss;
}(Employee));
var emp = new Employee('eduardo', 'galeano', 60);
/*  cant access to name. */
// console.log(emp.name);
console.log(emp);
emp.register();
var boss = new Boss(123, 'gabriel', 'garcia marquez', 70);
boss.work();
var emp2 = new Employee('josteein', 'jardner', 86);
emp2.work();
/*  arrow functions. */
/*  las "fat arrows" cambiaron como el 'this' es manejado. antes en es5,
    bind() o var that = this; eran necesarias, ya que las funciones
    crean su propio this. por esto se debia almacenar la referencia o
    utilizar el bindeo. */
var arrowFunc = function () {
    console.log("this is an arrow function");
    return 10;
};
/*  si tiene una sola linea el body se puede resumir a: */
var arrowFuncCompressed = function (p) { return "Arrow function compressed. " + p; };
console.log(arrowFuncCompressed("Hey Im a parameter!!"));
