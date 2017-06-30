"use strict";
exports.__esModule = true;
var jquery_1 = require("jquery");
var oso = (function () {
    function oso() {
        this.edad = 10;
    }
    oso.f = function () {
        alert(jquery_1["default"]('#name').val());
    };
    return oso;
}());
console.log('loaded');
oso.f();
