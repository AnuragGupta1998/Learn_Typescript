//generic allow us to write reusuable code 

//without generic
function f(val: string | number | boolean){
    return val
}

function f1<Type>(val: Type): Type {
    return val
}

f1("2")
f1(2)
f1("false")

//another generic
function f2<T>(val: T): T{
    return val
}

f2("2")
f2(2)
f2("false")

//array of number and string
const num: Array<number>=[]
const num1: Array<string>=[]

//another generic
interface User{
    name:string;
    age:number;
}
function f3<User>({}){

}

export {}
