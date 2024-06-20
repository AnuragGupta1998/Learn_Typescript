var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A(name, age) {
        this.name = name;
        this.age = age;
    }
    A.prototype.doing = function () {
        return 10;
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(name, age, bName) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        _this.bName = bName;
        return _this;
    }
    B.prototype.display = function () {
        console.log("Class B extends Abtract Class A");
    };
    return B;
}(A));
var obj = new B("Anurag", 25, "B-Class");
console.log(obj.name, obj.age, obj.bName);
obj.display();
console.log(obj.doing());
