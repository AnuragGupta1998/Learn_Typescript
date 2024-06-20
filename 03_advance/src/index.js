var User3 = /** @class */ (function () {
    function User3(name, email) {
        this.city = "Delhi";
        this.code = 1998;
        this.name1 = name;
        this.email = email;
    }
    Object.defineProperty(User3.prototype, "getCode", {
        get: function () {
            return this.code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User3.prototype, "value", {
        set: function (v) {
            this.code = v;
        },
        enumerable: false,
        configurable: true
    });
    return User3;
}());
var obj1 = new User3("Anurag", "anurag@gmail.com");
console.log(obj1);
console.log(obj1.getCode);
