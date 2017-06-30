/*  types. */
let myStr :string = "Clark";
let myBool :boolean= false;
let myNum :number = 5;
let myAny :any = 5;
let myVoid :void = undefined;

/*  this...*/
let numArr :Array<number>;
let strArr :Array<string>;
let boolArr :Array<boolean>;
/*  it the same of this... */
// let numArr :number[];
// let strArr :string[];
// let boolArr :boolean[];

numArr = [1, 2, 3]
strArr = ["1", "2", "3"]
boolArr = [true, false ]
let tuple :[string, number];

tuple = ['hola', 0];


/*  functions. */
/*  if not return anything, return type is void.*/
function myFunc(param1:number, param2:number):number{
    return param1 + param2;
}
console.log( myFunc(3123, 2314) );

/*  with ? make a parameter as optional. */
function optionalParameter(param1:number, param2:number, param3?:number):number{
    let sum = param1 + param2;
    if(typeof param3 !== 'undefined' )
        sum += param3;
    return sum;
}
console.log( optionalParameter(3123, 2314) );

/*  typing object parameter. */
function objectParameter(obj: {prop1:string, prop2:string}):string{
    return obj.prop1 + ' ' + obj.prop2;
}
console.log( objectParameter({prop1:'nacho', prop2:'aurtenechea'}) );

/*  typing parameters with interfaces. */
interface typeObj {
    prop1:string;
    prop2:string;
}
function objectParameterInterface(param :typeObj):string{
    return param.prop1 + ' ' + param.prop2;
}
console.log( objectParameter({prop1:'ricardo', prop2:'aurtenechea'}) );

/*  rest parameters. */
function restParameters(...numbers:number[]):number{
    var sum :number = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
/*  you can call this with 0, 1, 2, n... parameters*/
console.log( "rest parameters. total: " + restParameters(3123, 2314, 2000, 2000) );


/*  Classes. */
interface Administration{
    register():void;
    work():void;
}
class Employee implements Administration{
    /*  propierties default public */
    private name :string;
    private last_name :string;
    private age :number;

    constructor(name: string, last_name :string, age :number){
        this.name = name;
        this.last_name = last_name;
        this.age = age;
    }
    public register():void{
        console.log(this.name + ' is registered');
    }
    public work():void{
        console.log('Im an Employee and Im working.');
    }
}
class Boss extends Employee{
    private id: number;

    constructor(id :number, name: string, last_name :string, age :number){
        super(name, last_name, age);
        this.id = id;
    }
    public work():void{
        console.log("The Boss's work method was executed.");
        super.work();
    }
}

let emp :Employee = new Employee('eduardo', 'galeano', 60);
/*  cant access to name. */
// console.log(emp.name);
console.log(emp);
emp.register();

let boss :Employee = new Boss(123, 'gabriel', 'garcia marquez', 70);
boss.work();

let emp2 :Employee = new Employee('josteein', 'jardner', 86);
emp2.work();

/*  arrow functions. */
/*  las "fat arrows" cambiaron como el 'this' es manejado. antes en es5,
    bind() o var that = this; eran necesarias, ya que las funciones
    crean su propio this. por esto se debia almacenar la referencia o
    utilizar el bindeo. */
const arrowFunc = () => {
    console.log("this is an arrow function");
    return 10
}
/*  si tiene una sola linea el body se puede resumir a: */
const arrowFuncCompressed = (p:string):string => "Arrow function compressed. " + p;
console.log(arrowFuncCompressed("Hey Im a parameter!!"));
