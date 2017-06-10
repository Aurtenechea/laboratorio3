module Uno{
    
   /**
    * Test
    */
  export class Test {
       constructor(nombre:string) {
           console.log(nombre);
       }
   }
   
   /**
    * TestHija extends Test
    */
   class TestHija extends Test {
       constructor(nombre:string) {
           super(nombre);
       }
   }

}

//let t : Uno.Test = new Uno.Test("hola");


