"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//while taking argument we checked argument type and 
//while return we checked the return type
function addTwo(num) {
    return num + 2;
}
//arrow function for addition
var add = function (n) {
    return n + 1;
};
//arrow function
var getName = function (name) {
    return name;
};
//map method
var heros = ["superman", "batman", "spiderman", "ironman"];
var data = heros.map(function (hero) {
    return "hero are ".concat(hero);
});
// void return
function display(msg) {
    console.log("msg are ".concat(msg));
}
// never return
function handleError(msg) {
    throw new Error(msg);
}
addTwo(4);
add(5);
getName("Anurag");
display("message void keyword as return ");
handleError("never keyword as return ");
