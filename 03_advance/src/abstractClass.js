"use strict";
// abstract class A{
Object.defineProperty(exports, "__esModule", { value: true });
var A = /** @class */ (function () {
    function A() {
        this.n = "anurag";
        this.a = 20;
    }
    A.prototype.display = function () {
        return this.a;
    };
    return A;
}());
var a = new A();
console.log(a.n, a.a);
console.log(a.display());
