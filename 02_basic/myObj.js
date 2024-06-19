"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "a1",
    email: "a1@gmail.com",
    isActive: false
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
createUser({ name: "A1", isActive: false });
// createUser({name:"A2",isActive:true,email:"a2@gmail.com"}) // error email' does not exist in type '{ name: any; isActive: any; }'.ts(2353)
var newUser = { name: "A3", isActive: false, email: "a3@gmail,com" };
createUser(newUser); //now we can pass object with extra information
function objReturn() {
    return { name: "Anurag", email: "anurag@gmail.com", password: 12345678 }; //returning object
}
