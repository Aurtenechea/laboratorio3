var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Uno;
(function (Uno) {
    /**
     * Test
     */
    var Test = (function () {
        function Test(nombre) {
            console.log(nombre);
        }
        return Test;
    }());
    Uno.Test = Test;
    /**
     * TestHija extends Test
     */
    var TestHija = (function (_super) {
        __extends(TestHija, _super);
        function TestHija(nombre) {
            return _super.call(this, nombre) || this;
        }
        return TestHija;
    }(Test));
})(Uno || (Uno = {}));
//let t : Uno.Test = new Uno.Test("hola");
