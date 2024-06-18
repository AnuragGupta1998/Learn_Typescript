"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, valid) {
    return "".concat(name).concat(email).concat(valid);
}
function login(email, password) {
    return "".concat(email).concat(password);
}
addTwo(7);
getUpper("anurag");
signUp("anurag", "a@gmail.com", true);
login("a@gmail.com", 12345);
